function gremlify() {
  var issues = document.querySelector('li.header-nav-item > a[href^="/issues"]');

  if (issues) {
    issues.text = "Gremlins";
  }

  var issuesNav = document.querySelector('a.reponav-item[href*="/issues"] > span[itemprop^="name"]');

  if (issuesNav) {
    issuesNav.innerHTML = "Gremlins";
  }

  var issueIcons = document.querySelectorAll('span.tooltipped.tooltipped-n[aria-label^="Open issue"');

  for (var i = 0; i < issueIcons.length; i++) {
    issueIcons[i].innerHTML = "👺";
  }
}

gremlify();

var mutObv = new MutationObserver(gremlify);

mutObv.observe(document.querySelector('body'), { attributes: true, childList: true, characterData: true });
