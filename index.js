document.addEventListener('DOMContentLoaded', () => {  
  try {
    window.localStorage.setItem('test', 'test');    
  } catch (error) {         
    window.parent.postMessage('localStorage not accessible', '*');
  }  
});
