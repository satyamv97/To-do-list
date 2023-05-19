///adding list using add button and also adding close

let addButton=document.getElementById('addbtn');
addButton.addEventListener("click",function fun(){
var li=document.createElement("li");
var listcontent=document.getElementById("input").value;
if(listcontent==''){
  return;
}
li.innerHTML=listcontent;

document.getElementById("myul").appendChild(li);
document.getElementById("input").value='';

var eachlist=document.getElementsByTagName("li");
var i;
for(  i=0;i<eachlist.length;i++){
  var span=document.createElement("SPAN");
  span.innerHTML="&times";
  span.className="close";
  eachlist[i].appendChild(span);
}
var closebtn=document.getElementsByClassName("close");
var i;
for(i=0;i<closebtn.length;i++){
  closebtn[i].addEventListener('click',function(){
    this.parentElement.style.display='none';
  });
}

// var element=document.getElementsByTagName('li');
// for(i=0;i<element.length;i++){
//   element[i].addEventListener('click',function(event){
//     event.target.classList.toggle("done");
//   });
// }
//
// })
//cutting list item when selected
var element=document.getElementsByTagName('li');
var i;
for(i=0;i<element.length;i++){
  element[i].addEventListener('click',function(){

    this.style.backgroundColor='grey';
      this.style.textDecoration='line-through';
  });
}
})

//creating close in each listadder
var eachlist=document.getElementsByTagName("li");
var i;
for(  i=0;i<eachlist.length;i++){
  var span=document.createElement("SPAN");
  span.innerHTML="&times";
  span.className="close";
  eachlist[i].appendChild(span);
}

//adding close concept
var closebtn=document.getElementsByClassName("close");
var i;
for(i=0;i<closebtn.length;i++){
  closebtn[i].addEventListener('click',function(){
    this.parentElement.style.display='none';
  });
}


//adding tick sign when any of todo list is selected/done
// var element=document.getElementsByTagName('li');
// for(i=0;i<element.length;i++){
//   element[i].addEventListener('click',function(event){
//     event.target.classList.toggle("done");
//   });
// }

var i;
for(i=0;i<element.length;i++){
  element[i].addEventListener('click',function(){


    this.style.backgroundColor='grey';
      this.style.textDecoration='line-through';
  });

}
