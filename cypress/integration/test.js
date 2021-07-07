describe("Test adding", () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/add');
  });

  it('should add object', () => {
    cy.get('#latitude').type('52.2297');
    cy.get('#longitude').type('21.0122');
    cy.get('#name').type('Warsaw');
    cy.get('#description').type('Warsaw is the capital and largest city of Poland. The metropolis stands on the Vistula River in east-central Poland');
    cy.get('#color').type('1');
    cy.get('#submit-button').click();
  });

  it('should test lat and lng', () => {
    cy.get('#latitude').type('52234tr.2297sss').blur();
    cy.get('#longitude').type('214f.0122ssss').blur();
    cy.get('#name').type('Warsaw');
    cy.get('#description').type('Warsaw is the capital and largest city of Poland. The metropolis stands on the Vistula River in east-central Poland');
    cy.get('#color').type('1');
    cy.get('#latitude-error').contains('Must be correct Coordinates')
    cy.get('#longitude-error').contains('Must be correct Coordinates')
  });

  it('should test max length description', () => {
    cy.get('#latitude').type('52.2297');
    cy.get('#longitude').type('21.0122');
    cy.get('#name').type('Warsaw');
    cy.get('#description').type('s'.repeat(300)).blur();
    cy.get('#color').type('1');
    cy.get('#description-error').contains('Max 256 letters.')
  });
})
