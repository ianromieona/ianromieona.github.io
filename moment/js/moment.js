update()
document.getElementById('date').innerHTML = "Loading.."
function update(){
    setTimeout(function(){
        date = moment().format('MMMM D YYYY');
        time = moment().format('H');
        min = moment().format('mm');
        sec = moment().format('ss');
        document.getElementById('date').innerHTML = date;
        document.getElementById('time').innerHTML = time;
        document.getElementById('min').innerHTML = min;
        document.getElementById('sec').innerHTML = sec;
//        document.getElementById('mode').innerHTML = mode;
//        $("#sec").fadeOut(200);
        update();
    },1000)
}
