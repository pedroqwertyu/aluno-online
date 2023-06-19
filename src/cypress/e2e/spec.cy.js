describe('Testando aluno-online2', () => {
  it('Novo Requerimento', () => {
    cy.visit('http://localhost:3000/requerimentos')
    cy.get('.btn').click()
    cy.get('#inputDisciplina').select("ADS030 - Manutenção de Software e DevOps")
    cy.get('#inputProva').select('A1')
    cy.get('#inputArgumentacao').type('Teste Cypress')
  })
})
document.querySelector("#inputMatricula")