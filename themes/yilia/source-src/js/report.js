var jsCookie = require('js-cookie')

require('badjs-report')

function getQueryString(name) { 
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r != null) return unescape(r[2]); return null; 
} 
// 统计用，开发者不需要理会

module.exports = {
	init: function() {}
}