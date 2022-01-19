let massa = 400;
let kecepatan =2;

function newtonLaw(m,a){
    return m*a;
}

let f =newtonLaw(massa,kecepatan);
console.log(`f =${f} N`);