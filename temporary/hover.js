
var objEven = function(o) {
	var obj = jQuery(o);
	this.delayHover = function() {
		if(/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))) {

			if(window.location.href.indexOf("?mobile") < 0) {
				try{
					obj = obj.children('a');
					jQuery('body').delegate(obj, 'click', function(){
						var self = jQuery(this);
						if (self.parent().hasClass('is-active')) {
							self.parent().removeClass('is-active');
						}else {
							self.parent().addClass('is-active').siblings().removeClass('is-active');
						}
						return false;
					});
				}
				catch(e){}
			}
			
		}else {
			var timer1, timer2;
			jQuery('body').delegate(o, 'mouseenter', function(e) {
				var self = jQuery(this);
				jQuery('body').unbind('click');
				if (self.hasClass('is-active')) {
					if (timer2) clearTimeout(timer2);
				}else {
					timer1 = setTimeout(function(){
						self.addClass('is-active').siblings().removeClass('is-active');
					}, 350);
				}
			}).delegate(o, 'mouseleave', function(e) {
				var self = jQuery(this);
				jQuery('body').bind('click',function(){
					self.removeClass('is-active');
				});
				if (e.target.tagName.toLowerCase() == 'select') return;
				if (timer1) {
					clearTimeout(timer1);
					if (self.hasClass('is-active')) {
						timer2 = setTimeout(function(){
							self.removeClass('is-active');
							jQuery('body').unbind('click');
						}, 350);
					}
				}
			});
		}
	}
}

function getPageScroll() {
    var xScroll, yScroll;
    if (self.pageYOffset) {
      yScroll = self.pageYOffset;
      xScroll = self.pageXOffset;
    } else if (document.documentElement && document.documentElement.scrollTop) { // Explorer 6 Strict
      yScroll = document.documentElement.scrollTop;
      xScroll = document.documentElement.scrollLeft;
    } else if (document.body) {// all other Explorers
      yScroll = document.body.scrollTop;
      xScroll = document.body.scrollLeft;	
    }
    return new Array(xScroll,yScroll) 
}

function setBoxFixed(o) {
	var $box = jQuery(o);
	var _b_H = $box.outerHeight(true);
	var _b_T = $box.offset().top;
	if (!$box.parent('.bar-placeholder').get(0)) {
		$box.wrap('<div class="bar-placeholder" style="height: ' + _b_H + 'px;"></div>');
	}	
	
	var $wrap = $box.parent().parent();

	jQuery(window).scroll(function(){
		var _w_T = $wrap.offset().top;
		var _w_H = $wrap.outerHeight(true);
		var _w_W = $wrap.width();
		var _s_T = getPageScroll()[1];
		
		if (_s_T >= _w_T + _w_H - _b_H) {
		   $box.css({
			   position: "absolute",
			   top: "auto",
			   bottom: "0",
			   width: _w_W
		   });
		}else if (_s_T <= _b_T) {
		   $box.css({
			   position: "relative",
			   top: "auto",
			   bottom: "auto",
			   width: "auto"
		   });
		}else {
			$box.css({
			   position: "fixed",
			   top: "0",
			   bottom: "auto",
			   width: _w_W
		   });
		}
	}).resize(function(){
		var t = setTimeout(function(){
			_w_W = $wrap.width();
			$box.css({
			   width: _w_W
		   });
		}, 500);
	});
}

function swiperBox_single(box) {
	var swiper = new Swiper(box + ' .swiper-container', {
        pagination: box + ' .swiper-pagination',
		prevButton: box + ' .swiper-box-arrow-prev',
		nextButton: box + ' .swiper-box-arrow-next',
        paginationClickable: true,
        onInit: function() {
	        setSwiperLoopButton(box, 1);
        },
        onSlideChangeEnd: function() {
	        setSwiperLoopButton(box);
        },
        onTouchStart: function(swiper, e) {
			_mDownX = e.pageX;
        },
        onTouchEnd: function(swiper, e) {
	        var _moveX = _mDownX - e.pageX;
	        if (jQuery(box + ' .swiper-box-arrow-prev').hasClass('swiper-button-disabled') && _moveX < 0) {
		        setTimeout(function(){setSwiperLoopDrag(box, 'prev')}, 100);
	        }else if (jQuery(box + ' .swiper-box-arrow-next').hasClass('swiper-button-disabled') && _moveX > 0) {
		        setTimeout(function(){setSwiperLoopDrag(box, 'next')}, 100);
	        }
        }
    });
}

