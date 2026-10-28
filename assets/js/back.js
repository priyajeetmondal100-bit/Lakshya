/* PrepSphere shared Back button helper */
(function(){
  function handleBack(){
    if(window.history.length>1&&document.referrer&&!document.referrer.endsWith(location.pathname)){
      window.history.back();
    }else{
      window.location.href="home.html";
    }
  }
  var b=document.getElementById("psBack")||document.getElementById("backBtn")||document.querySelector(".back-btn");
  if(b){
    b.onclick=handleBack;
    return;
  }
  b=document.createElement("button");
  b.id="psBack";b.type="button";b.textContent="\u2190 Back";
  b.className="back-btn";
  b.setAttribute("aria-label","Go back");
  b.onclick=handleBack;
  var top=document.querySelector(".top");
  if(top){
    top.insertBefore(b,top.firstChild);
  }else{
    var host=document.querySelector("main")||document.body;
    host.insertBefore(b,host.firstChild);
  }
})();
