$('body').hide(300);
$('body').show(500);
let btn = document.getElementById('ceta2');
btn.hide();



/*
window.alert('Olá mundo!');
window.confirm('Você está gostando da aula');
window.prompt("Qual é o seu nome?");
*/

const verificar = document.getElementById('verificar');


function imc () {
    
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso/(altura**2)).toFixed(1);
        const ideal1 = ((altura**2)*18.5).toFixed(1);
        const ideal2 = ((altura**2)*25).toFixed(1);
        
        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (valorIMC < 25) {
            classificacao = 'com o peso ideal. Parabéns!';
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.';
        }else if (valorIMC < 35){
            classificacao = 'com obesidade grau I.';
        }else if (valorIMC < 40){
            classificacao = 'com obesidade grau II.';
        }else {
            classificacao = 'com obesidade grau III.';
        }

        resultado.textContent = `Olá, ${nome}! Com ${peso}kg e ${altura}m, seu IMC é ${valorIMC}. O seu peso idal está entre ${ideal1}kg e ${ideal2}kg. Atualmente, você está ${classificacao}`;

    }else {
        resultado.textContent = 'Para calcular o seu IMC , preencha todos os campos.';
    }



}
calcular.addEventListener('click', imc);

function limpar() {
    nome.clear();
    altura.clear();
    peso.clear();
  }

