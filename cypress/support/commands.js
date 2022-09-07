// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import ProductListingsPage from '../pageObjects/shop_products/ProductListingsPage';
import { splitTextOnComma } from '../utils/ArrayUtils';

const productListingsPage = new ProductListingsPage();

Cypress.Commands.add('selectLeastExpensiveProduct', (keyword) => {
    const PriceArr = [];
    productListingsPage.getAddButton().each($item => {
        cy.wrap($item).invoke('attr', 'onclick').then(onclick => {
            if(onclick.toLowerCase().includes(keyword)){
                const aloePrice = splitTextOnComma(onclick);
                PriceArr.push(aloePrice);
                PriceArr.sort(function(a, b) {return a - b});
            }
        });
    })
    productListingsPage.getAddButton().each($item => {
    cy.wrap($item).invoke('attr', 'onclick').then(onclick1 => {
        if(onclick1.toLowerCase().includes(keyword) && onclick1.includes(PriceArr[0])) {
            let productName = onclick1.substring(11, onclick1.length - 6);
            let productPrice = onclick1.substring(onclick1.length - 4, onclick1.length - 1);

            cy.wrap(productName).as('productName');
            cy.wrap(productPrice).as('productPrice');
            productListingsPage.clickAddButton(onclick1);
        }
     })
    })
})

Cypress.Commands.add('getFirstProductNameAndPrice', () => {
    cy.get('@productName').then(firstProductName => {
        cy.wrap(firstProductName).as('firstProductName');
    })
    cy.get('@productPrice').then(firstProductPrice => {
        cy.wrap(firstProductPrice).as('firstProductPrice');
    })
})

Cypress.Commands.add('getSecondProductNameAndPrice', () => {
    cy.get('@productName').then(secondProductName => {
        cy.wrap(secondProductName).as('secondProductName');
    })
    cy.get('@productPrice').then(secondProductPrice => {
        cy.wrap(secondProductPrice).as('secondProductPrice');
    })
})