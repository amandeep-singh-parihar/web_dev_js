// gsap.to("#box", {
//   x: 1336,
//   rotate: 360,
//   backgroundColor: "blue",
//   duration: 2,
//   delay: 1,
// });

// gsap.from("#box",{
//   x:1336,
//   rotate:720,
//   backgroundColor:"blue",
//   duration:3,
//   delay:2,

// })

var tl = gsap.timeline();

tl.to("#box1", {
  x: 1336,
  rotate: 900,
  backgroundColor: "green",
  scale: 0.5,
  duration: 5,
  delay: 0.9,
});

tl.to("#box2", {
  x: 1336,
  rotate: 900,
  backgroundColor: "blue",
  scale: 0.5,
  duration: 3,
});

tl.to("#box3", {
  x: 1336,
  rotate: 900,
  backgroundColor: "red",
  scale: 0.5,
  duration: 3,
});
