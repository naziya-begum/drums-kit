
//link for add event listener.....event types
//link:https://developer.mozilla.org/en-US/docs/Web/Events#event_index   
console.log(document.querySelectorAll("button"));
console.log(document.getElementsByClassName("drum"));

//--------------------------wrong type-----------------------------

// document.getElementsByClassName("drum").addEventListener("click", handleClick);

// function handleClick() {
//     alert("i got clicked");
// }


//-----------------------------------------right type-------------------

for (var i = 0; i < document.getElementsByClassName("drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);

    function handleClick() {
        console.log(this.innerHTML);
        var expression = this.innerHTML;
        getSound(expression);


    }


}

document.addEventListener("keypress", function (event) {
    // console.log(event.key);
    getSound(event.key);
})

function getSound(key) {
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

    }
}

// var audio = new Audio("sounds/crash.mp3");
//         audio.play();







//------------------------CHALLENGE1-----------------------------//

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}
function divide(num1, num2) {
    return num1 / num2;

}
function multiply(num1, num2) {
    return num1 * num2;
}
/// function input[operator] as a function-------//

function calculator(num1, num2, operator) {
    return operator(num1, num2);

}
console.log(calculator(5, 6, add));

//---------------------FUNCTION CONSTRUCTOR-----instead of creating objects for many times


var housekeeper = {
    name: "jane",
    yearsOfExperience: 12,
    age: 20,
    languages: ["English", "Arabic"]
}//object 

//function constructor
//function caller start with a capital letter------//
function HouseKeeper(name, yearsOfExperience, age, languages) {
    this.name = name;
    this.Experience = yearsOfExperience;
    this.age = age;
    this.languages = languages;
    this.cleaningroom = function () {
        // alert("may i clean you room?")
        // cleanBathrrom();----//we can give more function callers inside which we can give what we do
    }
}


var houseKeeper1 = new HouseKeeper("jhon", 12, 25, ['english', 'hindi'])
console.log(houseKeeper1);
houseKeeper1.cleaningroom();