// const square = function(x){
//     return x * x
// }

// const square = (x) => {
//     return x * x
// } 

// const square = (x) => x * x

// console.log(square(2))

const event = {
    name: 'Birthday party',
    gustList: ['Mohcine', 'Oumaima', 'Chaima'],
    printGestList () {
        
        console.log('Gest list for ' + this.name)

        this.gustList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGestList()