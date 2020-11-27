const refery_button = document.getElementById('restart-btn');
const characterBtn = document.getElementById('character-btn-kick');
const enemyBtn = document.getElementById('enemy-btn-kick');

const refery = {
    element: document.getElementById('refery'),
    name: 'Refery',
    winner_name: document.getElementById('winner_name'),
}

const pikachu = {
    name: 'Pikachu',
    max_health: 100,
    current_health: 100,
    health: document.getElementById('health-character'),
    progress_bar: document.getElementById('progressbar-character')
}

const charmander = {
    name: 'Charmander',
    max_health: 100,
    current_health: 100,
    health: document.getElementById('health-enemy'),
    progress_bar: document.getElementById('progressbar-enemy')
}

refery_button.addEventListener('click', () => {
    location.reload();
})

characterBtn.addEventListener('click', () => {
    changeScore(random(15), charmander)
})

enemyBtn.addEventListener('click', () => {
    changeScore(random(15), pikachu)
})

const init = () => {
    refery.element.style.display = 'none';
    renderHP(pikachu)
    renderHP(charmander)
    random(15)
}

const renderHP = person => {
    renderHpLife(person)
    renderProgressbarHP(person)
}

const renderHpLife = person => {
    person.health.innerText = person.current_health + ' / ' + person.max_health
}

const renderProgressbarHP = person => {
    person.progress_bar.style.width = person.current_health + '%'
}

const changeScore = (count, person) => {
    if (person.current_health < count) {
        person.current_health = 0
        refery.element.style.display = 'block';       
        let winner = 'No winner';
        if (person.name == 'Pikachu' ) winner = 'Charmander';
        else winner = 'Pikachu';
        refery.winner_name.innerHTML = 'WINNER <br> - <br>' + winner;
        characterBtn.setAttribute("disabled", true);
        enemyBtn.setAttribute("disabled", true);
    } else {
        person.current_health -= count
    }
    renderHP(person)
}

const random = num => {
    return Math.ceil(Math.random() * num)
}

init()