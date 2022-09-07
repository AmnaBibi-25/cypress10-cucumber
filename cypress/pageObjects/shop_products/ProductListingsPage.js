/// <reference types = "Cypress" />
class ProductListingsPage {
    getProductsListingsPageTitle() {
        return cy.get('div.row.justify-content-center > h2');
    }
    getProductName() {
        return cy.get('p.font-weight-bold.top-space-10');
    }
    getAddButton() {
        return cy.get('button.btn.btn-primary');
    }
    getPrice() {
        return cy.get('p:nth-child(3)');
    }
    clickAddButton(onclick) {
        return cy.get(`button.btn.btn-primary[onclick="${onclick}"]`).click();
    }
    clickCartButton() {
        return cy.get('button.thin-text.nav-link').click();
    }


}

export default ProductListingsPage