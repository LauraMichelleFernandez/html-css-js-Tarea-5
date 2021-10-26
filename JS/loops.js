
	var aux, cant, i, j, nombre, pos_menor, se_repite;
	var lista = new Array(200);
	cant = 0;
	nombre = prompt("Ingrese los nombres (enter en blanco para terminar): ");
	while (nombre!=" ") {
		cant = cant+1;
		lista[cant-1] = nombre;
		do {
			nombre = prompt();
			se_repite = false;
			for (i=1;i<=cant;i++) {
				if (nombre==lista[i-1]) {
					se_repite = true;
				}
			}
		} while (!(!se_repite));
	}
	for (i=1;i<=cant-1;i++) {
		pos_menor = i;
		for (j=i+1;j<=cant;j++) {
			if (lista[j-1]<lista[pos_menor-1]) {
				pos_menor = j;
			}
		}
		aux = lista[i-1];
		lista[i-1] = lista[pos_menor-1];
		lista[pos_menor-1] = aux;
	}
	document.write("La lista ordenada es:",'<BR/>');
	for (i=1;i<=cant;i++) {
		document.write("   ",lista[i-1],'<BR/>');
	}


