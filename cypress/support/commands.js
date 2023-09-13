import { faker } from "@faker-js/faker";
import constants from "../fixtures/constants.json";

Cypress.Commands.add("login", (userdata) => {
  const { email, password } = userdata;
  const {
    WelcomeButton,
    signinEmail,
    signinPassword,
    signinButton,
    signinLink,
  } = constants.locators;

  cy.visit(constants.dev.siteurl);
  cy.get(signinLink).contains(constants.validation.signinLogin).click();
  cy.get(signinEmail).type(email);
  cy.get(signinPassword).type(password);
  cy.get(signinButton).click();
});

Cypress.Commands.add("createAccount", (userdata) => {
  const {
    firstName,
    lastName,
    createEmail,
    createPassword,
    confirmPassword,
    createAccount,
    change,
    signoutButton,
  } = constants.locators;

  cy.visit(constants.dev.siteurl);
  cy.contains(constants.validation.createAccText).click();
  cy.get(firstName).type(faker.name.firstName());
  cy.get(lastName).type(faker.name.lastName());
  cy.get(createEmail).type(faker.internet.email());
  cy.get(createPassword).type(constants.validUser.password);
  cy.get(confirmPassword).type(constants.validUser.password);
  cy.get(createAccount).click();
  cy.get(change)
    .contains(constants.validation.options)
    .click({ force: true, multiple: true });
  cy.get(signoutButton)
    .contains(constants.validation.signoutText)
    .click({ force: true, multiple: true });
});
