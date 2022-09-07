/// <reference types="Cypress" />

export const splitTextOnComma = (str) => {
    const data = str.split(",");
    const price = parseInt(data[1]);  
    return price;
}
