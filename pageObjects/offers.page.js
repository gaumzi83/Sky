import Page from '../pageObjects/page'

class OffersPage extends Page {

    //Defining selectors for 'OffersPage'
       get offerPrices() {return $("//*[@id='tab-1']").$$(".//div/div/div[1]/div[4]/div[1]/div[1]/div/span[1]/span/span[1]");}//Offer prices
   
    //To assert the browser url
    verifyPage (url) {
        browser.getUrl();
        expect(browser).toHaveUrl(url);
    }
    //To assert the price of offers listed on the page
    verifyPriceOffer(...offerPrice) {
        var offerPriceList = [];
        this.offerPrices.map(function(element){
        offerPriceList.push(element.getText());               
        })
        let num = 0;
        for (const price of offerPrice)   {
        expect (offerPriceList[num]).toContain(offerPrice[num]);
        num+=1;
        }
    }
}
//Exporting an instance of 'OffersPage'
export default new OffersPage()