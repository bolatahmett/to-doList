describe('as a user,i need to remove one item to my list', () => {
    it('Displays the message in the list', () => {
        cy.visit('http://localhost:9000');

        cy.get('[id="taskMessage"]')
            .type('Task1');

        cy.get('[id="addButton"]')
            .click();

        cy.get('[id="taskMessage"]')
            .type('Task2');

        cy.get('[id="addButton"]')
            .click();

        cy.get('.task-item')
            .eq(0)
            .click();

        cy.should('have.class', 'selected-task-item');

        // cy.get('.selected-task-item')
        //     .should('exist');

        cy.get('[id="removeButton"]')
            .click();

        cy.should('not.have.class', 'selected-task-item');
    });
});