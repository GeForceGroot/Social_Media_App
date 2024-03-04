const ADJECTIVE = [
    'Closed',
    'Ready',
    'Hungry',
    'Nice',
    'Sick',
    'Closed',
    'Open',
    'Free',
    'Easy',
    'Hot',
    'Expensive',
    'Big',
    'Good'
]

const OBJECT = [
    'Bison',
    'Zebra',
    'Jellyfish',
    'Dodo',
    'Lizard',
    'Bat',
    'Gorilla',
    'Monkey',
    'Panther',
    'Elephant',
    'Alligator',
    'Ostrich',
    'Jackal',
    'Eagle',
    'Dolphin',
    'Donkey',
    'Leopard'
]


const getRandomName = function(){
    const adj = ADJECTIVE[Math.floor(Math.random() * 13)];
    const obj = OBJECT[Math.floor(Math.random() * 17)];
    return `${adj}-${obj}`
}

module.exports = {
    getRandomName
}
