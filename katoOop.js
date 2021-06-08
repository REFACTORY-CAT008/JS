function computer(ram, hardDiskSize, processor, generation, colour, name, year) {
    this.ram = ram
    this.hardDiskSize = hardDiskSize
    this.processor = processor
    this.genration = generation
    this.colour = colour
    this.name = name
    this.year = year
    this.specs = function() { return this.name + " is " + this.colour }
    this.model = function() { return this.name + " was made in " + this.year }
    this.speed = function() { return this.name + " is an " + this.processor }
    this.size = function() { return this.name + " is " + this.hardDiskSize }
}

let text = new computer("4GB", "500GB", "AmdQuadCore", "5thGen", "black", "Notebook", "2015")
console.log(text.model())
console.log(text.speed())
console.log(text.specs())
console.log(text.size())



function footballer(name, age, position, goalsScored, trophies, currentTeam, height) {
    this.name = name
    this.age = age
    this.position = position
    this.goalsScored = goalsScored
    this.trophies = trophies
    this.currentTeam = currentTeam
    this.height = height
    this.id = function() {
        return this.name + " is " + this.age
    }
    this.cups = function() { return this.name + " has won " + this.trophies }
    this.team = function() { return this.name + " is in " + this.currentTeam }
    this.goals = function() { return this.name + " has scored " + this.goalsScored }
};

let superStar = new footballer("haarland", "18 years", "number 9", "200 goals", "20 cups", "Borrusia Dortmund", "5.9 feet")
console.log(superStar.id())
console.log(superStar.cups())
console.log(superStar.team())
console.log(superStar.goals())

function food(name, content, nutritionalBenefit, colour, taste, state, source) {
    this.name = name
    this.content = content
    this.nutritionalBenefit = nutritionalBenefit
    this.colour = colour
    this.taste = taste
    this.state = state
    this.source = source
    this.ident = function() {
        return this.name + " is " + this.colour
    };
    this.nutrient = function() { return this.name + " contains " + this.nutritionalBenefit };
    this.form = function() { return this.name + " has a " + this.state };
    this.origin = function() { return this.name + " is a " + this.source };
};

let bestDishes = new food("Pork", "protein ", "high protein food", "brown ", "fantabulous ", "solid ", "animal protein ");
console.log(bestDishes.ident());
console.log(bestDishes.nutrient());
console.log(bestDishes.form());
console.log(bestDishes.origin());



function toolBox(name, weight, use, price, colour, material, type) {
    this.name = name
    this.weight = weight
    this.use = use
    this.price = price
    this.colour = colour
    this.material = material
    this.type = type
    this.called = function() {
        return this.name + " weighs " + this.weight
    };
    this.purpose = function() { return this.name + "is used for" + this.use };
    this.cost = function() { return this.name + " costs" + this.price };
    this.make = function() { return this.name + " is " + this.material };
};

let toolstash = new toolBox("Perisson toolbox", "15kgs", "car repair", "1000 dollars", "black", "iron", "mechanic toolbox");
console.log(toolstash.called());
console.log(toolstash.purpose());
console.log(toolstash.cost());
console.log(toolstash.make());






function cup(type, price, colour, use, size, shape, material) {
    this.type = type
    this.price = price
    this.colour = colour
    this.use = use
    this.size = size
    this.shape = shape
    this.material = material
    this.name = function() {
        return this.type + " is " + this.size
    }
    this.cost = function() { return this.type + " costs " + this.price };
    this.look = function() { return this.type + " is " + this.shape + " and " + this.colour };
    this.purpose = function() { return this.type + " is used for " + this.used };
}

let cutlery = new cup("A teacup", "20000", "orange", "taking tea", "small", "round", "clay")

console.log(cutlery.name());
console.log(cutlery.cost());
console.log(cutlery.look());
console.log(cutlery.purpose());




function flask(name, colour, price, weight, numberOfCups, hoursOfHeat, material) {

    this.name = name
    this.colour = colour
    this.price = price
    this.weight = weight
    this.numberOfCups = numberOfCups
    this.hoursOfHeat = hoursOfHeat
    this.material = material
    this.what = function() {
        return this.name + " is " + this.colour
    }
    this.which = function() {

        return this.name + " is " + this.price
    }
    this.when = function() {
        return this.name + " is " + this.weight
    }
    this.where = function() {
        return this.name + " is " + this.numberOfCups
    }

    let heatKeeper = new footballer("haarland", "18 years", "number 9", "200 goals", "20 cups", "Borrusia Dortmund", "5.9 feet")

    console.log(heatKeeper.what());
    console.log(heatKeeper.which());
    console.log(heatKeeper.when());
    console.log(heatKeeper.where());





    function boxer(name, age, weightClass, weight, belts, weightOfpunch, height) {
        this.name = name
        this.age = age
        this.weightClass = weightClass
        this.weight = weight
        this.belts = belts
        this.weightOfpunch = weightOfpunch
        this.height = height
        this.call = function() {
            return this.name + " is " + this.age
        };
        this.boxerBelts = function() {
            return this.name + " has won " + this.belts
        };
        this.weight = function() {
            return this.name + " weighs " + this.weightClass
        };
        this.weightOfpunch = function() {
            return this.name + " punch weighs " + this.weightOfpunch
        };
    }

    let champion = new boxer("Tyson Fury", "35 years", "heavy weight", "80kg", "20 belts", "50kg", "5.9 feet");

    console.log(champion.call());
    console.log(champion.boxerBelts());
    console.log(champion.weight());
    console.log(champion.weightOfpunch());





    function blueBand(name, taste, quality, size, weight, shape, type) {

        this.name = name
        this.taste = taste
        this.quality = quality
        this.size = size
        this.weight = weight
        this.shape = shape
        this.type = type

        this.caller = function() {
            return this.name + " is " + this.taste
        };
        this.how = function() { return this.name + " is " + this.quality };
        this.why = function() { return this.name + " is " + this.size };
        this.were = function() { return this.name + " is " + this.shape };
    };

    let breadSpread = new blueBand("prestidge", "sweet", "good", "small", "light", "box", "spread")

    console.log(breadSpread.caller());
    console.log(breadSpread.how());
    console.log(breadSpread.why());
    console.log(breadSpread.were())
}