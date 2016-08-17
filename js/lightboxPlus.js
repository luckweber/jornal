(function ($) {
    $(document).ready(function () {

        $.fn.lightplus = function () {
			
			var esse = $(this);
			
			
            var background = $("<div/>", {id: "lightbox-background"});
            var lightbox = $("<div/>", {id: "lightbox"});
            var img = $("<img/>", {id: "lightbox-image", class:"image"});
            var buttont = $("<a/>", { id:"lightbox-button"});
            var menu = $("<div/>", {id:"lightbox-menu"});
            var textt = $("<h6/>", {id:"lightbox-text"});
            
           // $(".lightbox").css("cursor","crosshair");
            
            
            
            $(this).each(function () {

                        $(this).find("img").css("cursor","url(images/lupa_galeria.png), default");
            });
            
            
            menu.append(buttont);
            background.append(menu);
            background.append(lightbox);
            
            $("body").append(background);

                background.hide();
				
				//'.'+esse.attr("class")

            $('#flipbook').on("click", 'a', function (event) {
                event.preventDefault();
                //event.stopPropagation();
				
				//alert(esse.attr("class"));
                
                lightbox.empty();
                
                img.attr("src", $(this).attr("href"));
                textt.text($(this).attr("title"));
                
                menu.append(textt);
                

                var linkImage = img.attr("src");
				
				lightbox.append(img);
               
				background.fadeIn(800);
                
				lightbox.start();
               
            });
			
			            //$("#lightbox-background").css("cursor","url(images/close.gif), default");


            $("#lightbox-background").click(function (event) {
                /*
                if(event.target.id === "lightbox-background"){
                      //background.fadeOut(600);
                      background.fadeOut(600);
                }
                */
               
               background.fadeOut(600);
               
            });
            
            $("#lightbox-button").click(function (event) {
                
                if(event.target.id === "lightbox-button"){
                    //background.fadeOut(600);
                     background.fadeOut(600);
                }
            });
            
            $(document).keyup(function(e){
                if(e.which === 27 && img.length >= 1){
                     background.fadeOut(600);
                }else if(e.which === 39){
                    e.preventDefault();
                }
                
            });
			
			

         },
        
        $.fn.start = function () {

            return this.each(function () {
                var $this = $(this),
                        parent = $this.parent(),
                        topPos,
                        topMargin,
                        leftMargin,
                        resizeTimeout,
                        topPos1    
                    ;

                if (parent.is("body:not(.root-height-set)")) {
                    $("html,body").css("height", "100%").addClass("root-height-set");
                }
                if ($this.css("position") === "absolute" || $this.css("position") === "fixed") {
                    
                    
                    if($(window).width() > 1900){
                        topPos = "100%";
                    }else if($(window).width() > 800 && $(window).width() < 1900){
                        topPos = "70%";
                    }else{
                        topPos = "50%";
                    }
                        
                    topMargin = "-" + Math.round($this.outerHeight() / 2) + "px";
                    leftMargin = "-" + Math.round($this.outerWidth() / 2) + "px";
                    $this.css({"left": "50%", "margin-left": leftMargin});
                    
                    
                } else {
                    topPos = Math.floor((parent.height() - $this.outerHeight()) / 2);
                    topPos1 = "auto";
                    topMargin = "auto";
                    $this.css({"position": "relative", "margin-left": "auto", "margin-right": "auto"});
                }
                
                $this.css({"top": topPos1, "margin-top": topMargin});
                
                
                $(window).resize(function () {
                    if (resizeTimeout) {
                        clearTimeout(resizeTimeout);
                    }
                    resizeTimeout = setTimeout(function () {
                        if ($this.css("position") === "absolute") {
                            topMargin = "-" + Math.round($this.outerHeight() / 2) + "px";
                            leftMargin = "-" + Math.round($this.outerWidth() / 2) + "px";
                            $this.css({"margin-left": leftMargin, "margin-top": topMargin});
                        } else {
                            topPos = Math.floor((parent.height() - $this.outerHeight()) / 2);
                            $this.css("top", topPos1);
                        }
                    }, 150);
                });
            });
        }


    });
})(jQuery);