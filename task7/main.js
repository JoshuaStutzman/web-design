// SideNav Button Initialization
$(".button-collapse").sideNav();
// SideNav Scrollbar Initialization
var sideNavScrollbar = document.querySelector('.custom-scrollbar');
Ps.initialize(sideNavScrollbar);
// SideNav Options
$('.button-collapse').sideNav({
    edge: 'right', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on &lt;a&gt; clicks, useful for Angular/Meteor
    breakpoint: 1200 // Breakpoint for button collapse
  });
  // Show sideNav
$('.button-collapse').sideNav('show');
// Hide sideNav
$('.button-collapse').sideNav('hide');