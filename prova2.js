
//Questão 04:

//1a forma de resolver:
function contando(numero){
    let resultado = [];

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
    return resultado;

}

console.log(contando(45));

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


console.log(contando2(45));