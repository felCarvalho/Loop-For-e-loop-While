
//.push(parametro)  adiciona value no final da Array.
//.unshift(parametro) adiciona value no começo da Array.
//.pop(parametro) remove o ultimo value da Array.
//.shift(parametro) remove o primeiro value da Array.
//indexOf(parametro) verifica o indice do value da Array referido no parametro.
//


//loop for;
//dividivo em 3 parte para ser uma instrução só ao todo;
//Primeira Parte será o contador(repetição);
//      for (let rep = 1;)
//Segunda Parte será a Iteração lógica(o loop continua em execução enquanto let rep <= 10 ser <= 10 que a Iterção Lógica, ou seja, enqunanto for true);
//      for (rep <= 10;)
//Terceira Parte será a forma como o rep passara para o proximo numero(contador);(rep somara rep = rep + 1; para não deixar o rep ficar preso repetindo sempre rep = 1 , podendo causar um loop interminavel e um bug no codigo.);
//      for (rep = rep + 1 ou rep++);
// formula completa do loop for;
//      for (let rep = 1; rep <= 10; rep++);


const jonas = [
    'Jonas' ,
    'Silva' ,
    2038 - 1991 , 
    ['Michael', 'Peter', 'Steven'] ,
    'so lindo e maravilhoso' , 
    'belo' , 
    true
];

//armazenando o indice de cada value dentro da array jonas para a array types, usamos o metodo .push !
const types = [];

for (let i = 0; i < jonas.length; i++) {
    //console.log(jonas[i] ,typeof jonas[i])
     
    //types[i] = typeof jonas[i]
    types.push(typeof jonas[i])
}

console.log(types);


//armazeando o valor das idades do calculo abaixo na array idade, usamos o metodos .push !
const anos = [1991, 2007, 1969, 2020];
const idade = [];

for (let i = 0; i < anos.length; i++) {
    const result = 2037 - anos[i];
    //console.log(result)
    idade.push(result)
}
console.log(idade);


//treinando metodo continua no loop for
//continue ele simplesmente continua o loop lendo cada iteração e somente eliminando de acordo com a logica de iteração executada.
for (let i = 0; i < jonas.length; i++) {
    //console.log(jonas[i] ,typeof jonas[i])

    if (typeof jonas[i] !== 'number') continue;
    console.log(typeof jonas[i], jonas[i])
}


//treinando o metodo break no loop for
//break para o loop inteiro e não somente a iteração quanndo encontra a logica da iteração a ser executada.
for (let i = 0; i < jonas.length; i++) {
    //console.log(jonas[i] ,typeof jonas[i])

    if (typeof jonas[i] !== 'string') break;
    console.log(typeof jonas[i], jonas[i])

}

//um loop for sendo executado dentro de outro loop for para fins de estudos e apredizado
for (let exercise = 1; exercise < 11; exercise++) {
    console.log(`-------Starting Exercise ${exercise}`);

    for (let rep = 1; rep < 11; rep++) {
        console.log(`Exercise ${exercise}: Lifting wigth repetition ${rep}`)
    }
};


//loop While 
//Math.trunc() retira a parte quebrade um numero que não é inteiro.
//Math.random() cria um numero aleatorio.
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
        console.log(`-----Recarregando até chegar no numero 6, numero encontrado foi o ${dice}`)
        dice = Math.trunc(Math.random() * 6) + 1;
        
    if (dice === 6) {
        console.log('Por isso, o loop será executado novamente!')
        console.log('chegamos no numero 6 e por isso o loop ira terminar...')
    } else {
        console.log('Por isso, o loop será executado novamente!')
    }
}
//loop while é muito útil para ocasiões onde precisamos trabalhar sem colocar contador para definir quantos vezes o loop deve repetir.
//loop for é muito útil para ocasiões onde precisamos trabalhar colocando um contador para definir quantas vezes o loop irá repetir.
