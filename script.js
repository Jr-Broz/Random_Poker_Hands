let pokerHands = ["Royal flush", "Straight Flush", " Four of a kind", "Full house", "Flush", "Straight", "Three of a kind", "Two Pair", "One pair", "High Card"];

function randomizarDado(array){

    let indexAtual = array.length, randomIndex;
    
    while(indexAtual != 0){
    
        randomIndex = Math.floor(Math.random() * indexAtual);
        indexAtual--;
    
    
    [array[indexAtual], array[randomIndex]] = [ array[randomIndex], array[indexAtual]];
    
    }
    
    return array;
    
    }

    let maoSorteado = randomizarDado(pokerHands);
    console.log("Your poker hand is: " + maoSorteado.splice(0,1))



    