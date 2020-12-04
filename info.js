/*
javascript code for get information about the user


*/
document.getElementById('useragent').innerHTML = 'user-agent :'+navigator.userAgent
document.getElementById('platform').innerHTML = 'platform :'+navigator.platform 
document.getElementById('language').innerHTML = 'language :'+navigator.language
document.getElementById('screen').innerHTML = 'your screen : ' + screen.width + 'x' + screen.height; 
//threads in cpu navigator.hardwareConcurrency
console.log(navigator.product)
console.log(navigator.deviceMemory)
let batteryPromise = navigator.getBattery();
batteryPromise.then(batteryCallback);

function batteryCallback(batteryObject) {
   printBatteryStatus(batteryObject);
}
function printBatteryStatus(batteryObject) {
    console.log("IsCharging", batteryObject.charging);
    console.log("Percentage", batteryObject.level);
   
    console.log("charging Time", batteryObject.chargingTime);
    console.log("DisCharging Time", batteryObject.dischargingTime);
}
