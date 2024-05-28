import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

export async function POST(req) {
  const { iterations } = await req.json();

  if (iterations > 10) {
    return NextResponse.json({ error: 'Maximum number of iterations is 10' }, { status: 400 });
  }

  return new Promise((resolve) => {
    const command = `node ${path.resolve('./app/lib/runExperiments.js')} ${iterations}`;
    console.log(`Executing command: ${command}`);

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return resolve(NextResponse.json({ error: 'Failed to run experiment' }, { status: 500 }));
      }

      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);

      const resultsPath = path.resolve('./app/lib/results.json');
      console.log(`Reading results from: ${resultsPath}`);

      fs.readFile(resultsPath, 'utf8', (err, data) => {
        if (err) {
          console.error(`readFile error: ${err}`);
          return resolve(NextResponse.json({ error: 'Failed to read results' }, { status: 500 }));
        }

        console.log(`Results data: ${data}`);

        const results = JSON.parse(data);
        const response = { iterations: results };

        return resolve(NextResponse.json(response, { status: 200 }));
      });
    });
  });
}
