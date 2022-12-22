var a=2;
function display() {
    console.log(a)
    if(a%2==0){
    var ele = document.getElementById("zzx");
    ele.style.left="0"
    }
    else
    var left = document.getElementById("zzx").style.left="-3rem";
    a++;
  }
