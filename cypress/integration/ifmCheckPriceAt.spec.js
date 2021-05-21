// ifmCheckPriceAt.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('Negativen Test über Listenpreis auf der AT-Seite', () => {

    

    it('Gehe auf die Seite ifm.com', () => {
      //Arrange
      cy.visit('/')
      //Klick auf Austria-Seite      
      cy.xpath("//a[@href='//www.ifm.com/at/de']").click()

      //Assert
      cy.get('span.inline-center >strong').should(($tr) => {
        expect($tr).to.have.contain('Österreich/Deutsch')
      })
    })

    it('Cookies akzeptieren', ()=>{
      cy.waitFor('#uc-btn-accept-banner')
        cy.get('#uc-btn-accept-banner').click()
    })
    
    it('Suchfeld einfügen', ()=>{
        cy.get('#search-bar__input').type('VVB001')
    })

    it('Suchergebnis klicken', ()=>{
        //Arrange
        cy.get('.search-overlay__result--focus >div>p.search-overlay__result-headline').click()
    })
    
    it('Preis überprüfen', ()=>{
        //Assert
        cy.get('div.label-value-pair.price-block-extended__list-price>span.label-value-pair__value').then(function($elem) {
            if ($elem.text()==='') {
                cy.log('Preis ist nicht sichtbar!')
              } else {
                cy.log('Preis ist vorhanden!')
              }
       })
    })

    it('Cookies akzeptieren', ()=>{
      cy.waitFor('#uc-btn-accept-banner')
        cy.get('#uc-btn-accept-banner').click()
    })

  })
  
  