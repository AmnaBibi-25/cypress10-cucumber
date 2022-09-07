/// <reference types="Cypress" />

import ProductCategoryPage from '../../pageObjects/shop_products/ProductCategoryPage';
import ProductListingsPage from '../../pageObjects/shop_products/ProductListingsPage';
import CheckoutPage from '../../pageObjects/shop_products/CheckoutPage';

const productCategoryPage = new ProductCategoryPage();
const productListingsPage = new ProductListingsPage();
const checkoutPage = new CheckoutPage();

export const clickBuyButtonUsingTemperature = () => {
    productCategoryPage.getTemperatureText().invoke('text').then((text1) => {
        const temp = parseInt(text1, 10);
        if(temp < '19') {
            productCategoryPage.clickBuyMoisturizerButton();
            productListingsPage.getProductsListingsPageTitle().invoke('text').then((text2) => {
                expect(text2).to.be.equal('Moisturizers')
            })
        }
        if (temp > '34') {
            productCategoryPage.clickBuySunscreensButton();
            productListingsPage.getProductsListingsPageTitle().invoke('text').then((text2) => {
                expect(text2).to.be.equal('Sunscreens')
            })
        }
    })
}

export const selectProductsAndMoveToCart = () => {
    productListingsPage.getProductsListingsPageTitle().invoke('text').then((text1) => {
        if(text1 == 'Moisturizers') {
            cy.selectLeastExpensiveProduct('aloe');
            cy.getFirstProductNameAndPrice();

            cy.selectLeastExpensiveProduct('almond');
            cy.getSecondProductNameAndPrice();
        }
        if(text1 == 'Sunscreens') {
            cy.selectLeastExpensiveProduct('spf-50');
            cy.getFirstProductNameAndPrice();

            cy.selectLeastExpensiveProduct('spf-30');
            cy.getSecondProductNameAndPrice();
        }
    }) 
    productListingsPage.clickCartButton();
    productListingsPage.getProductsListingsPageTitle().invoke('text').then((text) => {
        expect(text).to.be.equal('Checkout')
    })
}

export const verifyCart = () => {
    //verify product names
    cy.get('@firstProductName').then(firstProductName => {
        cy.get('@secondProductName').then(secondProductName => {
        checkoutPage.getFirstProduct().invoke('text').then(text => {
            expect(text).to.be.equal(firstProductName);
        })
        checkoutPage.getSecondProduct().invoke('text').then(text => {
            expect(text).to.be.equal(secondProductName);
        })
    })   
    })
    //verify product prices
     cy.get('@firstProductPrice').then(firstProductPrice => {
        cy.get('@secondProductPrice').then(secondProductPrice => {
        checkoutPage.getFirstProductPrice().invoke('text').then(text => {
            expect(text).to.be.equal(firstProductPrice);
        })
        checkoutPage.getSecondProductPrice().invoke('text').then(text => {
            expect(text).to.be.equal(secondProductPrice);
        })

        //verify total price
        checkoutPage.getTotalPrice().invoke('text').then(text => {
            let price = text.substring(text.length - 3, text.length);
            let priceInt = parseInt(price);
            let totalPrice = parseInt(firstProductPrice) + parseInt(secondProductPrice)
            expect(priceInt).to.be.equal(totalPrice);
        })
        })
    })
}

export const fillPaymentDetails = (data) => {
    checkoutPage.clickPayWithCardButton();
    checkoutPage.getiFrameOfStripeModal().then($element => {

        const email = 'input#email'; 
        const cardNumber = 'input#card_number'; 
        const expDate = 'input#cc-exp'; 
        const cvc = 'input#cc-csc'; 
        const zipCode = 'input#billing-zip'; 
        const payButton = 'span.iconTick'; 
        const $body = $element.contents().find('body');

        let stripe = cy.wrap($body);
        stripe.find(cardNumber).click().type(data.cardNumber);
    
        stripe = cy.wrap($body);
        stripe.find(email).click().type(data.email); 
    
        stripe = cy.wrap($body);
        stripe.find(expDate).click().type(data.mmyyyy);
    
        stripe = cy.wrap($body);
        stripe.find(cvc).click().type(data.cvc);
    
        stripe = cy.wrap($body);
        stripe.find(zipCode).click().type(data.zipCode);
    
        stripe = cy.wrap($body);
        stripe.find(payButton).click(); 
    });
}

export const verifyPaymentSuccessfulOrNot = () => {
    checkoutPage.getPaymentConfirmationMessage().invoke('text').then((text) => {
        expect(text).to.be.equal('Your payment was successful. You should receive a follow-up call from our sales team.');
    })
    //add payment fail condition as well
}