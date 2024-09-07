//Shrek, Livre, animação
//Interestelar, 10, drama
//As branquelas, 12, comédia



let campoIdade;
let campoDrama;
let campoAnimação;
let campoComédia;

function setup() {
  createCanvas(400, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("10");
  campoDrama = createCheckbox("Gosta de drama?");
  campoAnimação = createCheckbox("Gosta de animação?");
  campoComédia = createCheckbox("Gosta de comédia?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeDrama = campoDrama.checked();
  let gostaDeAnimação = campoAnimação.checked();
  let gostaDeComédia = campoComédia.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeDrama, gostaDeAnimação, gostaDeComédia);

  fill(color(0, 0, 0));
  textAlign(CENTER, CENTER);
  textSize(35);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeDrama, gostaDeAnimação, gostaDeComédia) {
  
  
  if (idade < 10) {
  return "Sherek";}
  
  else {
      if (idade => 10) {
        if(gostaDeAnimação) {
          return "Sherek";} 
              else {
                if (idade => 10) {
        if(gostaDeDrama) {
          return "Interestelar";}
                  else {
                if (idade => 12) {
        if(gostaDeComédia) {
          return "As branquelas";}
                }}}}}}
  
}



       

   
