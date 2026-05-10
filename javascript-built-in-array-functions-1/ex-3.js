const todos = [
  { topic: "Doing pre-work"			, completed: true },
  { topic: "Workout"				, completed: false },
  { topic: "Playing computer games", completed: true },
  { topic: "Relax"					, completed: false },
  { topic: "Clean the room"			, completed: true },
];

function getTodoTopics(todos) {
  return todos.map(todo => todo.topic);
}

getTodoTopics(todos);

/* 
	Output:
	[
		'Doing pre-work',
		'Workout',
		'Playing computer games',
		'Relax',
		'Clean the room'
	]
*/
