function positionFauxed(s){var e=parseInt($("header.global").height(),10),l=$(window).scrollTop()-e,o=parseInt($("main.noscroll").css("top"),10)-e;o=parseInt(o,10),o=-1*o,console.log(l),console.log(o),s===!0?($("main").addClass("noscroll"),$("main").css("top",+(-1*l))):setTimeout(function(){$("main").removeClass("noscroll"),$("main").css("top","0"),$(window).scrollTop(o)},1)}function lightboxOpen(s){var e=s.attr("class").split(" ").pop();$(".lightbox."+e).addClass("open"),positionFauxed(!0)}function lightboxClose(s){var e=s.parent().attr("class").split(" ").pop();$(".lightbox."+e).removeClass("open"),positionFauxed(!1)}function sliderLayout(){$(".slider").each(function(){var s=$(this),e=s.find(".slide-wrapper"),l=e.find(".slide").length,o=100*l+"%";e.css("width",o),s.attr("slide-shown","0")})}function sliderShift(s){if(self=s.parents(".slider"),slideWrapper=self.find(".slide-wrapper"),count=self.find(".slide").length,slideAmount=100/count,slideShown=parseInt(self.attr("slide-shown")),arrows=self.find(".arrows"),progress=self.find(".progress"),clickedArrow=s.attr("class").split(" ")[0],"next"===clickedArrow){slideShown++,self.attr("slide-shown",slideShown);var e=slideAmount*(-1*slideShown);slideWrapper.velocity({translateX:e+"%"},{duration:250,delay:0})}else{slideShown--,self.attr("slide-shown",slideShown);var e=slideAmount*(-1*slideShown);slideWrapper.velocity({translateX:e+"%"},{duration:250,delay:0})}progress.children("a").removeClass("active"),progress.children("a:nth-of-type("+(1+slideShown)+")").addClass("active"),0===slideShown?arrows.children(".prev").addClass("disabled"):slideShown+1===count?arrows.children(".next").addClass("disabled"):arrows.children().removeClass("disabled")}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UtZnVuY3Rpb25zL2ZhdXgtcG9zaXRpb24uanMiLCJiYXNlLWZ1bmN0aW9ucy9saWdodGJveC5qcyIsImJhc2UtZnVuY3Rpb25zL3NsaWRlci5qcyJdLCJuYW1lcyI6WyJwb3NpdGlvbkZhdXhlZCIsIm9uIiwiaGVhZGVyT2Zmc2V0IiwicGFyc2VJbnQiLCIkIiwiaGVpZ2h0IiwiZmFrZVNjcm9sbCIsIndpbmRvdyIsInNjcm9sbFRvcCIsInNjcm9sbEFtb3VudCIsImNzcyIsImNvbnNvbGUiLCJsb2ciLCJhZGRDbGFzcyIsInNldFRpbWVvdXQiLCJyZW1vdmVDbGFzcyIsImxpZ2h0Ym94T3BlbiIsInRyaWdnZXIiLCJhY3RpdmVCb3giLCJhdHRyIiwic3BsaXQiLCJwb3AiLCJsaWdodGJveENsb3NlIiwicGFyZW50Iiwic2xpZGVyTGF5b3V0IiwiZWFjaCIsInNlbGYiLCJ0aGlzIiwic2xpZGVXcmFwcGVyIiwiZmluZCIsImNvdW50IiwibGVuZ3RoIiwid2lkdGgiLCJzbGlkZXJTaGlmdCIsImFycm93IiwicGFyZW50cyIsInNsaWRlQW1vdW50Iiwic2xpZGVTaG93biIsImFycm93cyIsInByb2dyZXNzIiwiY2xpY2tlZEFycm93Iiwic2xpZGVUb3RhbCIsInZlbG9jaXR5IiwidHJhbnNsYXRlWCIsImR1cmF0aW9uIiwiZGVsYXkiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6IkFBRUEsUUFBQUEsZ0JBQUFDLEdBQ0EsR0FBQUMsR0FBQUMsU0FBQUMsRUFBQSxpQkFBQUMsU0FBQSxJQUNBQyxFQUFBRixFQUFBRyxRQUFBQyxZQUFBTixFQUNBTyxFQUFBTixTQUFBQyxFQUFBLGlCQUFBTSxJQUFBLE9BQUEsSUFBQVIsQ0FDQU8sR0FBQU4sU0FBQU0sRUFBQSxJQUNBQSxFQUFBLEdBQUFBLEVBRUFFLFFBQUFDLElBQUFOLEdBQ0FLLFFBQUFDLElBQUFILEdBRUFSLEtBQUEsR0FDQUcsRUFBQSxRQUFBUyxTQUFBLFlBQ0FULEVBQUEsUUFBQU0sSUFBQSxRQUFBLEdBQUFKLEtBSUFRLFdBQUEsV0FDQVYsRUFBQSxRQUFBVyxZQUFBLFlBQ0FYLEVBQUEsUUFBQU0sSUFBQSxNQUFBLEtBQ0FOLEVBQUFHLFFBQUFDLFVBQUFDLElBQ0EsR0N0QkEsUUFBQU8sY0FBQUMsR0FFQSxHQUFBQyxHQUFBRCxFQUFBRSxLQUFBLFNBQUFDLE1BQUEsS0FBQUMsS0FFQWpCLEdBQUEsYUFBQWMsR0FBQUwsU0FBQSxRQUNBYixnQkFBQSxHQUlBLFFBQUFzQixlQUFBTCxHQUVBLEdBQUFDLEdBQUFELEVBQUFNLFNBQUFKLEtBQUEsU0FBQUMsTUFBQSxLQUFBQyxLQUVBakIsR0FBQSxhQUFBYyxHQUFBSCxZQUFBLFFBRUFmLGdCQUFBLEdDYkEsUUFBQXdCLGdCQUVBcEIsRUFBQSxXQUFBcUIsS0FBQSxXQUVBLEdBQUFDLEdBQUF0QixFQUFBdUIsTUFDQUMsRUFBQUYsRUFBQUcsS0FBQSxrQkFDQUMsRUFBQUYsRUFBQUMsS0FBQSxVQUFBRSxPQUNBQyxFQUFBLElBQUFGLEVBQUEsR0FFQUYsR0FBQWxCLElBQUEsUUFBQXNCLEdBQ0FOLEVBQUFQLEtBQUEsY0FBQSxPQU1BLFFBQUFjLGFBQUFDLEdBV0EsR0FUQVIsS0FBQVEsRUFBQUMsUUFBQSxXQUNBUCxhQUFBRixLQUFBRyxLQUFBLGtCQUNBQyxNQUFBSixLQUFBRyxLQUFBLFVBQUFFLE9BQ0FLLFlBQUEsSUFBQU4sTUFDQU8sV0FBQWxDLFNBQUF1QixLQUFBUCxLQUFBLGdCQUNBbUIsT0FBQVosS0FBQUcsS0FBQSxXQUNBVSxTQUFBYixLQUFBRyxLQUFBLGFBQ0FXLGFBQUFOLEVBQUFmLEtBQUEsU0FBQUMsTUFBQSxLQUFBLEdBRUEsU0FBQW9CLGFBQUEsQ0FFQUgsYUFDQVgsS0FBQVAsS0FBQSxjQUFBa0IsV0FFQSxJQUFBSSxHQUFBTCxhQUFBLEdBQUFDLFdBRUFULGNBQUFjLFVBQUFDLFdBQUFGLEVBQUEsTUFBQUcsU0FBQSxJQUFBQyxNQUFBLFFBRUEsQ0FFQVIsYUFDQVgsS0FBQVAsS0FBQSxjQUFBa0IsV0FFQSxJQUFBSSxHQUFBTCxhQUFBLEdBQUFDLFdBRUFULGNBQUFjLFVBQUFDLFdBQUFGLEVBQUEsTUFBQUcsU0FBQSxJQUFBQyxNQUFBLElBSUFOLFNBQUFPLFNBQUEsS0FBQS9CLFlBQUEsVUFDQXdCLFNBQUFPLFNBQUEsa0JBQUEsRUFBQVQsWUFBQSxLQUFBeEIsU0FBQSxVQUVBLElBQUF3QixXQUVBQyxPQUFBUSxTQUFBLFNBQUFqQyxTQUFBLFlBRUF3QixXQUFBLElBQUFQLE1BRUFRLE9BQUFRLFNBQUEsU0FBQWpDLFNBQUEsWUFJQXlCLE9BQUFRLFdBQUEvQixZQUFBIiwiZmlsZSI6ImFwcGxpY2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmdW5jdGlvbiB0YWtlcyBjYXJlIG9mIGFsbCB0aGUgd2VpciBpc3N1ZXMgeW91IG1pZ2h0IHJ1biBpbnRvIHdoZW4gdHJ5aW5nIHRvIGRvIGEgZml4ZWQgcG9zaXRpb24gb3ZlcmxheSBvbiBtb2JpbGUuXG5cbmZ1bmN0aW9uIHBvc2l0aW9uRmF1eGVkKG9uKXtcbiAgdmFyIGhlYWRlck9mZnNldCA9IHBhcnNlSW50KCQoXCJoZWFkZXIuZ2xvYmFsXCIpLmhlaWdodCgpLCAxMCk7XG4gIHZhciBmYWtlU2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpIC0gaGVhZGVyT2Zmc2V0O1xuICB2YXIgc2Nyb2xsQW1vdW50ID0gcGFyc2VJbnQoJChcIm1haW4ubm9zY3JvbGxcIikuY3NzKFwidG9wXCIpLCAxMCkgLSBoZWFkZXJPZmZzZXQ7XG4gIHNjcm9sbEFtb3VudCA9IHBhcnNlSW50KHNjcm9sbEFtb3VudCwgMTApO1xuICBzY3JvbGxBbW91bnQgPSBzY3JvbGxBbW91bnQgKiAtMTtcblxuICBjb25zb2xlLmxvZyhmYWtlU2Nyb2xsKTtcbiAgY29uc29sZS5sb2coc2Nyb2xsQW1vdW50KTtcblxuICBpZihvbiA9PT0gdHJ1ZSl7XG4gICAgJChcIm1haW5cIikuYWRkQ2xhc3MoXCJub3Njcm9sbFwiKTtcbiAgICAkKFwibWFpblwiKS5jc3MoXCJ0b3BcIiwgKyAoZmFrZVNjcm9sbCAgKiAtMSkpO1xuXG4gIH0gZWxzZSB7XG5cbiAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbigpe1xuICAgICAgJChcIm1haW5cIikucmVtb3ZlQ2xhc3MoXCJub3Njcm9sbFwiKTtcbiAgICAgICQoXCJtYWluXCIpLmNzcyhcInRvcFwiLCBcIjBcIik7XG4gICAgICAkKHdpbmRvdykuc2Nyb2xsVG9wKHNjcm9sbEFtb3VudCk7XG4gICAgfSwgMSk7XG5cbiAgfVxufVxuIiwiZnVuY3Rpb24gbGlnaHRib3hPcGVuKHRyaWdnZXIpe1xuXG4gIHZhciBhY3RpdmVCb3ggPSB0cmlnZ2VyLmF0dHIoXCJjbGFzc1wiKS5zcGxpdChcIiBcIikucG9wKCk7XG5cbiAgJChcIi5saWdodGJveC5cIiArIGFjdGl2ZUJveCkuYWRkQ2xhc3MoXCJvcGVuXCIpO1xuICBwb3NpdGlvbkZhdXhlZCh0cnVlKTtcblxufVxuXG5mdW5jdGlvbiBsaWdodGJveENsb3NlKHRyaWdnZXIpe1xuXG4gIHZhciBhY3RpdmVCb3ggPSB0cmlnZ2VyLnBhcmVudCgpLmF0dHIoXCJjbGFzc1wiKS5zcGxpdChcIiBcIikucG9wKCk7XG5cbiAgJChcIi5saWdodGJveC5cIiArIGFjdGl2ZUJveCkucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpO1xuXG4gIHBvc2l0aW9uRmF1eGVkKGZhbHNlKTtcblxufVxuIiwiLy8gTWFya3VwIHJlZmxlY3RlZCBpbiBiYXNlLWVsZW1lbnRzL3NsaWRlci5odG1sXG5cbmZ1bmN0aW9uIHNsaWRlckxheW91dCgpe1xuXG4gICQoXCIuc2xpZGVyXCIpLmVhY2goIGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIHNlbGYgPSAkKHRoaXMpLFxuICAgIHNsaWRlV3JhcHBlciA9IHNlbGYuZmluZChcIi5zbGlkZS13cmFwcGVyXCIpLFxuICAgIGNvdW50ID0gc2xpZGVXcmFwcGVyLmZpbmQoXCIuc2xpZGVcIikubGVuZ3RoLFxuICAgIHdpZHRoID0gMTAwICogY291bnQgKyBcIiVcIjtcblxuICAgIHNsaWRlV3JhcHBlci5jc3MoXCJ3aWR0aFwiLCB3aWR0aCk7XG4gICAgc2VsZi5hdHRyKFwic2xpZGUtc2hvd25cIiwgXCIwXCIpO1xuXG4gIH0pO1xuXG59XG5cbmZ1bmN0aW9uIHNsaWRlclNoaWZ0KGFycm93KXtcblxuICBzZWxmID0gYXJyb3cucGFyZW50cyhcIi5zbGlkZXJcIiksXG4gIHNsaWRlV3JhcHBlciA9IHNlbGYuZmluZChcIi5zbGlkZS13cmFwcGVyXCIpLFxuICBjb3VudCA9IHNlbGYuZmluZChcIi5zbGlkZVwiKS5sZW5ndGgsXG4gIHNsaWRlQW1vdW50ID0gMTAwIC8gY291bnQsXG4gIHNsaWRlU2hvd24gPSBwYXJzZUludChzZWxmLmF0dHIoXCJzbGlkZS1zaG93blwiKSksXG4gIGFycm93cyA9IHNlbGYuZmluZChcIi5hcnJvd3NcIiksXG4gIHByb2dyZXNzID0gc2VsZi5maW5kKFwiLnByb2dyZXNzXCIpLFxuICBjbGlja2VkQXJyb3cgPSBhcnJvdy5hdHRyKFwiY2xhc3NcIikuc3BsaXQoXCIgXCIpWzBdO1xuXG4gIGlmKCBjbGlja2VkQXJyb3cgPT09IFwibmV4dFwiICl7XG5cbiAgICBzbGlkZVNob3duKys7XG4gICAgc2VsZi5hdHRyKCBcInNsaWRlLXNob3duXCIsIHNsaWRlU2hvd24gKTtcblxuICAgIHZhciBzbGlkZVRvdGFsID0gc2xpZGVBbW91bnQgKiAoc2xpZGVTaG93biAqIC0xKTtcblxuICAgIHNsaWRlV3JhcHBlci52ZWxvY2l0eSh7IHRyYW5zbGF0ZVg6IHNsaWRlVG90YWwgKyBcIiVcIiB9LCB7IGR1cmF0aW9uOiAyNTAsIGRlbGF5OiAwIH0pO1xuXG4gIH0gZWxzZSB7XG5cbiAgICBzbGlkZVNob3duLS07XG4gICAgc2VsZi5hdHRyKCBcInNsaWRlLXNob3duXCIsIHNsaWRlU2hvd24gKTtcblxuICAgIHZhciBzbGlkZVRvdGFsID0gc2xpZGVBbW91bnQgKiAoIHNsaWRlU2hvd24gKiAtMSk7XG5cbiAgICBzbGlkZVdyYXBwZXIudmVsb2NpdHkoeyB0cmFuc2xhdGVYOiBzbGlkZVRvdGFsICsgXCIlXCIgfSwgeyBkdXJhdGlvbjogMjUwLCBkZWxheTogMCB9KTtcblxuICB9XG5cbiAgcHJvZ3Jlc3MuY2hpbGRyZW4oXCJhXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICBwcm9ncmVzcy5jaGlsZHJlbihcImE6bnRoLW9mLXR5cGUoXCIgKyAoMSArIHNsaWRlU2hvd24pICsgXCIpXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuXG4gIGlmKCBzbGlkZVNob3duID09PSAwICl7XG5cbiAgICBhcnJvd3MuY2hpbGRyZW4oXCIucHJldlwiKS5hZGRDbGFzcyhcImRpc2FibGVkXCIpO1xuXG4gIH0gZWxzZSBpZiAoIChzbGlkZVNob3duICsgMSkgPT09IGNvdW50ICkge1xuXG4gICAgYXJyb3dzLmNoaWxkcmVuKFwiLm5leHRcIikuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTtcblxuICB9IGVsc2Uge1xuXG4gICAgYXJyb3dzLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcblxuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
