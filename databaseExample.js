class Database {
    #token = "abc123";
    constructor () {
        this.#token = "xyz789";
    }

    saveData(data){
        this.#initDBConnection();
        this.#authorize();
        this.#updateQuery();
        console.log(this.#token);
    }

    #initDBConnection() {}  //# = private
    #authorize() {}
    #updateQuery() {}
}


const db = new Database();
console.log(db);
console.log(db.token);
db.saveData();
/*

db.token = "superhappy!"; // not preferred
console.log(db);


db.saveData([1,2,3]); //preferred 
db.authorize();
 */
console.log(Object.getOwnPropertyNames(db));