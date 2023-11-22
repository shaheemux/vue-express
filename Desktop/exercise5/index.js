// /Create an index.html and link this file to it.
//Make sure to create the corresponding tags to each question
//Make sure to only use querySelector


// 1. Create a 'div tag', inside the div tag make an 'ordered list tag' with an 'attribute'. Set it to a variable.
//    Now use a loop to display the array[member1,member2,member3,member4] inside the ordered list.They need to appear in bullet point form.

let array = ["Shaheem", "Hano", "Sage", "jason"];

let list = document.querySelector("[data-order]")

for(x of array){
    list.innerHTML += `<li>${x}</li>`
}

// 2. Create a new 'div tag' with a classname. Create 3 objects of people in your group and you may make use of a constructor function or hard coded objects. Now use a loop to loop through each object and display 1 object's information Object structure must include:
// name, surname, age, favHobby, and whether they are a morning person or night person.

function ClassNames(name, surname, age, favHobby, type){
    this.name = name;
    this.surname = surname;
    this.age = age ;
    this.favHobby=favHobby;
    this.typePerson = type
}

let p1 = new ClassNames ('Shaheem' , 'Salie' , 25 , 'sleeping' , 'night person ')
let p2 = new ClassNames ('Hano', 'Martin', 26, 'Reading', 'night person')
let p3 = new ClassNames ('Sage' , 'Benjamin' , 25, 'Soccer' , 'night person' )
for(let n in p1){
     console.log(p1[n]);
}

// 3. Now make sure to push each object made in Ques2. into an array.
//    Now use the map method to loop through the objects and return an array of names in the group to the console.


// 4. Now use the filter method to check if there is anyone that is younger than 20 and make sure to log/display each person's name (edited) 
