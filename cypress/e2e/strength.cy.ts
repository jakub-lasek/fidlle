describe('Strength mode', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200')
    cy.get('.mat-tree-node').find('mat-icon[data-mat-icon-name=biceps]').parent().click();
    cy.url().should('include', '(gameSection:strength)')
  })

  it('Navigates to Strength', () => {
    cy.get('.mat-tree-node').find('mat-icon[data-mat-icon-name=biceps]').parent().click();
    cy.url().should('include', '(gameSection:strength)')
  })
})
