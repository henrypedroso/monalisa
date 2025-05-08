function setup() {
  createCanvas(400, 400);
}

let olhoX;
let olhoY;

function draw() {
  background('#3F51B5');
  fill('#E77BA0')
  circle(200, 200, 300); // Rosto
  fill('white')
  circle(150, 150,60); // Olho esquerdo
  circle(250, 150, 60); // Olho direito
  line(155, 257, 258, 235); // Boca
  fill('rgb(194,104,104)')
  triangle(203, 187, 219, 209,190, 220 ); // Nariz
  line(115, 118, 165, 101); // Sobrancelha esquerda
  line(216, 117, 262, 105); // Sobrancelha direita
  fill('black')
  //circle(150, 150, 10); // Pupila esquerda
  //circle(250, 150, 10); // Pupila direita
  
  olhoX = map(mouseX, 0, 400,135, 160 );
  olhoY = map(mouseY, 0, 400, 135, 160 );
  circle(olhoX, olhoY, 10); //Nova pupila esquerda
  circle(olhoX + 100, olhoY, 10); //Nova pupila direita
 
  
  if(mouseIsPressed){
    console.log(mouseX, mouseY);
  }
}