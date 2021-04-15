try {
  window.localStorage.setItem('test', 'test');
} catch (error) {
  window.open.postMessage('localStorage not accessible', '*');
}
