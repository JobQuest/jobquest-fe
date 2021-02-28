describe("Testing the single event details page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/user/quests/1");
  });

  it("shows learn link", function () {
    cy.get("[data-cy=single-quest-container")
      .should("be.visible")
      .and("contain", "Slay the Wildabeast");

    cy.get('[alt="heart"]').should("be.visible");

    cy.get("[data-cy=encounter-story-container").should("be.visible");

    cy.get("[data-cy=quest-details]")
      .should("be.visible")
      .and("contain", "Level 1")
      .and("contain", "200 XP");

    cy.get("[data-cy=action-cards-container]")
      .should("be.visible")
      .and("contain", "Apply to 2 Job")
      .and("contain", "Attend A Networking Event");
  });
});
