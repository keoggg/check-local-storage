try {
  window.localStorage.setItem('test', 'test');
  console.log('localStorage access successful');
} catch (error) {
  console.log('access denied for localStorage');
  window.open.postMessage('localStorage not accessible', 'https://zino.pro/app_dev.php/en/');
}
