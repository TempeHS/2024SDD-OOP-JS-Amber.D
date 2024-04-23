class Utilties {
    static camelCase(str) {
        const splitWords = str.split("");
        let result = "";
        result += splitWords[0].toLowerCase();
        for(let i=1; i < splitWords.length; i++ ) {
            let word = splitWords[i];
            word = word.toLowerCase();
            word[0].toUpperCase() + word.slice(1);
            result += word;
        }
        return result;
    }
}
    
const utilty = new Utilties(); 
console.log(Object.getOwnPropertyNames(utilty));
console.log(utilty);
console.log(Utilties.camelCase("hello there"));
console.log(Utilties.camelCase("HELLO THERE"));
console.log(Utilties.camelCase("I love cookies"));
console.log(Utilties.camelCase("Monkey Banana"));