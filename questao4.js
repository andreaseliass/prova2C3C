const valor = document.querySelector("#valor")
const resultado = document.querySelector("#resultado");
const botao = document.querySelector("#enviar");
const l1 = document.querySelector("#l1");
const l2 = document.querySelector("#l2");
const aviso = document.querySelector("#aviso");

botao.onclick = () => {
	if(valor.value == ""){
		valor.focus();
	}else{
		resultado.value = contando(valor.value);
	}
}


//Questão 04:

//1a forma de resolver:
function contando(numero){
    let resultado = [];
    numero = Number.parseInt(numero);
    let retorno ="";

    if(numero<0){
        aviso.innerText = "O valor deve ser maior que 0!"
        retorno = "";
    }else{
        aviso.innerText ="";
        for(i=1;i<=numero;i++){
            if(i%5==0 && i%9!=0){
                val='Luidy'
                resultado.push(val);
    
            }else if(i%9==0 && i%5!=0){
                val='Moura'
                resultado.push(val);
    
            }else if(i%5==0 && i%9==0){
                val='LuidyMoura'
                resultado.push(val);
    
            }else{
                resultado.push(i);
            }
        }
        retorno = resultado;
    }
    return retorno;;
}


//2a forma de resolver:
function contando2(numero){
   let result = [];

    for(i=1;i<=numero;i++){
        let val = '';
        if(i%5==0){
            val = val + 'Luidy';
        }
        if(i%9==0){
            val = val + 'Moura';
        }
        if(i%5!=0 && i%9!=0) {
            val=i;
        }
        result.push(val);
    }
    return result;
}

