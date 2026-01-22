
let carName = "WagnoR";
let maniFacture="suzuki";
let year=2025;

console.log(carName,maniFacture,year)

// wrap data in one object
//Why Object? : An object groups data + functions (behavior) together.

let car={
  name:"Creta",
  maniFacture:"Hyundai",
  year:2025,
  print(){
    console.log(this.name,this.maniFacture,this.year)
  }
}
//car.print()

let car2={
  name:"i20",
  maniFacture:"Hyundai",
  year:2022,
  speed:0,

  print(){
    console.log(this.name,this.maniFacture,this.year)
  },

  start(){
    console.log(`car ${this.name} is started`)
    console.log("Car Details Are: ")
    this.print()
  },

  accelerate() {
    this.speed += 25;
    this.renderSpeed();  //update UI
  },

  moveForward() {
    this.accelerate();
  },

  getSpeed() {
    console.log({ speed: this.speed })
  },

  renderSpeed()
  {
    let speedDisplayElement = document.getElementById("currentSpeed");
    speedDisplayElement.textContent = this.speed;
  }

}

//function calling

//car2.start()
//car2.moveForward()

document.addEventListener("DOMContentLoaded", function () {
    let start = document.getElementById("start");
    let accelerate = document.getElementById("accelerate");

    start.addEventListener("click", function () {
        car2.start();
    })
    accelerate.addEventListener("click", function () {
        car2.accelerate();

    })

})

// nested object

const person = {
    firstName: "John",
    lastName: "Doe",
    address: {
        city: "Pune",
        state: "MH",
        country: "India"
    }

}

//aarray of object

const listPeople = [person, {
    firstName: "jitendra",
    lastName: "batwdekar",
    address: {
        city: "Nashik",
        state: "MH",
        country: "India"
    }
}]

console.log(person, listPeople)