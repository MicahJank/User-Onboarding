describe('Testing the Form.js component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    })

    it('Adds texts to the forms and submits it', () => {
        cy.get('input[name="name"]')
          .type('Micah')
          .should('have.value', 'Micah');

        cy.get('input[name="email"]')
          .type('micahjank@testing.com')
          .should('have.value', 'micahjank@testing.com');
        
        cy.get('input[name="password"]')
          .type('secretpassword')
          .should('have.value', 'secretpassword');

        cy.get('input[type="checkbox"]')
          .check()
          .should('be.checked');

        cy.get('select[name="dropdown"]')
          .select('thing1')
          .should('have.value', 'thing1');

        cy.get('button[type="submit"]')
          .click();
    })

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