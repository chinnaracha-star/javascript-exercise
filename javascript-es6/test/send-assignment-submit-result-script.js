import pkg from "pg";
const { Pool } = pkg;
import fetch from "node-fetch";

const headers = {
  Accept: "application/vnd.github+json",
  Authorization: process.env.AUTH_GITHUB_TOKEN,
  "X-GitHub-Api-Version": "2022-11-28",
};

const testRepoName = process.argv[2];

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

async function sendAssignmentSubmitResult(repoName) {
  const org = repoName.split("/")[0];
  const repo = repoName.split("/")[1];
  try {
    const fetchingRepo = await fetch(
      `https://api.github.com/repos/${org}/${repo}`,
      {
        headers: headers,
      }
    );

    const repoInfo = await fetchingRepo.json();
    const assignmentName = repoInfo.template_repository.full_name.replace(
      org + "/",
      ""
    );
    const team = repoName.replace(
      repoInfo.template_repository.full_name + "-",
      ""
    );

    const query = `
     UPDATE "UserAssignment"
      SET "userAssignmentLink" = $1, "updatedAt" = NOW()
      WHERE "UserAssignment"."lessonAssignmentId" IN (
        SELECT "LessonAssignment"."lessonAssignmentId"
        FROM "LessonAssignment"
        JOIN "UserList" ON "UserAssignment"."userId" = "UserList"."id"
        WHERE "UserList"."githubUsername" = $2
          AND "LessonAssignment"."assignmentName" = $3
      );
    `;

    const fetchingTeamMember = await fetch(
      `https://api.github.com/orgs/${org}/teams/${team}/members`,
      {
        headers: headers,
      }
    );
    const teamMember = await fetchingTeamMember.json();

    for (const item of teamMember) {
      const client = await pool.connect();
      const values = [
        JSON.stringify({
          url: `https://github.com/${repoName}`,
          repoName,
        }),
        item.login.toLowerCase(),
        assignmentName,
      ];

      await client.query(query, values);
      client.release();
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  } finally {
    pool.end();
  }
}

sendAssignmentSubmitResult(testRepoName);
