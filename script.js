const button = document.getElementById("accept-button")

button.onmouseenter = () => {
    button.style.backgroundColor = "black";
    button.style.cursor = "pointer";
}
button.onmouseleave = () => {
    button.style.backgroundColor = "blueviolet";
}
button.onclick = calcAge;

let inputBox = document.querySelector("#age-calculator");

inputBox.onmouseover = event => {
    let target = event.target;
    if (target.tagName != 'INPUT') return;
  
    target.style.borderColor = "blueviolet";
}
inputBox.onclick = event => {
    let target = event.target;
    if (target.tagName != 'INPUT') return;
  
    target.style.borderColor = "blueviolet";
}
inputBox.onmouseout = event =>{
    let target = event.target;
    if (target.tagName != 'INPUT') return;
  
    target.style.borderColor = "gainsboro";
}

const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function calcAge(){
    
    checkAccuracy();

    let userDays = document.getElementById("day").value;
    let userMonths = document.getElementById("month").value;
    let userYears = document.getElementById("year").value;

    let birthDate = new Date(userYears, userMonths, userDays);

    let currentDate = new Date();

    let years;
    if (currentDate.getMonth() > birthDate.getMonth() || (currentDate.getMonth() == birthDate.getMonth() && currentDate.getDate() >= birthDate.getDate())) {
    years = currentDate.getFullYear() - birthDate.getFullYear();
    }
    else {
    years = currentDate.getFullYear() - birthDate.getFullYear() - 1;
    }

    // Calculate months
    let months;
    if (currentDate.getDate() >= birthDate.getDate()) {
    months = currentDate.getMonth() - birthDate.getMonth();
    }
    else if (currentDate.getDate() < birthDate.getDate()) {
    months = currentDate.getMonth() - birthDate.getMonth() - 1;
    }
    // make month positive
    months = months < 0 ? months + 12 : months;

    // Calculate days
    let days;
    // days of months in a year
    if (currentDate.getDate() >= birthDate.getDate()) {
    days = currentDate.getDate() - birthDate.getDate();
    } else {
    days = currentDate.getDate() - birthDate.getDate() + monthDays[birthDate.getMonth()];
    }

    document.getElementById("result-years").innerHTML = years;
    document.getElementById("result-months").innerHTML = months;
    document.getElementById("result-days").innerHTML = days;
}


function checkAccuracy(){
    let userDays = document.getElementById("day").value;
    let userMonths = document.getElementById("month").value;
    let userYears = document.getElementById("year").value;

    if(!(userDays&&userMonths&&userYears)){
        let inputs = document.querySelectorAll("input");
        for (elem of inputs){
            elem.style.borderColor = "Red"
        }
        let labels = document.querySelectorAll("label");
        for (elem of labels){
            elem.style.color = "Red"
        }
        document.querySelector(".message-empty").style.visibility = "visible";
    }else{
        let inputs = document.querySelectorAll("input");
        for (elem of inputs){
            elem.style.borderColor = "gainsboro"
        }
        let labels = document.querySelectorAll("label");
        for (elem of labels){
            elem.style.color = "gray"
        }
        document.querySelector(".message-empty").style.visibility = "hidden";
    }

    // if(!(userMonths<=12)&&(userDays<=monthDays[userMonths-1])&&(Date(userYears, userMonths, userDays)<Date.now)){
    //     let inputs = document.querySelectorAll("input");
    //     for (elem of inputs){
    //         elem.style.borderColor = "Red"
    //     }
    //     let labels = document.querySelectorAll("label");
    //     for (elem of labels){
    //         elem.style.color = "Red"
    //     }
    //     document.querySelector(".message-incorrect").style.visibility = "visible";
    // }
}