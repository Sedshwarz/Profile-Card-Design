function follow(btn){
  var state = btn.getAttribute("data-state");

  if (state == "yes") {
    btn.style.transform = "scale(0)";
    setTimeout(function(){
      btn.style.transform = "scale(1)";
      btn.style.color = "white";
      btn.style.background = "#8f5aff";
      btn.style.border = "1px solid transparent";
      btn.innerText = "Follow";
      btn.style.transition = "0.3s ease";
    },80);
    btn.setAttribute("data-state", "no");
  }
  else {
    btn.style.transform = "scale(0)";
    setTimeout(function(){
      btn.style.transform = "scale(1)";
      btn.style.color = "#c1a5ff";
      btn.style.border = "1px solid #7754c4";
      btn.style.background = "transparent";
      btn.innerText = "Following";
      btn.style.transition = "0.3s ease";
    },80);
    btn.setAttribute("data-state", "yes");
  }
}