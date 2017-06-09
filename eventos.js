
document.getElementById("area_de_dibujo").addEventListener("mousedown", puchado);
document.getElementById("area_de_dibujo").addEventListener("mouseup",puchado);

var cuadrito= document.getElementById("area_de_dibujo");
var papel=cuadrito.getContext("2d");
var x;
var y;




function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal,lienzo){
  lienzo.beginPath();// arrancar un trazo
  lienzo.strokeStyle=color;
  lienzo.lineWidth=3;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function puchado(evento){
  if(evento.type=="mousedown"){
    console.log("puchado");
    x=evento.clientX;
    y=evento.clientY;
    document.getElementById("area_de_dibujo").addEventListener("mousemove", dibujarMouse);
  }
  if(evento.type=="mouseup"){
    console.log("parriba");
    document.getElementById("area_de_dibujo").removeEventListener("mousemove", dibujarMouse);
  }
}

function dibujarMouse(evento){
  //console.log(evento);
  var xmouse=evento.clientX;
  var ymouse=evento.clientY;
  var colorcito="red";

  if(evento.type=="mousemove"){
    console.log("MENEA");
    dibujarLinea(colorcito,x,y,xmouse,ymouse, papel );
    x=xmouse;
    y=ymouse;
  }
}
