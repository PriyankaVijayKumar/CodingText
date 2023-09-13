import constants from "../fixtures/constants.json";

describe("Create an Account", () => {
  it("should sign up with random email and password", () => {
    cy.createAccount();
    cy.contains(constants.validation.signoutValidation).should("be.visible");
  });
});

describe("Sign In Functionality", () => {
  it("should sign in with valid credentials", () => {
    cy.login(constants.validUser);
    cy.get(constants.locators.WelcomeButton).contains(
      constants.validUser.validUserText
    );
  });

  it("should display an error message for invalid credentials", () => {
    cy.login(constants.invalidUser);
    cy.contains(constants.validation.invalidUserText).should("be.visible");
  });

  it("should display validation messages for empty fields", () => {
    cy.login(constants.emptyUser);
    cy.contains(constants.validation.invalidForm).should("be.visible");
  });

  it("should display validation messages for the password field being case-sensitive.", () => {
    cy.login(constants.caseSensitiveUser);
    cy.contains(constants.validation.invalidUserText).should("be.visible");
  });
});
