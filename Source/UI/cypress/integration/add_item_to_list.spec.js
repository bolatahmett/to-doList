describe('as a user,i need to add new item to my list', () => {
    it('Displays the message in the list', () => {
        cy.visit('http://localhost:9000');

        cy.get('[id="taskMessage"]')
            .type('Task1');

        cy.get('[id="addButton"]')
            .click();

        cy.get('[id="taskMessage"]')
            .should('have.value', '');

        cy.get('.task-item')
            .eq(0)
            .should('contain.text', 'Task1');
    });
});