 /*function nothing(id){
    console.log(id);
     
     document.querySelector(`#${id}`).style.style = "";
     document.querySelector(`#${id}`).style.color = "";
 }
*/
function changeBackGround(id){
    document.querySelector(`#${id}`).style.opacity = 1;
   // document.querySelector(`#${id}`).style.backgroundColor = "rgba(0, 0, 0, 0.5)";
   // document.querySelector(`#${id}`).style.color = "white";
    
};

 function backToNormal(id){
    // console.log(id);
     //document.querySelector(`#${id}`).style.backgroundColor = "";
    //document.querySelector(`#${id}`).style.color = "";
    //document.querySelector(`#${id}`).style.visibility = "hidden";
    document.querySelector(`#${id}`).style.opacity = 0;
}; 
 



/*$("id").on({
    mouseenter: function changeBackGround(id){
        $(this).css("background-color", "rgba(0, 0, 0, 0.5)");
    }, 
    mouseleave: function backToNormal(id){
        
    }, 
     
});*/
/*$(document).ready(function(){
    $("p").mouseover(function (){
        $("p").css("background-color", "yellow");
    });
    $("p").mouseout(function(){
        $("p").css("background-color", "lightgray");
    });
});*/
