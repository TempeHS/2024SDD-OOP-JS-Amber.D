class FancyArray extends Array { 
    mapWithLogging(callback, thisArg = this){
        let i = 0;
        let result = new FancyArray();
        for (const item of thisArg) {
            const mappedItem = callback (item, i++, thisArg);
            result.push(mappedItem);
            console.log(`Current: ${item}, After Callback: ${mappedItem}`);
        }
        return result;
    }
}

const arr = new FancyArray();
console.log(arr);
arr.push (1);
arr.push (2);
arr.push (3);

const mapped = arr
    .mapped = arr.mapWithLogging((item, i) => {
    return item + i;
})
    .map((n) => n+ 100); 
console.log(mapped);