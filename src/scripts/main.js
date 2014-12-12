// I hate the default bespoke style
require('bespoke').from('article', [
//  require('bespoke-theme-cube')(),
  require('bespoke-theme-voltaire')(),
  require('bespoke-keys')(),
  require('bespoke-touch')(),
  require('bespoke-bullets')('li, .bullet'),
  require('bespoke-backdrop')(),
  require('bespoke-state')(),
  require('bespoke-scale')(),
  require('bespoke-hash')(),
  require('bespoke-progress')(),
  require('bespoke-forms')()
]);

// Bespoke.js
bespoke.from('article', [
  cube(),
  keys(),
  touch(),
  bullets('li, .bullet'),
  backdrop(),
  progress()
]);

// Prism syntax highlighting
require('prism');

// sole's fullscreen hack.
require('bespoke-fullscreenbackground');
