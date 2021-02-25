describe('CRA', () => {
  it('shows learn link', function () {
    cy.visit('http://localhost:3000/user/quests')
    cy.get('[data-cy=quests-list-container')
      .should('be.visible')
      .and('contain', "Available Quests")
    
    cy.get('[data-cy=quest-active]')
      .should('be.visible')
      .and('contain', "Slay the Wildabeast")
      .and('contain', "200 XP")
      .and('contain', "Encounters: 3")
      .and('contain', "Level 1")

    cy.get('[data-cy=quest-passive]')
    .should('be.visible')
    .and('contain', "Brew a Potion of Confidence")
    .and('contain', "400 XP")
    .and('contain', "Encounters: 3")
    .and('contain', "Level 1")

    cy.get('[data-cy=quest-supportive]')
    .should('be.visible')
    .and('contain', "Mend A Wizard's Spellbook")
    .and('contain', "500 XP")
    .and('contain', "Encounters: 3")
    .and('contain', "Level 1")
  })
})