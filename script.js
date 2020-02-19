let heightft=(document.getElementById("heightft"));
let heightin=(document.getElementById("heightin"));
let weight=(document.getElementById("weight"));
let finalHeight
let bmi
let classification

// Classification can range from 1 to 6. 1 stands for underweight, 2 for normal, 3 for overweight, 4 for obese, 5 for extremely obese, and 6 for error.

function convertHeight() {
    heightNan = Number(heightft.value*12) + Number(heightin.value)
    finalHeight = Number(heightNan)
}

function bmiCalculation(){
    bmiIn = Number(weight.value) / (Number(((finalHeight))) * Number(((finalHeight))))
  bmiNan = Number(703) * Number(bmiIn)
    bmi = Number(bmiNan)
}

function checkBMI(){
    if(bmi<18.5){
        classification = 1
        document.getElementById("results").innerHTML = "You are underweight! Go eat or something!";
    }
    else if(bmi<25){
        classification = 2
    }
    else if(bmi<30){
        classification = 3
    }
    else if(bmi<35){
        classification = 4
    }
    else if(bmi>=35){
        classification = 5
    }
    else{
        classification = 6
    }
}

function printResults(){
    console.log("This is a test. BMI: " + bmi + "Final Height:" + finalHeight + "Class:" + classification)
}



function runAll(){
    convertHeight()
    bmiCalculation()
    checkBMI()
    printResults()
}

function test(){
  convertHeight()
  bmiCalculation()
}
