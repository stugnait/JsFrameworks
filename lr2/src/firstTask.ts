interface IAnimalHabit{
    move():void;
    voice?():void;

}

class Cat implements IAnimalHabit{
    move() {
        console.log("legs")
    }
    voice(){
        console.log("Meow")
    }
}
class Bird implements IAnimalHabit{
    move() {
        console.log("On 2 / Wings")
    }
    voice(){
        console.log("Bip Bip")
    }
}
class Fish implements IAnimalHabit{
    move() {
        console.log("By fish")
    }
}