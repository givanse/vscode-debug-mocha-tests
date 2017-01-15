// on startup open:
// http://localhost:*/karma-runner/debug.html
const debugPathname = '/karma-runner/debug.html';
(function (window) {
  if (window.location.pathname === debugPathname) {
    return;
  }
  window.open(debugPathname);
})(window);