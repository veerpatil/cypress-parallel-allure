describe('template spec', () => {
  it('test1', {tags: ['@smoke', '@regression']}, () => {
    cy.visit('https://example.cypress.io')
    expect(false).to.be(true)
  })
})