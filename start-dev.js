const { spawn } = require('child_process');
const fs = require('fs');

const logStream = fs.createWriteStream('dev-server.log', { flags: 'a' });

function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}\n`;
  logStream.write(line);
  console.log(line.trim());
}

log('Starting start-dev.js...');

const nextDev = spawn('npx', ['next', 'dev', '--port', '3002', '--hostname', '0.0.0.0'], {
  cwd: '/home/mozart-4604/My Project_Opencode/kiddo-kount',
  env: {
    ...process.env,
    NEXT_TELEMETRY_DISABLED: '1',
    WATCHPACK_POLLING: 'true',
    PORT: '3002'
  },
  stdio: ['ignore', 'pipe', 'pipe']
});

nextDev.stdout.on('data', (data) => {
  log(`STDOUT: ${data.toString()}`);
});

nextDev.stderr.on('data', (data) => {
  log(`STDERR: ${data.toString()}`);
});

nextDev.on('error', (err) => {
  log(`spawn error: ${err.message}`);
});

nextDev.on('exit', (code, signal) => {
  log(`child process exited with code ${code} and signal ${signal}`);
});

// Keep event loop alive
setInterval(() => {
  log('Heartbeat...');
}, 30000);
