window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
// interimResults set to true will output text as we're speaking
// Otherwise text won't be output until speach stops
recognition.interimResults = true;

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    p.textContent = transcript;
    // If there's a pause in speech, create new paragraph
    if (e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
    }

    // if (transcript.includes('pizza')) {
    //     console.log('🍕');
    // }
    // if (transcript.includes('time')) {
    //     console.log('⌚');
    // }
});

recognition.addEventListener('end', recognition.start);

recognition.start();