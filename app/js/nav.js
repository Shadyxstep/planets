function openNav() {

    // Variables

    const mobileNav = document.getElementById('mobileNav');

    const mer = document.getElementById('mer');
    const ven = document.getElementById('ven');
    const ear = document.getElementById('ear');
    const mar = document.getElementById('mar');
    const jup = document.getElementById('jup');
    const sat = document.getElementById('sat');
    const ura = document.getElementById('ura');
    const nep = document.getElementById('nep');

    const icon = document.getElementsByClassName('icon-chev');

    const ham = document.getElementById('btnHamburger');

    ham.classList.toggle('open');
    console.log('deez noots')

    // Remove Func

    function removeItems() {
        mer.classList.remove('slide-in');
        mer.style.opacity='0';
        ven.classList.remove('slide-in');
        ven.style.opacity='0';
        ear.classList.remove('slide-in');
        ear.style.opacity='0';
        mar.classList.remove('slide-in');
        mar.style.opacity='0';
        jup.classList.remove('slide-in');
        jup.style.opacity='0';
        sat.classList.remove('slide-in');
        sat.style.opacity='0';
        ura.classList.remove('slide-in');
        ura.style.opacity='0';
        nep.classList.remove('slide-in');
        nep.style.opacity='0';
        for (let i=0; i<icon.length; i++){
            icon[i].classList.remove('slide-in');
            icon[i].style.opacity='0';
        }
    }

    // Add Func

    function addItems() {
        mobileNav.style.left="0";
        mer.classList.add('slide-in');
        mer.style.opacity='1';

        setTimeout(() => {
            ven.classList.add('slide-in');
            ven.style.opacity='1';
        }, "25");

        setTimeout(() => {
            ear.classList.add('slide-in');
            ear.style.opacity='1';
        }, "75");

        setTimeout(() => {
            mar.classList.add('slide-in');
            mar.style.opacity='1';
        }, "125");

        setTimeout(() => {
            jup.classList.add('slide-in');
            jup.style.opacity='1';
        }, "175");

        setTimeout(() => {
            sat.classList.add('slide-in');
            sat.style.opacity='1';
        }, "225");

        setTimeout(() => {
            ura.classList.add('slide-in');
            ura.style.opacity='1';
        }, "275");

        setTimeout(() => {
            nep.classList.add('slide-in');
            nep.style.opacity='1';

        }, "325");

        setTimeout(() => {
            for (let i = 0; i<icon.length; i++){
                icon[i].classList.add('slide-in');
                icon[i].style.opacity='1';
            }
        }, "1100");
    }

    if (mobileNav.style.left == "100%") {

        addItems();
        document.body.style.position="fixed";


    } else if (mobileNav.style.left) {

        mobileNav.style.left = "100%";

        // Remove Anchors Animated Classes
        removeItems();
        document.body.style.position="";
        console.log('nuts')

    } else {

        //Initial Nav Open Anim


        mobileNav.style.left="0";
        document.body.style.position="fixed";
        mer.classList.add('slide-in');
        mer.style.opacity='1';
        

        setTimeout(() => {
            ven.classList.add('slide-in');
            ven.style.opacity='1';
        }, "25");

        setTimeout(() => {
            ear.classList.add('slide-in');
            ear.style.opacity='1';
        }, "75");

        setTimeout(() => {
            mar.classList.add('slide-in');
            mar.style.opacity='1';
        }, "125");

        setTimeout(() => {
            jup.classList.add('slide-in')
            jup.style.opacity='1';
        }, "175");

        setTimeout(() => {
            sat.classList.add('slide-in');
            sat.style.opacity='1';
        }, "225");

        setTimeout(() => {
            ura.classList.add('slide-in');
            ura.style.opacity='1';
        }, "275");

        setTimeout(() => {
            nep.classList.add('slide-in');
            nep.style.opacity='1';
        }, "325");

        setTimeout(() => {
            for (let i = 0; i<icon.length; i++){
                icon[i].classList.add('slide-in');
                icon[i].style.opacity='1';
            }
        }, "1200")

    }
}