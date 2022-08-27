const a = document.querySelector("#a")
const b = document.querySelector("#b")
const c = document.querySelector("#c")
const resultado = document.querySelector("#resultado");
const botao = document.querySelector("#calcular");
const l1 = document.querySelector("#l1");
const l2 = document.querySelector("#l2");
const l3 = document.querySelector("#l3");
const l4 = document.querySelector("#l4");
const delta = document.querySelector("#delta");

botao.onclick = () => {
	if(a.value == ""){
		a.focus();
	}else if(b.value == ""){
		b.focus();
	}else if(c.value == ""){
		c.focus();
	}else{
		resultado.value = bhaskara(a.value, b.value, c.value);
	}
}


function bhaskara(a1,b1,c1){
    a1 = Number.parseFloat(a1);
    b1 = Number.parseFloat(b1);
    c1 = Number.parseFloat(c1);
    let retorno = "";
    const delta1 = b1**2 - 4*a1*c1;
    console.log("delta: ", delta1)
    let result =[];
    if (delta1<0){
        delta.innerText = "Delta é negativo"
        retorno = "";
    }
    else{
        delta.innerText = ""
        x1 = (-b1 + (delta1)**0.5)/(2*a1);
        console.log("x1: ", x1)
        x2 = (-b1 - (delta1)**0.5)/(2*a1);
        console.log("x2: ", x2)
        result.push(x1,x2);
        retorno = "[" + result + "]";
    }
    
    return retorno;
}
