class CheckoutPage {
    getFirstProduct() {
        return cy.get('tbody tr:nth-child(1) td:nth-child(1)')
    } 
    getSecondProduct() {
        return cy.get('tbody tr:nth-child(2) td:nth-child(1)')
    }
    getFirstProductPrice() {
        return cy.get('tbody tr:nth-child(1) td:nth-child(2)')
    } 
    getSecondProductPrice() {
        return cy.get('tbody tr:nth-child(2) td:nth-child(2)')
    } 
    getTotalPrice() {
        return cy.get('p#total')
    }
    clickPayWithCardButton() {
        return cy.get('button.stripe-button-el').click();
    }
    getiFrameOfStripeModal() {
        return cy.get('iframe.stripe_checkout_app');
    }
    getStripeModalTitle() {
        return cy.get('div.title');
    }
    getPaymentSuccessTitle() {
        return cy.get('h2');
    }
    getPaymentConfirmationMessage() {
        return cy.get('p.text-justify');
    }

}
export default CheckoutPage