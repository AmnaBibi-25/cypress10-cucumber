/// <reference types="Cypress" />
import {Given, When, And, Then} from '@badeball/cypress-cucumber-preprocessor';
import { clickBuyButtonUsingTemperature, 
    selectProductsAndMoveToCart, 
    verifyCart, 
    fillPaymentDetails, 
    verifyPaymentSuccessfulOrNot } from '../actions/shop_products/ShopProductsActions';

beforeEach(function() {
    cy.fixture('stripeData').then(function(stripeData){
        this.stripeData = stripeData;
    })
})

Given('I navigate to Weather Shopper website', () => {
    cy.visit('/');
})

When('I select category based on current temperature', () => {
    clickBuyButtonUsingTemperature();  
})

And('I select products and move them to cart and verify cart', () => {
    selectProductsAndMoveToCart();
    verifyCart();  
})

And('I do payment', function() {
    fillPaymentDetails(this.stripeData);
})

Then('products should be successfully purchased', () => {
    verifyPaymentSuccessfulOrNot();  
})


