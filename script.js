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
    //changer la couleur de la copie
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    // copySquare.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
    copySquare.style.backgroundColor = `rgb(${r},${g},${b})`;


    //Coller (ajouter) la copie dans le container
    divContainer.append(copySquare)
}
