function minWidth(e){var i=$(window).width();return i>=e}function maxWidth(e){var i=$(window).width();return e>=i}function ug_gridSliderLayout(){$(".ug.grid-slider").each(function(e,i){$(this).addClass(""+e);var s=$(this).attr("class").split(" ").pop(),l=$(".ug.grid-slider."+s+" .wrapper a");if(l.parent().is(".slide")){l.unwrap();for(var t=0;t<l.length;t+=4)l.slice(t,t+4).wrapAll('<div class="slide"></div>')}else for(var t=0;t<l.length;t+=4)l.slice(t,t+4).wrapAll('<div class="slide"></div>');if(minWidth(1450))if(l.parent().is(".slide")){l.unwrap();for(var t=0;t<l.length;t+=5)l.slice(t,t+5).wrapAll('<div class="slide"></div>')}else for(var t=0;t<l.length;t+=5)l.slice(t,t+5).wrapAll('<div class="slide"></div>');if(minWidth(800)&&maxWidth(1200))if(l.parent().is(".slide")){l.unwrap();for(var t=0;t<l.length;t+=3)l.slice(t,t+3).wrapAll('<div class="slide"></div>')}else for(var t=0;t<l.length;t+=3)l.slice(t,t+3).wrapAll('<div class="slide"></div>')})}function ug_viewAllLayout(e,i,s,l){$(e).children(".wrapper").hasClass("view-all")?($(l).text("View All"),$(e).addClass("line"),$(e).removeClass("grid"),$(".ug.grid-slider."+i+" .left").removeClass("hidden"),$(".ug.grid-slider."+i+" .right").removeClass("hidden"),$(e).css("transform","translateX(0)"),$(e).attr("data-shift-amount","0"),$(e).children(".wrapper").removeClass("view-all"),$(s).attr("class","slide"),ug_gridSliderActiveSet()):($(l).text("View Less"),$(e).removeClass("line"),$(e).addClass("grid"),$(".ug.grid-slider."+i+" .left").addClass("hidden"),$(".ug.grid-slider."+i+" .right").addClass("hidden"),$(e).css("transform","translateX(0)"),$(e).attr("data-shift-amount","0"),$(e).children(".wrapper").addClass("view-all"),$(s).attr("class","slide active"))}function ug_gridSliderDefaults(){$(".ug.grid-slider").each(function(e,i){$(this).children().children(".slide-wrapper").children().children().first().addClass("active"),$(this).children().children(".lead").children().children(".left").addClass("disabled"),$(this).children().children(".slide-wrapper").attr("data-shift-amount","0");var s=$(this).children().children(".slide-wrapper").children().children(".slide").length;1>=s&&$(this).children().children(".lead").children(".controls").hide()})}function ug_viewAllDefaults(){$(".ug.grid-slider").each(function(){var e=$(this).children().children(".slide-wrapper"),i=$(this).attr("class").split(" ").pop(),s=e.children().children(".slide");e.hasClass("grid")&&($(".ug.grid-slider."+i+" .button.view-all").text("View Less"),$(e).removeClass("line"),$(e).addClass("grid"),$(".ug.grid-slider."+i+" .left").addClass("hidden"),$(".ug.grid-slider."+i+" .right").addClass("hidden"),$(e).css("transform","translateX(0)"),$(e).attr("data-shift-amount","0"),$(e).children(".wrapper").addClass("view-all"),$(s).attr("class","slide active"))})}function ug_gridSliderActiveSet(){$(".ug.grid-slider .slide-wrapper").each(function(){var e=$(this).attr("data-shift-amount"),i=-1*e/100+1;$(this).children().length;$(this).children().children(".slide:nth-child("+i+")").addClass("active")})}function ug_disabledButtons(e,i,s){i===s?($(".ug.grid-slider."+e+" .right").addClass("disabled"),0!==i&&$(".ug.grid-slider."+e+" .left").removeClass("disabled")):0===i?($(".ug.grid-slider."+e+" .left").addClass("disabled"),i!==s&&$(".ug.grid-slider."+e+" .right").removeClass("disabled")):$(".ug.grid-slider."+e+" .button").removeClass("disabled"),0===s&&console.log("No shit")}function ug_slideLeft(e,i,s,l,t,r){e+=i,$(s).css("transform","translateX("+e+"%)"),$(s).attr("data-shift-amount",e),$(l).prev().addClass("active"),$(l).removeClass("active"),setTimeout(function(){ug_disabledButtons(t,e,r)},50)}function ug_slideRight(e,i,s,l,t,r){e-=i,$(s).css("transform","translateX("+e+"%)"),$(s).attr("data-shift-amount",e),$(l).next().addClass("active"),$(l).removeClass("active"),setTimeout(function(){ug_disabledButtons(t,e,r)},50)}function ug_LightboxOpen(e){var i=e.attr("box");console.log(i),$(".ug.lightbox[box='0']").addClass("open"),positionFauxed(!0)}function ug_LightboxClose(e){var i=e.parent().attr("class").split(" ").pop();$(".ug.lightbox."+i).removeClass("open"),positionFauxed(!1)}function ug_sliderLayout(){$(".ug.slider").each(function(){var e=$(this),i=e.find(".slide-wrapper"),s=i.find(".slide").length,l=100*s+"%";$(this).children(".arrows .prev").addClass("disabled"),i.css("width",l),e.attr("slide-shown","0")})}function ug_sliderShift(e){if(self=e.parents(".ug.slider"),slideWrapper=self.find(".slide-wrapper"),count=self.find(".slide").length,slideAmount=100/count,slideShown=parseInt(self.attr("slide-shown")),arrows=self.find(".arrows"),progress=self.find(".progress"),clickedArrow=e.attr("class").split(" ")[0],"next"===clickedArrow){slideShown++,self.attr("slide-shown",slideShown);var i=slideAmount*(-1*slideShown);slideWrapper.velocity({translateX:i+"%"},{duration:250,delay:0})}else{slideShown--,self.attr("slide-shown",slideShown);var i=slideAmount*(-1*slideShown);slideWrapper.velocity({translateX:i+"%"},{duration:250,delay:0})}progress.children("a").removeClass("active"),progress.children("a:nth-of-type("+(1+slideShown)+")").addClass("active"),0===slideShown?arrows.children(".prev").addClass("disabled"):slideShown+1===count?arrows.children(".next").addClass("disabled"):arrows.children().removeClass("disabled")}function positionFauxed(e){var i=parseInt($("header.global").height(),10),s=$(window).scrollTop()-i,l=parseInt($("main.noscroll").css("top"),10)-i;l=parseInt(l,10),l=-1*l,e===!0?($("main").addClass("noscroll"),$("main").css("top",+(-1*s))):setTimeout(function(){$("main").removeClass("noscroll"),$("main").css("top","0"),$(window).scrollTop(l)},1)}ug_gridSliderLayout(),ug_gridSliderDefaults(),ug_viewAllDefaults(),$(window).resize(function(){ug_gridSliderLayout(),ug_gridSliderActiveSet()}),$(".ug.grid-slider .button").click(function(e){e.preventDefault();var i=$(this),s=$(this).attr("class").split(" ").pop(),l=$(this).parent().parent().parent().parent().attr("class").split(" ").pop(),t=$(this).parent().parent().parent().children(".slide-wrapper"),r=t.children().children(".slide"),a=t.children().children(".active"),d=100,n=(parseInt(t.children().children(".slide").length,10)-1)*d*-1,o=parseInt(t.attr("data-shift-amount"),0);"right"===s?ug_slideRight(o,d,t,a,l,n):"left"===s?ug_slideLeft(o,d,t,a,l,n):"view-all"===s&&ug_viewAllLayout(t,l,r,i),ug_disabledButtons(l,o,n)}),$(".ug.grid-slider .product").click(function(e){var i=$(this).parent(),s=$(this).parent().parent().parent(),l=s.parent().parent().attr("class").split(" ").pop(),t=parseInt(s.attr("data-shift-amount"),0),r=100,a=(parseInt(s.children().children(".slide").length,10)-1)*r*-1,d=(s.children().children(".slide"),s.children().children(".active"));i.hasClass("active")||(e.preventDefault(),i.prev().hasClass("active")?ug_slideRight(t,r,s,d,l,a):i.next().hasClass("active")&&ug_slideLeft(t,r,s,d,l,a))}),$(".ug nav.global").clone().appendTo("header.ug.global div.menu"),$(".ug div.menu .menu-trigger").click(function(){$(this).parent().toggleClass("open")}),$(".ug .dropdown").click(function(){$(this).toggleClass("open")}),$(".ug .lightbox-trigger").click(function(e){e.preventDefault(),ug_LightboxOpen($(this))}),$(".ug.lightbox .close").click(function(e){e.preventDefault(),ug_LightboxClose($(this))}),$(".ug.slider .arrows a").click(function(e){e.preventDefault(),ug_sliderShift($(this))}),ug_sliderLayout();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UtZnVuY3Rpb25zL2Jhc2UuanMiLCJiYXNlLWZ1bmN0aW9ucy9vYmplY3RzL2dyaWQtc2xpZGVyLmpzIiwiYmFzZS1mdW5jdGlvbnMvb2JqZWN0cy9saWdodGJveC5qcyIsImJhc2UtZnVuY3Rpb25zL29iamVjdHMvc2xpZGVyLmpzIiwiYmFzZS1mdW5jdGlvbnMvY29tcG9uZW50cy9mYXV4LXBvc2l0aW9uLmpzIiwiYmFzZS1mdW5jdGlvbnMvb2JqZWN0cy9oZWFkZXIuanMiXSwibmFtZXMiOlsibWluV2lkdGgiLCJ3aWR0aCIsInNjcmVlbldpZHRoIiwiJCIsIndpbmRvdyIsIm1heFdpZHRoIiwidWdfZ3JpZFNsaWRlckxheW91dCIsImVhY2giLCJpbmRleCIsInZhbHVlIiwidGhpcyIsImFkZENsYXNzIiwic2xpZGVyTnVtYmVyIiwiYXR0ciIsInNwbGl0IiwicG9wIiwicHJvZHVjdHMiLCJwYXJlbnQiLCJpcyIsInVud3JhcCIsImkiLCJsZW5ndGgiLCJzbGljZSIsIndyYXBBbGwiLCJ1Z192aWV3QWxsTGF5b3V0IiwiY3VycmVudFdyYXBwZXIiLCJjdXJyZW50U2xpZGVyQ2xhc3MiLCJjdXJyZW50U2xpZGVzIiwiYnV0dG9uIiwiY2hpbGRyZW4iLCJoYXNDbGFzcyIsInRleHQiLCJyZW1vdmVDbGFzcyIsImNzcyIsInVnX2dyaWRTbGlkZXJBY3RpdmVTZXQiLCJ1Z19ncmlkU2xpZGVyRGVmYXVsdHMiLCJmaXJzdCIsInNsaWRlTnVtYmVyIiwiaGlkZSIsInVnX3ZpZXdBbGxEZWZhdWx0cyIsInNsaWRlQW1vdW50IiwiYWN0aXZlU2xpZGUiLCJ1Z19kaXNhYmxlZEJ1dHRvbnMiLCJjdXJyZW50QW1vdW50IiwicG90ZW50aWFsU2hpZnQiLCJjb25zb2xlIiwibG9nIiwidWdfc2xpZGVMZWZ0Iiwic2hpZnRBbW91bnQiLCJjdXJyZW50QWN0aXZlU2xpZGUiLCJwcmV2Iiwic2V0VGltZW91dCIsInVnX3NsaWRlUmlnaHQiLCJuZXh0IiwidWdfTGlnaHRib3hPcGVuIiwidHJpZ2dlciIsImFjdGl2ZUJveCIsInBvc2l0aW9uRmF1eGVkIiwidWdfTGlnaHRib3hDbG9zZSIsInVnX3NsaWRlckxheW91dCIsInNlbGYiLCJzbGlkZVdyYXBwZXIiLCJmaW5kIiwiY291bnQiLCJ1Z19zbGlkZXJTaGlmdCIsImFycm93IiwicGFyZW50cyIsInNsaWRlU2hvd24iLCJwYXJzZUludCIsImFycm93cyIsInByb2dyZXNzIiwiY2xpY2tlZEFycm93Iiwic2xpZGVUb3RhbCIsInZlbG9jaXR5IiwidHJhbnNsYXRlWCIsImR1cmF0aW9uIiwiZGVsYXkiLCJvbiIsImhlYWRlck9mZnNldCIsImhlaWdodCIsImZha2VTY3JvbGwiLCJzY3JvbGxUb3AiLCJzY3JvbGxBbW91bnQiLCJyZXNpemUiLCJjbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInR5cGUiLCJwYXJlbnRTbGlkZSIsImNsb25lIiwiYXBwZW5kVG8iLCJ0b2dnbGVDbGFzcyJdLCJtYXBwaW5ncyI6IkFBQUEsUUFBQUEsVUFBQUMsR0FDQSxHQUFBQyxHQUFBQyxFQUFBQyxRQUFBSCxPQUNBLE9BQUFDLElBQUFELEVBT0EsUUFBQUksVUFBQUosR0FDQSxHQUFBQyxHQUFBQyxFQUFBQyxRQUFBSCxPQUNBLE9BQUFBLElBQUFDLEVDWEEsUUFBQUksdUJBRUFILEVBQUEsbUJBQUFJLEtBQUEsU0FBQUMsRUFBQUMsR0FFQU4sRUFBQU8sTUFBQUMsU0FBQSxHQUFBSCxFQUVBLElBQUFJLEdBQUFULEVBQUFPLE1BQUFHLEtBQUEsU0FBQUMsTUFBQSxLQUFBQyxNQUVBQyxFQUFBYixFQUFBLG1CQUFBUyxFQUFBLGNBRUEsSUFBQUksRUFBQUMsU0FBQUMsR0FBQSxVQUFBLENBRUFGLEVBQUFHLFFBRUEsS0FBQSxHQUFBQyxHQUFBLEVBQUFBLEVBQUFKLEVBQUFLLE9BQUFELEdBQUEsRUFDQUosRUFBQU0sTUFBQUYsRUFBQUEsRUFBQSxHQUFBRyxRQUFBLGlDQUtBLEtBQUEsR0FBQUgsR0FBQSxFQUFBQSxFQUFBSixF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LFNBQUEsWUFDQXVELEVBQUFDLGlCQUVBRSxFQUFBdEMsT0FBQXBCLFNBQUEsVUFDQXNCLGNBQUFULEVBQUFLLEVBQUF2QixFQUFBd0IsRUFBQXZCLEVBQUFrQixHQUNBNEMsRUFBQW5DLE9BQUF2QixTQUFBLFdBQ0FpQixhQUFBSixFQUFBSyxFQUFBdkIsRUFBQXdCLEVBQUF2QixFQUFBa0IsTUk3UUF6QyxFQUFBLGtCQUFBc0YsUUFBQUMsU0FBQSw2QkFFQXZGLEVBQUEsOEJBQUFpRixNQUFBLFdBQ0FqRixFQUFBTyxNQUFBTyxTQUFBMEUsWUFBQSxVQUdBeEYsRUFBQSxpQkFBQWlGLE1BQUEsV0FDQWpGLEVBQUFPLE1BQUFpRixZQUFBLFVIZUF4RixFQUFBLHlCQUFBaUYsTUFBQSxTQUFBQyxHQUNBQSxFQUFBQyxpQkFFQWhDLGdCQUFBbkQsRUFBQU8sU0FJQVAsRUFBQSx1QkFBQWlGLE1BQUEsU0FBQUMsR0FDQUEsRUFBQUMsaUJBRUE1QixpQkFBQXZELEVBQUFPLFNDdUNBUCxFQUFBLHdCQUFBaUYsTUFBQSxTQUFBQyxHQUNBQSxFQUFBQyxpQkFDQXRCLGVBQUE3RCxFQUFBTyxTQUlBaUQiLCJmaWxlIjoiYXBwbGljYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBtaW5XaWR0aCh3aWR0aCkge1xuICB2YXIgc2NyZWVuV2lkdGggPSAgJCh3aW5kb3cpLndpZHRoKCk7XG4gIGlmICggc2NyZWVuV2lkdGggPj0gd2lkdGggKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1heFdpZHRoKHdpZHRoKSB7XG4gIHZhciBzY3JlZW5XaWR0aCA9ICAkKHdpbmRvdykud2lkdGgoKTtcbiAgaWYgKCBzY3JlZW5XaWR0aCA8PSB3aWR0aCApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImZ1bmN0aW9uIHVnX2dyaWRTbGlkZXJMYXlvdXQoKXtcbiAgLy8gQWRkaW5nIGEgdW5pcXVlIGNsYXNzIHRvIGVhY2ggc2xpZGVyIGZvciBkaWZmZXJlbnRpYXRpb24gb2ZcbiAgJChcIi51Zy5ncmlkLXNsaWRlclwiKS5lYWNoKCBmdW5jdGlvbiggaW5kZXgsIHZhbHVlICkge1xuXG4gICAgJCh0aGlzKS5hZGRDbGFzcyhcIlwiICsgaW5kZXgpO1xuXG4gICAgdmFyIHNsaWRlck51bWJlciA9ICQodGhpcykuYXR0cihcImNsYXNzXCIpLnNwbGl0KFwiIFwiKS5wb3AoKSxcblxuICAgIHByb2R1Y3RzID0gJChcIi51Zy5ncmlkLXNsaWRlci5cIiArIHNsaWRlck51bWJlciArIFwiIC53cmFwcGVyIGFcIik7XG5cbiAgICBpZiggcHJvZHVjdHMucGFyZW50KCkuaXMoXCIuc2xpZGVcIikgKSB7XG5cbiAgICAgIHByb2R1Y3RzLnVud3JhcCgpO1xuXG4gICAgICBmb3IoIHZhciBpID0gMDsgaSA8IHByb2R1Y3RzLmxlbmd0aDsgaSs9NCApIHtcbiAgICAgICAgcHJvZHVjdHMuc2xpY2UoaSwgaSs0KS53cmFwQWxsKCc8ZGl2IGNsYXNzPVwic2xpZGVcIj48L2Rpdj4nKTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIGZvciggdmFyIGkgPSAwOyBpIDwgcHJvZHVjdHMubGVuZ3RoOyBpKz00ICkge1xuICAgICAgICBwcm9kdWN0cy5zbGljZShpLCBpKzQpLndyYXBBbGwoJzxkaXYgY2xhc3M9XCJzbGlkZVwiPjwvZGl2PicpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgaWYgKCBtaW5XaWR0aCgxNDUwKSApIHtcbiAgICAgIGlmKCBwcm9kdWN0cy5wYXJlbnQoKS5pcyhcIi5zbGlkZVwiKSApIHtcbiAgICAgICAgcHJvZHVjdHMudW53cmFwKCk7XG4gICAgICAgIGZvciggdmFyIGkgPSAwOyBpIDwgcHJvZHVjdHMubGVuZ3RoOyBpKz01ICkge1xuICAgICAgICAgIHByb2R1Y3RzLnNsaWNlKGksIGkrNSkud3JhcEFsbCgnPGRpdiBjbGFzcz1cInNsaWRlXCI+PC9kaXY+Jyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciggdmFyIGkgPSAwOyBpIDwgcHJvZHVjdHMubGVuZ3RoOyBpKz01ICkge1xuICAgICAgICAgIHByb2R1Y3RzLnNsaWNlKGksIGkrNSkud3JhcEFsbCgnPGRpdiBjbGFzcz1cInNsaWRlXCI+PC9kaXY+Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIG1pbldpZHRoKDgwMCkgJiYgbWF4V2lkdGgoMTIwMCkgKSB7XG4gICAgICBpZiggcHJvZHVjdHMucGFyZW50KCkuaXMoXCIuc2xpZGVcIikgKSB7XG4gICAgICAgIHByb2R1Y3RzLnVud3JhcCgpO1xuICAgICAgICBmb3IoIHZhciBpID0gMDsgaSA8IHByb2R1Y3RzLmxlbmd0aDsgaSs9MyApIHtcbiAgICAgICAgICBwcm9kdWN0cy5zbGljZShpLCBpKzMpLndyYXBBbGwoJzxkaXYgY2xhc3M9XCJzbGlkZVwiPjwvZGl2PicpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IoIHZhciBpID0gMDsgaSA8IHByb2R1Y3RzLmxlbmd0aDsgaSs9MyApIHtcbiAgICAgICAgICBwcm9kdWN0cy5zbGljZShpLCBpKzMpLndyYXBBbGwoJzxkaXYgY2xhc3M9XCJzbGlkZVwiPjwvZGl2PicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1Z192aWV3QWxsTGF5b3V0KGN1cnJlbnRXcmFwcGVyLCBjdXJyZW50U2xpZGVyQ2xhc3MsIGN1cnJlbnRTbGlkZXMsIGJ1dHRvbikge1xuXG4gIGlmKCAkKGN1cnJlbnRXcmFwcGVyKS5jaGlsZHJlbihcIi53cmFwcGVyXCIpLmhhc0NsYXNzKFwidmlldy1hbGxcIikgKXtcblxuICAgICQoYnV0dG9uKS50ZXh0KFwiVmlldyBBbGxcIik7XG5cbiAgICAkKGN1cnJlbnRXcmFwcGVyKS5hZGRDbGFzcyhcImxpbmVcIik7XG4gICAgJChjdXJyZW50V3JhcHBlcikucmVtb3ZlQ2xhc3MoXCJncmlkXCIpO1xuXG4gICAgJChcIi51Zy5ncmlkLXNsaWRlci5cIiArIGN1cnJlbnRTbGlkZXJDbGFzcyArIFwiIC5sZWZ0XCIpLnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpO1xuICAgICQoXCIudWcuZ3JpZC1zbGlkZXIuXCIgKyBjdXJyZW50U2xpZGVyQ2xhc3MgKyBcIiAucmlnaHRcIikucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XG5cbiAgICAkKGN1cnJlbnRXcmFwcGVyKS5jc3MoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGVYKDApXCIpO1xuICAgICQoY3VycmVudFdyYXBwZXIpLmF0dHIoXCJkYXRhLXNoaWZ0LWFtb3VudFwiLCBcIjBcIik7XG5cbiAgICAkKGN1cnJlbnRXcmFwcGVyKS5jaGlsZHJlbihcIi53cmFwcGVyXCIpLnJlbW92ZUNsYXNzKFwidmlldy1hbGxcIik7XG4gICAgJChjdXJyZW50U2xpZGVzKS5hdHRyKFwiY2xhc3NcIiwgXCJzbGlkZVwiKTtcblxuICAgIHVnX2dyaWRTbGlkZXJBY3RpdmVTZXQoKTtcblxuICB9IGVsc2Uge1xuXG4gICAgJChidXR0b24pLnRleHQoXCJWaWV3IExlc3NcIik7XG5cbiAgICAkKGN1cnJlbnRXcmFwcGVyKS5yZW1vdmVDbGFzcyhcImxpbmVcIik7XG4gICAgJChjdXJyZW50V3JhcHBlcikuYWRkQ2xhc3MoXCJncmlkXCIpO1xuXG4gICAgJChcIi51Zy5ncmlkLXNsaWRlci5cIiArIGN1cnJlbnRTbGlkZXJDbGFzcyArIFwiIC5sZWZ0XCIpLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xuICAgICQoXCIudWcuZ3JpZC1zbGlkZXIuXCIgKyBjdXJyZW50U2xpZGVyQ2xhc3MgKyBcIiAucmlnaHRcIikuYWRkQ2xhc3MoXCJoaWRkZW5cIik7XG5cbiAgICAkKGN1cnJlbnRXcmFwcGVyKS5jc3MoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGVYKDApXCIpO1xuICAgICQoY3VycmVudFdyYXBwZXIpLmF0dHIoXCJkYXRhLXNoaWZ0LWFtb3VudFwiLCBcIjBcIik7XG5cbiAgICAkKGN1cnJlbnRXcmFwcGVyKS5jaGlsZHJlbihcIi53cmFwcGVyXCIpLmFkZENsYXNzKFwidmlldy1hbGxcIik7XG4gICAgJChjdXJyZW50U2xpZGVzKS5hdHRyKFwiY2xhc3NcIiwgXCJzbGlkZSBhY3RpdmVcIik7XG5cbiAgfVxuXG59XG5cbi8vIFNldHRpbmcgc29tZSBkZWZhdWx0cyBmb3IgZWFjaCBzbGlkZXJcbmZ1bmN0aW9uIHVnX2dyaWRTbGlkZXJEZWZhdWx0cygpIHtcbiAgJChcIi51Zy5ncmlkLXNsaWRlclwiKS5lYWNoKCBmdW5jdGlvbihpbmRleCwgdmFsdWUpIHtcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCkuY2hpbGRyZW4oXCIuc2xpZGUtd3JhcHBlclwiKS5jaGlsZHJlbigpLmNoaWxkcmVuKCkuZmlyc3QoKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCkuY2hpbGRyZW4oXCIubGVhZFwiKS5jaGlsZHJlbigpLmNoaWxkcmVuKFwiLmxlZnRcIikuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCkuY2hpbGRyZW4oXCIuc2xpZGUtd3JhcHBlclwiKS5hdHRyKFwiZGF0YS1zaGlmdC1hbW91bnRcIiwgXCIwXCIpO1xuXG4gICAgdmFyIHNsaWRlTnVtYmVyID0gJCh0aGlzKS5jaGlsZHJlbigpLmNoaWxkcmVuKFwiLnNsaWRlLXdyYXBwZXJcIikuY2hpbGRyZW4oKS5jaGlsZHJlbihcIi5zbGlkZVwiKS5sZW5ndGg7XG5cbiAgICBpZihzbGlkZU51bWJlciA8PSAxKXtcbiAgICAgICQodGhpcykuY2hpbGRyZW4oKS5jaGlsZHJlbihcIi5sZWFkXCIpLmNoaWxkcmVuKFwiLmNvbnRyb2xzXCIpLmhpZGUoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1Z192aWV3QWxsRGVmYXVsdHMoKSB7XG5cbiAgJChcIi51Zy5ncmlkLXNsaWRlclwiKS5lYWNoKCBmdW5jdGlvbigpIHtcblxuICAgIHZhciBjdXJyZW50V3JhcHBlciA9ICQodGhpcykuY2hpbGRyZW4oKS5jaGlsZHJlbihcIi5zbGlkZS13cmFwcGVyXCIpLFxuICAgIGN1cnJlbnRTbGlkZXJDbGFzcyA9ICQodGhpcykuYXR0cihcImNsYXNzXCIpLnNwbGl0KFwiIFwiKS5wb3AoKSxcbiAgICBjdXJyZW50U2xpZGVzID0gY3VycmVudFdyYXBwZXIuY2hpbGRyZW4oKS5jaGlsZHJlbihcIi5zbGlkZVwiKTtcblxuICAgIGlmKGN1cnJlbnRXcmFwcGVyLmhhc0NsYXNzKFwiZ3JpZFwiKSl7XG5cbiAgICAgICQoXCIudWcuZ3JpZC1zbGlkZXIuXCIgKyBjdXJyZW50U2xpZGVyQ2xhc3MgKyBcIiAuYnV0dG9uLnZpZXctYWxsXCIpLnRleHQoXCJWaWV3IExlc3NcIik7XG5cbiAgICAgICQoY3VycmVudFdyYXBwZXIpLnJlbW92ZUNsYXNzKFwibGluZVwiKTtcbiAgICAgICQoY3VycmVudFdyYXBwZXIpLmFkZENsYXNzKFwiZ3JpZFwiKTtcblxuICAgICAgJChcIi51Zy5ncmlkLXNsaWRlci5cIiArIGN1cnJlbnRTbGlkZXJDbGFzcyArIFwiIC5sZWZ0XCIpLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xuICAgICAgJChcIi51Zy5ncmlkLXNsaWRlci5cIiArIGN1cnJlbnRTbGlkZXJDbGFzcyArIFwiIC5yaWdodFwiKS5hZGRDbGFzcyhcImhpZGRlblwiKTtcblxuICAgICAgJChjdXJyZW50V3JhcHBlcikuY3NzKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlWCgwKVwiKTtcbiAgICAgICQoY3VycmVudFdyYXBwZXIpLmF0dHIoXCJkYXRhLXNoaWZ0LWFtb3VudFwiLCBcIjBcIik7XG5cbiAgICAgICQoY3VycmVudFdyYXBwZXIpLmNoaWxkcmVuKFwiLndyYXBwZXJcIikuYWRkQ2xhc3MoXCJ2aWV3LWFsbFwiKTtcbiAgICAgICQoY3VycmVudFNsaWRlcykuYXR0cihcImNsYXNzXCIsIFwic2xpZGUgYWN0aXZlXCIpO1xuXG4gICAgfVxuXG4gIH0pO1xuXG59O1xuXG4vLyBTZXR0aW5nIHRoZSBmaXJzdCBzbGlkZSBhY3RpdmVcbmZ1bmN0aW9uIHVnX2dyaWRTbGlkZXJBY3RpdmVTZXQoKSB7XG4gICQoXCIudWcuZ3JpZC1zbGlkZXIgLnNsaWRlLXdyYXBwZXJcIikuZWFjaCggZnVuY3Rpb24oKXtcbiAgICB2YXIgc2xpZGVBbW91bnQgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLXNoaWZ0LWFtb3VudFwiKSxcbiAgICBhY3RpdmVTbGlkZSA9IChzbGlkZUFtb3VudCAqIC0xIC8gMTAwKSArIDEsXG4gICAgc2xpZGVOdW1iZXIgPSAkKHRoaXMpLmNoaWxkcmVuKCkubGVuZ3RoO1xuXG4gICAgJCh0aGlzKS5jaGlsZHJlbigpLmNoaWxkcmVuKFwiLnNsaWRlOm50aC1jaGlsZChcIiArIGFjdGl2ZVNsaWRlICsgXCIpXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuXG4gIH0pO1xufVxuXG4vLyBDcmVhdGluZyBhIGZ1bmN0aW9uIHRvIGRpc2FibGUgdGhlIGFycm93IGJ1dHRvbnMgYmFzZWQgb24gc2xpZGUgcG9zaXRpb25cbmZ1bmN0aW9uIHVnX2Rpc2FibGVkQnV0dG9ucyhjdXJyZW50U2xpZGVyQ2xhc3MsIGN1cnJlbnRBbW91bnQsIHBvdGVudGlhbFNoaWZ0KSB7XG4gIGlmKGN1cnJlbnRBbW91bnQgPT09IHBvdGVudGlhbFNoaWZ0KXtcbiAgICAkKFwiLnVnLmdyaWQtc2xpZGVyLlwiICsgY3VycmVudFNsaWRlckNsYXNzICsgXCIgLnJpZ2h0XCIpLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgaWYgKCBjdXJyZW50QW1vdW50ICE9PSAwICl7XG4gICAgICAkKFwiLnVnLmdyaWQtc2xpZGVyLlwiICsgY3VycmVudFNsaWRlckNsYXNzICsgXCIgLmxlZnRcIikucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgICB9XG4gIH0gZWxzZSBpZiggY3VycmVudEFtb3VudCA9PT0gMCApIHtcbiAgICAkKFwiLnVnLmdyaWQtc2xpZGVyLlwiICsgY3VycmVudFNsaWRlckNsYXNzICsgXCIgLmxlZnRcIikuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgICBpZiAoIGN1cnJlbnRBbW91bnQgIT09IHBvdGVudGlhbFNoaWZ0ICl7XG4gICAgICAkKFwiLnVnLmdyaWQtc2xpZGVyLlwiICsgY3VycmVudFNsaWRlckNsYXNzICsgXCIgLnJpZ2h0XCIpLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgICQoXCIudWcuZ3JpZC1zbGlkZXIuXCIgKyBjdXJyZW50U2xpZGVyQ2xhc3MgKyBcIiAuYnV0dG9uXCIpLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7XG4gIH1cblxuICBpZiAocG90ZW50aWFsU2hpZnQgPT09IDApIHtcbiAgICBjb25zb2xlLmxvZyhcIk5vIHNoaXRcIik7XG4gIH1cblxufVxuXG4vLyBTZXR0aW5nIHVwIGZ1bmN0aW9ucyBmb3Igc2hpZnRpbmcgdGhlIHNsaWRlcnMgYXBwcm9wcmlhdGVseVxuZnVuY3Rpb24gdWdfc2xpZGVMZWZ0KGN1cnJlbnRBbW91bnQsIHNoaWZ0QW1vdW50LCBjdXJyZW50V3JhcHBlciwgY3VycmVudEFjdGl2ZVNsaWRlLCBjdXJyZW50U2xpZGVyQ2xhc3MsIHBvdGVudGlhbFNoaWZ0KXtcblxuICBjdXJyZW50QW1vdW50ID0gY3VycmVudEFtb3VudCArIHNoaWZ0QW1vdW50O1xuXG4gIC8vICQoY3VycmVudFdyYXBwZXIpLnZlbG9jaXR5KHsgdHJhbnNsYXRlWDogY3VycmVudEFtb3VudCArIFwiJVwiIH0sIHsgZHVyYXRpb246IDUwMCwgZWFzaW5nOiBcInN3aW5nXCJ9KTtcbiAgJChjdXJyZW50V3JhcHBlcikuY3NzKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlWChcIiArIGN1cnJlbnRBbW91bnQgKyBcIiUpXCIpO1xuICAkKGN1cnJlbnRXcmFwcGVyKS5hdHRyKFwiZGF0YS1zaGlmdC1hbW91bnRcIiwgY3VycmVudEFtb3VudCk7XG4gICQoY3VycmVudEFjdGl2ZVNsaWRlKS5wcmV2KCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICQoY3VycmVudEFjdGl2ZVNsaWRlKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcblxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgdWdfZGlzYWJsZWRCdXR0b25zKGN1cnJlbnRTbGlkZXJDbGFzcywgY3VycmVudEFtb3VudCwgcG90ZW50aWFsU2hpZnQpO1xuICB9LCA1MClcblxufVxuXG5mdW5jdGlvbiB1Z19zbGlkZVJpZ2h0KGN1cnJlbnRBbW91bnQsIHNoaWZ0QW1vdW50LCBjdXJyZW50V3JhcHBlciwgY3VycmVudEFjdGl2ZVNsaWRlLCBjdXJyZW50U2xpZGVyQ2xhc3MsIHBvdGVudGlhbFNoaWZ0KXtcblxuICBjdXJyZW50QW1vdW50ID0gY3VycmVudEFtb3VudCAtIHNoaWZ0QW1vdW50O1xuXG4gIC8vICQoY3VycmVudFdyYXBwZXIpLnZlbG9jaXR5KHsgdHJhbnNsYXRlWDogY3VycmVudEFtb3VudCArIFwiJVwiIH0sIHsgZHVyYXRpb246IDUwMCwgZWFzaW5nOiBcInN3aW5nXCJ9KTtcbiAgJChjdXJyZW50V3JhcHBlcikuY3NzKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlWChcIiArIGN1cnJlbnRBbW91bnQgKyBcIiUpXCIpO1xuICAkKGN1cnJlbnRXcmFwcGVyKS5hdHRyKFwiZGF0YS1zaGlmdC1hbW91bnRcIiwgY3VycmVudEFtb3VudCk7XG4gICQoY3VycmVudEFjdGl2ZVNsaWRlKS5uZXh0KCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICQoY3VycmVudEFjdGl2ZVNsaWRlKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcblxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgdWdfZGlzYWJsZWRCdXR0b25zKGN1cnJlbnRTbGlkZXJDbGFzcywgY3VycmVudEFtb3VudCwgcG90ZW50aWFsU2hpZnQpO1xuICB9LCA1MClcblxufVxuXG51Z19ncmlkU2xpZGVyTGF5b3V0KCk7XG51Z19ncmlkU2xpZGVyRGVmYXVsdHMoKTtcbnVnX3ZpZXdBbGxEZWZhdWx0cygpO1xuXG5cbiQod2luZG93KS5yZXNpemUoIGZ1bmN0aW9uKCkge1xuICB1Z19ncmlkU2xpZGVyTGF5b3V0KCk7XG4gIHVnX2dyaWRTbGlkZXJBY3RpdmVTZXQoKTtcbn0pO1xuXG5cblxuJChcIi51Zy5ncmlkLXNsaWRlciAuYnV0dG9uXCIpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHZhciBidXR0b24gPSAkKHRoaXMpLFxuICB0eXBlID0gJCh0aGlzKS5hdHRyKFwiY2xhc3NcIikuc3BsaXQoXCIgXCIpLnBvcCgpLFxuICBjdXJyZW50U2xpZGVyQ2xhc3MgPSAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmF0dHIoXCJjbGFzc1wiKS5zcGxpdChcIiBcIikucG9wKCksXG4gIGN1cnJlbnRXcmFwcGVyID0gJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5jaGlsZHJlbihcIi5zbGlkZS13cmFwcGVyXCIpLFxuICBjdXJyZW50U2xpZGVzID0gY3VycmVudFdyYXBwZXIuY2hpbGRyZW4oKS5jaGlsZHJlbihcIi5zbGlkZVwiKSxcbiAgY3VycmVudEFjdGl2ZVNsaWRlID0gY3VycmVudFdyYXBwZXIuY2hpbGRyZW4oKS5jaGlsZHJlbihcIi5hY3RpdmVcIiksXG4gIHNoaWZ0QW1vdW50ID0gMTAwLFxuICBwb3RlbnRpYWxTaGlmdCA9IChwYXJzZUludChjdXJyZW50V3JhcHBlci5jaGlsZHJlbigpLmNoaWxkcmVuKFwiLnNsaWRlXCIpLmxlbmd0aCwgMTApIC0gMSkgKiBzaGlmdEFtb3VudCAqIC0xLFxuICBjdXJyZW50QW1vdW50ID0gcGFyc2VJbnQoY3VycmVudFdyYXBwZXIuYXR0cihcImRhdGEtc2hpZnQtYW1vdW50XCIpLCAwKTtcblxuICBpZih0eXBlID09PSBcInJpZ2h0XCIpe1xuXG4gICAgdWdfc2xpZGVSaWdodChjdXJyZW50QW1vdW50LCBzaGlmdEFtb3VudCwgY3VycmVudFdyYXBwZXIsIGN1cnJlbnRBY3RpdmVTbGlkZSwgY3VycmVudFNsaWRlckNsYXNzLCBwb3RlbnRpYWxTaGlmdCk7XG5cbiAgfSBlbHNlIGlmICh0eXBlID09PSBcImxlZnRcIil7XG5cbiAgICB1Z19zbGlkZUxlZnQoY3VycmVudEFtb3VudCwgc2hpZnRBbW91bnQsIGN1cnJlbnRXcmFwcGVyLCBjdXJyZW50QWN0aXZlU2xpZGUsIGN1cnJlbnRTbGlkZXJDbGFzcywgcG90ZW50aWFsU2hpZnQpO1xuXG4gIH0gZWxzZSBpZiAoIHR5cGUgPT09IFwidmlldy1hbGxcIiApe1xuXG4gICAgdWdfdmlld0FsbExheW91dChjdXJyZW50V3JhcHBlciwgY3VycmVudFNsaWRlckNsYXNzLCBjdXJyZW50U2xpZGVzLCBidXR0b24pO1xuXG4gIH1cblxuICB1Z19kaXNhYmxlZEJ1dHRvbnMoY3VycmVudFNsaWRlckNsYXNzLCBjdXJyZW50QW1vdW50LCBwb3RlbnRpYWxTaGlmdCk7XG5cbn0pO1xuXG4kKFwiLnVnLmdyaWQtc2xpZGVyIC5wcm9kdWN0XCIpLmNsaWNrKCBmdW5jdGlvbihlKXtcblxuICB2YXIgcGFyZW50U2xpZGUgPSAkKHRoaXMpLnBhcmVudCgpLFxuICBjdXJyZW50V3JhcHBlciA9ICQodGhpcykucGFyZW50KCkucGFyZW50KCkucGFyZW50KCksXG4gIGN1cnJlbnRTbGlkZXJDbGFzcyA9IGN1cnJlbnRXcmFwcGVyLnBhcmVudCgpLnBhcmVudCgpLmF0dHIoXCJjbGFzc1wiKS5zcGxpdChcIiBcIikucG9wKCksXG4gIGN1cnJlbnRBbW91bnQgPSBwYXJzZUludChjdXJyZW50V3JhcHBlci5hdHRyKFwiZGF0YS1zaGlmdC1hbW91bnRcIiksIDApLFxuICBzaGlmdEFtb3VudCA9IDEwMCxcbiAgcG90ZW50aWFsU2hpZnQgPSAocGFyc2VJbnQoY3VycmVudFdyYXBwZXIuY2hpbGRyZW4oKS5jaGlsZHJlbihcIi5zbGlkZVwiKS5sZW5ndGgsIDEwKSAtIDEpICogc2hpZnRBbW91bnQgKiAtMSxcbiAgY3VycmVudFNsaWRlcyA9IGN1cnJlbnRXcmFwcGVyLmNoaWxkcmVuKCkuY2hpbGRyZW4oXCIuc2xpZGVcIiksXG4gIGN1cnJlbnRBY3RpdmVTbGlkZSA9IGN1cnJlbnRXcmFwcGVyLmNoaWxkcmVuKCkuY2hpbGRyZW4oXCIuYWN0aXZlXCIpO1xuXG4gIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRTbGlkZXJDbGFzcyk7XG5cblxuICBpZiggIXBhcmVudFNsaWRlLmhhc0NsYXNzKFwiYWN0aXZlXCIpICl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYoIHBhcmVudFNsaWRlLnByZXYoKS5oYXNDbGFzcyhcImFjdGl2ZVwiKSApIHtcbiAgICAgIHVnX3NsaWRlUmlnaHQoIGN1cnJlbnRBbW91bnQsIHNoaWZ0QW1vdW50LCBjdXJyZW50V3JhcHBlciwgY3VycmVudEFjdGl2ZVNsaWRlLCBjdXJyZW50U2xpZGVyQ2xhc3MsIHBvdGVudGlhbFNoaWZ0ICk7XG4gICAgfSBlbHNlIGlmICggcGFyZW50U2xpZGUubmV4dCgpLmhhc0NsYXNzKFwiYWN0aXZlXCIpICl7XG4gICAgICB1Z19zbGlkZUxlZnQoIGN1cnJlbnRBbW91bnQsIHNoaWZ0QW1vdW50LCBjdXJyZW50V3JhcHBlciwgY3VycmVudEFjdGl2ZVNsaWRlLCBjdXJyZW50U2xpZGVyQ2xhc3MsIHBvdGVudGlhbFNoaWZ0ICk7XG4gICAgfVxuXG4gIH1cbn0pO1xuIiwiZnVuY3Rpb24gdWdfTGlnaHRib3hPcGVuKHRyaWdnZXIpe1xuXG4gIHZhciBhY3RpdmVCb3ggPSB0cmlnZ2VyLmF0dHIoXCJib3hcIik7XG5cbiAgY29uc29sZS5sb2coYWN0aXZlQm94KTtcblxuICAkKFwiLnVnLmxpZ2h0Ym94W2JveD0nMCddXCIgKS5hZGRDbGFzcyhcIm9wZW5cIik7XG5cbiAgcG9zaXRpb25GYXV4ZWQodHJ1ZSk7XG5cbn1cblxuZnVuY3Rpb24gdWdfTGlnaHRib3hDbG9zZSh0cmlnZ2VyKXtcblxuICB2YXIgYWN0aXZlQm94ID0gdHJpZ2dlci5wYXJlbnQoKS5hdHRyKFwiY2xhc3NcIikuc3BsaXQoXCIgXCIpLnBvcCgpO1xuXG4gICQoXCIudWcubGlnaHRib3guXCIgKyBhY3RpdmVCb3gpLnJlbW92ZUNsYXNzKFwib3BlblwiKTtcblxuICBwb3NpdGlvbkZhdXhlZChmYWxzZSk7XG5cbn1cblxuJChcIi51ZyAubGlnaHRib3gtdHJpZ2dlclwiKS5jbGljayggZnVuY3Rpb24oZSl7XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICB1Z19MaWdodGJveE9wZW4oJCh0aGlzKSk7XG5cbn0pO1xuXG4kKFwiLnVnLmxpZ2h0Ym94IC5jbG9zZVwiKS5jbGljayhmdW5jdGlvbihlKXtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIHVnX0xpZ2h0Ym94Q2xvc2UoJCh0aGlzKSk7XG5cbn0pO1xuIiwiLy8gTWFya3VwIHJlZmxlY3RlZCBpbiBiYXNlLWVsZW1lbnRzL3NsaWRlci5odG1sXG5cbmZ1bmN0aW9uIHVnX3NsaWRlckxheW91dCgpe1xuXG4gICQoXCIudWcuc2xpZGVyXCIpLmVhY2goIGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIHNlbGYgPSAkKHRoaXMpLFxuICAgIHNsaWRlV3JhcHBlciA9IHNlbGYuZmluZChcIi5zbGlkZS13cmFwcGVyXCIpLFxuICAgIGNvdW50ID0gc2xpZGVXcmFwcGVyLmZpbmQoXCIuc2xpZGVcIikubGVuZ3RoLFxuICAgIHdpZHRoID0gMTAwICogY291bnQgKyBcIiVcIjtcblxuICAgICQodGhpcykuY2hpbGRyZW4oXCIuYXJyb3dzIC5wcmV2XCIpLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XG5cbiAgICBzbGlkZVdyYXBwZXIuY3NzKFwid2lkdGhcIiwgd2lkdGgpO1xuICAgIHNlbGYuYXR0cihcInNsaWRlLXNob3duXCIsIFwiMFwiKTtcblxuICB9KTtcblxufVxuXG5mdW5jdGlvbiB1Z19zbGlkZXJTaGlmdChhcnJvdyl7XG5cbiAgc2VsZiA9IGFycm93LnBhcmVudHMoXCIudWcuc2xpZGVyXCIpLFxuICBzbGlkZVdyYXBwZXIgPSBzZWxmLmZpbmQoXCIuc2xpZGUtd3JhcHBlclwiKSxcbiAgY291bnQgPSBzZWxmLmZpbmQoXCIuc2xpZGVcIikubGVuZ3RoLFxuICBzbGlkZUFtb3VudCA9IDEwMCAvIGNvdW50LFxuICBzbGlkZVNob3duID0gcGFyc2VJbnQoc2VsZi5hdHRyKFwic2xpZGUtc2hvd25cIikpLFxuICBhcnJvd3MgPSBzZWxmLmZpbmQoXCIuYXJyb3dzXCIpLFxuICBwcm9ncmVzcyA9IHNlbGYuZmluZChcIi5wcm9ncmVzc1wiKSxcbiAgY2xpY2tlZEFycm93ID0gYXJyb3cuYXR0cihcImNsYXNzXCIpLnNwbGl0KFwiIFwiKVswXTtcblxuICBpZiggY2xpY2tlZEFycm93ID09PSBcIm5leHRcIiApe1xuXG4gICAgc2xpZGVTaG93bisrO1xuICAgIHNlbGYuYXR0ciggXCJzbGlkZS1zaG93blwiLCBzbGlkZVNob3duICk7XG5cbiAgICB2YXIgc2xpZGVUb3RhbCA9IHNsaWRlQW1vdW50ICogKHNsaWRlU2hvd24gKiAtMSk7XG5cbiAgICBzbGlkZVdyYXBwZXIudmVsb2NpdHkoeyB0cmFuc2xhdGVYOiBzbGlkZVRvdGFsICsgXCIlXCIgfSwgeyBkdXJhdGlvbjogMjUwLCBkZWxheTogMCB9KTtcblxuICB9IGVsc2Uge1xuXG4gICAgc2xpZGVTaG93bi0tO1xuICAgIHNlbGYuYXR0ciggXCJzbGlkZS1zaG93blwiLCBzbGlkZVNob3duICk7XG5cbiAgICB2YXIgc2xpZGVUb3RhbCA9IHNsaWRlQW1vdW50ICogKCBzbGlkZVNob3duICogLTEpO1xuXG4gICAgc2xpZGVXcmFwcGVyLnZlbG9jaXR5KHsgdHJhbnNsYXRlWDogc2xpZGVUb3RhbCArIFwiJVwiIH0sIHsgZHVyYXRpb246IDI1MCwgZGVsYXk6IDAgfSk7XG5cbiAgfVxuXG4gIHByb2dyZXNzLmNoaWxkcmVuKFwiYVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgcHJvZ3Jlc3MuY2hpbGRyZW4oXCJhOm50aC1vZi10eXBlKFwiICsgKDEgKyBzbGlkZVNob3duKSArIFwiKVwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcblxuICBpZiggc2xpZGVTaG93biA9PT0gMCApe1xuXG4gICAgYXJyb3dzLmNoaWxkcmVuKFwiLnByZXZcIikuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTtcblxuICB9IGVsc2UgaWYgKCAoc2xpZGVTaG93biArIDEpID09PSBjb3VudCApIHtcblxuICAgIGFycm93cy5jaGlsZHJlbihcIi5uZXh0XCIpLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XG5cbiAgfSBlbHNlIHtcblxuICAgIGFycm93cy5jaGlsZHJlbigpLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7XG5cbiAgfVxuXG59XG5cblxuJChcIi51Zy5zbGlkZXIgLmFycm93cyBhXCIpLmNsaWNrKCBmdW5jdGlvbihlKXtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB1Z19zbGlkZXJTaGlmdCgkKHRoaXMpKTtcbn0pO1xuXG5cbnVnX3NsaWRlckxheW91dCgpO1xuIiwiLy8gVGhpcyBmdW5jdGlvbiB0YWtlcyBjYXJlIG9mIGFsbCB0aGUgd2VpciBpc3N1ZXMgeW91IG1pZ2h0IHJ1biBpbnRvIHdoZW4gdHJ5aW5nIHRvIGRvIGEgZml4ZWQgcG9zaXRpb24gb3ZlcmxheSBvbiBtb2JpbGUuXG5cbmZ1bmN0aW9uIHBvc2l0aW9uRmF1eGVkKG9uKXtcbiAgdmFyIGhlYWRlck9mZnNldCA9IHBhcnNlSW50KCQoXCJoZWFkZXIuZ2xvYmFsXCIpLmhlaWdodCgpLCAxMCk7XG4gIHZhciBmYWtlU2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpIC0gaGVhZGVyT2Zmc2V0O1xuICB2YXIgc2Nyb2xsQW1vdW50ID0gcGFyc2VJbnQoJChcIm1haW4ubm9zY3JvbGxcIikuY3NzKFwidG9wXCIpLCAxMCkgLSBoZWFkZXJPZmZzZXQ7XG4gIHNjcm9sbEFtb3VudCA9IHBhcnNlSW50KHNjcm9sbEFtb3VudCwgMTApO1xuICBzY3JvbGxBbW91bnQgPSBzY3JvbGxBbW91bnQgKiAtMTtcblxuICBpZihvbiA9PT0gdHJ1ZSl7XG4gICAgJChcIm1haW5cIikuYWRkQ2xhc3MoXCJub3Njcm9sbFwiKTtcbiAgICAkKFwibWFpblwiKS5jc3MoXCJ0b3BcIiwgKyAoZmFrZVNjcm9sbCAgKiAtMSkpO1xuXG4gIH0gZWxzZSB7XG5cbiAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbigpe1xuICAgICAgJChcIm1haW5cIikucmVtb3ZlQ2xhc3MoXCJub3Njcm9sbFwiKTtcbiAgICAgICQoXCJtYWluXCIpLmNzcyhcInRvcFwiLCBcIjBcIik7XG4gICAgICAkKHdpbmRvdykuc2Nyb2xsVG9wKHNjcm9sbEFtb3VudCk7XG4gICAgfSwgMSk7XG5cbiAgfVxufVxuIiwiJChcIi51ZyBuYXYuZ2xvYmFsXCIpLmNsb25lKCkuYXBwZW5kVG8oXCJoZWFkZXIudWcuZ2xvYmFsIGRpdi5tZW51XCIpO1xuXG4kKFwiLnVnIGRpdi5tZW51IC5tZW51LXRyaWdnZXJcIikuY2xpY2soIGZ1bmN0aW9uKCl7XG4gICQodGhpcykucGFyZW50KCkudG9nZ2xlQ2xhc3MoXCJvcGVuXCIpO1xufSk7XG5cbiQoXCIudWcgLmRyb3Bkb3duXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICQodGhpcykudG9nZ2xlQ2xhc3MoXCJvcGVuXCIpO1xuICAvLyBDb25zaWRlciBhZGRpbmcgaW4gY29kZSB0byBkeW5hbWljYWxseSB0cmFjayB0aGUgaGVpZ2h0IG9mIGEgZ2l2ZW4gZHJvcGRvd25cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
