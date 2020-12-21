const btnStart = document.querySelector('.btnStart');
btnStart.addEventListener('click', () => {
    const start = document.querySelector('.start');
    start.style.display = 'none';
})

function getChoiceComputer() {
    const choiceCom = Math.random().toFixed(2);

    if(choiceCom <= 0.33) return 'batu';
    if(choiceCom > 0.33 && choiceCom <= 0.66) return 'kertas';
    return 'gunting';
}

function getResult(choiceCom, player) {
    if(player == choiceCom) return 'Draw';
    if(player == 'batu') return (choiceCom == 'kertas') ? 'lose' : 'win';
    if(player == 'kertas') return (choiceCom == 'gunting') ? 'lose' : 'win'; 
    if(player == 'gunting') return (choiceCom == 'batu') ? 'lose' : 'win';
}

let numberPlayer = 1;
let numberCom = 1;
const choice = document.querySelectorAll('.player img');
choice.forEach((img) => {
    img.addEventListener('click', () => {
        const choiceComputer = getChoiceComputer();
        const choicePlayer = img.className;
        const result = getResult(choiceComputer, choicePlayer);
        
        const imgCom = document.querySelector('.imgCom');
        imgCom.setAttribute('src', 'images/' + choiceComputer + '.png');
        
        const dropResult = document.querySelector('.result');
        dropResult.innerHTML = 'You ' + result + '!';
        if(result == 'win') { dropResult.style.color = '#00ff16';}
        else if(result == 'lose') { dropResult.style.color = 'red';}
        else { dropResult.style.color = 'rgb(111, 111, 111)';}
        
        const scorePlayer = document.querySelector('.scorePlayer');
        const scoreCom = document.querySelector('.scoreCom');
        if (result == 'win') {
            scorePlayer.innerHTML = numberPlayer;
            numberPlayer++;
            console.log('player: ' + numberPlayer);
            if (numberPlayer > 5) {
                console.log('Player win!');
            }
        } else if (result == 'lose') {
            scoreCom.innerHTML = numberCom;
            numberCom++;
            console.log('com: ' + numberCom);
            if (numberCom > 5) {
                console.log('com win!');
            }
        } else {
            console.log('draw');
        }

        setTimeout(() => {
            imgCom.setAttribute('src', 'images/ken.png');
            dropResult.innerHTML = 'RESULT';
            dropResult.style.color = 'rgb(111, 111, 111)';
        }, 1000);

    })

})

const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
    const resetScorePlayer = document.querySelector('.scorePlayer');
    const resetScoreCom = document.querySelector('.scoreCom');
    
    numberPlayer = 1;
    numberCom = 1;

    resetScorePlayer.innerHTML = 0;
    resetScoreCom.innerHTML = 0;
    
})

// const pilihBatu = document.querySelector('.batu');
// pilihBatu.addEventListener('click', () => {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pilihBatu.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgCom = document.querySelector('.imgCom');
//     imgCom.setAttribute('src', 'images/' + pilihanComputer + '.png');

//     const simpanHasil = document.querySelector('.hasil');
//     simpanHasil.innerHTML = 'You ' + hasil + '!';
// })

// const pilihKertas = document.querySelector('.kertas');
// pilihKertas.addEventListener('click', () => {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pilihKertas.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
    
//     const imgCom = document.querySelector('.imgCom');
//     imgCom.setAttribute('src', 'images/' + pilihanComputer + '.png');

//     const simpanHasil = document.querySelector('.hasil');
//     simpanHasil.innerHTML = 'You ' + hasil + '!';
// })

// const pilihGunting = document.querySelector('.gunting');
// pilihGunting.addEventListener('click', () => {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pilihGunting.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
    
//     const imgCom = document.querySelector('.imgCom');
//     imgCom.setAttribute('src', 'images/' + pilihanComputer + '.png');

//     const simpanHasil = document.querySelector('.hasil');
//     simpanHasil.innerHTML = 'You ' + hasil + '!';
// })













































