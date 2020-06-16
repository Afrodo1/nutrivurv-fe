describe("Landing page", () => {
  it("should sucessfuly load", () => {
    cy.visit("http://localhost:3000");
  });

  it("Toggler should not be visibe", () => {
    cy.get("navbar-toggler").should("not.be.visible");
  });

  it("navbar logo link should work and go to /", () => {
    cy.get(".logo").click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/");
    });
    cy.go("back");
  });

  it("navbar Home link should work and go to /", () => {
    cy.get("#home").click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/");
    });
    cy.go("back");
  });

  it("navbar about link should work and go to /about", () => {
    cy.get("#about").click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/about");
    });
    cy.go("back");
  });

  it("navbar sign in link should work and go to /signin", () => {
    cy.get("#signIn").click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/signin");
    });
    cy.go("back");
  });

  it("navbar sign up link should work and go to /signup", () => {
    cy.get("#signUp").click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/signup");
    });
    cy.go("back");
  });

  it("Join now button should work", () => {
    cy.get("#join-now").click();
    cy.go("back");
  });

  it("Sign in button should work", () => {
    cy.get("#signIn-bttn").click();
  });
});

describe("page on small screen size", () => {
  it("should set viewport to mobile size", () => {
    cy.viewport(576, 750);

    cy.get(".navbar-toggler").should("be.visible");

    cy.get(".navbar-toggler").click();
    cy.get("#navbar").find("a").should("be.visible");
  });
});
