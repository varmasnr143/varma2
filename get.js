var idb = window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.webkitIndexedDB;

//creating a database
var open = idb.open("Resume builder",1);
open.onupgradeneeded=function(e) {
var request = e.target.result;
request.createObjectStore("form_data",{keyPath:"id",autoIncrement:true})
}

open.onsuccess=function(e) {
var request = e.target.result;
var transaction = request.transaction("form_data","readwrite");
var storeDB = transaction.objectStore("form_data");
var finalData = storeDB.getAll();
finalData.onsuccess=function(e){
  console.log(event.target.result);
  display(event.target.result);
}
var parent = document.querySelector(".parent");
function display(data) {
  data.map((item)=>{
    var child = document.createElement("div");
    child.classList.add("child");

    var profileIcon = document.createElement("img");
    profileIcon.src="pic.svg";
    child.appendChild(profileIcon);
    var data = document.createElement("p");
    data.textContent = item.name;
    child.appendChild(data);
    var data1 = document.createElement("p");
    data1.textContent = item.email;
    child.appendChild(data1);

    var link = document.createElement("a");
    link.href = "resume.html?id="+item.id;
    link.textContent = "View Profile";
    child.appendChild(link);
    parent.appendChild(child);
  })
}
}
