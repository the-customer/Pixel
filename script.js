// const divSquare = document.getElementById('id_square');
// const divSquare = document.getElementsByClassName('square');
const divSquare = document.querySelector('.square');
const divContainer = document.querySelector('.container');

//

// for (let i = 0; i < 2499; i++) {
//         divContainer.innerHTML += '<div class="square" id="id_square"></div>'
// }


//Math.random(); // generer un nombre decimal entre 0 et 1
// const n = Math.random() * 10; // generer un nombre decimal entre 0 et 10
// const n = Math.random() * 255; // generer un nombre decimal entre 0 et 255
// const n2 = Math.round(n)
// const n2 = Math.ceil(n)
// const n2 = Math.floor(n)
// console.log(n)
// console.log(n2)




for (let i = 0; i < 2499; i++) {
    //Copier la div .square
    const copySquare = divSquare.cloneNode(); 
    //Mettre la meme couleur que le backgroud
    copySquare.style.backgroundColor = 'inherit';

    copySquare.addEventListener('mouseover',function(){
        //Ajouter un event a copySquarCopy
        //changer la couleur de la copie
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
    
        // copySquare.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
        copySquare.style.backgroundColor = `rgb(${r},${g},${b})`;
        //
        setTimeout(function(){
            copySquare.style.backgroundColor = 'inherit';
        },1000);
    });
    
    //Coller (ajouter) la copie dans le container
    divContainer.append(copySquare)
}

// Event
divSquare.addEventListener('mouseover',function(){
    console.log('overed');
});


//TIMERS:
// setTimeout(laFonctionAEx,leTemps)
// function yesWeekEnd(){
//     console.log('Yes Week-end');
// }
// setTimeout(yesWeekEnd,5000);
// setInterval(yesWeekEnd,5000);

console.log('titi toto tata');
console.log('titi toto tata');
console.log('titi toto tata');
console.log('titi toto tata');
console.log('titi toto tata');
console.log('titi toto tata');



// //Functions
// //1er methode
// function hello(){
//     console.log('Hello');
// }

// function hello_1(){
//     return 'Hello';
// }

// function hello_2(nom){
//     return `Hello ${nom}`;
// }
// //2eme methode:
// const myFunc = function(){
//     console.log('This message is from myFunc');
// }
// //3ie methode:
// const myFunc2 = () => {
//     console.log('This is an arrow function');
// }



// console.log(hello_2('Moussa'));
// console.log(hello_2('Kiki'));
// console.log(hello_2('Kake'));

// function annaNdiaye(){
//     //2min
//     return "riz";
// }

// hello_1()

// const ceBol = annaNdiaye();
// const ph = 'Le '+annaNdiaye()+' est la';
// console.log(annaNdiaye());
// if(annaNdiaye() != 'riz'){

// }
// console.log(ph)
//EVENTS:
// const btn = document.querySelector('button');

// const doSomeThing = function(){
//     console.log('clicked');
// }

// //Create an event to handle the button click
// // btn.addEventListener('click',function(){
// //     console.log('clicked');
// // })
// btn.addEventListener('click',doSomeThing);
// console.dir(divSquare);