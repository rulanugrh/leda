// Operator logika adalah comapare untuk dua operator logika
boolA = false;
boolB = true;

// AND SALAH SATU FALSE MAKA AKAN JADI FALSE

console.log('OPERATOR AND');
console.log(boolB && boolB);
console.log(boolB && boolA);
console.log(boolA && boolB);
console.log(boolA && boolA) + '\n';

// OR SALAH SATU TRUE AKAN TRUE
console.log('OPERATOR OR');
console.log(boolB || boolB);
console.log(boolB || boolA);
console.log(boolA || boolB);
console.log(boolA || boolA + '\n');

console.log('OPERATOR UNARY');
console.log(!boolB);
console.log(!boolA);