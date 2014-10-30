(function() {
	//page controller
	var index = {
		content:undefined,
		modal:{
			overlay:{
				el:undefined,
				show:function() {
					var cls=index.modal.overlay.el.className;
					index.modal.overlay.el.className=cls.replace("fadeOut","fadeIn");
					index.modal.overlay.el.style.display="block";
					$(window).resize();
				},
				hide:function() {
					var cls=index.modal.overlay.el.className;
					index.modal.overlay.el.className=cls.replace("fadeIn","fadeOut");
					setTimeout(function(){
						if(index.modal.overlay.el.className.indexOf("fadeOut")!=-1) {
							index.modal.overlay.el.style.display="none";
						}
					},900);
				},
				click:function(e) {
					index.modal.overlay.hide();
					index.modal.login.hide();
					index.modal.signup.hide();
					index.modal.whoIsPartying.hide();
				}
			},
			login:{
				el:undefined,
				show:function() {
					var cls=index.modal.login.el.className;
					index.modal.login.el.className=cls.replace("fadeOut","fadeIn");
					index.modal.login.el.style.display="block";
					$(window).resize();
				},
				hide:function() {
					var cls=index.modal.login.el.className;
					index.modal.login.el.className=cls.replace("fadeIn","fadeOut");
					setTimeout(function(){
						if(index.modal.login.el.className.indexOf("fadeOut")!=-1) {
							index.modal.login.el.style.display="none";
						}
					},900);
				},
				facebook_onClick:function(e) {
					//CHANGE
					alert("facebook");
				},
				google_onClick:function(e) {
					alert("google");
				},
				login_onClick:function(e) {
					//CHANGE
					alert("login");
				},
				back_onClick:function(e) {
					index.modal.overlay.hide();
					index.modal.login.hide();
					index.modal.signup.hide();
					index.modal.whoIsPartying.hide();
				}
			},
			signup:{
				el:undefined,
				show:function() {
					var cls=index.modal.signup.el.className;
					index.modal.signup.el.className=cls.replace("fadeOut","fadeIn");
					index.modal.signup.el.style.display="block";
					$(window).resize();
				},
				hide:function() {
					var cls=index.modal.signup.el.className;
					index.modal.signup.el.className=cls.replace("fadeIn","fadeOut");
					setTimeout(function(){
						if(index.modal.signup.el.className.indexOf("fadeOut")!=-1) {
							index.modal.signup.el.style.display="none";
						}
					},900);
				},
				facebook_onClick:function(e) {
					//CHANGE
					alert("facebook");
				},
				google_onClick:function(e) {
					alert("google");
				},
				signup_onClick:function(e) {
					//CHANGE
					alert("sign up");
				},
				back_onClick:function(e) {
					index.modal.overlay.hide();
					index.modal.login.hide();
					index.modal.signup.hide();
					index.modal.whoIsPartying.hide();
				},
				init:function() {
					//NEED TO AJAX CODES? OR JUST DONT ADD AS MUCH -> FULL LIST IS 70K ENTRIES SEVERE PERFORMANC ISSUES
					var options=[
						"16054 ST PETERSBURG",
						"33701 ST PETERSBURG",
						"33702 ST PETERSBURG",
						"33703 ST PETERSBURG",
						"33704 ST PETERSBURG",
						"33705 ST PETERSBURG",
						"33706 ST PETERSBURG",
						"33707 ST PETERSBURG",
						"33708 ST PETERSBURG",
						"33709 ST PETERSBURG",
						"33710 ST PETERSBURG",
						"33711 ST PETERSBURG",
						"33712 ST PETERSBURG",
						"33713 ST PETERSBURG",
						"33714 ST PETERSBURG",
						"33715 ST PETERSBURG",
						"33716 ST PETERSBURG",
						"33729 ST PETERSBURG",
						"33730 ST PETERSBURG",
						"33731 ST PETERSBURG",
						"33732 ST PETERSBURG",
						"33733 ST PETERSBURG",
						"33734 ST PETERSBURG",
						"33736 ST PETERSBURG",
						"33737 ST PETERSBURG",
						"33738 ST PETERSBURG",
						"33740 ST PETERSBURG",
						"33741 ST PETERSBURG",
						"33742 ST PETERSBURG",
						"33743 ST PETERSBURG",
						"33747 ST PETERSBURG",
						"33784 ST PETERSBURG",
						"67483 TAMPA",
						"33601 TAMPA",
						"33602 TAMPA",
						"33603 TAMPA",
						"33604 TAMPA",
						"33605 TAMPA",
						"33606 TAMPA",
						"33606 UNIV OF TAMPA",
						"33606 UNIVERSITY OF TAMPA",
						"33607 TAMPA",
						"33608 TAMPA",
						"33609 TAMPA",
						"33610 TAMPA",
						"33611 TAMPA",
						"33612 TAMPA",
						"33613 TAMPA",
						"33614 TAMPA",
						"33615 TAMPA",
						"33616 TAMPA",
						"33617 TAMPA",
						"33618 TAMPA",
						"33619 TAMPA",
						"33620 TAMPA",
						"33621 TAMPA",
						"33622 TAMPA",
						"33623 TAMPA",
						"33624 TAMPA",
						"33625 TAMPA",
						"33626 TAMPA",
						"33629 TAMPA",
						"33630 TAMPA",
						"33631 TAMPA",
						"33633 TAMPA",
						"33633 TAMPA BRM UNIQUE",
						"33634 TAMPA",
						"33635 TAMPA",
						"33637 TAMPA",
						"33646 TAMPA",
						"33647 TAMPA",
						"33647 TAMPA PALMS",
						"33650 TAMPA",
						"33655 TAMPA",
						"33660 TAMPA",
						"33661 TAMPA",
						"33662 TAMPA",
						"33663 TAMPA",
						"33664 TAMPA",
						"33672 TAMPA",
						"33673 TAMPA",
						"33674 TAMPA",
						"33675 TAMPA",
						"33677 TAMPA",
						"33679 TAMPA",
						"33680 TAMPA",
						"33681 TAMPA",
						"33682 TAMPA",
						"33684 TAMPA",
						"33685 TAMPA",
						"33686 TAMPA",
						"33687 TAMPA",
						"33688 TAMPA",
						"33689 TAMPA",
						"33694 TAMPA",
						"33651 TAMPA",
						"33690 TAMPA"
					];
					var c=completely(index.modal.signup.el.querySelector(".autocomplete"),{background:"transparent"});
					c.options=options;
					c.wrapper.className="item light";
					$(c.wrapper).css({"-webkit-border-radius":"0px","-moz-border-radius":"0px","-ms-border-radius":"0px","-o-border-radius":"0px","borderradius":"0px"});
					c.input.className="input";
					c.hint.className="input";
					c.dropDown.className="drop-down";
					c.input.setAttribute("placeholder","ZIP code");
				}
			},
			whoIsPartying:{
				el:undefined,
				show:function() {
					var cls=index.modal.whoIsPartying.el.className;
					index.modal.whoIsPartying.el.className=cls.replace("fadeOut","fadeIn");
					index.modal.whoIsPartying.el.style.display="block";
					$(window).resize();
				},
				hide:function() {
					var cls=index.modal.whoIsPartying.el.className;
					index.modal.whoIsPartying.el.className=cls.replace("fadeIn","fadeOut");
					setTimeout(function(){
						if(index.modal.whoIsPartying.el.className.indexOf("fadeOut")!=-1) {
							index.modal.whoIsPartying.el.style.display="none";
						}
					},900);
				},
				go_onClick:function(e) {
					var el=index.modal.whoIsPartying.el.querySelector("input");
					var val=el.value.split(" ");
					var zip=val[0];
					var geocoder=new google.maps.Geocoder();
					geocoder.geocode({address:zip+" US"},function(result,status){
						console.log(result[0].geometry.location);
						index.whoIsPartying.show(result[0].geometry.location.k,result[0].geometry.location.B);
					});
					e.preventDefault();
					return false;
				},
				back_onClick:function(e) {
					index.modal.overlay.hide();
					index.modal.login.hide();
					index.modal.signup.hide();
					index.modal.whoIsPartying.hide();
					e.preventDefault();
					return false;
				},
				init:function() {
					//NEED TO AJAX CODES? OR JUST DONT ADD AS MUCH -> FULL LIST IS 70K ENTRIES SEVERE PERFORMANC ISSUES
					var options=[
						"16054 ST PETERSBURG",
						"33701 ST PETERSBURG",
						"33702 ST PETERSBURG",
						"33703 ST PETERSBURG",
						"33704 ST PETERSBURG",
						"33705 ST PETERSBURG",
						"33706 ST PETERSBURG",
						"33707 ST PETERSBURG",
						"33708 ST PETERSBURG",
						"33709 ST PETERSBURG",
						"33710 ST PETERSBURG",
						"33711 ST PETERSBURG",
						"33712 ST PETERSBURG",
						"33713 ST PETERSBURG",
						"33714 ST PETERSBURG",
						"33715 ST PETERSBURG",
						"33716 ST PETERSBURG",
						"33729 ST PETERSBURG",
						"33730 ST PETERSBURG",
						"33731 ST PETERSBURG",
						"33732 ST PETERSBURG",
						"33733 ST PETERSBURG",
						"33734 ST PETERSBURG",
						"33736 ST PETERSBURG",
						"33737 ST PETERSBURG",
						"33738 ST PETERSBURG",
						"33740 ST PETERSBURG",
						"33741 ST PETERSBURG",
						"33742 ST PETERSBURG",
						"33743 ST PETERSBURG",
						"33747 ST PETERSBURG",
						"33784 ST PETERSBURG",
						"67483 TAMPA",
						"33601 TAMPA",
						"33602 TAMPA",
						"33603 TAMPA",
						"33604 TAMPA",
						"33605 TAMPA",
						"33606 TAMPA",
						"33606 UNIV OF TAMPA",
						"33606 UNIVERSITY OF TAMPA",
						"33607 TAMPA",
						"33608 TAMPA",
						"33609 TAMPA",
						"33610 TAMPA",
						"33611 TAMPA",
						"33612 TAMPA",
						"33613 TAMPA",
						"33614 TAMPA",
						"33615 TAMPA",
						"33616 TAMPA",
						"33617 TAMPA",
						"33618 TAMPA",
						"33619 TAMPA",
						"33620 TAMPA",
						"33621 TAMPA",
						"33622 TAMPA",
						"33623 TAMPA",
						"33624 TAMPA",
						"33625 TAMPA",
						"33626 TAMPA",
						"33629 TAMPA",
						"33630 TAMPA",
						"33631 TAMPA",
						"33633 TAMPA",
						"33633 TAMPA BRM UNIQUE",
						"33634 TAMPA",
						"33635 TAMPA",
						"33637 TAMPA",
						"33646 TAMPA",
						"33647 TAMPA",
						"33647 TAMPA PALMS",
						"33650 TAMPA",
						"33655 TAMPA",
						"33660 TAMPA",
						"33661 TAMPA",
						"33662 TAMPA",
						"33663 TAMPA",
						"33664 TAMPA",
						"33672 TAMPA",
						"33673 TAMPA",
						"33674 TAMPA",
						"33675 TAMPA",
						"33677 TAMPA",
						"33679 TAMPA",
						"33680 TAMPA",
						"33681 TAMPA",
						"33682 TAMPA",
						"33684 TAMPA",
						"33685 TAMPA",
						"33686 TAMPA",
						"33687 TAMPA",
						"33688 TAMPA",
						"33689 TAMPA",
						"33694 TAMPA",
						"33651 TAMPA",
						"33690 TAMPA"
					];
					var c=completely(index.modal.whoIsPartying.el.querySelector(".autocomplete"),{background:"transparent"});
					c.options=options;
					c.wrapper.className="item light";
					$(c.wrapper).css({"-webkit-border-radius":"0px","-moz-border-radius":"0px","-ms-border-radius":"0px","-o-border-radius":"0px","borderradius":"0px"});
					c.input.className="input";
					c.hint.className="input";
					c.dropDown.className="drop-down";
					c.input.setAttribute("placeholder","ZIP code");
				}
			}
		},
		whoIsPartying:{
			mapInitialized:false,
			el:undefined,
			pos:undefined,
			map:undefined,
			marker:undefined,
			aside:{
				el:undefined,
				show:function() {
					var c=index.whoIsPartying.aside.el.className;
					index.whoIsPartying.aside.el.className=(c+" open ").replace("  "," ");
				},
				hide:function() {
					var c=index.whoIsPartying.aside.el.className;
					index.whoIsPartying.aside.el.className=c.replace("open","").replace("  "," ");
				},
				toggle:function(e) {
					if(index.whoIsPartying.aside.el.className.indexOf("open")!=-1) {
						var c=this.className;
						this.className=c.replace("close","").replace("  ","").replace("toggle-button-white","toggle-button-black");
						index.whoIsPartying.aside.hide();
					} else {
						var c=this.className;
						this.className=(c+" close ").replace("  ","").replace("toggle-button-black","toggle-button-white");
						index.whoIsPartying.aside.show();
					}
				},
				signup_onClick:function(e) {
					index.modal.overlay.show();
					index.modal.signup.show();
				},
				back_onClick:function(e) {
					index.whoIsPartying.hide();
				}
			},
			show:function(lat,lng) {
				//HIDE MODALS
				index.modal.overlay.hide();
				index.modal.login.hide();
				index.modal.signup.hide();
				index.modal.whoIsPartying.hide();
				//SHOW WHOIS
				var cls=index.whoIsPartying.el.className;
				index.whoIsPartying.el.className=cls.replace("fadeOut","fadeIn");
				index.whoIsPartying.el.style.display="block";
				//
				$(window).resize();
				//
				if(index.whoIsPartying.mapInitialized==false) {
					index.whoIsPartying.init(lat,lng);
					index.whoIsPartying.mapInitialized=true;
				} else {
					//REMOVE OLD MARKER
					index.whoIsPartying.marker.setMap(null);
					//SET NEW POS
					index.whoIsPartying.pos.B=lng;
					index.whoIsPartying.pos.k=lat;
					//SET NEW MARKER
					var marker = new google.maps.Marker({
						position:index.whoIsPartying.pos,
						title:"St Petersburg",
						map:index.whoIsPartying.map
					});
					index.whoIsPartying.map.panTo(index.whoIsPartying.pos);
				}
			},
			hide:function() {
				var cls=index.whoIsPartying.el.className;
				index.whoIsPartying.el.className=cls.replace("fadeIn","fadeOut");
				setTimeout(function(){
					if(index.whoIsPartying.el.className.indexOf("fadeOut")!=-1) {
						index.whoIsPartying.el.style.display="none";
					}
				},900);
			},
			init:function(lat,lng) {
				//Set starting position
				index.whoIsPartying.pos=new google.maps.LatLng(lat,lng);
				//Initialize map options
				var options={
					center:index.whoIsPartying.pos,
					zoom:10,
					disableDefaultUI: true,
					panControl: true,
					zoomControl: true,
					scaleControl: true,
					overviewMapControl:true
				};
				//Initialize map
				index.whoIsPartying.map=new google.maps.Map(document.querySelector(".who .map"),options);
				//Add marker
				var marker = new google.maps.Marker({
					position:index.whoIsPartying.pos,
					title:"St Petersburg",
					map:index.whoIsPartying.map
				});
				index.whoIsPartying.marker=marker;
			}
		},
		top_right:{
			login_onClick:function(e) {
				index.modal.overlay.show();
				index.modal.login.show();
			}
		},
		ct:{
			btn_signup_onClick:function(e) {
				index.modal.overlay.show();
				index.modal.signup.show();
			},
			btn_who_onClick:function(e) {
				index.modal.overlay.show();
				index.modal.whoIsPartying.show();
			}
		},
		resize:function() {
			index.content.style.marginBottom=index.content.style.marginTop;
		},
		init:function() {
			//init
			index.content=document.querySelector(".content");
			index.modal.overlay.el=document.querySelector(".modal-overlay");
			index.modal.login.el=document.querySelector(".modal-box.login");
			index.modal.signup.el=document.querySelector(".modal-box.signup");
			index.modal.whoIsPartying.el=document.querySelector(".modal-box.zip");
			index.whoIsPartying.el=document.querySelector(".who");
			index.whoIsPartying.aside.el=document.querySelector(".who .aside");
			//listen -> top bar right
			window.listen("click",document.querySelector(".top-right a.bb-0.w100.block"),index.top_right.login_onClick);
			//listen -> overlay
			window.listen("click",index.modal.overlay.el,index.modal.overlay.click);
			//listen -> content
			window.listen("click",document.querySelector(".content button"),index.ct.btn_signup_onClick);
			window.listen("click",document.querySelectorAll(".content button")[1],index.ct.btn_who_onClick);
			//listen -> modal login
			window.listen("click",index.modal.login.el.querySelector(".facebook"),index.modal.login.facebook_onClick);
			window.listen("click",index.modal.login.el.querySelector(".google"),index.modal.login.google_onClick);
			window.listen("click",index.modal.login.el.querySelectorAll("button")[0],index.modal.login.login_onClick);
			window.listen("click",index.modal.login.el.querySelectorAll("button")[1],index.modal.login.back_onClick);
			//listen -> modal signups
			window.listen("click",index.modal.signup.el.querySelector(".facebook"),index.modal.signup.facebook_onClick);
			window.listen("click",index.modal.signup.el.querySelector(".google"),index.modal.signup.google_onClick);
			window.listen("click",index.modal.signup.el.querySelectorAll("button")[0],index.modal.signup.signup_onClick);
			window.listen("click",index.modal.signup.el.querySelectorAll("button")[1],index.modal.signup.back_onClick);
			//listen -> modal zip
			window.listen("click",index.modal.whoIsPartying.el.querySelectorAll("button")[0],index.modal.whoIsPartying.go_onClick);
			window.listen("click",index.modal.whoIsPartying.el.querySelectorAll("button")[1],index.modal.whoIsPartying.back_onClick);
			//listen -> who is
			window.listen("click",index.whoIsPartying.el.querySelector(".toggle-button-35"),index.whoIsPartying.aside.toggle);
			window.listen("click",index.whoIsPartying.aside.el.querySelector("button"),index.whoIsPartying.aside.signup_onClick);
			window.listen("click",index.whoIsPartying.aside.el.querySelectorAll("button")[1],index.whoIsPartying.aside.back_onClick);
			//listen -> window
			index.resize();
			setTimeout(index.resize,300);
			$(window).resize(function() { index.resize(); setTimeout(index.resize,300); });
			//OTHER INITIALIZATIONS
			index.whoIsPartying.init();
			index.modal.signup.init();
			index.modal.whoIsPartying.init();
		}
	};
	index.init();
})();;;;