import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculosService {

  constructor() { }

  //metodo para calcular el 5triangular
  triangular5(n: number) {
    n++
    let resultado = (n * (n + 1)) / 2;
    return resultado*5;
  }

  //metodo para calcular la serie de fibonnaci
  fibonnacci(n: number) {
    if (n <= 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    }
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
      let temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  }

  //metodos para determinar al numero primo mas cercano
  private esPrimo(n: number) {
    if (n <= 1) {
      return false;
    }
    if (n <= 3) {
      return true;
    }
    if (n % 2 === 0 || n % 3 === 0) {
      return false;
    }
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) {
        return false;
      }
    }
    return true
  }

  numeroPrimo3(n: number) {
    if (this.esPrimo(n)) {
      return n*3;
    }
    
    let arriba = n + 1;
    let abajo = n - 1;

    while (true) {
        if (this.esPrimo(arriba)) {
            return arriba*3;
        }
        if (abajo > 1 && this.esPrimo(abajo)) {
            return abajo*3;
        }
        arriba++;
        abajo--;
    }
  }

  serieN(primo: number, fibonacci: number, triangular: number) {
    return - primo - fibonacci + triangular;
  }
}
