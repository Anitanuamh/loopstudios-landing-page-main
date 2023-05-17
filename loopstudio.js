function myFunction() {
  var x = document.getElementById("myTopnav");
  var homeLink = document.querySelector(".topnav a[href='#home']");
  
  if (x.className === "topnav") {
    x.className += " responsive";
    homeLink.classList.remove("active");
  } else {
    x.className = "topnav";
  }
}
