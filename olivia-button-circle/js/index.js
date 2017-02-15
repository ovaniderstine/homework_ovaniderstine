document.getElementById('kanyeButton').onclick = turnGreen;
document.getElementById('voldemortButton').onclick = turnRed;
document.getElementById('resetButton').onclick = resetCircle;


function turnGreen() {
 resetCircle();
 document.getElementById('circle').style.backgroundColor = 'green';
}

function turnRed() {
 resetCircle();    
 document.getElementById('circle').style.backgroundColor = 'red';
}

function resetCircle() {
 document.getElementById('circle').style.backgroundColor = 'black';
}