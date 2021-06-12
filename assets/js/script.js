const txtElement = ['Novel Romantis', 'Novel Petualangan', 'Novel Horor'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ketik(){

    if(count == txtElement.length){
        count = 0;
    }

    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.tulisan').textContent = words;

    setTimeout(ketik, 500);

    if(words.length == currentTxt.length){
        count++;
        txtIndex = 0;
    }


})();