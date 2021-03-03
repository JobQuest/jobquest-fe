import { createYield } from "typescript";

describe("Testing the single event details page", () => {
  type Url = string

  it("Users should be able to log in",() => {
    const url: Url = 'http://localhost:3000/'
    cy.visit(url)
    cy.get("[data-cy=login-button]")
      .click()
      .get("[name=username]")
      .type('greatsample44@gmail.com')
      .get("[name=password]")
      .type('greatSample44Password!')
      .get("[name=action]")
      .click()
  })

  it("Should display a single quest upon clicking on a quest card", () => {
    cy.get("[data-cy=quests-tab]")
      .click()
      .url()
      .should("include", "/quests");
    
    cy.get("[data-cy=quest-active")
      .should("contain", "Smash the Eye Monster")
      .click()
      .url()
      .should("include", "/quests/");

    cy.get("[data-cy=single-quest-container]")
      .should("be.visible")
      .get(".monster-health-container")
        .should("be.visible")
      .get("[data-cy=encounter-story-container]")
        .should("be.visible")
      .get(".img-hero")
        .should("be.visible")
      .get(".img-monster")
        .should("be.visible")
      .get("[data-cy=quest-details]")
        .should("be.visible")
      .get(".single-quest-details__title")
        .should("be.visible")
        .and("have.length", 2)
      .get("[data-cy=action-cards-container]")
        .should("be.visible")
      .get(".encounter-details__action-card")
        .should("have.length", 2)
  });

  it("Users can log out", () => {
    cy.get("[data-cy=profile-tab]")
      .click()
      .get('[data-cy=logout-button]')
      .should("contain", "Log Out")
      .click();
  });
});