const lado1 = document.querySelector("#lado1")
const lado2 = document.querySelector("#lado2")
const lado3 = document.querySelector("#lado3")
const classificacao = document.querySelector("#classificacao");
const botao = document.querySelector("#classificar");
const l1 = document.querySelector("#l1");
const l2 = document.querySelector("#l2");
const l3 = document.querySelector("#l3");
const aviso = document.querySelector("#aviso");
const aviso2 = document.querySelector("#aviso2");

botao.onclick = () => {
	if(lado1.value == ""){
		lado1.focus();
	}else if(lado2.value == ""){
		lado2.focus();
	}else if(lado3.value == ""){
		lado3.focus();
	}else{
		classificacao.value = triangulo(lado1.value, lado2.value, lado3.value,);
	}
}


function triangulo(l1,l2,l3){
    l1 = Number.parseInt(l1);
    l2 = Number.parseInt(l2);
    l3 = Number.parseInt(l3);

    if(l1<0 || l2<0 || l3<0){
        aviso.innerText = "Todos os valores devem ser positivos!";
    }

    if(l1 + l2 > l3 && l1 + l3 > l2 && l2 + l3 > l1){
        aviso2.innerText = "Os 3 lados formam um triângulo!"
        aviso2.style = "color: green";
        aviso.innerText ="";

        if(l1 == l2 && l1 == l3){
            result =  "Triângulo Equilátero";
        }else if(l1 == l2 || l1 == l3 || l2 == l3){
            result =  "Triângulo Isósceles";
        }else{
            result =  "Triângulo Escaleno";
        }          
    }else{
        aviso2.style = "color: red";
        aviso2.innerText = "Os 3 lados NÃO formam um triângulo!"
        result = "";
    }
    return result;
}

