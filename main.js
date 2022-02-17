const createWoodBlock = () =>{
    const woodBlock = {
        type: "wood block",
        length: 10,
        material: "pine",
        purpose: "flute"
    }
    return woodBlock

}

const createBeautifulCarving = (woodObject) => {
    const string = 
    `The ${woodObject.length}-inch, ${woodObject.material} ${woodObject.type} was carved into a wooden ${woodObject.purpose}`

    return string
}

const woodBlock = createWoodBlock()

const carvingString = createBeautifulCarving(woodBlock)

console.log(carvingString)