var x  = 'X';
var o = 'O';
var p1t = 1;
var someoneWin = false;
var putAble = true;
const playerTurn = document.querySelector('.playerTurn');
const blocks = document.querySelectorAll('#grid div');

for (let i = 0; i < blocks.length; i++) {
    blocks[i].onclick = () => {
        if(p1t == 1 && putAble == true) 
        {
            blocks[i].innerHTML = x;
            p1t = 2;
            playerTurn.innerHTML = o;
        }
        else if(p1t == 2 && putAble == true) {
            blocks[i].innerHTML = o;
            p1t = 1;
            playerTurn.innerHTML = x;
        }
        //checking put able
        if(blocks[i].innerHTML != x || blocks[i].innerHTML != o){
            putAble = true;
        }
        else {
            putAble = false;
        }
        //checking WINner
        if(blocks[0].innerHTML == blocks[1].innerHTML && blocks[1].innerHTML == blocks[2].innerHTML && blocks[0].innerHTML != '' && someoneWin == false){
            putAble = false;
            someoneWin = true;
            blocks[0].style.color = 'red';
            blocks[1].style.color = 'red';
            blocks[2].style.color = 'red';
            playerTurn.innerHTML = blocks[0].innerHTML+' WIN';
        }
        if(blocks[3].innerHTML == blocks[4].innerHTML && blocks[4].innerHTML == blocks[5].innerHTML && blocks[3].innerHTML != '' && someoneWin == false){
            someoneWin = true;
            putAble = false;
            blocks[3].style.color = 'red';
            blocks[4].style.color = 'red';
            blocks[5].style.color = 'red';
            playerTurn.innerHTML = blocks[3].innerHTML+' WIN';
        }
        if(blocks[6].innerHTML == blocks[7].innerHTML && blocks[7].innerHTML == blocks[8].innerHTML && blocks[6].innerHTML != '' && someoneWin == false){
            putAble = false;
            someoneWin = true;
            blocks[6].style.color = 'red';
            blocks[7].style.color = 'red';
            blocks[8].style.color = 'red';
            playerTurn.innerHTML = blocks[6].innerHTML+' WIN';
        }
        if(blocks[0].innerHTML == blocks[3].innerHTML && blocks[3].innerHTML == blocks[6].innerHTML && blocks[0].innerHTML != '' && someoneWin == false){
            putAble = false;
            someoneWin = true;
            blocks[0].style.color = 'red';
            blocks[3].style.color = 'red';
            blocks[6].style.color = 'red';
            playerTurn.innerHTML = blocks[0].innerHTML+' WIN';
        }
        if(blocks[1].innerHTML == blocks[4].innerHTML && blocks[4].innerHTML == blocks[7].innerHTML && blocks[1].innerHTML != '' && someoneWin == false){
            putAble = false;
            someoneWin = true;
            blocks[1].style.color = 'red';
            blocks[4].style.color = 'red';
            blocks[7].style.color = 'red';
            playerTurn.innerHTML = blocks[1].innerHTML+' WIN';
        }
        if(blocks[2].innerHTML == blocks[5].innerHTML && blocks[5].innerHTML == blocks[8].innerHTML && blocks[2].innerHTML != '' && someoneWin == false){
            putAble = false;
            someoneWin = true;
            blocks[2].style.color = 'red';
            blocks[5].style.color = 'red';
            blocks[8].style.color = 'red';
            playerTurn.innerHTML = blocks[2].innerHTML+' WIN';
        }
        if(blocks[0].innerHTML == blocks[4].innerHTML && blocks[4].innerHTML == blocks[8].innerHTML && blocks[0].innerHTML != '' && someoneWin == false){
            putAble = false;
            blocks[0].style.color = 'red';
            someoneWin = true;

            blocks[4].style.color = 'red';
            blocks[8].style.color = 'red';
            playerTurn.innerHTML = blocks[0].innerHTML+' WIN';
        }
        if(blocks[2].innerHTML == blocks[4].innerHTML && blocks[4].innerHTML == blocks[6].innerHTML && blocks[6].innerHTML != '' && someoneWin == false){
            putAble = false;
            someoneWin = true;
            blocks[4].style.color = 'red';
            blocks[6].style.color = 'red';
            blocks[2].style.color = 'red';
            playerTurn.innerHTML = blocks[2].innerHTML+' WIN';
        }
        if(blocks[0].innerHTML != '' && blocks[1].innerHTML != '' && blocks[2].innerHTML != '' && blocks[3].innerHTML != '' && blocks[4].innerHTML != '' && blocks[5].innerHTML != '' && blocks[6].innerHTML != '' && blocks[0].innerHTML != '' && blocks[7].innerHTML != '' && blocks[8].innerHTML != '' && someoneWin == false){
            putAble = false;
            playerTurn.innerHTML = 'DRAW';
        } 
    }
    
}