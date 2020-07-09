function botao( num ) {
  const salvo = document.calc.visor.value;
  document.calc.visor.value = salvo + num;
}

function reset() {
  salvo = "";
}

function calcule () {
  let resultado = 0;
  resultado = document.calc.visor.value; 
  document.calc.visor.value = '';
  document.calc.visor.value = eval(resultado);

}
