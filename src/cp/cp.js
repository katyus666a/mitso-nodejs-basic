
import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
    // Write your code here
    const child = spawn('node', ['./files/script.js', ...args]);

    child.stdout.on('data', (data) => {
        console.log(`Child says: ${data.toString()}`);
    });

    child.stdin.end();
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
spawnChildProcess(process.argv.slice(2));