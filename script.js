var last_position_of_touch_x, last_position_of_touch_y;
var last_position_of_x,last_position_of_y
canvas = document.getElementById('canvas');
ctx = canvas.getContext("2d");
var mouseevent="empty"

width_of_line = 2;
var width=screen.width
newwidth=screen.width-70
newheight=screen.height-300
if (width<992) {
document.getElementById("canvas").width=newwidth
document.getElementById("canvas").height=newheight
document.body.style.overflow="hidden"
    
}
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
mouseevent="mousedown"
     color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;  
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
mouseevent="mouseup"  
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
mouseevent="mouseleave"  
}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e)
{
 last_position_of_touch_x=e.touches[0].clientX-canvas.offsetLeft
 last_position_of_touch_y=e.touches[0].clientY-canvas.offsetTop
     color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
 

    
}



canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{

     current_position_of_touch_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
     current_position_of_touch_mouse_y = e.touches[0].clientY - canvas.offsetTop;
   ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(last_position_of_touch_x,last_position_of_touch_y)
    ctx.lineTo(current_position_of_touch_mouse_x,current_position_of_touch_mouse_y)
    ctx.stroke();

    last_position_of_touch_x=current_position_of_touch_mouse_x;
    last_position_of_touch_y=current_position_of_touch_mouse_y;
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{

     current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
     current_position_of_mouse_y = e.clientY - canvas.offsetTop;
     if (mouseevent=="mousedown") {
         

     ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(last_position_of_x,last_position_of_y)
    ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y)
    ctx.stroke();
     }
    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;

}