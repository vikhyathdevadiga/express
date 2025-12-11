import express from 'express'

const app = express()
const ffi = require('ffi-napi');
const ref = require('ref-napi');
// ... FFI setup as above

app.get('/limits', (req, res) => {
  const rl = new rlimit();
  lib.getrlimit(8, rl.ref()); // RLIMIT_NOFILE
  res.json({ soft: rl.rlim_cur, hard: rl.rlim_max });
});

const welcomeStrings = [
  "Hello Express!",
  "To learn more about Express on Vercel, visit https://vercel.com/docs/frameworks/backend/express",
]

app.get('/api', (_req, res) => {
  res.send(welcomeStrings.join('\n\n'))
})

export default app
