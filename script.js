// optimized code coming soon!
// selecting subscription plan button
const superBtn = document.getElementById('super-year');
const premiumYearBtn = document.getElementById('premium-year');
const premiumMonthBtn = document.getElementById('premium-month');

// selecting info columns 
const box1 = document.querySelectorAll('.info :nth-child(2)');
const box2 = document.querySelectorAll('.info :nth-child(3)');


// selecting title of subscription info (tick columns)
const title1 = document.querySelector('.info :nth-child(2)');
const title2 = document.querySelector('.info :nth-child(3)');


// selecting subscription button names
const premiumMonth = document.querySelector('#premium-month span');
const premiumYear = document.querySelector('#premium-year span');
const superYear = document.querySelector('#super-year span');


// selecting ticks for each subscription button
const tickSuper = document.querySelector('.tick-super')
const tickPremiumMonth = document.querySelector('.tick-premium-month')
const tickPremiumYear = document.querySelector('.tick-premium-year')


// selecting text content of continue button
const continueBtn = document.querySelector('.continue');


// when clicked on super button
superBtn.addEventListener('click', () => {
    superBtn.setAttribute('id', 'chosen')
    premiumYearBtn.removeAttribute('id', 'chosen')
    premiumMonthBtn.removeAttribute('id', 'chosen')
    tickSuper.style.visibility = 'visible';
    tickPremiumMonth.style.visibility = 'hidden';
    tickPremiumYear.style.visibility = 'hidden';
    superYear.style.color = '#fedf7b';
    premiumMonth.style.color = '#ffffffcc'
    premiumYear.style.color = '#ffffffcc'
    title2.style.color = '#ffffffcc'

    for (let x of box1) {
        x.style.background = '#1e2a48';
        x.style.color = 'white';
    }
    for (let x of box2) {
        x.style.background = 'none';
        x.style.color = '#ffffffcc';

    }
    continueBtn.textContent = 'CONTINUE WITH SUPER >'
    title1.style.color = '#fedf7b'
})


// when clicked on premium/year button
premiumYearBtn.addEventListener('click', () => {
    premiumYearBtn.setAttribute('id', 'chosen')
    superBtn.removeAttribute('id', 'chosen')
    premiumMonthBtn.removeAttribute('id', 'chosen')
    tickPremiumYear.style.visibility = 'visible'
    tickPremiumMonth.style.visibility = 'hidden'
    tickSuper.style.visibility = 'hidden'
    title1.style.color = '#ffffffcc'
    superYear.style.color = '#ffffffcc'
    premiumMonth.style.color = '#ffffffcc'
    premiumYear.style.color = '#fedf7b'

    for (let x of box1) {
        x.style.background = 'none';
        x.style.color = '#ffffffcc';

    }
    for (let x of box2) {
        x.style.background = '#1e2a48';
        x.style.color = 'white';
    }
    title2.style.color = '#fedf7b'
    continueBtn.textContent = 'CONTINUE WITH PREMIUM >'
})


// when clicked on premium/month button
premiumMonthBtn.addEventListener('click', () => {
    premiumMonthBtn.setAttribute('id', 'chosen')
    superBtn.removeAttribute('id', 'chosen')
    premiumYearBtn.removeAttribute('id', 'chosen')
    tickPremiumMonth.style.visibility = 'visible';
    tickSuper.style.visibility = 'hidden';
    tickPremiumYear.style.visibility = 'hidden';
    tickSuper.style.visibility = 'hidden';
    premiumYear.style.color = '#ffffffcc'
    superYear.style.color = '#ffffffcc'
    title1.style.color = '#ffffffcc'
    premiumMonth.style.color = '#fedf7b'
    title2.style.color = '#fedf7b'
    for (let x of box1) {
        x.style.background = 'none';
        x.style.color = '#ffffffcc';    
    }
    for (let x of box2) {
        x.style.background = '#1e2a48';
        x.style.color = 'white';
    }
    title2.style.color = '#fedf7b'
    continueBtn.textContent = 'CONTINUE WITH PREMIUM >'
})










