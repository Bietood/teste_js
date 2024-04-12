let texto = String(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ex ratione ea veritatis reiciendis dicta illum similique labore saepe voluptate eius blanditiis, pariatur quibusdam, nesciunt distinctio, inventore aut sit animi"
);

console.log("tamanho: " + texto.length);
console.log("maiúsculo: " + texto.toUpperCase());
console.log("minusculo: " + texto.toLowerCase());
console.log("caracter na posição: " + texto.charAt(2));

let num = 10;

console.log("binário: " + num.toString(2));

console.log("PI: " + Math.PI);
console.log("PI redondo: " + Math.round(Math.PI));
console.log("PI com 4 números depois da vírgula: " + Math.PI.toFixed(4));


let idade = 16;
if (idade >= 18) {
    console.log("Jogue no tigrinho");
} 
else {
    console.log("Tigrinho não vai soltar a cartinha");
}

let textinho = "jtrtjdsft";

if(textinho) {
    console.log("Tem algo definido");
} else if (textinho == " ") {
    console.log("espaço em branco");
} else {
    console.log("tem muita coisa escrita la. conteudo: " + textinho);
}

let opcao = 2024;

switch (opcao) {
    case 0:
        console.log("0")
    case 1:
        console.log("1");
    default:
        console.log("Diferente");
        break;
}

let idade2 = 17;

let msg = idade2 >= 18 ? "maior de 18" : "Menor de 18";
console.log(msg);

for(let i=0;i<10;i++) {
    console.log(i+1);
}

let x = 0;

while(true) {
    console.log(x);
    x++;

    if (x >= 10) break;
}
