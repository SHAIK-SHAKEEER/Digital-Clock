let timeElement = document.getElementById("clock");
let dateElement = document.getElementById("date");
let  is24Hour = false;
let toggleButton = document.getElementById("toggle-button");
function updateTime() {
    let now = new Date();
    hours = now.getHours()
    minutes = now.getMinutes()
    seconds = now.getSeconds()
    date = now.getDate()
    month = now.getMonth() + 1
    year = now.getFullYear()
    minutes = String(minutes).padStart(2, "0")
    seconds = String(seconds).padStart (2, "0")
    dateElement.textContent = date + "/" + month + "/" + year;
    timeElement.textContent = hours + ":" + minutes + ":" + seconds;
    if (!is24Hour) {
        let period = hours >=12 ? "PM" : "AM";
        hours = hours % 12 || 12; 
        timeElement.textContent = hours + ":" + minutes + ":" + seconds + " " + period;
        toggleButton.textContent = "Switch to 24-hour format";
        ;
    } else {
       hours = String(hours).padStart(2, "0");
        toggleButton.textContent = "Switch to 12-hour format"
        
    }
    
}

toggleButton.addEventListener("click",()=>{
    is24Hour = !is24Hour;
    toggleButton.textContent = is24Hour ? "Switch to 12-hour format" : "Switch to 24-hour format";
   updateTime();
});
updateTime();
setInterval(updateTime, 1000);

