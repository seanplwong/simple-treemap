describe('index page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders hello world', () => {
    cy.get('h1').first().should('have.text', 'Hello World');

    cy.get('.MuiBox-root .MuiGrid-root .MuiGrid-root div').eq(0)
      .should('have.text', 'Hello World');
  });

  // TODO: Error case testing
});
