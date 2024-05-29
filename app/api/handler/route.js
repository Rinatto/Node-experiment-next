import runExperiments from '@/app/api/runExperiments/route';

async function runExperimentsHandler(iterations) {
    return new Promise((resolve, reject) => {
        runExperiments(iterations)
            .then(results => resolve(results))
            .catch(error => reject(error));
    });
}

export default runExperimentsHandler;
