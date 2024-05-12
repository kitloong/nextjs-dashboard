describe('login spec', () => {
  it('Login page rendered', () => {
    cy.visit('/login')

    // Check if the form from login.tsx is rendered
    cy.get('input[name="username"]')
      .should('be.visible')
    cy.get('input[name="password"]')
      .should('be.visible')
    cy.get('button[type="submit"]')
      .should('be.visible')

    // Forgot password a tag with text "Forgot password?" should be visible
    cy.contains('a', 'Forgot password?')
      .should('be.visible')
    cy.contains('a', 'Register Now!')
      .should('be.visible')
  })

  it('Authentication error', () => {
    cy.visit('/login')

    // Fill in the form
    cy.get('input[name="username"]')
      .clear()
      .type('Username')
    cy.get('input[name="password"]')
      .clear()
      .type('wrong')

    cy.intercept('POST', '/api/auth/callback/credentials', {
      statusCode: 401,
      body: { url: 'http://localhost:3000/api/auth/error?error=Invalid%20username%20or%20password' },
    })

    // Submit
    cy.get('button[type="submit"]')
      .click()

    // See error message after submit
    cy.contains('Invalid username or password')
      .should('be.visible')
  })

  it('Authenticated', () => {
    cy.visit('/login')

    // Fill in the form
    cy.get('input[name="username"]')
      .clear()
      .type('Username')
    cy.get('input[name="password"]')
      .clear()
      .type('Password')

    // Submit
    cy.get('button[type="submit"]')
      .click()

    // Redirected to '/' after submit
    cy.url()
      .should('eq', `${Cypress.config().baseUrl}/`)
  })

  it('Authenticated and redirected to callback URL', () => {
    cy.visit('/login?callbackUrl=%2Fpokemons')

    // Fill in the form
    cy.get('input[name="username"]')
      .clear()
      .type('Username')
    cy.get('input[name="password"]')
      .clear()
      .type('Password')

    // Submit
    cy.get('button[type="submit"]')
      .click()

    // Redirected to '/' after submit
    cy.url()
      .should('eq', `${Cypress.config().baseUrl}/pokemons`)
  })
})
