function showPic(whichpic){
var source =whichpic.getAttribute("href");
var cs =document.getElementById("cs");
cs.setAttribute("src",source);
 }