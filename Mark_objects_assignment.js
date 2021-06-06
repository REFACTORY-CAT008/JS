


function Television (size, name, price, color, model, shape, display) {
    //'this' keyword identifies the property of an object
    this.size=size
    this.model=model
    this.name=name
    this.color=color
    this.price=price
    this.display=display
    this.shape=shape
    this.buy = function(){
        return 'Buy ' + this.display + this.shape + this.name
    }
    this.purchase = function(){
        return 'Purchase a ' + this.size + this.color + this.name + ' at ' + this.price
    }
}
//the 'new' keyword is what we call 'constructor'
//its used to initialise an instaciated object
let Hisense = new Television('65 inches ', 'Hisense', '5000000', 'black ', 'A91', 'curved ', 'OLED ' )
let Samsung = new Television('40 inches', ' Samsung', '700000', ' Grey ', 'UNC7000', 'flat', 'LCD' )
console.log(Hisense.buy())
console.log(Samsung.purchase())



function Phone (size, name, price, color, model, weight, SIM) {
    //'this' keyword identifies the property of an object
    this.size=size
    this.model=model
    this.name=name
    this.color=color
    this.price=price
    this.weight=weight
    this.SIM=SIM
    this.buy = function(){
        return 'Buy ' + this.SIM + this.model + this.name
    }
    this.purchase = function(){
        return 'Purchase a ' + this.size + this.color + this.name + ' at ' + this.price
    }
    
}
//the 'new' keyword is what we call 'constructor'
//its used to initialise an instaciated object
let Tecno = new Phone('7 inches ', 'tecno', '500000', 'blue ', 'Camon16', '220g', 'Dual Sim' )
let samsung = new Phone('6.2 inches', 'samsung ', '3000000', 'black', 'S21 ', '157g', 'Single Sim ' )
console.log(Hisense.purchase())
console.log(samsung.buy())


function House (window, door, floor, roof, color, type, size) {
    //'this' keyword identifies the property of an object
    this.size=size
    this.window=window
    this.door=door
    this.color=color
    this.floor=floor
    this.roof=roof
    this.type=type
    this.go = function(){ 
        return 'Go to the ' + this.color + this.size + this.type + ' with ' + this.window + ' and ' + this.floor 
    }
    this.run = function(){ 
        return 'Run to the ' + this.type + ' with ' + this.roof + ' and ' + this.door 
    }
    
}
//the 'new' keyword is what we call 'constructor'
//its used to initialise an instaciated object
let markHouse = new House('sliding windows', 'pocket doors', 'tiled floor', 'ironsheets', 'brown ', 'hut', 'big ')
let ozzyHouse = new House('casement windows', 'sliding glass doors', 'cemented floor', 'amategula', 'white', 'villa', 'small')
console.log(markHouse.go())
console.log(ozzyHouse.run())


function GIrl (beauty, size, name, height, color, nationality, age) {
    //'this' keyword identifies the property of an object
    this.size=size
    this.beauty=beauty
    this.nationality=nationality
    this.color=color
    this.name=name
    this.height=height
    this.age=age
    this.call = function(){ 
        return 'Her name is ' + this.name + ', she is ' + this.size + ' ' + this.height + ' and ' + this.age
    }
    this.call2 = function(){ 
        return 'She is ' + this.nationality + ' ' + this.color + this.beauty + ' and ' + this.height
    }
    
}
//the 'new' keyword is what we call 'constructor'
//its used to initialise an instaciated object
let Diana = new GIrl('beautiful', 'chubby', 'Diana', 'short', 'chocolote', 'Ugandan', '22 years old')
let Hana = new GIrl('ugly', 'thin', 'Hana', 'tall', 'dark skinned ', 'Rwandan', '28 years old')
console.log(Diana.call())
console.log(Hana.call2())


function sittingRoom (diningTable, size, sofaSet, tv, musicSystem, lights, centreTable) {
    //'this' keyword identifies the property of an object
    this.size=size
    this.diningTable=diningTable
    this.sofaSet=sofaSet
    this.tv=tv
    this.musicSystem=musicSystem
    this.lights=lights
    this.centreTable=centreTable
    this.look = function(){ 
        return 'Look at that sitting room with a ' + this.sofaSet + ' ' + this.diningTable + ' and a ' + this.musicSystem
    }
    this.look1 = function(){ 
        return 'Look at that sitting room of ' + this.size + ' with a ' + this.lights + ' ' + this.tv + ' and a ' + this.centreTable
    }
    
}
//the 'new' keyword is what we call 'constructor'
//its used to initialise an instaciated object
let mysittingRoom = new sittingRoom('round table', '40sqm', 'u-shaped sofa', 'sony Bravia', 'sony sound bar', 'led downlights', 'rattan table')
let yoursittingRoom = new sittingRoom('rectangle table', '20sqm', 'L-shaped sofa', 'smartec', 'aiwa', 'chandelier', 'glass table')
console.log(mysittingRoom.look())
console.log(yoursittingRoom.look1())



function Bed (type, size, material, color, weight, price, design) {
    //'this' keyword identifies the property of an object
    this.size=size
    this.design=design
    this.material=material
    this.color=color
    this.weight=weight
    this.price=price
    this.type=type
    this.make = function(){ 
        return 'Make for me a ' + this.type + ' from ' + this.material + ', ' + this.color + ' in color at ' + this.price
    }
    this.make2 = function(){ 
        return 'I want an ' + this.design + ' weighing ' + this.weight + ' and of size ' + this.size
    }
    
}
//the 'new' keyword is what we call 'constructor'
//its used to initialise an instaciated object
let myBed = new Bed('sleigh bed', '6 by 6', 'mahogany', 'cream', '80kgs', '2500000', 'wood bed frame')
let yourBed = new Bed('trundle bed', '5 by 6', 'brass', 'red', '60kgs', '1200000', 'adjustable bed frame')
console.log(myBed.make())
console.log(yourBed.make2())

function family (father, mother, size, children, auntie, name, jaja) {
    //'this' keyword identifies the property of an object
    this.size=size
    this.father=father
    this.mother=mother
    this.children=children
    this.auntie=auntie
    this.name=name
    this.jaja=jaja
    this.that = function(){ 
        return 'That is the ' + this.name + ' of ' + this.father + ', her wife is ' + this.mother + ' with ' + this.children + ', its a ' + this.size
    }
    this.that2 = function(){ 
        return 'The ' + this.name + ' is a ' + this.size + ' with a ' + this.jaja + ', ' + this.children + ' and ' + this.auntie
    }
    
}
//the 'new' keyword is what we call 'constructor'
//its used to initialise an instaciated object
let nuclearFamily = new family('Mr. Mukuye mark', 'Mrs Jane Mukuye', 'small family', '3 children', '', 'Ndiwalana family', '')
let extendFamily = new family('Mr. Ssuna Conrad', 'Mrs Aggie Ssuna', 'big family', '7 children', 'Auntie Sanyu', 'Ssuna family', 'jaja')
console.log(nuclearFamily.that())
console.log(extendFamily.that2())