
function sortWord() {

    const word = document.getElementById('wordInput').value;
    
    if (word) {
        let sortedWord = word.split('') 
                              .sort()  
                              .join(''); 
        

        document.getElementById('sortedWord').innerText = "Sorted word: " + sortedWord;
    } else {

        document.getElementById('sortedWord').innerText = '';
    }
}
