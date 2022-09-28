// describe('empty spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

describe('spec.cy.js', () => {
  it('should visit', () => {
    cy.visit('http://localhost:3000/')
  })
})