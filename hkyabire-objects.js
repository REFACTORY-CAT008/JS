
    // The first object
function phone (brandName, model, screen_size, color)   // The first object I have chosen is "phone"
{
    this.brandName = brandName      // Lines 5-8 are the properties of the "phone" object
    this.model = model
    this.screen_size = screen_size
    this.color = color
    this.newrelease = function() {  // this is the first method used on it
        return this.brandName + model + screen_size + color + " in color "
    }
}

let tecno = new phone ("TECNO ", "W3, ", "7-inches, ", "Silver ")
let nokia = new phone ("ASHA ", "500, ", "5-inches, ", "Grey ")
let itel = new phone ("ITEL ", "1230, ", "4-inches, ", "Black ")
let iPhone = new phone ("iPhone ", "X, ", "6-inches, ", "White " )
console.log(tecno.newrelease())
console.log(nokia.newrelease())
console.log(itel.newrelease())
console.log(iPhone.newrelease())