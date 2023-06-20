describe('Testando aluno-online2', () => {
  it('Novo Requerimento', () => {
    cy.visit('http://localhost:3000')
    cy.get(':nth-child(5) > .nav-link').click()
    cy.get('.btn').click()
    cy.get('.btn-danger').click()
    cy.get('.btn-light').click()
  })
})
document.querySelector("#inputMatricula")