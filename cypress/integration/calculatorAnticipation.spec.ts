import { goOffline, goOnline } from "../utils/network";
import getMessageByApiStatus from "../../src/utils/getMessageByApiStatus";

describe("Calculator of Anticipation", () => {
  const inputAmmount = '[name="ammount"]';
  const inputInstallments = '[name="installments"]';
  const inputMdr = '[name="mdr"]';

  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should contain the app titles", () => {
    cy.get("h1").contains("Calculdora de Antecipação");
    cy.get("h2").contains("Simule sua Antecipação");
    cy.get("h2").contains("Você Receberá");
  });

  it("should contain the details texts", () => {
    cy.get("h3").contains("Amanhã");
    cy.get("h3").contains("Em 15 dias");
    cy.get("h3").contains("Em 30 dias");
    cy.get("h3").contains("Em 90 dias");
  });

  it("should exists the form inputs", () => {
    cy.get(inputAmmount).should("exist");
    cy.get(inputInstallments).should("exist");
    cy.get(inputMdr).should("exist");
  });

  it("should set focus on input Ammount when enter page", () => {
    cy.get(inputAmmount)
      .should("have.focus")
      .and("have.css", "border", "1px solid rgb(102, 175, 233)");
  });

  it("should others inputs have the default style", () => {
    const colorDefaultBorder = "rgb(209, 220, 227)";

    cy.get(inputInstallments).should(
      "have.css",
      "border",
      `1px solid ${colorDefaultBorder}`
    );
    cy.get(inputMdr).should(
      "have.css",
      "border",
      `1px solid ${colorDefaultBorder}`
    );
  });

  it("should all inputs start with no value", () => {
    cy.get(inputAmmount).should("have.value", "");
    cy.get(inputInstallments).should("have.value", "");
    cy.get(inputMdr).should("have.value", "");
  });

  describe("when user types on inputs", () => {
    it("should format value on input ammount", () => {
      cy.get(inputAmmount)
        .type("10")
        .invoke("val")
        .then(value => expect(value).have.lengthOf(7)); // value equal = 'R$ 0,10'
    });

    it("should format value on input mdr", () => {
      cy.get(inputMdr).type("100").should("have.value", "100%");
    });
  });

  describe("when input values are invalids", () => {
    const colorError = "rgb(244, 67, 54)";
    const iconError = '[data-testid="icon-error"]';

    it("should invalidate 'inputAmmount' when value is 0 or bigger than one million", () => {
      cy.get(inputAmmount)
        .type("0")
        .should("have.css", "border", `1px solid ${colorError}`);

      cy.get(inputAmmount).should(
        "have.css",
        "border",
        `1px solid ${colorError}`
      );

      cy.get(inputAmmount)
        .type("1000000001")
        .should("have.css", "border", `1px solid ${colorError}`);

      cy.get(iconError).should("exist");
    });

    it("should invalidate 'inputInstallments' when value is 0 or bigger than 12", () => {
      cy.get(inputInstallments)
        .type("0")
        .should("have.css", "border", `1px solid ${colorError}`);

      cy.get(inputInstallments)
        .type("13")
        .should("have.css", "border", `1px solid ${colorError}`);

      cy.get(iconError).should("exist");
    });

    it("should invalidate 'inputMdr' when value is 0 or bigger than 100", () => {
      cy.get(inputMdr)
        .type("0")
        .should("have.css", "border", `1px solid ${colorError}`);

      cy.get(inputMdr)
        .type("101")
        .should("have.css", "border", `1px solid ${colorError}`);

      cy.get(iconError).should("exist");
    });
  });

  describe("when input values are valids must make a request", () => {
    beforeEach(() => {
      cy.get(inputAmmount).type("20000");
      cy.get(inputInstallments).type("12");
      cy.get(inputMdr).type("1");
    });

    it("should show loader", () => {
      const loader = '[role="status"]';
      cy.get(loader).should("exist");
    });

    it("should show skeleton elements", () => {
      cy.get(".react-loading-skeleton").should("exist");
    });

    describe("if request is success", () => {
      beforeEach(() => {
        cy.intercept("POST", "https://hash-front-test.herokuapp.com/", {
          fixture: "anticipationResponse.json"
        }).as("requestAnticipation");
      });

      it("should set response values from API on UI", () => {
        cy.wait("@requestAnticipation").then(() => {
          /* values ​​referring to the mock: anticipationResponse */
          cy.contains("R$ 185,19").should("exist");
          cy.contains("R$ 186,12").should("exist");
          cy.contains("R$ 187,11").should("exist");
          cy.contains("R$ 190,57").should("exist");
        });
      });
    });

    describe("if request is error", () => {
      const toast = '[data-testid="toast-error"]';
      const status500 = 500;
      const status408 = 408;

      it(`should show toast with message: '${getMessageByApiStatus(
        status500
      )}' with status: ${status500}`, () => {
        cy.intercept("POST", "https://hash-front-test.herokuapp.com/", {
          statusCode: status500
        }).as("requestAnticipation");

        cy.get(toast).should("exist");
        cy.contains(getMessageByApiStatus(status500)).should("exist");
      });

      it(`should show toast with message: '${getMessageByApiStatus(
        status408
      )}' with status: ${status408}`, () => {
        cy.intercept("POST", "https://hash-front-test.herokuapp.com/", {
          statusCode: status408
        }).as("requestAnticipation");

        cy.get(toast).should("exist");
        cy.contains(getMessageByApiStatus(status408)).should("exist");
      });
    });
  });

  describe("when click on toggle theme", () => {
    const btnToggleTheme = '[data-testid="btn-toggle-theme"]';
    const iconSun = '[data-testid="icon-sun"]';
    const iconMoon = '[data-testid="icon-moon"]';

    it("should change styles", () => {
      cy.get("body").should(
        "have.css",
        "background-color",
        "rgb(245, 247, 250)"
      );

      cy.get(btnToggleTheme).click();

      cy.get("body").should("have.css", "background-color", "rgb(21, 22, 24)");
    });

    it("should show icon moon if is light theme", () => {
      cy.get(iconMoon).should("exist");
    });

    it("should show icon sun if is dark theme", () => {
      cy.get(btnToggleTheme).click();
      cy.get(iconSun).should("exist");
    });
  });

  describe("when network change", () => {
    beforeEach(goOffline);
    afterEach(goOnline);

    it("should show a message if is offline", () => {
      cy.contains(
        "Você está sem conexão com a internet. Verifique sua conexão e tente novamente mais tarde."
      ).should("exist");
    });
  });
});
