import Page from '../pageObjects/page'

class HomePage extends Page {

    //Defining selectors for 'HomePage'
    get cookiesFrame() {return $("//iframe[@id='sp_message_iframe_207015']");} //Cookies Frame
    get frameAgreeBtn() {return $("//button[@title='Agree']");} //Agree button on Cookies Frame
    get dealsLnk() {return $("//*[@id='masthead-navigation']/div/div[1]/div[1]/nav/ul/li[5]/div/div[1]/a");} //Link for Offers Page
    get displaySearchBtn() {return $("//button[@id='masthead-search-toggle']");} //Search button to display search text box
    get searchTxtBox() {return $("//input[@type='search']");}//Search text box
    get searchResultsPreview() {return $("//*[@id='search-results-container']/div[1]/div[1]/div[2]/div/div[1]/a");}//Search Results preview box

    //Calling 'open' function from the parent class 'Page' to open a webpage
    open(url) {
        super.open(url);
    }
    //To switch frames
    switchFrame() {
        browser.switchToFrame(this.cookiesFrame);
    }
    //To switch back to parent frame
    switchParentFrame() {
        browser.switchToParentFrame();
    }
    //To assert search result
    verifyResults(compText) {
        this.searchResultsPreview.waitForDisplayed({timeout:20000});//Waiting for search results box to be displayed
        const result = this.searchResultsPreview;
        expect (result).toHaveTextContaining(compText);
    }
}
//Exporting an instance of 'HomePage'
export default new HomePage()