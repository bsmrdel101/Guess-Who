let peopleAmount = 0;


$(document).ready(onReady);

function onReady() {
    displayTarget();
    for (let person of people) {
    $('#container').append(`
    <div>
        <img class="image" src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${person.name}" data-name = ${person.name}>
    </div>
    `);
    }
    $('#container').on('click', '.image', handleGuess);
}

function displayTarget() {
    peopleAmount = randomNumber(0, people.length - 1);
    
    $('header').text(`Try to find ${people[peopleAmount].name}!`);
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function handleGuess() {
    let nameData = $(this).data('name');
    console.log('name data:', nameData);
    console.log('people amount:', peopleAmount);
    
    console.log(people[peopleAmount].name);
    if(nameData === people[peopleAmount].name){
        alert('You guessed correctly!');
        $('body').css('background-color', '#61b361');
        setTimeout(() => {$('body').css('background-color', 'white');}, 1000);
        setTimeout(() => {displayTarget();}, 1000);
        $('img').addClass('animation');
    }else{
        alert('Try again!');
        $('body').css('background-color', '#e75656');
        setTimeout(() => {$('body').css('background-color', 'white');}, 1000);
    }
}