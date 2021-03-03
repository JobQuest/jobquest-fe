import { createYield } from "typescript";

describe("AvailableQuests", () => {
  type Url = string

  it("Users should be able to log in",() => {
    const url: Url = 'http://localhost:3000/'
    cy.visit(url)
    cy.get("[data-cy=login-button]")
      .click()
    cy.get("[name=username]")
      .type('greatsample44@gmail.com')
    cy.get("[name=password]")
      .type('greatSample44Password!')
    cy.get("[name=action]")
      .click()
  })

  it("Should display three different type of quest cards", () => {
    cy.get("[data-cy=quests-tab]")
      .click()
      .url()
      .should("include", "/quests");
    
    cy.get("[data-cy=quests-list-container")
        .should("be.visible")
      .get("[data-cy=quest-active")
        .should("be.visible")
      .get("[data-cy=quest-supportive")
        .should("be.visible")
      .get("[data-cy=quest-passive")
        .should("be.visible")

    cy.get(".quest-card-inner-wrapper-completed > .quest-card-inner-box > .quests-card-details")
      .should("be.visible")
      .and("have.length", 3)

    cy.get(".quest-card-inner-wrapper > .quests-card-title")
      .should("be.visible")
      .and("have.length", 3)  
  });

  it("If user clicks on an available quest card it will send them to a Quest page", () => {
    cy.get("[data-cy=quest-active")
      .should("be.visible")
      .click()
      .url()
      .should("include", "/quests/");
  });
  
  it("Users can log out", () => {
    cy.get("[data-cy=profile-tab]")
      .click();
    cy.get('[data-cy=logout-button]')
      .should("contain", "Log Out")
      .click();
  });
});
