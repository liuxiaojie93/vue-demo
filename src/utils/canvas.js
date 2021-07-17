function draw(canvas) {
  const ctx = canvas.getContext("2d");
  var lingrad2 = ctx.createLinearGradient(0, 50, 0, 95);
  lingrad2.addColorStop(0, "red");
  lingrad2.addColorStop(0.5, "#03a9f4");
  lingrad2.addColorStop(1, "#51dc82");
  ctx.strokeStyle = lingrad2;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(150, 150, 100, 0, 2 * Math.PI); // 绘制
  ctx.stroke();

  var img = new Image();
  img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png';
  img.onload = function() {

    // 创建图案
    var ptrn = ctx.createPattern(img, 'repeat');
    ctx.fillStyle = ptrn;
    ctx.fillRect(0, 0, 150, 150);
    ctx.closePath();
    ctx.font = "48px";
    ctx.fillText("Hello world", 100, 0);
  }
}
export { draw };
