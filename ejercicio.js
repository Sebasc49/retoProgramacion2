function generarPrimos(limite) {
    const isPrime = new Array(limite + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let p = 2; p * p <= limite; p++) {
      if (isPrime[p]) {
        for (let i = p * p; i <= limite; i += p) {
          isPrime[i] = false;
        }
      }
    }
  
    const primos = [];
    for (let i = 2; i <= limite; i++) {
      if (isPrime[i]) {
        primos.push(i);
      }
    }
    return primos;
  }
  
  const limite = parseInt(prompt("pon un numero y espera para el resultado"));
  const numerosPrimos = generarPrimos(limite);


alert("numero solicitado :  " + limite + " aqui estan tus numeros primos: " + numerosPrimos)
