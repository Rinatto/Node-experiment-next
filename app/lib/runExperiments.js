const { exec } = require('child_process');
const { writeFileSync } = require('fs');
const { resolve } = require('path');

function runExperiments(iterations) {
    return new Promise((resolvePromise, rejectPromise) => {
        const runCount = iterations || 1;
        const results = [];

        const runTest = (command, label) => {
            return new Promise((resolve, reject) => {
                const startTime = Date.now();
                exec(command, (error, stdout, stderr) => {
                    const endTime = Date.now();
                    if (error) {
                        reject(`Error executing ${command}: ${error}`);
                    } else {
                        const result = { label, output: stdout.trim()};
                        results.push(result);
                        resolve(result);
                    }
                });
            });
        };

        const runTests = async () => {
            for (let i = 0; i < runCount; i++) {
                console.log(`Running iteration ${i + 1} of ${runCount}`);
                await runTest('npm run test:ts', 'test:ts');
                await runTest('npm run test:js', 'test:js');
            }

            writeFileSync(resolve(__dirname, 'results.json'), JSON.stringify(results, null, 2));
            console.log(`Results saved to ${resolve(__dirname, 'results.json')}`);
        };

        runTests()
            .then(() => resolvePromise(results))
            .catch(error => rejectPromise(error));
    });
}

module.exports = runExperiments;

