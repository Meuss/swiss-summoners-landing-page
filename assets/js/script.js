// =====================================================
// Home page banner animation
// Inspired by https://tympanus.net/Development/BlockRevealers/index.html
// =====================================================
(function() {
  // Fake loading.
  setTimeout(init, 1000);
  function init() {
    document.body.classList.remove('loading');
    var h1 = new RevealFx(document.querySelector('h1'), {
      revealSettings : {
        duration: 800,
        onCover: function(contentEl, revealerEl) {
          contentEl.style.opacity = 1;
        }
      }
    });
    h1.reveal();
    var h2 = new RevealFx(document.querySelector('h2'), {
      revealSettings : {
        delay: 250,
        duration: 800,
        onCover: function(contentEl, revealerEl) {
          contentEl.style.opacity = 1;
        },
        onComplete: function() {
          document.querySelector('p').classList = 'p-showing';
          document.querySelector('a').classList = 'a-showing';
        }
      }
    });
    h2.reveal();
  }
})();
