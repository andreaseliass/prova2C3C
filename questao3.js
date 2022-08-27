const nota = document.querySelector("#nota")
const notafinal = document.querySelector("#notafinal");
const botao = document.querySelector("#calcular");
const l1 = document.querySelector("#label1");
const l2 = document.querySelector("#labe2");
const aviso = document.querySelector("#aviso");

nota.onblur = () => {
	if(nota.value == ""){
		l1.style = "color: red"
		nota.style = "border-color: red";
	}
	else{
		l1.style = "color: black"
		nota.style = "border-color: black";
	}
}

botao.onclick = () => {
	if(nota.value == ""){
		nota.focus();
	}else{
		notafinal.value = arredonda(nota.value);
	}
}

function arredonda(nota1){
	nota1=Number.parseInt(nota1);
	if (nota1 < 0 || nota1 > 100){
		nota.value = "";
		notafim = "";
		aviso.innerText = "A nota deve ter valor entre 0 e 100!"

	}else if(nota1>37 && nota1%5>=3){
		notafim = Math.round(nota1/5) *5;
		aviso.innerText = "";
		notafinal.style = "border-color: #90EE90";
	}else{
		notafim = nota1;
		aviso.innerText = "";
		notafinal.style = "border-color: #90EE90";
	}
	return notafim;
}


