// (function ($) {
//     'use strict';

//      /* ================================
//         Section Title Animation  Js Start
//       ================================ */

//       if($('.tz-sub-tilte').length) {
//       var agtsub = $(".tz-sub-tilte");

//       if(agtsub.length == 0) return; gsap.registerPlugin(SplitText); agtsub.each(function(index, el) {

//         el.split = new SplitText(el, {
//           type: "lines,words,chars",
//           linesClass: "split-line"
//         });

//         if( $(el).hasClass('tz-sub-anim') ){
//           gsap.set(el.split.chars, {
//             opacity: 0,
//             x: "7",
//           });
//         }

//         el.anim = gsap.to(el.split.chars, {
//           scrollTrigger: {
//             trigger: el,
//             start: "top 90%",
//             end: "top 60%",
//             markers: false,
//             scrub: 1,
//           },

//           x: "0",
//           y: "0",
//           opacity: 1,
//           duration: .7,
//           stagger: 0.2,
//         });

//       });
//     }

//     if($('.tz-itm-title').length) {
// 		var txtheading = $(".tz-itm-title");

//     if(txtheading.length == 0) return; gsap.registerPlugin(SplitText); txtheading.each(function(index, el) {

//         el.split = new SplitText(el, {
//           type: "lines,words,chars",
//           linesClass: "split-line"
//         });

//         if( $(el).hasClass('tz-itm-anim') ){
//           gsap.set(el.split.chars, {
//             opacity: .3,
//             x: "-7",
//           });
//         }
//         el.anim = gsap.to(el.split.chars, {
//           scrollTrigger: {
//             trigger: el,
//             start: "top 92%",
//             end: "top 60%",
//             markers: false,
//             scrub: 1,
//           },

//           x: "0",
//           y: "0",
//           opacity: 1,
//           duration: .7,
//           stagger: 0.2,
//         });

//       });
//     }
      
//     if ($(".tv_hero_title").length) {
//         gsap.registerPlugin(SplitText);

//         $(".tv_hero_title").each(function () {
//             var $el = $(this);

//             // Split text
//             var split = new SplitText($el, {
//                 type: "lines,words,chars",
//                 linesClass: "split-line"
//             });

//             gsap.set($el, { perspective: 400 });

//             // Initial states
//             if ($el.hasClass("hero_title_1")) {
//                 gsap.set(split.chars, {
//                     x: 100,
//                     opacity: 0
//                 });
//             }
//             if ($el.hasClass("hero_title_2")) {
//                 gsap.set(split.chars, {
//                     y: 100,
//                     opacity: 0
//                 });
//             }
//             if ($el.hasClass("hero_title_3")) {
//                 gsap.set(split.chars, {
//                     y: 100,
//                     scaleY: 0,
//                     opacity: 0,
//                     rotationX: 15
//                 });
//             }

//             // Animation
//             gsap.to(split.chars, {
//                 scrollTrigger: {
//                     trigger: $el,
//                     start: "top 90%",
//                     toggleActions: "play reverse play reverse",
//                     markers: false
//                 },
//                 x: 0,
//                 y: 0,
//                 scaleX: 1,
//                 scaleY: 1,
//                 opacity: 1,
//                 duration: 1,
//                 stagger: 0.05,
//                 rotationX: 15,
//                 delay: 0.1,
//                 ease: "power3.inOut"
//             });
//         });
//     }

//     if (window.matchMedia("(min-width: 1200px)").matches) {
//         document.querySelectorAll(".tv-desti-content").forEach((section) => {
//             let items = section.querySelectorAll(".tv-desti-item");

//             gsap.timeline({
//                 scrollTrigger: {
//                     trigger: section,
//                     start: "top 70%",
//                     toggleActions: "play reverse play reverse",
//                     markers: false,
//                 },
//             })
//             .from(items, {
//                 xPercent: 70,
//                 opacity: 0,
//                 ease: "back.out(2.5)",
//                 duration: 1,
//                 stagger: -0.2,
//             });
//         });
//     }

//      if($('#smooth-wrapper').length && $('#smooth-content').length){
// 		gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TweenMax, ScrollToPlugin);
	
// 		gsap.config({
// 			nullTargetWarn: false,
// 		});
	
// 		let smoother = ScrollSmoother.create({
// 			smooth: 2,
// 			effects: true,
// 			smoothTouch: 0.1,
// 			normalizeScroll: false,
// 			ignoreMobileResize: true,
// 		});

// 	}

//   let tl = gsap.timeline();
// 	const project_panel = gsap.matchMedia();
// 	project_panel.add("(min-width: 767px)", () => {
// 		let otherSections = document.querySelectorAll('.gt-project-panel')
// 		otherSections.forEach((section, index) => {
// 			gsap.set(otherSections, {
// 				scale: 1,
// 			});
// 			tl.to(section, {
// 				scale: 1,
// 				scrollTrigger: {
// 					trigger: section,
// 					pin: section,
// 					scrub: 1,
// 					start: 'top 100px',
// 					end: "bottom 82%",
// 					endTrigger: '.gt-project-area',
// 					pinSpacing: false,
// 					markers: false,
// 				},
// 			})
// 		})
// 	});


//    let tl2 = gsap.timeline();
// 	const project_panel2 = gsap.matchMedia();
// 	project_panel2.add("(min-width: 767px)", () => {
// 		let otherSections = document.querySelectorAll('.gt-project-panel2')
// 		otherSections.forEach((section, index) => {
// 			gsap.set(otherSections, {
// 				scale: 1,
// 			});
// 			tl.to(section, {
// 				scale: 1,
// 				scrollTrigger: {
// 					trigger: section,
// 					pin: section,
// 					scrub: 1,
// 					start: 'top 100px',
// 					end: "bottom 60%",
// 					endTrigger: '.gt-project-area2',
// 					pinSpacing: false,
// 					markers: false,
// 				},
// 			})
// 		})
// 	});

//   // For each images with class "animate-image" on page
// 	gsap.utils.toArray(".rotatedscal").forEach((el, index) => {
// 		let tl3 = gsap.timeline({
// 			scrollTrigger: {
// 				trigger: el,
// 				scrub: 1,
// 				start: "top 90%",
// 				end: "buttom 60%",
// 				toggleActions: "play none none reverse",
// 				markers: false,
// 			},
// 		});

// 		tl3.set(el, { transformOrigin: "center center" }).from(
// 			el,
// 			{ opacity: 1, rotateZ: 45, scale: 0.5, y: "+=100" },
// 			{
// 				opacity: 1,
// 				rotateZ: 0,
// 				scale: 1,
// 				y: 0,
// 				duration: 1,
// 				immediateRender: false,
// 			}
// 		);
// 	});

// })(jQuery);