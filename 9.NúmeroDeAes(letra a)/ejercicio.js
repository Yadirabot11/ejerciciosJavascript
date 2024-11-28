// escribe tu respuesta acá
function numeroDeAes(str) {
    return str.split('a').length - 1;
}
// código de prueba
console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0