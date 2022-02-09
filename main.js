 var mouseEvent = "";
 var last_x, last_y;
 color = "black";
 width = 1;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
 
canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(e) 
{
color = document.getElementById("color").value;
width = document.getElementById("width").value;
mouseEvent = "mousedown";
}
canvas.addEventListener("mouseup", MouseUp);
function MouseUp(e) {
    mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave", MouseLeave);
function MouseLeave(e) {
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mousemove", MouseMove);
function MouseMove(e) {
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth= width;
        ctx.moveTo(last_x, last_y);
        console.log(last_x, last_y);
        ctx.lineTo(current_x,current_y);
        console.log(current_x, current_y);
        ctx.stroke();
    }
    last_x = current_x;
    last_y = current_y;
}

