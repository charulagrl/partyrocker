window.listen = function(eventName, object, action) {
	var e = '';
	switch(eventName) {
		case "click":
		case "touchstart":
		case "touchend":
			if(window.isTouchDevice()==false) {
				e = "click";
			} else if(window.isEventSupported("touchend")) {
				e = "touchend";
			} else if(window.isEventSupported("touchstart")) {
				e = "touchstart";
			}
			break;
		default:
			if(window.isEventSupported(eventName)) {
				e = eventName;
			} else {
				return false;
			}
			break;
	}
	if(object instanceof NodeList) {
		for(var i = 0; i < object.length; i++) {
			if(object[i].addEventListener) {
				object[i].addEventListener(e,action);
			} else if(object[i].attachEvent) {
				object[i].attachEvent("on"+e,action);
			}
		}
	} else {
		if(object.addEventListener) {
			object.addEventListener(e,action);
		} else if(object.attachEvent) {
			object.attachEvent("on"+e,action);
		}
	}
}