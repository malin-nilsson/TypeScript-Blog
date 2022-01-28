Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  
  describe("blog test", () => {
    it("it should add blog to the list", () => {
        // 1. Arrange
        cy.visit("http://localhost:1234");

        cy.get("#blog-name").type("My blog");
        cy.get("#author").type("Malin Nilsson");

        // 2. Act
        cy.get("#new-blog").click();
        cy.visit("http://localhost:1234/pages/blogs.html");

        // 3. Assert
        cy.get(".blogs .blog").should("have.length", 1);
    });

    it("it should allow for several blogs to be added", () => {
        // 1. Arrange
        cy.visit("http://localhost:1234");
        cy.get("#blog-name").type("My blog");
        cy.get("#author").type("Malin Nilsson");
        cy.get("#new-blog").click();
        cy.visit("http://localhost:1234/pages/blogs.html");
        cy.get(".blogs .blog").should("have.length", 1);
        cy.visit("http://localhost:1234/");
        cy.get("#blog-name").type("My new blog");
        cy.get("#author").type("Malin Nilsson");
       
        // 2. Act
        cy.get("#new-blog").click();

        // 3. Assert
        cy.visit("http://localhost:1234/pages/blogs.html");
        cy.get(".blogs .blog").should("have.length", 2);
    });


    it("it should add blog post to the list", () => {
        // 1. Arrange
        cy.visit("http://localhost:1234");
        cy.get("#blog-name").type("My blog");
        cy.get("#author").type("Malin Nilsson");
        cy.get("#new-blog").click();
        cy.visit("http://localhost:1234/pages/newpost.html");
        cy.get("#select-blog").select('My blog')
        cy.get("#title").type('My first blog post')
        cy.get("#content").type('Stay tuned for masterpieaces here.')
        cy.get("#new-post").click();
        cy.visit("http://localhost:1234/pages/blogs.html");

        // 2. Act
        cy.get(".blogs .blog").click()

        // 3. Assert
        cy.get(".blog-container .blogpost-container").should("have.length", 1);
    });


    it("it should delete blog post from the list", () => {
        // 1. Arrange
        cy.visit("http://localhost:1234");
        cy.get("#blog-name").type("My blog");
        cy.get("#author").type("Malin Nilsson");
        cy.get("#new-blog").click();
        cy.visit("http://localhost:1234/pages/newpost.html");
        cy.get("#select-blog").select('My blog')
        cy.get("#title").type('My first blog post')
        cy.get("#content").type('Stay tuned for masterpieaces here.')
        cy.get("#new-post").click();
        cy.visit("http://localhost:1234/pages/blogs.html");
        cy.get(".blogs .blog").click()
        cy.get(".blog-container .blogpost-container").click();

        // 2. Act
        cy.get("#delete-button").click();

        // 3. Assert
        cy.get(".blog-container .blogpost-container").should("have.length", 0);
    });
})