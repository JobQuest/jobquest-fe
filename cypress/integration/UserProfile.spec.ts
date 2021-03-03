import { createYield } from "typescript";

describe("User Profile Page", () => {
  type Url = string
  type Name = string
  type XP = string
  type Email = string

  it("Login on the website", () => {
    const url: Url = 'http://localhost:3000/'
    cy.visit(url)
    cy.get("[data-cy=login-button]").click()
    cy.get("[name=username]").type('olga.tolstasheva@gmail.com')
    cy.get("[name=password]").type('ArtemisIsAmazing1992!')
    cy.get("[name=action]").click()
  });

  it("Should display a homepage with tabs", () => {

    cy.get("[data-cy=homepage-container]")
      .get("[data-cy=profile-tab]").should("be.visible")
      .get("[data-cy=quests-tab]").should("be.visible")
      .get("[data-cy=questslog-tab]").should("be.visible");
  });

  it("Should display a profile page", () => {
    const email: Email = "olga.tolstasheva@gmail.com"
    const xp: XP = "600"
    const username: Name = "olga.tolstasheva@gmail.com"

    cy.get("[data-cy=profile-container]")
      .should("contain", "My Profile")
      .and("contain", `${username}`)
      .and("contain", `Current XP: ${xp}`)
      .and("contain", `E-mail: ${email}`)
  });

  it("Should redirect user to a different pages by clicking on nav tabs", () => {

    cy.get("[data-cy=quests-tab]").click().url().should("include", "/quests");
    cy.get("[data-cy=questslog-tab]").click().url().should("include", "/quests-log");
    cy.get("[data-cy=profile-tab]").click().url().should("include", "/profile");
  });

  it("Should not display info from other elements", () => {
    cy.get("body");
    cy.should("not.contain", "Level");
  });

  it("Should log out user on Log Out", () => {
    cy.get('[data-cy=logout-button]').should("contain", "Log Out").click().url().should("include", "/");
  })
});
