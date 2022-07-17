describe("Funcionalidade de Login",()=>{
    beforeEach(()=>{
        cy.visit("www.saucedemo.com/");
    });

     //test especifico
    it("Login con Sucesso",()=>{
        cy.log("Funciono");
    });
});