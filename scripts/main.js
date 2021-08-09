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
  constructor(calcEngin, resultEle) {
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
    let number = e.target.dataset.number;
    this.calcEngin.setNumber(number);
    if (this.calcEngin.operator !== null) {
      this.displayResult(this.calcEngin.num2);
    }
    this.displayResult(this.calcEngin.num1);
  }; //end
  OnOperatorClick = (e) => {
    let theOperator = e.target.dataset.operator;
    this.calcEngin.setOperator(theOperator);
    this.displayResult("");
  }; //end
  onEqualClick = () => {
    this.calcEngin.calculate();
    this.displayResult(this.calcEngin.theResult);
  }; ///end

  onClearClick = () => {
    this.calcEngin.clearCalc();
    this.displayResult("");
  }; //end
  displayResult = (massage) => {
    this.resultEle.text(massage);
  }; //end
} /** class end **/
let calc1 = new CalculatorUi();
$(document).ready(calc1.init);
