import { createYield } from "typescript";

describe("Quest Log", () => {
  type Url = string

  it("Users should be able to log in",() => {
    const url: Url = 'http://localhost:3000/'
    cy.visit(url)
    cy.get("[data-cy=login-button]").click()
    cy.get("[name=username]").type('greatsample44@gmail.com')
    cy.get("[name=password]").type('greatSample44Password!')
    cy.get("[name=action]").click()
  })

  it("Each completed quest card should have quest information", () => {
    cy.get("[data-cy=questslog-tab]").click().url().should("include", "/quests-log");
    
    cy.get("[data-cy=quests-log-container]")
      .should("be.visible")
      .and("contain", "My Quest Log")
      .get("[data-cy=quests-log-wrapper]").should("be.visible")
  });
  
  it("Users can log out", () => {
    cy.get("[data-cy=profile-tab]").click();
    cy.get('[data-cy=logout-button]').should("contain", "Log Out").click();
  });
});
