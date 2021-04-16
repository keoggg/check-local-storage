document.addEventListener('DOMContentLoaded', () => {
  (function () {
    try {
      window.localStorage.setItem('test', 'test');
      console.log('localStorage access successful');
    } catch (error) {
      console.log('access denied for localStorage');      
      window.parent.postMessage('localStorage not accessible', '*');      
    }
  })();
});
