const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');


function handler(req, res) {
    try {
        const { iterations } = JSON.parse(req.body || '{}');

        if (iterations > 10) {
            return res.status(400).json({ error: 'Maximum number of iterations is 10' });
        }

        console.log(`Iterations: ${iterations}`);

        return new Promise((resolve) => {
            const command = `node ${path.resolve('./app/lib/runExperiments.js')} ${iterations}`;
            console.log(`Executing command: ${command}`);
            
            exec(command, (error, stdout, stderr) => {
                if (error) {
                    console.error(`exec error: ${error}`);
                    return resolve(res.status(500).json({ error: 'Failed to run experiment' }));
                }

                console.log(`stdout: ${stdout}`);
                console.log(`stderr: ${stderr}`);

                const resultsPath = path.resolve('./app/lib/results.json');
                console.log(`Reading results from: ${resultsPath}`);
                
                fs.readFile(resultsPath, 'utf8', (err, data) => {
                    if (err) {
                        console.error(`readFile error: ${err}`);
                        return resolve(res.status(500).json({ error: 'Failed to read results' }));
                    }

                    console.log(`Results data: ${data}`);

                    const results = JSON.parse(data);
                    const response = { iterations: results };

                    return resolve(res.status(200).json(response));
                });
            });
        });
    } catch (error) {
        console.error('Error handling request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
module.exports = handler;