//javascript code for get information from user 
document.getElementById('useragent').innerHTML = 'user-agent :'+navigator.userAgent;
document.getElementById('platform').innerHTML = 'platform :'+navigator.platform;
document.getElementById('language').innerHTML = 'language :'+navigator.language;
document.getElementById('screen').innerHTML = 'your screen : ' + screen.width + 'x' + screen.height; 
document.getElementById('CPU').innerHTML = 'CPU threads : '+navigator.hardwareConcurrency;
document.getElementById('color').innerHTML = 'colorDepth :' +screen.colorDepth;
console.log(screen.pixelDepth);

function detectGPU(){
    //GPU detection
    var canvas = document.createElement('canvas');
    var gl;
    var debugInfo;
    var vendor;
    var renderer;
    
    try {
      gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    } catch (e) {
    }
    
    if (gl) {
      debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
      renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
      
    }
    document.getElementById('GPU').innerHTML = 'GPU info : '+renderer;


}
detectGPU();

navigator.getBattery().then(function(battery) {
  function updateAllBatteryInfo(){
    updateChargeInfo();
    updateLevelInfo();
    updateChargingInfo();
    updateDischargingInfo();
  }
  updateAllBatteryInfo();

  battery.addEventListener('chargingchange', function(){
    updateChargeInfo();
  });
  function updateChargeInfo(){
    document.getElementById('ischarge').innerHTML= ("Battery charging? "
                + (battery.charging ? "Yes" : "No"));
  }

  battery.addEventListener('levelchange', function(){
    updateLevelInfo();
  });
  function updateLevelInfo(){
    document.getElementById('level').innerHTML = ("Battery level: "
                + battery.level * 100 + "%");
  }

  battery.addEventListener('chargingtimechange', function(){
    updateChargingInfo();
  });
  function updateChargingInfo(){
    document.getElementById('charging').innerHTML= ("Battery charging time: "
                 + battery.chargingTime + " seconds");
  }

  battery.addEventListener('dischargingtimechange', function(){
    updateDischargingInfo();
  });
  function updateDischargingInfo(){
    document.getElementById('discharging').innerHTML = ("Battery discharging time: "
                 + battery.dischargingTime + " seconds");
  }

});
if(screen.width < 500 ||
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/webOS/i) ||
  navigator.userAgent.match(/iPhone/i) ||
  navigator.userAgent.match(/iPod/i)) {
    document.getElementById('ismobile').innerHTML =("This is a mobile device");
 }
 else{
  document.getElementById('ismobile').innerHTML =("using not a mobile")

 }
