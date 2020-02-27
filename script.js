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
    convertHeight()
    bmiCalculation()

    if(bmi<18.5){
        classification = 1
        document.getElementById("results").innerHTML = "You are underweight according to the BMI scale! Your current BMI is: " + parseFloat(bmi).toFixed(2) +". Healthy weight begins at a BMI score of 18.5.";
    }
    else if(bmi<25){
        classification = 2
        document.getElementById("results").innerHTML = "You are perfectly healthy according to the BMI scale! Your current BMI is: " + parseFloat(bmi).toFixed(2) +". Underweight ends at a BMI score of 18.49. and overweight begins at 25.";
    }
    else if(bmi<30){
        classification = 3
        document.getElementById("results").innerHTML = "You are overweight according to the BMI scale! Your current BMI is: " + parseFloat(bmi).toFixed(2) +". Healthy weight ends at a BMI score of 24.99 and obese begins at 30.";
    }
    else if(bmi<35){
        classification = 4
        document.getElementById("results").innerHTML = "You are obese according to the BMI scale! Your current BMI is: " + parseFloat(bmi).toFixed(2) +". Overweight ends at a BMI score of 29.99 and extremely obese begins at 35.";
    }
    else if(bmi>=35){
        classification = 5
        document.getElementById("results").innerHTML = "You are extremely obese according to the BMI scale! Your current BMI is: " + parseFloat(bmi).toFixed(2) +". Obese ends at a BMI score of 34.99.";
    }
    else{
        classification = 6
        document.getElementById("results").innerHTML = "Error. Please check the code";
    }
}
function changeColor(){
    if(classification==1){
        document.getElementById("results").classList.remove('underweight', 'healthy', 'overweight', 'obese', 'eobese')
        document.getElementById("results").classList.add('underweight')
    }
    else if(classification==2){
        document.getElementById("results").classList.remove('underweight', 'healthy', 'overweight', 'obese', 'eobese')
        document.getElementById("results").classList.add('healthy')
    }
    else if(classification==3){
        document.getElementById("results").classList.remove('underweight', 'healthy', 'overweight', 'obese', 'eobese')
        document.getElementById("results").classList.add('overweight')
    }
    else if(classification==4){
        document.getElementById("results").classList.remove('underweight', 'healthy', 'overweight', 'obese', 'eobese')
        document.getElementById("results").classList.add('obese')
    }
    else if(classification==5){
        document.getElementById("results").classList.remove('underweight', 'healthy', 'overweight', 'obese', 'eobese')
        document.getElementById("results").classList.add('eobese')
    }

}

function printResults(){
    console.log("This is a final result as well. Your BMI was: " + bmi + ". Your final converted height was:" + finalHeight + ". Your class was: " + classification + ".")
}



function runAll(){
    checkBMI()
    changeColor()
    printResults()
}

