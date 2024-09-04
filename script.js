function onMarkerClick(e) {
  // window.open(e.target.options.myUrl);       // open new window
  window.location.href = e.target.options.myUrl; // open window in current window
}