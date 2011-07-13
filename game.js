window.tim = 0;
function throw_ball(ball,t){
t=window.tim;
ball=$('#ball');
curr_x=ball.offset()['top'];
curr_y=ball.offset()['left'];
if(curr_x>700)
 curr_x=0
if(curr_y>1000||curr_y<0)
 curr_y=0
$("#ball").css( { "left": (curr_x + 2) + "px", "top":(parseInt(curr_x + (2)-(4.9*t))) + "px" } );
}
function move_time(){
if(window.tim<100){
window.tim+=1;
}
else{
window.tim=0;
}


}
 $(document).ready(function() {
   $('#ball').click(function() {
setInterval("throw_ball(this)",10);
setInterval("move_time()",1000);
 });
 });


