let ListaDePecas = ["Filtro de Ar", "Motor", "Molas"]

if (ListaDePecas.length < 10) {
    //È possível cadastrar peças
    console.log("È possível cadastrar mais peças")
}else {
    console.log("Não tem mais espaço na lista impossível cadastrar")
}

let Peso = 50

if (Peso.length > 100){
    //È Possível cadastrar
    console.log("Peça possui peso ideal para cadastro")
}else {
    console.log("Peça deve pesar no mínimo 100g")
}

let nomePeca = "Rebimboca da parafuseta"
if (nomePeca.length > 3){
    //È possivel cadastrar nome
    console.log ("Peça válida para cadastro!")
} else if (nomePeca.length == 0){
    console.log ("O nome da peça não pode ser vazio")
}else {
    console.log ("O nome deve ter mais de 3 caracteres, digite um nome válido")
}


  
switch (nomePeca.length){
    case 0:
        console.log ("O nome da peça não pode estar vazio")
        break;

    case 1:
    case 2:
    case 3:
        console.log ("O nome deve ter mais de 3 caracteres, digite um nome válido")
        break;

    case 4:
        console.log ("O nome possui 4 caracteres")    
        break;

    default:
        console.log ("Peça válida para cadastro!")
       break;
}