class Utils {
    static description = "Awesome utilities!";
    description = "Another Description?";

    static caps(str) {
        return str.toUpperCase();
    }

    lower (str) {
        return str.toLowerCase(); 
    }
}

Utils.hello ="hello";
Utils.prototype.camelCase = () => {};

console.log(Utils.description);
console.log(Utils.caps);

console.log(Object.getOwnPropertyNames(Utils));

const utils = newUtils();
console.log(utils);
console.log(object.getOwnPropertyNames(utils));
