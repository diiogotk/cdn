var userAgent = navigator.userAgent.toLowerCase();
var devices = new Array('nokia','iphone','blackberry','sony','lg',
'htc_tattoo','samsung','symbian','SymbianOS','elaine','palm',
'series60','windows ce','android','obigo','netfront',
'openwave','mobilexplorer','operamini');
var url_redirect = 'http://tonaterratofeliz.com.br/conceicao/amp';
function mobiDetect(userAgent, devices) {
for(var i = 0; i < devices.length; i++) {
if (userAgent.search(devices[i]) > 0) {
return true;
}
}
return false;
}

if (mobiDetect(userAgent, devices)) {
window.location.href = url_redirect;
}
