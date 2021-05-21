// ifmCheckPrice.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Positiven Test über Listenpreis auf der DE-Seite', () => {
  
    it('Gehe auf die Seite ifm.com', () => {
      //Arrange
      cy.visit('/')
      //Assert
      cy.title().should('eq', 'ifm - automation made in Germany')

      //Arrange
      //cy.waitFor('.a[href="https://www.ifm.com/de/de"]')
      cy.xpath("//a[@href='https://www.ifm.com/de/de']").click()
      //Assert      
      cy.get('span.inline-center >strong').should(($tr) => {
        expect($tr).to.have.contain('Deutschland/Deutsch')
      })
      
    })      
    
    it('Preis überprüfen', ()=>{

      cy.waitFor('#uc-btn-accept-banner')
      cy.get('#uc-btn-accept-banner').click()

        //Arrange
        cy.get('#search-bar__input').type('VVB001')
        cy.waitFor('.search-overlay__result--focus >div>p.search-overlay__result-headline')
        cy.get('.search-overlay__result--focus >div>p.search-overlay__result-headline').click()

        //Assert
        //hier wird getestet, ob es genaue der Listenpreis 350 Euro beträgt!
        cy.get('div.label-value-pair.price-block-extended__list-price>span.label-value-pair__value').contains('350,00 €');

        //hier wird geprüft, ob es Listenpreis überhaupt sichtbar ist!
        cy.get('div.label-value-pair.price-block-extended__list-price>span.label-value-pair__value').then(function($elem) {
            if ($elem.text()!=='') {
                cy.log('Preis ist sichtbar!')
              } else {
                cy.log('Preis ist nicht vorhanden!')
              }
       })       
    })

   

  })
  
  