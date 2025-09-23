

const regresaTrue =  () => {
    console.log('Regresa True');
    return true;
}


const regresaFalse =  () => {
    console.log('Regresa False');
    return false;
}

console.warn('Not o la negación');

console.log(true);
console.log(false);
console.log(!false);
console.log(!true);

console.log(regresaFalse());
console.log(regresaTrue());

console.log(regresaFalse());
console.log(regresaTrue());

console.warn('AND');

console.log(true && true);
console.log(true && false);

console.warn('============');
console.log(regresaFalse() && regresaTrue());

console.log(regresaTrue() && regresaFalse());

console.warn('======&& ======');

regresaTrue() && regresaFalse()

console.warn('====== OR  || ======');

console.log(true  ||  false);
console.log(false  ||  true);
console.log(regresaTrue() || regresaFalse());
console.log(regresaFalse() || regresaTrue());


console.warn('====== ASIGNACIONES ======');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = true && 'Hola mundo' ;
const a2 = false && 'Hola mundo' ;
const a3 = 'hola'&& 'mundo' ;
const a4 = soyFalse || 'Ya no soy falso';
const a5 = soyFalse || soyUndefined || soyNull|| 'Ya no soy falso de nuevo';
const a6 = soyFalse || regresaTrue() || soyNull|| 'Ya no soy falso de nuevo'|| true;

console.log({a1});
console.log({a2});
console.log({a3});
console.log({a4});
console.log({a5});
console.log({a6});

if (true || true || true || false) {
    console.log('Hacer algo');
}else{
    console.log('hacer otra cosa');
}