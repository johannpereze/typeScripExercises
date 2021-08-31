function sumar(a: number, b: number): number {
    return a + b;
  }
  
  const sumarFlecha = (a: number, b: number): number => {
    return a + b;
  };
  
  function multiplicar(numero: number, otroNumero?: number, base: number = 2) {
    return numero * base;
  }
  
  const resultado = multiplicar(100, 10);
  console.log(resultado);
  
  interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarPv: () => void;
  }
  
  function curar(personaje: PersonajeLOR, curarX: number): void {
    personaje.pv += curarX;
    console.log(personaje);
  }
  
  const nuevoPersonaje: PersonajeLOR = {
    nombre: "Legolas",
    pv: 50,
    mostrarPv() {
      console.log("puntos de vida: ", this.pv);
    },
  };
  
  curar(nuevoPersonaje, 20);
  
  nuevoPersonaje.mostrarPv();
  