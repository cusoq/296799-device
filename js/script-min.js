var link=document.querySelector(".btn-contacts"),popup=document.querySelector(".contact-us"),close=popup.querySelector(".modal-close");link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show")}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&popup.classList.contains("modal-show")&&popup.classList.remove("modal-show")});var mapLink=document.querySelector(".contacts-button-map"),mapPopup=document.querySelector(".modal-map"),mapClose=mapPopup.querySelector(".modal-close");mapLink.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.add("modal-show")}),mapClose.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&mapPopup.classList.contains("modal-show")&&mapPopup.classList.remove("modal-show")});
