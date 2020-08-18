var worker = new Worker('http://127.0.0.1:8686/research/worker/task.js');
worker.onmessage = function(e) {
  console.log(e);
}
worker.postMessage({
  command: 'test'
});