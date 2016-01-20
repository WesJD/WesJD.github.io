var lastChange;

//onReady function
$(document).ready(function() {
  toggleClazz("body div#hor", "hor-nav");
  toggleClazz("body div.fluid-body", "top");

  //handle the span click
  $("body div.corner i.change").on("click", function() {
    if(lastChange != null ? new Date().getTime() - lastChange >= 500 : true) {
      //change navs
      toggleClazz("body div#hor", "hor-nav");
      toggleClazz("body div#ver", "ver-nav");

      //change the body's margins
      toggleClazz("body div.fluid-body", "top");
      toggleClazz("body div.fluid-body", "left");

      //rotate the arrow
      toggleClazz("body div.corner i", "rotated");

      //set the last change time
      lastChange = new Date().getTime();
    }
  });
});

//Simple wrapper function for toggleClass, it was getting a bit pesky
function toggleClazz(refrence, clazz) {
  $(refrence).toggleClass(clazz);
}
