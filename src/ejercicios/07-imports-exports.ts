
import { calculaISV, Producto } from "./06-desestructuracion-argumentos";

const carritoCompras: Producto[] = [
    {
        descr: "tel 1",
        precio: 100
    },
    {
        descr: "tel 2",
        precio: 150
    }
];

const [total, isv] = calculaISV( carritoCompras);
console.log(total);
console.log(isv);