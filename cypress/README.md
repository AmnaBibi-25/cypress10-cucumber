# Cypress Testing Project with Cucumber Integration

## Project Overview
This project demonstrates automated testing with Cypress and Cucumber for a sample e-commerce flow on [Weather Shopper](https://weathershopper.pythonanywhere.com/). The test dynamically selects products (moisturizers or sunscreens) based on the current temperature displayed on the website, completing the process through to checkout.

## Features
- Conditional product selection based on real-time temperature
- Complete end-to-end flow including product selection, cart verification, and payment
- Cucumber feature file for clear and structured test scenarios

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```


2. **Install dependencies:**
   ```bash
   npm install
   ```

## Usage
To open Cypress in interactive mode:
```bash 
npx cypress open
```

To run tests in headless mode:

```bash 
npx cypress run
```

## Test Scenario
This project includes a single end-to-end test scenario, written in Cucumber format and located in cypress/e2e/features/shop_products.feature. The feature file outlines the test as follows:

### Feature: Shop Products Based on Current Temperature
***Scenario: Shop products based on current temperature***

***Given*** I navigate to the Weather Shopper website

***When*** I select the category based on the current temperature

***And*** I select products, add them to the cart, and verify the cart contents


***And*** I proceed to payment

***Then*** Products should be successfully purchased


### Test Logic
1. ***Navigate*** to the [Weather Shopper website](https://weathershopper.pythonanywhere.com/).
2. ***Determine Product Category:***
- If the temperature is below 19°C, the test selects moisturizers.
- If the temperature is above 34°C, the test selects sunscreens.
3. ***Add Products to Cart:*** Adds two least expensive items with suggested keywords to the cart and verifies the cart.
4. ***Complete Payment:*** Proceeds to checkout, confirming the purchase.

## Project Structure
This project is organized as follows:
  ```bash 
  .
├── cypress
│   ├── actions/shop_products        # Contains action methods related to product shopping flow
│   ├── e2e/features                 # Contains feature files, including `shop_products.feature`
│   ├── fixtures                     # Stores any static test data
│   ├── pageObjects                  # Page object classes for locators and page methods
│   ├── step_definitions             # Step definitions corresponding to feature file steps
│   ├── support                      # Custom Cypress commands and global setup
│   └── utils                        # Utility functions used across tests
├── cypress.config.js                # Cypress configuration file
├── package.json                     # Project dependencies and scripts
└── README.md                        # Project documentation
```


## Technologies Used

- ***Cypress*** for end-to-end testing
- ***Cucumber*** for BDD-style scenario definitions
- ***Javascript*** for test scripts

## Learning Points
- Leveraging Cypress and Cucumber for a BDD approach
- Automating tests based on dynamic conditions like real-time data
- Structuring a modular test setup for maintainability and scalability







