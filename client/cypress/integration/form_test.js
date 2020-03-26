describe('Testing the Form.js component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    })

    it('Adds texts to the forms and submits it', () => {
        // Get the Name input and type a name in it.
        cy.get('input[name="name"]')
          .type('Micah')
          .should('have.value', 'Micah');

          //Get the Email input and type an email address in it
        cy.get('input[name="email"]')
          .type('micahjank@testing.com')
          .should('have.value', 'micahjank@testing.com');
        
          //Get the password input and type a password in it
        cy.get('input[name="password"]')
          .type('secretpassword')
          .should('have.value', 'secretpassword');

          // Set up a test that will check to see if a user can check the terms of service box
        cy.get('input[type="checkbox"]')
          .check()
          .should('be.checked');

        cy.get('select[name="dropdown"]')
          .select('thing1')
          .should('have.value', 'thing1');

          // Check to see if a user can submit the form data
        cy.get('button[type="submit"]')
          .click();
    })

    // Check for form validation if an input is left empty
    it('Gives an error message if a field is left blank', () => {
        // clear is needed because the error message doesnt show unless something
        // is typed and then cleared
        cy.get('input[name="name"]')
          .type('micah')
          .clear();

        cy.get('p[data-cy="name-error"]')
          .should('be.visible');
    })
})