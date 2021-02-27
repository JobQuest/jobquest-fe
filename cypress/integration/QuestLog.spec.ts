import { createYield } from "typescript";

describe("Quest Log", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/user/quests-log");
  });

  it("Should display a page title", () => {
    cy.get("body");
    cy.should("contain", "My Quest Log");
  });

  // it("Should contain a quest record display area", () => {
  //   cy.get("[cy-data='quest-record-title']");
  //   cy.get("[cy-data='quest-record-xp']");
  //   cy.get("[cy-data='quest-record-type']");
  // });
});
