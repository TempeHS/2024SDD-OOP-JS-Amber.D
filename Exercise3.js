class Books{ 
    constructor(name, author) {
        this.name = name;
        this.author = author;
        }
}

const nineteen84 = new Books("1984", "George Orwell");
const hp = new Books("Harry Potter", "J.K.Rowling");
console.log (nineteen84);
console.log (hp);
console.log (Object.getOwnPropertyNames(nineteen84));
console.log (Object.getOwnPropertyNames(hp));


class Bookstore { 
    constructor(books) {
        this.books = books;
    }
    listBooks () {
        var title;
        for (var i = 0; i<this.books.length; i++) {
            title += this.books[i].name + " by " + this.books[i].author ;
        }
        return(title);
    }
    /*  Another method 
    listBooks() { 
        for (const books of this.books) { 
            console.log(`${books.name} by ${book.author}`);
        }
    } */
} 

const list = new Bookstore([nineteen84, hp]);
console.log (list);
console.log (Object.getOwnPropertyNames(list));
console.log(list.listBooks());