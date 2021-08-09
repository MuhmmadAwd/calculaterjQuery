class CalculatorEngin {
  constructor() {
    this.num1 = "";
    this.num2 = "";
    this.operator = null;
    this.theResult = "";
  }
  setNumber = (number) => {
    if (this.operator !== null) {
      this.num2 += number;
      return;
    }
    this.num1 += number;
  };
  setOperator = (theOperator) => {
    this.operator = theOperator;
  };
  calculate = () => {
    switch (this.operator) {
      case "%":
        this.theResult = Number(this.num1) % Number(this.num2);
        break;
      case "/":
        this.theResult = Number(this.num1) / Number(this.num2);
        break;
      case "*":
        this.theResult = Number(this.num1) * Number(this.num2);
        break;
      case "-":
        this.theResult = Number(this.num1) - Number(this.num2);
        break;
      case "+":
        this.theResult = Number(this.num1) + Number(this.num2);
        break;
      default:
        this.theResult = "there are an error";
        break;
    }
  };
  clearCalc = () => {
    this.num1 = "";
    this.num2 = "";
    this.operator = null;
  };
}
class CalculatorUi {
  constructor() {
    this.resultEle = "";
    this.calcEngin = new CalculatorEngin();
  } //end
  init = (e) => {
    $(".btn-num").click(this.onBtnClick);
    $(".btn-operator").click(this.OnOperatorClick);
    $(".btn-equal").click(this.onEqualClick);
    this.resultEle = $(".resultEle");
    $(".btn-clear").click(this.onClearClick);
  };
  onBtnClick = (e) => {
    let number = $(e.target).data("number");
    this.calcEngin.setNumber(number);
    if (this.calcEngin.operator !== null) {
      this.displayResult(this.calcEngin.num2);
      return;
    }
    this.displayResult(this.calcEngin.num1);
  }; //end
  OnOperatorClick = (e) => {
    let theOperator = $(e.target).data("operator");
    this.calcEngin.setOperator(theOperator);
    this.displayResult("");
  }; //end
  onEqualClick = () => {
    this.calcEngin.calculate();
    this.displayResult(this.calcEngin.theResult);
  }; ///end

  onClearClick = () => {
    this.calcEngin.clearCalc();
    this.displayResult(0);
  }; //end
  displayResult = (massage) => {
    this.resultEle.text(massage);
  }; //end
} /** class end **/
let calc1 = new CalculatorUi();
$(document).ready(function () {
  calc1.init();
});
