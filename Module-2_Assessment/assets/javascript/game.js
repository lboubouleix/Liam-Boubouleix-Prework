const word_bank = ['banana','apple','mango','orange','grape','train','plane','bicylce','boat'];
var word_number=0;
const guessed = [];
const wins = 0;
let attempt = 0;
let key = 'a'

const getkey = function (event) {
    key = event.key;
    console.log(key);
}

function main(){

    word_number = Math.floor(Math.random() * 9);
    var current_word = word_bank[word_number];

    console.log(current_word);

    while(attempt < 12){
        console.log(word_number);
        document.addEventListener('keyup', getkey);

        for(let i=0; i < attempt; i++){
            if (guessed[i] != key){
                guessed.push(key);
            }
        }

        attempt++;
    }
}

main();