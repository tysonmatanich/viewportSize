/*! viewportSize | Author: Tyson Matanich, 2013 | License: MIT */
(function (window) {

	window.viewportSize = {};

	window.viewportSize.getHeight = function () {
		return getSize("Height");
	};

	window.viewportSize.getWidth = function () {
		return getSize("Width");
	};
	
	var is_client_width = null;

	var getSize = function (Name) {
		var size;
		var name = Name.toLowerCase();
		var document = window.document;
		var documentElement = document.documentElement;
		if (window["inner" + Name] === undefined) {
			// IE6 & IE7 don't have window.innerWidth or innerHeight
			size = documentElement["client" + Name];
		}
		else if (window["inner" + Name] != documentElement["client" + Name]) {
			// WebKit doesn't include scrollbars while calculating viewport size so we have to get fancy
			
			if (is_client_width !== null) {
				if (is_client_width) {
					size = documentElement["client" + Name];
				} else {
					size = window["inner" + Name];
				}
			} else {
				// Insert markup to test if a media query will match document.doumentElement["client" + Name]
				var bodyElement = document.createElement("body");
				bodyElement.id = "vpw-test-b";
				bodyElement.style.cssText = "overflow:scroll";
				var divElement = document.createElement("div");
				divElement.id = "vpw-test-d";
				divElement.style.cssText = "position:absolute;top:-1000px";
				// Getting specific on the CSS selector so it won't get overridden easily
				divElement.innerHTML = "<style>@media(" + name + ":" + documentElement["client" + Name] + "px){body#vpw-test-b div#vpw-test-d{" + name + ":7px!important}}</style>";
				bodyElement.appendChild(divElement);
				documentElement.insertBefore(bodyElement, document.head);

				if (divElement["offset" + Name] == 7) {
					// Media query matches document.documentElement["client" + Name]
					size = documentElement["client" + Name];
					is_client_width = true;
				}
				else {
					// Media query didn't match, use window["inner" + Name]
					size = window["inner" + Name];
					is_client_width = false;
				}
				// Cleanup
				documentElement.removeChild(bodyElement);
			}
		}
		else {
			// Default to use window["inner" + Name]
			size = window["inner" + Name];
		}
		return size;
	};

})(this);