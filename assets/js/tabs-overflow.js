(function () {
  'use strict';

  var SELECTOR = '.ot-collapsible-tabs';

  // Total tabs (including the "Earlier" dropdown) at each breakpoint.
  var TOTALS = { large: 11, medium: 6, small: 4 };

  var QUERIES = {
    large: window.matchMedia('(min-width: 992px)'),
    medium: window.matchMedia('(min-width: 576px) and (max-width: 991.98px)'),
    small: window.matchMedia('(max-width: 575.98px)')
  };

  var bars = [];

  function visibleTotal() {
    if (QUERIES.large.matches) return TOTALS.large;
    if (QUERIES.medium.matches) return TOTALS.medium;
    return TOTALS.small;
  }

  function condenseBar(bar) {
    var links = bar.__otLinks;
    if (!links.length) return;

    // Reset links to their default styling before reorganising.
    links.forEach(function (link) {
      link.classList.remove('dropdown-item');
      link.classList.add('nav-item', 'nav-link');
    });

    bar.innerHTML = '';

    var visibleYears = visibleTotal() - 1;

    // No overflow: render every tab directly in the bar.
    if (links.length <= visibleYears) {
      links.forEach(function (link) {
        bar.appendChild(link);
      });
      return;
    }

    var kept = links.slice(0, visibleYears);
    var overflow = links.slice(visibleYears);

    kept.forEach(function (link) {
      bar.appendChild(link);
    });

    var dropdownId = 'earlier-dropdown-' + bar.__otIndex;

    var dropdown = document.createElement('div');
    dropdown.className = 'nav-item dropdown';
    dropdown.setAttribute('role', 'presentation');

    var toggle = document.createElement('a');
    toggle.className = 'nav-link dropdown-toggle font-weight-bold';
    toggle.href = '#';
    toggle.setAttribute('data-toggle', 'dropdown');
    toggle.setAttribute('role', 'button');
    toggle.setAttribute('aria-haspopup', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('id', dropdownId);
    toggle.textContent = 'Earlier';

    var menu = document.createElement('div');
    menu.className = 'dropdown-menu';
    menu.setAttribute('aria-labelledby', dropdownId);

    overflow.forEach(function (link) {
      link.classList.remove('nav-item', 'nav-link');
      link.classList.add('dropdown-item');
      menu.appendChild(link);
    });

    dropdown.appendChild(toggle);
    dropdown.appendChild(menu);
    bar.appendChild(dropdown);

    var activeInOverflow = overflow.some(function (link) {
      return link.classList.contains('active');
    });
    toggle.classList.toggle('active', activeInOverflow);
  }

  function syncToggleActive(bar) {
    var toggle = bar.querySelector('.dropdown-toggle');
    var menu = bar.querySelector('.dropdown-menu');
    if (!toggle || !menu) {
      return;
    }
    var active = bar.querySelector('a[data-toggle="tab"].active');
    toggle.classList.toggle('active', !!active && menu.contains(active));
  }

  document.querySelectorAll(SELECTOR).forEach(function (bar, index) {
    bar.__otLinks = Array.prototype.slice.call(bar.children);
    bar.__otIndex = index;
    bars.push(bar);
  });

  function condenseAll() {
    bars.forEach(condenseBar);
  }

  // Bootstrap's tab events bubble, so a single delegated handler covers
  // dynamically moved links. Bootstrap 4.0.0 fails to clear `.active` from
  // a previously-selected tab that lives inside the dropdown, so we manage
  // the active state ourselves: exactly one linked tab is active at a time.
  // Keep the "Earlier" toggle highlighted while the active year lives
  // inside the dropdown. Bootstrap 4.0.0's `_clearMenus` already closes
  // the menu when an item is clicked, so we only nudge it closed if a
  // browser left it open (no `.dropdown('hide')` here: 4.0.0 has no such
  // method and throws `TypeError`).
  $(document).on('shown.bs.tab', SELECTOR + ' a[data-toggle="tab"]', function () {
    var bar = $(this).closest(SELECTOR)[0];
    if (!bar) {
      return;
    }
    var links = bar.querySelectorAll('a[data-toggle="tab"]');
    Array.prototype.forEach.call(links, function (link) {
      var isActive = link === this;
      link.classList.toggle('active', isActive);
      if (link.getAttribute('role') === 'tab') {
        link.setAttribute('aria-selected', isActive);
      }
    }, this);
    var menu = bar.querySelector('.dropdown-menu');
    syncToggleActive(bar);
    if (menu && menu.contains(this)) {
      var drop = bar.querySelector('.dropdown');
      if (drop && drop.classList.contains('show')) {
        drop.classList.remove('show');
        menu.classList.remove('show');
        var toggle = bar.querySelector('.dropdown-toggle');
        if (toggle) {
          toggle.setAttribute('aria-expanded', 'false');
        }
      }
    }
  });

  ['large', 'medium', 'small'].forEach(function (key) {
    var query = QUERIES[key];
    if (query.addEventListener) {
      query.addEventListener('change', condenseAll);
    } else if (query.addListener) {
      query.addListener(condenseAll);
    }
  });

  condenseAll();
})();