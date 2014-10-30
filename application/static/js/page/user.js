(function(){
	var user = {
		topbar:{
			el:undefined,
			resize:function() {
				var logo = user.topbar.el.querySelector(".logo");
			},
			init:function() {
				//INIT
				user.topbar.el=document.querySelector(".top-bar");
			}
		},
		map:{
			el:undefined,
			pos:undefined,
			map:undefined,
			marker:undefined,
			init:function() {
				//Set position {lat and longtitude
				user.map.pos=new google.maps.LatLng(27.949528, -82.458062);
				//Initialize map options
				var options={
					center:user.map.pos,
					zoom:10,
					disableDefaultUI: true,
					panControl: true,
					zoomControl: true,
					scaleControl: true,
					overviewMapControl:true
				};
				//Initialize map
				user.map.map=new google.maps.Map(document.querySelector(".container .map"),options);
				//Add marker
				var marker = new google.maps.Marker({
					position:user.map.pos,
					title:"St Petersburg",
					map:user.map.map
				});
				user.map.marker=marker;
			}
		},
		aside:{
			profile:{
				isOpen:false,
				el:undefined,
				show:function() {
					user.aside.profile.isOpen=true;
					$(user.aside.profile.el).addClass("open");
				},
				hide:function() {
					user.aside.profile.isOpen=false;
					$(user.aside.profile.el).removeClass("open");
				}
			},
			parties:{
				isOpen:false,
				el:undefined,
				show:function() {
					user.aside.parties.isOpen=true;
					$(user.aside.parties.el).addClass("open");
				},
				hide:function() {
					user.aside.parties.isOpen=false;
					$(user.aside.parties.el).removeClass("open");
				},
				party_check:function(e) {
					if($(this).parent().hasClass("checked")) {
						$(this).parent().removeClass("checked");
					} else {
						$(this).parent().addClass("checked");
					}
				}
			},
			init:function() {
				user.aside.profile.el=document.querySelector(".aside.user");
				user.aside.parties.el=document.querySelector(".aside.parties");
				//event listeners
				var els=user.aside.parties.el.querySelectorAll(".party .check");
				for(var i = 0; i < els.length; i++) {
					window.listen("click",els[i],user.aside.parties.party_check);
				}
			}
		},
		toggles:{
			one_onClick:function(e) {
				//SHow profile sidebar
				if(user.aside.profile.isOpen==false) {
					user.aside.profile.show();
					user.aside.parties.hide();
					$(document.querySelectorAll(".container .toggle-button-35")[1]).removeClass("close");
					$(document.querySelectorAll(".container .toggle-button-35")[1]).addClass("toggle-button-black");
					$(this).addClass("close");
				} else {
					user.aside.profile.hide();
					$(this).removeClass("close");
				}
			},
			two_onClick:function(e) {
				//show info sidebar
				if(user.aside.parties.isOpen==false) {
					user.aside.parties.show();
					user.aside.profile.hide();
					$(document.querySelectorAll(".container .toggle-button-35")[0]).removeClass("close");
					$(this).addClass("close");
					$(this).removeClass("toggle-button-black");
				} else {
					user.aside.parties.hide();
					$(this).removeClass("close");
					$(this).addClass("toggle-button-black");
				}
			}
		},
		resize:function(e) {
			//CALL COMPONENTS RESIZE METHOD IF ANY
			user.topbar.resize();
		},
		init:function() {
			//INIT COMPONENTS
			user.topbar.init();
			user.map.init();
			user.aside.init();
			//EVENT LISTENERS
			window.listen("click",document.querySelector(".container .toggle-button-35"),user.toggles.one_onClick);
			window.listen("click",document.querySelectorAll(".container .toggle-button-35")[1],user.toggles.two_onClick);
			//WINDOW EVENT LISTENER
			if(window.addEventListener) {
				window.addEventListener("resize",user.resize);
			} else {
				window.attachEvent("onresize",user.resize);
			}
		}
	};
	user.init();
})();