/// <reference types="cypress" />

describe(
  'Assess main hero content is loaded correctly',
  {
    env: {
      // Change with your own local server
      baseUrl: 'http://localhost:3000',
    },
  },
  () => {
    beforeEach(() => {
      cy.visit(Cypress.env('baseUrl'))
    }),
    it('Assess hero content is loaded correctly', () => {
      cy.get('[data-test="welcome-logo"]').should('be.visible').and('have.attr', 'alt', 'Nuxt logo' )
      cy.get('[data-test="welcome-header"]').should('be.visible').and('contain.text', 'Duck nuxt starter')
    }),
    it('Checks that counter is working correctly', () => {
      cy.wait(200)
      cy.get('[data-test="counter-value"]').should('contain.text', 0)
      cy.get('[data-test="increment-cta"]').should('exist').and('be.visible').click()
      cy.get('[data-test="counter-value"]').should('contain.text', 1)
      cy.get('[data-test="decrement-cta"]').should('exist').and('be.visible').click()
      cy.get('[data-test="counter-value"]').should('contain.text', 0)
      })
  },
)
