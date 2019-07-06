var tabsLink = document.querySelectorAll('.nav-tabs .nav__item'),
    tabsElement = document.querySelectorAll('.tab-pane'),
    i;

tabsElement[0].classList.add('tab-open');

var showTabs = function(e) {
    e.preventDefault();
    var targetElement = document.querySelectorAll(this.getAttribute('href'));
    for (i = 0; i < targetElement.length; i++) {
        if (targetElement[i].classList.contains('tab-open')) {
            return false;
        } else targetElement[i].classList.add('tab-open');
    }
    targetElement = document.querySelectorAll(".tab-pane.tab-open:not("+ this.getAttribute('href')+")");
    for (i = 0; i < targetElement.length; i++) {
        targetElement[i].classList.remove('tab-open');
    }
};

for (i = 0; i < tabsLink.length; i++) {
    tabsLink[i].addEventListener('click', showTabs);
}