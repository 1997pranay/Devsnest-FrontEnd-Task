//Question1
var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};
console.log(Object.keys(student))

//Question2
var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};
console.log(student)
delete student.rollno
console.log(student)

//Question3
var len = 0
for (let item in student) {
  len++
}
console.log(len)

//Question4
var library = [{ author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
{ author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];
for (let item in library)
  console.log('Book name: ' + library[item]['title'] + ", authorname: " + library[item]['author'] + ", Reading status: " + library[item]['readingStatus']);


//Question5
const cylinder = {
  vol: function (r, h) {
    var res = 3.14 * r * r * h
    console.log(res.toFixed(4))
  }
}
console.log(cylinder.vol(4, 5))

//Question6



