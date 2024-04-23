class Printer  {
    constructor (brand, colours) {
        this.#setupPrinter(brand, colours);
    }

    #setupPrinter(brand, colours) {
            this.brand = brand;
            this.colours = colours;
        }
}

const printer = new Printer("HP", ["Red", "Green", "Blue"]);
console.log(printer.brand, printer.colours)