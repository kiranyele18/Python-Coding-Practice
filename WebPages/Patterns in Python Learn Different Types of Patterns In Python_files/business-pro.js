!function(e,a,t){a(window).scroll(function(){var e=a(window).scrollTop();a(".hero-section").outerHeight();e>=a(".site-header").outerHeight()?a(".site-header").addClass("shrink"):a(".site-header").removeClass("shrink")}),a(window).on("resize",function(){a(window).width()<896?a(".header-widget-area").appendTo(".nav-primary .menu"):(a(".header-widget-area").appendTo(".site-header .wrap"),a(".nav-primary .header-widget-area").remove())}).resize(),a(".front-page-4 .wp-video").append('<button class="hide-video">×</button>'),a(".front-page-4 .wp-video").prepend('<div class="before"></div>'),a(".show-video").on("click",function(){a(".widget_media_video").toggleClass("visible")}),a(".hide-video, .before").on("click",function(){a(".front-page-4 .widget_media_video").toggleClass("visible");var e=a(".front-page-4 iframe").attr("src");a(".front-page-4 iframe").attr("src",""),a(".front-page-4 iframe").attr("src",e)}),a(".footer-widgets .enews form").append('<i class="fa fa-send-o"></i>'),a(".site-footer > .wrap").append('<a href="#top" class="back-to-top"></a>'),a("html").attr("id","top"),a('.menu-item a[href*="#"]').on("click",function(){a(".menu-toggle").hasClass("activated")&&(a(".nav-primary").fadeToggle(),a(".menu-toggle").removeClass("activated"))}),a('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[href*="#tab-"]').click(function(e){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=a(this.hash);(t=t.length?t:a("[name="+this.hash.slice(1)+"]")).length&&(e.preventDefault(),a("html, body").animate({scrollTop:t.offset().top},1e3,function(){var e=a(t);if(e.focus(),e.is(":focus"))return!1;e.attr("tabindex","-1"),e.focus()}))}})}(document,jQuery);