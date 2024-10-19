// test case 1 	The user can log in with the login form with valid credentials
describe('Login test - valid credentials', () => {
  it('Passes', () => {
    cy.visit('http://127.0.0.1:8080/');
    cy.wait(500);
    cy.get('#registerForm > .modal-footer > .btn-outline-success').click();
    cy.get('#loginEmail').type('panida123@stud.noroff.no', {
      force: true,
      delay: 20,
    });
    cy.get('#loginPassword').type('panida1234', { force: true, delay: 20 });
    cy.get('#loginForm > .modal-footer > .btn-success').click();
  });
});

// test case 2 	The user cannot submit the login form with invalid credentials and is shown a message.
describe('Login test - Invalid credentials', () => {
  it('Fails', () => {
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal(
        'Either your username was not found or your password is incorrect',
      );
    });
    cy.visit('http://127.0.0.1:8080/');
    cy.wait(500);
    cy.get('#registerForm > .modal-footer > .btn-outline-success').click();
    cy.get('#loginEmail').type('invalidEmail@stud.noroff.no');
    cy.get('#loginPassword').type('invalidPassword');
    cy.get('.modal-footer .btn-success').contains('Login').click();
  });
});

//   test case 3 The user can log out with the logout button
describe('Logout Test', () => {
  it('Passes', function () {
    cy.visit('http://127.0.0.1:8080/');
    cy.wait(500);
    cy.get('#registerForm > .modal-footer > .btn-outline-success').click();
    cy.get('#loginEmail').clear();
    cy.get('#loginEmail').type('panida123@stud.noroff.no', {
      force: true,
      delay: 20,
    });
    cy.get('#loginPassword').clear();
    cy.get('#loginPassword').type('panida1234', { force: true, delay: 20 });
    cy.get('#loginForm > .modal-footer > .btn-success').click();
    cy.get('.btn-outline-warning').click();
  });
});
