    /**
     * Accordion FAQ - 3.0.6
     * @author Ken Lowther
     */
    function prepareFaq() {
		var thisObject = this;
		this.preloaded = false;
		this.images = [];
		this.scripts = [];
		this.head = document.getElementsByTagName("head")[0];
		this.func = null;
		this.jq = null;
		this.faq = [];
		this.loc = null;
  
		this.exec = function(opts) {
		  this.headers = null;
		  this.next = null;
		  this.newdiv = null;
		  this.hdr = null;
		  this.hdrcnt = 0;
		  this.ele = null;
		  this.eleChild = null;
		  this.prev = null;
		  this.sib = null;
		  this.autonumber = false;
		  this.hdrnumber = 1;
		  this.jumpto = null;
		  this.print = false;
		  this.faqlinks = null;
		  this.keyaccess = false;
		  this.alwaysopen = false;
		  this.nextHdr = null;
		  this.event = null;
		  this.onevent = null;
		  this.loc = null;
  
		  if (typeof opts.id === "undefined") {
			this.faqid = "accordion";
		  } else {
			this.faqid = opts.id;
		  }
		  if (typeof opts.header === "undefined") {
			this.header = "h3";
		  } else {
			this.header = opts.header;
		  }
		  if (typeof opts.autonumber !== "undefined") {
			this.autonumber = opts.autonumber;
		  }
		  if (typeof opts.jumpto !== "undefined") {
			this.jumpto = opts.jumpto;
		  }
		  if (typeof opts.alwaysopen !== "undefined") {
			this.alwaysopen = opts.alwaysopen;
		  }
		  if (typeof opts.print !== "undefined") {
			this.print = opts.print;
		  }
		  if (typeof opts.keyaccess !== "undefined") {
			this.keyaccess = opts.keyaccess;
		  }
		  if (typeof opts.faqlinks !== "undefined") {
			this.faqlinks = opts.faqlinks;
		  }
		  if (typeof this.faq[this.faqid] === "undefined") {
			this.faq[this.faqid] = [];
		  }
		  if (typeof opts.scrolltime !== "undefined") {
			this.faq[this.faqid].scrolltime = opts.scrolltime;
		  }
		  if (typeof opts.scrolloffset !== "undefined") {
			this.faq[this.faqid].scrolloffset = opts.scrolloffset;
		  }
		  if (typeof opts.scrollonopen !== "undefined") {
			this.faq[this.faqid].scrollonopen = opts.scrollonopen;
		  }
		  if (typeof opts.onevent !== "undefined") {
			this.onevent = opts.onevent;
		  }
		  if (typeof opts.event !== "undefined") {
			this.event = opts.event;
		  }
		  this.faq[this.faqid].forcescrollonopen = false;
		  this.faq[this.faqid].forcenoscroll = false;
  
		  if (this.keyaccess && this.noanchor === null) {
			var i = 0;
			var noanchor = "faqnoanchor";
			while (document.getElementsByName(noanchor).length !==0) {
			  noanchor = "faqnoanchor" + i;
			  i++;
			}
			this.loc = window.location.href;
			if (this.loc.indexOf("#" + noanchor) === -1) {
			  this.loc += "#" + noanchor;
			}
		  }
  
		  this.ele = document.getElementById(this.faqid);
		  if (this.ele === null) {
			return;
		  }
		  this.eleChild = this.ele.firstChild;
		  if (this.eleChild === null) {
			return;
		  }
		  this.prev = this.ele;
		  this.hdrcnt = 0;
		  while (this.hdrcnt === 0 && (this.prev = this.prev.parentNode) !==null) {
			this.headers = this.jq(this.header, this.prev);
			this.hdrcnt = this.headers.length;
		  }
  
		  if (this.prev === null) {
			return;
		  }
		  var tmphdrs = [];
		  for (i = 0; i < this.headers.length; i++) {
			if (this.headers[i].parentNode === this.prev) {
			  tmphdrs[tmphdrs.length] = this.headers[i];
			}
		  }
		  this.headers = tmphdrs;
		  this.hdrcnt = this.headers.length;
		  this.ele.style.display = "block";
		  this.ele.style.clear = "both";
  
		  for (i = 0; i < this.headers.length; i++) {
			if (!this.jq(this.headers[i]).hasClass("accordionfaqheader")) {
			  this.jq(this.headers[i]).addClass("accordionfaqheader");
			  this.jq(this.headers[i]).addClass(this.faqid);
			}
		  }
		  this.hdrnumber = 1;
		  while (this.hdrcnt) {
			var i = 0;
			while (
			  typeof this.headers[i] !=="undefined" &&
			  this.headers[i].parentNode === this.ele
			) {
			  i++;
			}
  
			this.hdrcnt--;
			this.next = this.headers[i].nextSibling;
			this.hdr = this.headers[i];
			this.prev.removeChild(this.hdr);
			if (this.hdrcnt > 0) {
			  this.nextHdr = this.headers[i + 1];
			  var hdrId = this.hdr.getAttribute("id");
			  var fullHdrId = hdrId;
			  if (hdrId === "" || hdrId === null) {
				hdrId = this.hdrnumber - 1;
				if (document.getElementById(this.faqid + hdrId) === null) {
				  this.hdr.setAttribute("id", this.faqid + hdrId);
				  fullHdrId = this.hdr.getAttribute("id");
				}
			  }
			  this.ele.insertBefore(this.hdr, this.eleChild);
			  var txt;
			  if (this.autonumber) {
				txt = document.createElement("span");
				if (
				  this.keyaccess &&
				  this.hdr.childNodes.length === 1 &&
				  this.hdr.childNodes[0].nodeType === 3
				) {
				  var anch = document.createElement("a");
				  anch.innerHTML = this.hdr.innerHTML;
				  anch.setAttribute("href", this.loc);
				  txt.appendChild(anch);
				} else {
				  txt.innerHTML = this.hdr.innerHTML;
				}
				this.hdr.innerHTML = "";
				var anbr = document.createElement("span");
				anbr.innerHTML = this.hdrnumber + ".";
				if (this.hdr.childNodes.length > 0) {
				  this.hdr.insertBefore(anbr, this.hdr.firstChild);
				} else {
				  this.hdr.appendChild(anbr);
				}
				this.jq(anbr).addClass("autonumber");
			  } else {
				if (
				  this.keyaccess &&
				  this.hdr.childNodes.length === 1 &&
				  this.hdr.childNodes[0].nodeType === 3
				) {
				  var anch = document.createElement("a");
				  anch.innerHTML = this.hdr.innerHTML;
				  anch.setAttribute("href", this.loc);
				  this.hdr.innerHTML = "";
				  this.hdr.appendChild(anch);
				}
			  }
			  var icon = document.createElement("span");
			  if (this.hdr.childNodes.length > 0) {
				this.hdr.insertBefore(icon, this.hdr.firstChild);
			  } else {
				this.hdr.appendChild(icon);
			  }
			  if (this.autonumber) {
				this.hdr.appendChild(txt);
				this.jq(txt).addClass("headertext");
			  }
			  this.jq(icon).addClass("accordionfaqicon");
			  this.newdiv = document.createElement("div");
			  this.ele.insertBefore(this.newdiv, this.eleChild);
			  this.jq(this.newdiv).addClass("accordionfaqitem");
			  if (this.faqlinks !==null) {
				var temp = this.newdiv.innerHTML;
				var current_url = window.location.href;
				if (window.location.hash.length > 0) {
				  current_url = current_url.replace(window.location.hash, "");
				}
				var temp_url = "";
				var new_faqitem = "faqitem=" + this.faqid + hdrId;
				var pos = current_url.indexOf("faqitem=");
				if (pos !=="-1") {
				  //faqitem is already in url, so we need to swap it
				  window.location.search.match(new RegExp("[&?]faqitem=([^&]*)"));
				  var old_faqitem = decodeURIComponent(RegExp.$1);
				  old_faqitem = "faqitem=" + old_faqitem;
				  temp_url = current_url.replace(old_faqitem, new_faqitem);
				} else {
				  //faqitem is not in url yet, so add it
				  var pos2 = current_url.indexOf("?");
				  if (pos2 !=="-1") {
					//'?' is in url, so add with '&'
					temp_url = current_url + "&";
				  } else {
					// no '?' in url, so add with '?'
					temp_url = current_url + "?";
				  }
				  temp_url = temp_url + new_faqitem;
				}
				var link_to_faq =
				  '<div class="accordionfaqitemlink"><a href="' +
				  temp_url +
				  '">' +
				  this.faqlinks +
				  "</a></div>";
				this.newdiv.innerHTML = link_to_faq + temp;
			  }
			  if (typeof this.onevent === "function") {
				if (this.print) {
				  thisObject
					.jq(this.hdr)
					.bind(this.event, this.onevent)
					.next()
					.show();
				} else {
				  thisObject
					.jq(this.hdr)
					.bind(this.event, this.onevent)
					.next()
					.hide();
				}
			  }
			  this.hdrnumber++;
			  if (!this.preloaded) {
				this.preloadIcons(this.hdr);
			  }
			  if (this.print) {
				this.jq(this.hdr).addClass("selected");
			  }
  
			  do {
				this.sib = this.next.nextSibling;
				this.prev.removeChild(this.next);
				this.newdiv.appendChild(this.next);
			  } while (
				(this.next = this.sib) !==null &&
				this.next !==this.nextHdr &&
				this.next !==this.ele
			  );
			}
		  }
		  if (this.print) {
			this.jq(this.ele).addClass("selected");
		  }
		  this.ele.removeChild(this.eleChild);
		  this.prev.style.visibility = "visible";
		};
  
		this.preloadIcons = function(ele) {
		  this.preloadImg(ele);
		  this.jq(ele).addClass("selected");
		  this.preloadImg(ele);
		  this.jq(ele).removeClass("selected");
		  this.preloaded = true;
		};
  
		this.preloadImg = function(ele) {
		  var bkgr = this.getStyle(ele, "background-image");
  
		  if (bkgr !==null) {
			var imgmatch = bkgr.match(/url[(](["']*)\s*([^'"]*)(["']*)[)]/i);
			if (imgmatch !==null && typeof imgmatch[2] !=="undefined") {
			  var img = new Image();
			  img.src = imgmatch[2];
			  this.images[this.images.length] = img;
			}
		  }
		};
  
		this.toCamel = function(str) {
		  return str.replace(/(\-[a-z])/g, function($1) {
			return $1.toUpperCase().replace("-", "");
		  });
		};
  
		this.getStyle = function(el, styleProp) {
		  var y = null;
		  if (typeof window.getComputedStyle !=="undefined") {
			y = document.defaultView
			  .getComputedStyle(el, null)
			  .getPropertyValue(styleProp);
		  } else if (typeof el.currentStyle !=="undefined") {
			y = el.currentStyle[this.toCamel(styleProp)];
		  }
		  return y;
		};
  
		this.setjQuery = function() {
		  if (typeof jQuery === "function") {
			if (thisObject.jq === null) {
			  thisObject.jq = jQuery;
			  if (typeof thisObject.jq.fn.addBack === "undefined") {
				if (typeof thisObject.jq.fn.andSelf === "function") {
				  thisObject.jq.fn.addBack = thisObject.jq.fn.andSelf;
				}
			  }
			}
		  }
		};
  
		this.getjQuery = function() {
		  return thisObject.jq === null ? jQuery : thisObject.jq;
		};
  
		this.onFunctionAvailable = function(
		  sMethod,
		  tries,
		  oCallback,
		  oObject,
		  bScope
		) {
		  thisObject.onAvailable(
			sMethod,
			"function",
			tries,
			oCallback,
			oObject,
			bScope
		  );
		};
  
		this.onObjectAvailable = function(
		  sMethod,
		  tries,
		  oCallback,
		  oObject,
		  bScope
		) {
		  thisObject.onAvailable(
			sMethod,
			"object",
			tries,
			oCallback,
			oObject,
			bScope
		  );
		};
  
		this.onIdAvailable = function(sId, tries, oCallback, oObject, bScope) {
		  if (document.getElementById(sId) !==null) {
			return bScope ? oCallback.call(oObject) : oCallback(oObject);
		  }
		  if (tries > 0) {
			setTimeout(function() {
			  thisObject.onIdAvailable(sId, --tries, oCallback, oObject, bScope);
			}, 50);
		  }
		};
  
		this.onAvailable = function(
		  sMethod,
		  sType,
		  tries,
		  oCallback,
		  oObject,
		  bScope
		) {
		  if (typeof bScope === "undefined") {
			bScope = false;
		  }
		  if (typeof oObject === "undefined") {
			oObject = null;
		  }
		  try {
			thisObject.func = eval(sMethod);
			if (typeof thisObject.func === sType) {
			  return bScope ? oCallback.call(oObject) : oCallback(oObject);
			}
		  } catch (e) {}
		  if (tries > 0) {
			setTimeout(function() {
			  thisObject.onAvailable(
				sMethod,
				sType,
				--tries,
				oCallback,
				oObject,
				bScope
			  );
			}, 50);
		  }
		};
  
		this.loadScript = function(sUrl) {
		  if (typeof thisObject.scripts[sUrl] === "undefined") {
			var script = document.createElement("script");
			script.setAttribute("type", "text/javascript");
			script.setAttribute("src", sUrl);
			thisObject.head.insertBefore(script, thisObject.head.firstChild);
			thisObject.scripts[sUrl] = 1;
		  }
		};
  
		this.getFaqOptions = function(id) {
		  return thisObject.faq[id];
		};
  
		this.accordionChangeUI = function(event, ui) {
		  if (thisObject.jq(ui.newHeader[0]).hasClass("selected")) {
			var options = thisObject.getFaqOptions(
			  ui.instance.getAttribute("id")
			);
			if (
			  (options.scrollonopen || options.forcescrollonopen) &&
			  !options.forcenoscroll
			) {
			  options.forcescrollonopen = false;
			  bookmarkscroll.scrollTo(ui.newHeader.attr("id"), {
				duration: options.scrolltime,
				yoffset: options.scrolloffset
			  });
			}
			options.forcenoscroll = false;
		  }
		  thisObject
			.jq(ui.instance)
			.removeClass("x"); /* workaround for ie8 bug */
		  return true;
		};
  
		this.accordionChange = function() {
		  var ele = thisObject.jq(this).prev();
		  if (ele !==null) {
			if (thisObject.jq(ele).hasClass("selected")) {
			  var parent = ele.parent();
			  var options = thisObject.getFaqOptions(parent.attr("id"));
  
			  if (
				(options.scrollonopen || options.forcescrollonopen) &&
				!options.forcenoscroll
			  ) {
				options.forcescrollonopen = false;
				bookmarkscroll.scrollTo(ele.attr("id"), {
				  duration: options.scrolltime,
				  yoffset: options.scrolloffset
				});
			  }
			  options.forcenoscroll = false;
			}
		  }
		  thisObject.jq(ele).removeClass("x"); /* workaround for ie8 bug */
		  return true;
		};
  
		this.jumpToFaqItem = function(id) {
		  var ele = thisObject.getjQuery()("#" + id);
		  if (ele !==null && thisObject.jq(ele).hasClass("accordionfaqheader")) {
			var parent = ele.parent();
			var options = thisObject.getFaqOptions(parent.attr("id"));
  
			if (!thisObject.jq(ele).hasClass("selected")) {
			  options.forcescrollonopen = true;
			  ele.click();
			} else {
			  bookmarkscroll.scrollTo(id, {
				duration: options.scrolltime,
				yoffset: options.scrolloffset
			  });
			}
		  }
		  return true;
		};
  
		this.openFaqItem = function(id) {
		  var ele = thisObject.getjQuery()("#" + id);
		  if (ele !==null && thisObject.jq(ele).hasClass("accordionfaqheader")) {
			var parent = ele.parent();
			var options = thisObject.getFaqOptions(parent.attr("id"));
  
			if (!thisObject.jq(ele).hasClass("selected")) {
			  options.forcenoscroll = true;
			  ele.click();
			}
		  }
		  return true;
		};
	  }
  
	  var preparefaq = new prepareFaq();
  
	  //** Scrolling HTML Bookmarks script- (c) Dynamic Drive DHTML code library: http://www.dynamicdrive.com.
	  //** Available/ usage terms at http://www.dynamicdrive.com/ (April 11th, 09')
	  //** Updated Nov 10th, 09'- Fixed anchor jumping issue in IE7
  
	  var bookmarkscroll = {
		setting: { duration: 1000, yoffset: 0 }, //{duration_of_scroll_milliseconds, offset_from_target_element_to_rest}
		topkeyword: "#top", //keyword used in your anchors and scrollTo() to cause script to scroll page to very top
		initialized: false,
  
		scrollTo: function(dest, options, hash) {
		  var $ = this.state.preparefaq.getjQuery(),
			options = options || {};
		  var $dest =
			typeof dest === "string" && dest.length > 0
			  ? dest === this.topkeyword
				? 0
				: $("#" + dest)
			  : dest
			  ? $(dest)
			  : []; //get element based on id, topkeyword, or dom ref
		  if (
			$dest === 0 ||
			($dest.length === 1 &&
			  (!options.autorun ||
				(options.autorun &&
				  Math.abs(
					$dest.offset().top +
					  (options.yoffset || this.setting.yoffset) -
					  $(window).scrollTop()
				  ) > 5)))
		  ) {
			this.$body.animate(
			  {
				scrollTop:
				  $dest === 0
					? 0
					: $dest.offset().top +
					  (options.yoffset || this.setting.yoffset)
			  },
			  options.duration || this.setting.duration,
			  function() {
				if ($dest !== 0 && hash) window.location.hash = hash;
			  }
			);
		  }
		},
  
		urlparamselect: function() {
		  var param = window.location.search.match(/scrollto=[\w\-_,]+/i); //search for scrollto=divid
		  return param ? param[0].split("=")[1] : null;
		},
  
		init: function() {
		  if (!this.initialized) {
			this.initialized = true;
			this.state.preparefaq
			  .getjQuery()(document)
			  .ready(function($) {
				var $ = this.state.preparefaq.getjQuery();
				var mainobj = bookmarkscroll;
				mainobj.$body = window.opera
				  ? document.compatMode === "CSS1Compat"
					? $("html")
					: $("body")
				  : $("html,body");
				var urlselectid = mainobj.urlparamselect(); //get div of page.htm?scrollto=divid
				if (urlselectid)
				  //if id defined
				  setTimeout(function() {
					mainobj.scrollTo(
					  document.getElementById(urlselectid) ||
						$("a[name=" + urlselectid + "]:eq(0)").get(0),
					  { autorun: true }
					);
				  }, 100);
				$('a[href^="#"]').each(function() {
				  //loop through links with "#" prefix
				  var hashvalue = this.getAttribute("href").match(/#\w+$/i); //filter links at least 1 character following "#" prefix
				  hashvalue = hashvalue ? hashvalue[0].substring(1) : null; //strip "#" from hashvalue
				  if (this.hash.length > 1) {
					//if hash value is more than just "#"
					var $bookmark = $(
					  "a[name=" + this.hash.substr(1) + "]:eq(0)"
					);
					if (
					  $bookmark.length === 1 ||
					  this.hash === mainobj.topkeyword
					) {
					  //if HTML anchor with given ID exists or href==topkeyword
					  if ($bookmark.length === 1 && !document.all)
						//non IE, or IE7+
						$bookmark
						  .html(".")
						  .css({
							position: "absolute",
							fontSize: 1,
							visibility: "hidden"
						  });
					  $(this).click(function(e) {
						mainobj.scrollTo(
						  this.hash === mainobj.topkeyword
							? mainobj.topkeyword
							: $bookmark.get(0),
						  {},
						  this.hash
						);
						e.preventDefault();
					  });
					}
				  }
				});
			  });
		  }
		}
	  };
  
	  preparefaq.getjQuery().extend(preparefaq.getjQuery().easing, {
		easein: function(x, t, b, c, d) {
		  return c*(t/=d)*t + b; // in
		},
		easeinout: function(x, t, b, c, d) {
		  if (t < d/2) return 2*c*t*t/(d*d) + b;
		  var ts = t - d/2;
		  return -2*c*ts*ts/(d*d) + 2*c*ts/d + c/2 + b;
		},
		easeout: function(x, t, b, c, d) {
		  return -c*t*t/(d*d) + 2*c*t/d + b;
		},
		expoin: function(x, t, b, c, d) {
		  var flip = 1;
		  if (c < 0) {
			flip *= -1;
			c *= -1;
		  }
		  return flip * (Math.exp(Math.log(c)/d * t)) + b;
		},
		expoout: function(x, t, b, c, d) {
		  var flip = 1;
		  if (c < 0) {
			flip *= -1;
			c *= -1;
		  }
		  return flip * (-Math.exp(-Math.log(c)/d * (t-d)) + c + 1) + b;
		},
		expoinout: function(x, t, b, c, d) {
		  var flip = 1;
		  if (c < 0) {
			flip *= -1;
			c *= -1;
		  }
		  if (t < d/2) return flip * (Math.exp(Math.log(c/2)/(d/2) * t)) + b;
		  return flip * (-Math.exp(-2*Math.log(c/2)/d * (t-d)) + c + 1) + b;
		},
		bouncein: function(x, t, b, c, d) {
		  return c - jQuery.easing['bounceout'](x, d-t, 0, c, d) + b;
		},
		bounceout: function(x, t, b, c, d) {
		  if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		  } else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		  } else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		  } else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		  }
		},
		bounceinout: function(x, t, b, c, d) {
		  if (t < d/2) return jQuery.easing['bouncein'] (x, t*2, 0, c, d) * .5 + b;
		  return jQuery.easing['bounceout'] (x, t*2-d,0, c, d) * .5 + c*.5 + b;
		},
		elasin: function(x, t, b, c, d) {
		  var s=1.70158;var p=0;var a=c;
		  if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		  if (a < Math.abs(c)) { a=c; var s=p/4; }
		  else var s = p/(2*Math.PI) * Math.asin (c/a);
		  return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		},
		elasout: function(x, t, b, c, d) {
		  var s=1.70158;var p=0;var a=c;
		  if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		  if (a < Math.abs(c)) { a=c; var s=p/4; }
		  else var s = p/(2*Math.PI) * Math.asin (c/a);
		  return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
		},
		elasinout: function(x, t, b, c, d) {
		  var s=1.70158;var p=0;var a=c;
		  if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		  if (a < Math.abs(c)) { a=c; var s=p/4; }
		  else var s = p/(2*Math.PI) * Math.asin (c/a);
		  if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		  return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
		},
		backin: function(x, t, b, c, d) {
		  var s=1.70158;
		  return c*(t/=d)*t*((s+1)*t - s) + b;
		},
		backout: function(x, t, b, c, d) {
		  var s=1.70158;
		  return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
		},
		backinout: function(x, t, b, c, d) {
		  var s=1.70158;
		  if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		  return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
		}
	  });
  
	  this.setState({
		preparefaq: preparefaq,
		bookmarkscroll: bookmarkscroll
	  });