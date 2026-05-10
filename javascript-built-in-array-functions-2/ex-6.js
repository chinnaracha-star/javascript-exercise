const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  // Start coding here
  const position = carCollection.indexOf(carBrand);

  if (position !== -1) {
    // กรณีมีอยู่แล้ว
    return `${carBrand} already exists in position ${position} of the car collection.`;
  } else {
    carCollection.push(carBrand);

    return `new car collection is : ${carCollection.join(",")}.`;
  }
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.
