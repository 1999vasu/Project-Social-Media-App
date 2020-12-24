

const FIRST = [
    'slim',
    'python',
    'ruby',
    'black_sea',
    'pearl',
    'saphire',
    'red',
    'trim'
]

const SECOND = [
    'table',
    'chair',
    'tub',
    'mug',
    'cup',
    'spoon',
    'bowl',
    'glass'
]

function getRandomUsername(){
    const obj = FIRST[Math.floor(Math.random()*8)]
    const obj2 = SECOND[Math.floor(Math.random()*8)]
    return `${obj}-${obj2}`
}

// {Unit Testing for function}

// console.log(getRandomUsername());
// console.log(getRandomUsername());
// console.log(getRandomUsername());
// console.log(getRandomUsername());
// console.log(getRandomUsername());

module.exports = {
    getRandomUsername
}