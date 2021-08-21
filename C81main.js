canvas = document.getElementById("myCanvas");
color_1="blue";
color_2="black";
color_3="red";
color_4="yellow";
color_5="green";

ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color_1;
ctx.lineWidth =3;
ctx.arc(200, 200, 40 ,0, 2 * Math.PI);
ctx.stroke();

ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color_2;
ctx.lineWidth =3;
ctx.arc(250, 200, 40 ,0, 2 * Math.PI);
ctx.stroke();

ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color_3;
ctx.lineWidth =3;
ctx.arc(300, 200, 40 ,0, 2 * Math.PI);
ctx.stroke();


ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color_4;
ctx.lineWidth =3;
ctx.arc(200, 250, 40 ,0, 2 * Math.PI);
ctx.stroke();

ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color_5;
ctx.lineWidth =3;
ctx.arc(280, 250, 40 ,0, 2 * Math.PI);
ctx.stroke();