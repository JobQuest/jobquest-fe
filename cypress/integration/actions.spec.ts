/// <reference types="cypress" />

describe('CRA', () => {
  it('shows learn link', function () {
    cy.visit('http://localhost:3000/user/profile')
    cy.get('img').should('be.visible')
      .and('have.attr', 'src', 'https://www.youngisthan.in/wp-content/uploads/2017/02/Pikachu-407x400.png')
  })
})