function swiperBox_3(box) {
	var swiper = new Swiper(box + ' .swiper-container', {
        pagination: box + ' .swiper-pagination',
		prevButton: box + ' .swiper-box-arrow-prev',
		nextButton: box + ' .swiper-box-arrow-next',
        paginationClickable: true,
        slidesPerGroup: 3,
        slidesPerView: 3,
        spaceBetween: 10,
        onInit: function() {
	        setSwiperLoopButton(box, 3);
        },
        onSlideChangeEnd: function() {
	        setSwiperLoopButton(box);
        },
        onTouchStart: function(swiper, e) {
			_mDownX = e.pageX;
        },
        onTouchEnd: function(swiper, e) {
	        var _moveX = _mDownX - e.pageX;
	        if (jQuery(box + ' .swiper-box-arrow-prev').hasClass('swiper-button-disabled') && _moveX < 0) {
		        setTimeout(function(){setSwiperLoopDrag(box, 'prev')}, 100);
	        }else if (jQuery(box + ' .swiper-box-arrow-next').hasClass('swiper-button-disabled') && _moveX > 0) {
		        setTimeout(function(){setSwiperLoopDrag(box, 'next')}, 100);
	        }
        }
    });
}

function swiperBox_responsive_3(box) {
	var _mDownX;
	var swiper = new Swiper(box + ' .swiper-container', {
        pagination: box + ' .swiper-pagination',
		prevButton: box + ' .swiper-box-arrow-prev',
		nextButton: box + ' .swiper-box-arrow-next',
        paginationClickable: true,
        slidesPerGroup: 3,
        slidesPerView: 3,
        spaceBetween: 10,
        breakpoints: {
            1920: {
                slidesPerGroup: 3,
                slidesPerView: 3,
		        onProgress: function() {
			        setSwiperLoopButton(box, 3);
		        }
            },
	        1360: {
		        slidesPerGroup: 2,
                slidesPerView: 2,
		        onProgress: function() {
			        setSwiperLoopButton(box, 2);
		        }
            },
	        1100: {
		        slidesPerGroup: 1,
                slidesPerView: 1,
		        onProgress: function() {
			        setSwiperLoopButton(box, 1);
		        }
            }
        },
        onInit: function() {
	        setSwiperLoopButton(box, swiper.slidesPerGroup);
        },
        onSlideChangeEnd: function() {
	        setSwiperLoopButton(box);
        },
        onTouchStart: function(swiper, e) {
			_mDownX = e.pageX;
        },
        onTouchEnd: function(swiper, e) {
	        var _moveX = _mDownX - e.pageX;
	        if (jQuery(box + ' .swiper-box-arrow-prev').hasClass('swiper-button-disabled') && _moveX < 0) {
		        setTimeout(function(){setSwiperLoopDrag(box, 'prev')}, 100);
	        }else if (jQuery(box + ' .swiper-box-arrow-next').hasClass('swiper-button-disabled') && _moveX > 0) {
		        setTimeout(function(){setSwiperLoopDrag(box, 'next')}, 100);
	        }
        }
    });
}

function swiperBox_responsive_5(box) {
	var _mDownX;
	var swiper = new Swiper(box + ' .swiper-container', {
        pagination: box + ' .swiper-pagination',
		prevButton: box + ' .swiper-box-arrow-prev',
		nextButton: box + ' .swiper-box-arrow-next',
        paginationClickable: true,
        slidesPerGroup: 5,
        slidesPerView: 5,
        spaceBetween: 10,
        breakpoints: {
            1920: {
                slidesPerGroup: 5,
                slidesPerView: 5,
		        onProgress: function() {
			        setSwiperLoopButton(box, 5);
		        }
            },
            1560: {
                slidesPerGroup: 4,
                slidesPerView: 4,
		        onProgress: function() {
			        setSwiperLoopButton(box, 4);
		        }
            },
            1280: {
	            slidesPerGroup: 3,
                slidesPerView: 3,
		        onProgress: function() {
			        setSwiperLoopButton(box, 3);
		        }
            },
            1120: {
		        slidesPerGroup: 2,
                slidesPerView: 2,
		        onProgress: function() {
			        setSwiperLoopButton(box, 2);
		        }
            }
        },
        onInit: function() {
	        setSwiperLoopButton(box, swiper.slidesPerGroup);
        },
        onSlideChangeEnd: function() {
	        setSwiperLoopButton(box);
        },
        onTouchStart: function(swiper, e) {
			_mDownX = e.pageX;
        },
        onTouchEnd: function(swiper, e) {
	        var _moveX = _mDownX - e.pageX;
	        if (jQuery(box + ' .swiper-box-arrow-prev').hasClass('swiper-button-disabled') && _moveX < 0) {
		        setTimeout(function(){setSwiperLoopDrag(box, 'prev')}, 100);
	        }else if (jQuery(box + ' .swiper-box-arrow-next').hasClass('swiper-button-disabled') && _moveX > 0) {
		        setTimeout(function(){setSwiperLoopDrag(box, 'next')}, 100);
	        }
        }
    });
}

