class ProductCategoryPage {
    getTemperatureText() {
        return cy.get('#temperature');
    }
    clickBuyMoisturizerButton() {
        cy.get('a[href="/moisturizer"]').click();
    }
    clickBuySunscreensButton() {
        cy.get('a[href="/sunscreen"]').click();
    }
}
export default ProductCategoryPage
