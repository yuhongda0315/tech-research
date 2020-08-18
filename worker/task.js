onmessage = function(e) {
  console.warn(e);
  postMessage({
    result: {
      code: 200
    }
  });
};