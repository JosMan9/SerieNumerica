import { TestBed } from '@angular/core/testing';
import { CalculosService } from './calculos.service';

describe('CalculosService', () => {
  let service: CalculosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculosService);
  });

  it('Debería calcular el número triangular, multiplicado por 5', () => {
    expect(service.triangular5(0)).toBe(5);
    expect(service.triangular5(1)).toBe(15);
    expect(service.triangular5(2)).toBe(30);
    expect(service.triangular5(3)).toBe(50);
    expect(service.triangular5(4)).toBe(75);
    expect(service.triangular5(5)).toBe(105);
    expect(service.triangular5(6)).toBe(140);
    expect(service.triangular5(7)).toBe(180);
    expect(service.triangular5(8)).toBe(225);
    expect(service.triangular5(9)).toBe(275);
  });

  it('Debería calcular el número fibonacci', () => {
    expect(service.fibonnacci(0)).toBe(0);
    expect(service.fibonnacci(1)).toBe(1);
    expect(service.fibonnacci(2)).toBe(1);
    expect(service.fibonnacci(3)).toBe(2);
    expect(service.fibonnacci(4)).toBe(3);
    expect(service.fibonnacci(5)).toBe(5);
    expect(service.fibonnacci(6)).toBe(8);
    expect(service.fibonnacci(7)).toBe(13);
    expect(service.fibonnacci(8)).toBe(21);
    expect(service.fibonnacci(9)).toBe(34);
  });

  it('Debería calcular el número primo más cercano, multiplicado por 3', () => {
    expect(service.numeroPrimo3(0)).toBe(6);
    expect(service.numeroPrimo3(1)).toBe(6);
    expect(service.numeroPrimo3(2)).toBe(6);
    expect(service.numeroPrimo3(3)).toBe(9);
    expect(service.numeroPrimo3(4)).toBe(15);
    expect(service.numeroPrimo3(5)).toBe(15);
    expect(service.numeroPrimo3(6)).toBe(21);
    expect(service.numeroPrimo3(7)).toBe(21);
    expect(service.numeroPrimo3(8)).toBe(21);
    expect(service.numeroPrimo3(9)).toBe(33);
  });

  it('Debería calcular la serie númerica con los 10 números naturales', () => {
    for (let i = 0; i < 10; i++) {
      const primo = service.numeroPrimo3(10);
      const fibonacci = service.fibonnacci(6);
      const triangular = service.triangular5(3);
      const resultado = -primo - fibonacci + triangular;

      expect(service.serieN(primo, fibonacci, triangular)).toBe(resultado);
    }
  });


});
