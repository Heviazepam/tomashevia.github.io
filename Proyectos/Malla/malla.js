var v1 = document.getElementById("1");
var v2 = document.getElementById("2");
var v3 = document.getElementById("3");
var v4 = document.getElementById("4");
var v5 = document.getElementById("5");
var v6 = document.getElementById("6");
var v7 = document.getElementById("7");
var v8 = document.getElementById("8");
var v9 = document.getElementById("9");
var v10 = document.getElementById("10");
var v11 = document.getElementById("11");
var v12 = document.getElementById("12");
var v13 = document.getElementById("13");
var v14 = document.getElementById("14");
var v15 = document.getElementById("15");
var v16 = document.getElementById("16");
var v17 = document.getElementById("17");
var v18 = document.getElementById("18");
var v19 = document.getElementById("19");
var v20 = document.getElementById("20");
var v21 = document.getElementById("21");
var v22 = document.getElementById("22");
var v23 = document.getElementById("23");
var v24 = document.getElementById("24");
var v25 = document.getElementById("25");
var vI = document.getElementById("I");

v1.addEventListener("click", tachar);
v2.addEventListener("click", tachar);
v3.addEventListener("click", tachar);
v4.addEventListener("click", tachar);
v5.addEventListener("click", tachar);
v6.addEventListener("click", tachar2);
v7.addEventListener("click", tachar2);
v8.addEventListener("click", tachar);
v9.addEventListener("click", tachar);
v10.addEventListener("click", tachar);
v11.addEventListener("click", tachar);
v12.addEventListener("click", tachar2);
v13.addEventListener("click", tachar2);
v14.addEventListener("click", tachar);
v15.addEventListener("click", tachar);
v16.addEventListener("click", tachar);
v17.addEventListener("click", tachar);
v18.addEventListener("click", tachar2);
v19.addEventListener("click", tachar2);
v20.addEventListener("click", tachar);
v21.addEventListener("click", tachar);
v22.addEventListener("click", tachar);
v23.addEventListener("click", tachar);
v24.addEventListener("click", tachar);
v25.addEventListener("click", tachar2);
vI.addEventListener("click", tacharsemestre);


function tacharA(x) {
    
    if (x.style.backgroundColor == "forestgreen") {
        x.style.backgroundColor = "#FFFCF9"
    } else {
        x.style.backgroundColor = "forestgreen";
    }
}
function tacharB(x) {
   
    if (x.style.backgroundColor == "coral") {
        x.style.backgroundColor = "#FFFCF9"
    } else {
        x.style.backgroundColor = "coral";
    }
}
function tacharC(x) {
    
    if (x.style.backgroundColor == "blueviolet") {
        x.style.backgroundColor = "#FFFCF9"
    } else {
        x.style.backgroundColor = "blueviolet";
    }
}
function tacharsemestre() {
    tacharC(vI);
    tacharA(v1);
    tacharA(v2);
    tacharA(v3);
    tacharA(v4);
    tacharA(v5);
    tacharB(v6);
    tacharB(v7);
}
function tachar(){
    var x = document.getElementById(this.id);
    tacharA(x)
}
function tachar2(){
    var x = document.getElementById(this.id);
    tacharB(x)
}