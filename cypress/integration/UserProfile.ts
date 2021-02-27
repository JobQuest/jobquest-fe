import { createYield } from "typescript";

describe("User Profile Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/user/profile");
  });

  it("Should display a loading message before api calls resolve", () => {
    cy.contains("Loading");
  });

  it("Should display a page title", () => {
    cy.contains("My Profile");
  });

  it("Should display a username", () => {
    cy.get(".username");
  });

  it("Should display an image", () => {
    cy.get(".hero-image");
  });

  it("Should display user's xp", () => {
    cy.get(".user-xp");
  });

  it("Should display user's email", () => {
    cy.get(".user-email");
  });

  it("Should not display info from other elements", () => {
    cy.get("body");
    cy.should("not.contain", "Level");
  });
});
