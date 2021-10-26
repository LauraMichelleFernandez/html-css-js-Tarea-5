
frase = prompt ('Igrese la frase que se va a utilizar en el punto numero 3')

const texto = frase
let newTexto = [];

for (let i = 0; i < texto.length ; i++) {
    if (texto[i] = ' ') {
        newTexto.push(texto[i])

    }
}

document.write ('Esta es la frase que ingresaste: ',texto, '</BR>')
document.write ('Así es como queda la frase: ', newTexto.join('-'))
