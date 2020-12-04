//javascript code for get information from user 
document.getElementById('useragent').innerHTML = 'user-agent :'+navigator.userAgent;
document.getElementById('platform').innerHTML = 'platform :'+navigator.platform;
document.getElementById('language').innerHTML = 'language :'+navigator.language;
document.getElementById('screen').innerHTML = 'your screen : ' + screen.width + 'x' + screen.height; 
console.log(navigator.hardwareConcurrency);
console.log(navigator.product);
console.log(navigator.deviceMemory);
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
    console.log(renderer);


}
detectGPU();
