const runExperiments = require('./runExperiments');

const iterations = 4; // Задайте количество итераций для теста

runExperiments(iterations)
    .then((results) => {
        console.log('Experiment results:', results);
    })
    .catch((error) => {
        console.error('Error running experiments:', error);
    });