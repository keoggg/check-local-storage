document.addEventListener('DOMContentLoaded', () => {  
  try {
    window.localStorage;   
  } catch (error) {         
    window.parent.postMessage('localStorage not accessible', '*');
  }  
});
