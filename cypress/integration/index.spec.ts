describe('index page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders the 2 rows when selecting 2 in the row input', () => {
    cy.get('#data-input-label').first().should('have.text', 'Data');
    cy.get('#row-input').first().clear().type('2');

    cy.get('.MuiGrid-root.MuiGrid-container .MuiGrid-root.MuiGrid-container .MuiGrid-root.MuiGrid-container.MuiGrid-item.MuiGrid-grid-xs-12 div')
      .should('have.length', 3);
  });

  // TODO: Error case testing
});
