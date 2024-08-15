
function repeatString (texto, rep) {
    let res = '';
    for (let index = 0; index < rep; index++) {
        res += texto + '\n';
    };
    return res;
    
};

const texto = document.getElementById('texto');
const rep = document.getElementById('repeticiones');
const boton = document.querySelector("button");
const resultado = document.getElementById('resultado');
boton.addEventListener("click", () => {
    const result = repeatString(texto.value, rep.value);
            resultado.textContent = result;    
});
