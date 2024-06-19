const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  const lowerCaseCarBrand = carBrand.toLowerCase(); 
  const existingIndex = carCollection.findIndex(brand => brand === lowerCaseCarBrand);
  
  if (existingIndex === -1) {
    carCollection.push(lowerCaseCarBrand);
    const newCollection = carCollection.join(', ');
    return `New car collection is: ${newCollection}.`;
  } else {
    const position = existingIndex + 1;
    return `${lowerCaseCarBrand} already has exists in position ${position} of the car collection.`;
  }
}


//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.