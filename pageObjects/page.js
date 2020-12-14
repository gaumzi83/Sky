export default class Page {
    //To open a webpage with the given url and then maximizing window
    open(skyUrl) {
        browser.url(skyUrl);//Loading the url on browser window
        browser.setTimeout({pageLoad:10000});//Specifing the time to wait for the page to finish loading before performing any action on it
        browser.setTimeout({implicit:10000});//Specifing the time to wait for an element to be found before performing any action on it
        browser.maximizeWindow();//Maximize the browser window
    }
}