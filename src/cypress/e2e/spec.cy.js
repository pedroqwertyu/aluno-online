describe('Teste 1 aluno-online', () => {
  it('Novo Requerimento', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('#inputMatricula').type('2023100')
    cy.get('#inputSenha').type('senha123')
    cy.get('body > form > button').click()
    cy.get('#navbarToggler1 > ul.navbar-nav.mr-auto.mt-2.mt-lg-0 > li:nth-child(5) > a').click()
    cy.get('body > div > div > div.card-header > a').click()
    cy.get("#inputDisciplina").select("ADS032 - Construção de Frontend")
    cy.get("#inputProva").select("A1")
    cy.get('#inputArgumentacao').type('Teste Cypress')
    cy.get('body > div > div > div.card-body > form > button').click()
    cy.get('body > div > div > div.card-body').contains('ADS032 - Construção de Frontend')
    cy.get('body > div > div > div.card-body').contains('Pendente')
  })
})

describe('Teste 2 aluno-online', () => {
  it('Novo Requerimento', () => {
    cy.visit('http://localhost:3000/requerimentos')
    cy.get(':nth-child(2) > .nav-link').click()
    cy.get('.mr-auto > :nth-child(1) > .nav-link').click()
  })
})

document.querySelector("#inputMatricula")