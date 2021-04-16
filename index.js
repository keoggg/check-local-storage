document.addEventListener('DOMContentLoaded', () => {
  (function () {
    try {
      window.localStorage.setItem('test', 'test');
      console.log('localStorage access successful');
    } catch (error) {
      console.log('access denied for localStorage');
      const iframe = document.querySelector('.check-incognito').contentWindow;
      
      console.log(iframe);

      if (iframe) {
        iframe.postMessage('localStorage not accessible', '*');
      }
    }
  })();
});
