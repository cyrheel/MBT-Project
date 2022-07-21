describe("#Init", () => {
  it("Go to '/'", () => {
    cy.visit("/");
  });
});

describe("#UseCase: Navigate", () => {
  it("should properly navigate", () => {
    cy.visit("/");
    cy.get("#goProjects").click();
    cy.url().should("include", "/projetList");
    cy.get("#goLogin").click();
    cy.url().should("include", "/login");
    cy.get("#goRegister").click();
    cy.url().should("include", "/register");
    cy.get("#goHome").click();
    cy.url().should("include", "/");
    cy.get("#goUserParams").click();
    cy.url().should("include", "/userparam");
  });
});

describe("#UseCase: Create Project", () => {
  it("should properly create a project", () => {
    cy.visit("/projetCreation");
    cy.get("#projName").type("TestProject");
    cy.get("#projMembers").select("User2");
  });
});
