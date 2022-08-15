class Card{
    constructor(name,cost){
        this.name=name
        this.cost=cost
    }
}

class Unit extends Card{
    constructor(name,cost,power, res){
        super(name,cost)
            this.power=power
            this.res=res
    }
    attack(target) {
        console.log(`The Attack is: ${this.name}, power is: ${this.power} | The Target is: ${target.name}, resilience is: ${target.res} `)
        console.log(`decrease the target's "resilience" by the attacker's "power" `)
        target.res -= this.power;
    }
}


class Effect extends Card{
    constructor(name, cost, text, stat, magnitude){
        super(name, cost)
        this.text=text
        this.stat=stat
        this.magnitude=magnitude
    }
    play(target) {
        if( target instanceof Unit ) {
            if (this.stat == "resilience") {
                target.res += this.magnitude;
                console.log(`The ${this.name} ${this.text}`)
            }
            else {
                target.power += this.magnitude;
                console.log(`The ${this.name} ${this.text}`)
            }
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

var Red = new Unit ("Red Belt Ninja", 3, 3, 4)
var Black = new Unit ("Black Belt Ninja", 4, 5, 4)

var hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", +3);
var unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
var pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", +2);

console.log(Red)
console.log("\n-------------Hard Algorithm-------------")
hardAlgorithm.play(Red);
console.log(Red)
console.log("\n------Unhandled Promise Rejection-------")
unhandledPromiseRejection.play(Red);
console.log(Red)
console.log("\n------------Pair Programming------------")
pairProgramming.play(Red);
console.log(Red)

console.log("\n------------Red Belt Ninja attack Black Belt Ninja------------")
Red.attack(Black);
console.log(Black)