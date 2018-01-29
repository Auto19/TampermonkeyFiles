// ==UserScript==
// @name         Fligg Bot Portfolio Manager
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  A bot built to manage investing in stocks on https://www.marketwatch.com
// @author       You
// @match        https://www.marketwatch.com/game/investment-club-marist-/portfolio
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //Using ACOR as volatile stock
/*
    Actual code
*/
/** remember to buy 1 stock of each stock you want to invest in before running bot **/
if(localStorage.getItem('s') == null) {
    localStorage.setItem('s', 'true');
}
console.log(localStorage.getItem('s'));
//Select stock 1, in the list to pull up the window with info
setTimeout("document.querySelector('body > div.container.container--game.wrapper.clearfix > div.content-region.region--primary > div.column.column--primary > div.element.element--table.holdings > table > tbody > tr > td.table__cell.align--left > a > mini-quote').click();", 2500);
//get the day value of the stock
var StockVal = parseFloat(document.querySelector('body > div.container.container--game.wrapper.clearfix > div.content-region.region--primary > div.column.column--primary > div.element.element--table.holdings > table > tbody > tr > td:nth-child(4) > small > span.percent').innerHTML.replace('%', ''));
console.log(StockVal);
//If the day value of the first stock is above 0.5%, sell
if(StockVal > 0.5 && localStorage.getItem('s') == 'false') {
    //Click trade now
    setTimeout("document.querySelector('body > div.content-region.region--lightbox.j-ajaxContent.is-active > div > div.lightbox__footer.mini-quote > div > button').click();", 5000);
    //Click Sell section
    setTimeout("document.querySelector('#order-sell').click();", 10000);
    //Select 100 shares to sell, (need to change this for amount of stocks)
    setTimeout("document.querySelector('#shares').value = '8000';", 15000);
    //Click buy now button
    setTimeout("document.querySelector('body > div.content-region.region--lightbox.j-ajaxContent.is-active > div > div.lightbox.lightbox--trade.is-active.j-trade > form > div.lightbox__footer > div.button__group.align--right.u-floatRight.m100.u-oneRightMargin > button.btn.btn--primary.j-submit').click();", 20000);
    //Close out of window
    setTimeout("document.querySelector('body > div.content-region.region--lightbox.j-ajaxContent.is-active > div > div.lightbox.lightbox--trade.lightbox--popup.j-success.is-active > div > div > a').click();", 25000);
    localStorage.setItem('s', 'true');
//else if the day value of the first stock is below -1.0%, buy
} else if (StockVal < -0.5 && localStorage.getItem('s') == 'true') {
    //Click trade now
    setTimeout("document.querySelector('body > div.content-region.region--lightbox.j-ajaxContent.is-active > div > div.lightbox__footer.mini-quote > div > button').click();", 5000);
    //we assume we are on the buy page
    //Select 100 shares to sell, (need to change this for amount of stocks)
    setTimeout("document.querySelector('#shares').value = '8000';", 10000);
    //Click buy now button
    setTimeout("document.querySelector('body > div.content-region.region--lightbox.j-ajaxContent.is-active > div > div.lightbox.lightbox--trade.is-active.j-trade > form > div.lightbox__footer > div.button__group.align--right.u-floatRight.m100.u-oneRightMargin > button.btn.btn--primary.j-submit').click();", 15000);
    //Close out of window
    setTimeout("document.querySelector('body > div.content-region.region--lightbox.j-ajaxContent.is-active > button').click();", 20000);
    localStorage.setItem('s', 'false');
} else {
    //refresh the page
    setTimeout('document.location.reload();', 50000);
}
})();