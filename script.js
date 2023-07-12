const changingWord = document.getElementById('changing-words');
const words = ['Monetization', 'Security', 'Monitoring', 'Creation', 'Testing', 'Deployment'];
let index = 0;

function changeSubHeading() {
    changingWord.textContent = `${words[index]} `;
    index = (index + 1) % words.length;
}

setInterval(changeSubHeading, 2000)
