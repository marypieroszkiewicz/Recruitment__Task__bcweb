document.addEventListener('DOMContentLoaded', function() {

/* ---------------------------------------------------- */
/* ----- TOGGLE HEADER MENU ----- */
/* ---------------------------------------------------- */
	
	const btn = document.querySelector('#btnToggle');
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.nav').classList.toggle('nav__show');
        this.classList.toggle('btn-toggle--toggled');
    });


/* ---------------------------------------------------- */
/* ----- TOGGLE SEARCH FORM ----- */
/* ---------------------------------------------------- */

    const formToggle = document.querySelector('.loupe');
    formToggle.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.search__form').classList.toggle('open--form');
    });

/* ---------------------------------------------------- */
/* ----- HIGHLIGHT CURRENT PAGE ACTIVE MENU ITEM ----- */
/* ---------------------------------------------------- */

    const selector = '.plus';
    const elems = Array.from( document.querySelectorAll(selector));
    const navigation = document.querySelector('.nav__list');

    function makeActive(evt) {
      const target = evt.target;
      
        if ( !target || !target.matches(selector)) {
          return;
        }

        evt.preventDefault();
        elems.forEach(elem => elem.classList.remove('active'));
        evt.target.classList.add('active');

    }

    navigation.addEventListener('mousedown', makeActive);

/* ---------------------------------------------------- */
/* ----- HIGHLIGHT CURRENT PAGE ACTIVE TILES ITEM ----- */
/* ---------------------------------------------------- */


    document.addEventListener('mousedown', function(event) {

        if (!event.target.classList.contains('box__link')) 
            return;

        event.target.classList.add('active__box');

        let links = document.querySelectorAll('.box__link');

        for (let i = 0; i < links.length; i++) {
            if (links[i] === event.target) continue;
            links[i].classList.remove('active__box');
        }

        event.preventDefault();

    }, false);

 });