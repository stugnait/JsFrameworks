abstract class Car{
    public name:string;
    public engineType:string;
    public year:string;
    public maxPassengers:number;
    protected licencePlate:string;

    showInfo():void{
        console.log("\nName: " +this.name + "\nEngineType: " + this.engineType+ "\nYear of construction: " + this.year + "\nMax Passengers: " + this.maxPassengers+ "\nLicence Plate number: " + this.licencePlate);
    }

    protected constructor(name: string, engineType: string, year: string, maxPassengers: number, licencePlate: string) {
        this.name = name;
        this.engineType = engineType;
        this.year = year;
        this.maxPassengers = maxPassengers;
        this.licencePlate = licencePlate;
    }
}

class Bus extends Car{
    public hasSecondFloor:boolean;
    constructor(name: string, engineType: string, year: string, maxPassengers: number, licencePlate: string, hasSecondFloor: boolean) {
        super(name, engineType, year, maxPassengers, licencePlate);
        this.hasSecondFloor = hasSecondFloor;
    }
    showInfo() {
        super.showInfo();
        console.log("\nHas second floor: " + this.hasSecondFloor);
    }

}

class MRAP extends Car{
    private _serveNumber:number;
    constructor(name: string, engineType: string, year: string, maxPassengers: number, licencePlate: string, serveNumber: number) {
        super(name, engineType, year, maxPassengers, licencePlate);
        this._serveNumber = serveNumber;
    }
    showInfo() {
        super.showInfo();
        console.log("\nServe: " + this.getServeNumber);
    }

    get getServeNumber(): number {
        return this._serveNumber;
    }

}

class Pickup extends Car{
    public trunkSpace;
    constructor(name: string, engineType: string, year: string, maxPassengers: number, licencePlate: string, trunkSpace: number) {
        super(name, engineType, year, maxPassengers, licencePlate);
        this.trunkSpace = trunkSpace;
    }
    showInfo() {
        super.showInfo();
        console.log("\ntrunk space in kg: " + this.trunkSpace);
        console.log("\ntrunk space in bodies: " + this.calculteSpace);

    }

    get calculteSpace(): number {
        return this.trunkSpace / 100;
    }
}

let Kipri = new MRAP("KARA","Diesel","2018",10,"B1249 28",648)
let Raptor = new Pickup("KARA","Diesel","2018",10,"B1249 28",648)
Kipri.showInfo()
Raptor.showInfo()
