export interface Producto {
  descr: string;
  precio: number;
}

const telefono: Producto = {
  descr: "Nokia A1",
  precio: 150,
};

const tableta: Producto = {
  descr: "iPad Air",
  precio: 350,
};

export function calculaISV(productos: Producto[]): [number, number] {
  let total = 0;
  productos.forEach(({ precio }) => {
    total += precio;
  });
  return [total, total * 0.15];
}

const [total, isv] = calculaISV([telefono, tableta]);

// console.log(total);
// console.log(isv);
