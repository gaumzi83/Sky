import { Given, When, Then } from 'cucumber'
import HomePage from '../pageObjects/home.page'
import OffersPage from '../pageObjects/offers.page'

Given(/^I am on the home page \'(.*)\'$/, (home)=> {
    
    HomePage.open(home);//Opening home page
    HomePage.switchFrame();//Switching to cookies frame
    HomePage.frameAgreeBtn.click();//Clicking on the agree button on cookies frame
    HomePage.switchParentFrame();//Switching back to parent frame

});

When (/^I navigate to \'Deals\'$/, ()=> {

    HomePage.dealsLnk.click();//Clicking on the 'Deals' link

});

Then (/^the user should be on the \'(.*)\' page$/, (deals)=> {

    OffersPage.verifyPage(deals);//Asserting the current webpage url

});

Given (/^I am on the \'Offers\' page \'(.*)\'$/, (offers)=>{
    
    OffersPage.verifyPage(offers);//Asserting the current webpage url

});

Then (/^I see a list of offers with a price to it$/, ()=>{

    OffersPage.verifyPriceOffer("£39","£27","£46");//Asserting the offer prices

})

When (/^I search \‘(\w+)\’ in the search bar$/, (searchString)=>{
    
    HomePage.displaySearchBtn.click();//Clicking on the search button on home page
    HomePage.searchTxtBox.waitForDisplayed({timeout:20000});//Waiting for search text box to be displayed
    HomePage.searchTxtBox.setValue(searchString);//Entering search criteria in the search text box

});

Then (/^I should see an editorial section \- (.*)$/,(search)=>{

    HomePage.verifyResults(search);//Asserting the search results

});