function setSwiperLoopButton(box, groupNum) {
	//console.log(groupNum);
	var $box = jQuery(box);
	var _single = false;
	var _slideNum;
	if (groupNum) {
		var _slideNum = $box.find('.swiper-slide').length;
		_single = _slideNum > groupNum ? false : true;
	}
	if (_single) {
		$box.addClass('no-pagination');
	}else {
		$box.removeClass('no-pagination');
		if ($box.find('.swiper-box-arrow-prev').hasClass('swiper-button-disabled')) {
	        var _n = $box.find('.swiper-pagination-bullet').length;
	        $box.find('.swiper-box-arrow-prev.swiper-button-disabled').one('click', function(){
	        	$box.find('.swiper-pagination-bullet').eq(_n-1).click();
	        });
	    }else {
	        $box.find('.swiper-box-arrow-prev').unbind('click');
	    }
	    if ($box.find('.swiper-box-arrow-next').hasClass('swiper-button-disabled')) {
	        $box.find('.swiper-box-arrow-next.swiper-button-disabled').one('click', function(){
	        	$box.find('.swiper-pagination-bullet').eq(0).click();
	        });
	    }else {
	        $box.find('.swiper-box-arrow-next').unbind('click');
	    }
    }
}

function setSwiperLoopDrag(box, direction) {
	var $box = jQuery(box);
	if (direction == 'prev') {
        var _n = $box.find('.swiper-pagination-bullet').length;
        $box.find('.swiper-pagination-bullet').eq(_n-1).click();
    }else if (direction == 'next') {
        $box.find('.swiper-pagination-bullet').eq(0).click();
    }
}

var countdown = function(o) {
	var self = this;
	var timer;
	var html = '<span class="hh1"></span><span class="hh2"></span> \
				<i class="colon">:</i> \
				<span class="mm1"></span><span class="mm2"></span> \
				<i class="colon">:</i> \
				<span class="ss1"></span><span class="ss2"></span>';
	var obj = jQuery(o);
		obj.append(html);
	var lastTime = jQuery(".lastTime", obj).text();
	var lastTimeArr = new Array();
	var hh, mm, ss, hh1, hh2, mm1, mm2, ss1, ss2;
	
	self.loading = function() {
		lastTimeArr = lastTime.split(":");
		hh = lastTimeArr[0];
		mm = lastTimeArr[1];
		ss = lastTimeArr[2];
		hh1 = hh.substring(0, 1);
		hh2 = hh.substring(1, 2);
		mm1 = mm.substring(0, 1);
		mm2 = mm.substring(1, 2);
		ss1 = ss.substring(0, 1);
		ss2 = ss.substring(1, 2);
		
		jQuery(".hh1", obj).text(hh1);
		jQuery(".hh2", obj).text(hh2);
			if (hh == "00") jQuery(".hh1, .hh2", obj).addClass("text-gray");
		jQuery(".mm1", obj).text(mm1);
		jQuery(".mm2", obj).text(mm2);
			if (hh == "00" && mm == "00") {
				jQuery(".mm1, .mm2", obj).addClass("text-gray");
				jQuery(".ss1, .ss2", obj).addClass("text-green");
			}
		jQuery(".ss1", obj).text(ss1);
		jQuery(".ss2", obj).text(ss2);
			if (hh == "00" && mm == "00" && ss == "00") jQuery(".ss1, .ss2", obj).removeClass("text-green").addClass("text-gray");
	}
	self.start = function() {
		self.loading();
		timer = setInterval(function(){
			hh = parseInt(hh, 10);
			mm = parseInt(mm, 10);
			ss = parseInt(ss, 10);
			if (ss > 0) {
				ss -= 1;
				lastTime = self.twoStr(hh) + ":" + self.twoStr(mm) + ":" + self.twoStr(ss);
				//jQuery(".ss1, .ss2", obj).fadeTo(100, 0.6).fadeTo(500, 1);
			}else if (ss == 0 && mm > 0) {
				mm -= 1;
				lastTime = self.twoStr(hh) + ":" + self.twoStr(mm) + ":59";
			}else if (ss == 0 && mm == 0 && hh > 0) {
				hh -= 1;
				lastTime = self.twoStr(hh) + ":59:59";
			}
			self.loading();
			if (ss == 0 && mm == 0 && hh == 0) {
				clearTimeout(timer);
			}
		}, 1000);
		jQuery(".lastTime", obj).remove();
	}
	self.twoStr = function(str) {
		str = str.toString();
		if (str.length < 2) str = "0" + str;
		return str;
	}
}
