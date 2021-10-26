const invertirCadena = (cadena) => {
  let nuevaCadena = "";
  for (let x = cadena.length - 1; x >= 0; x--) {
    nuevaCadena += cadena[x];
  }
  return nuevaCadena;
};

let cadena = "Hola mundo";

document.write(
  "Original: ",
  cadena,
  "<BR/>",
  " invertida: ",
  invertirCadena(cadena),
  "<BR/>"
);

let newCadena = [];
var blancos = 0;
for (let i = 0; i < cadena.length; i++) {
  if (cadena[i] != " ") {
    newCadena.push(cadena[i]);
  }

//   document.write(
//     "El/>"
//   ); tamaño del texto sin espacio es: ",
//     newCadena.length,
//     "<BR

}
vectorLetras = cadena;
for (b = 0; b < vectorLetras.length; b++) {
  switch (vectorLetras[b]) {
    case " ":
      blancos++;
  }
}
document.write("Total de espacios en blanco: ", blancos, "<BR/>");
document.write(`Total de caracteres (Letras):  ${cadena.length-blancos}`);
console.log(cadena.length, blancos)