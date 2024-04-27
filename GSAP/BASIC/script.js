// gsap.to("#box", {
//   //this for initial to final
//   x: 1000,
//   rotate: 360,
//   duration: 2,
//   delay: 1,
//   backgroundColor: "blue",
// });

// gsap.from("#box", {
//   //this for final to initial
//   x: 1000,
//   rotate: 360,
//   duration: 2,
//   delay: 1,
//   backgroundColor: "blue",
// });

var tl = gsap.timeline();

tl.to("#box1", {
  x: 1200,
  rotate: 360,
  scale: 0.5,
  duration: 2,
  delay: 1,
});

tl.to("#box2", {
  x: 1200,
  rotate: 360,
  scale: 0.5,
  duration: 2,
});

tl.to("#box3", {
  x: 1200,
  rotate: 360,
  scale: 0.5,
  duration: 2,
});
