import React, { Component } from "react";

import InputFullSalary from "./components/InputFullSalary";
import InputReadOnly from "./components/InputReadOnly";
import { calculateSalaryFrom } from "./helpers/salary";

import css from "./components/estelizar.module.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      number: 1,
      calculation: {
        baseINSS: 0,
        discountINSS: 0,
        baseIRPF: 0,
        discountIRPF: 0,
        netSalary: "",
      },
    };
  }
  componentDidUpdate(_, previousState) {
    const { number: oldNumber } = previousState;
    const { number: newNumber } = this.state;
    if (oldNumber !== newNumber) {
      const calculation = calculateSalaryFrom(this.state.number);
      this.setState({ calculation });
    }
  }

  handleInputChange = (e) => {
    const newSalary = Number(e.target.value);
    this.setState({ number: newSalary });
  };
  render() {
    const { number, calculation } = this.state;
    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
    } = calculation;
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>React Salário</h1>
        <InputFullSalary value={number} change={this.handleInputChange} />
        <div className={css.flex}>
          <InputReadOnly description="Base INSS" value={baseINSS} />

          <InputReadOnly
            description="Desconto INSS"
            value={discountINSS + (discountINSS / number || 0) * 100}
          />
          <InputReadOnly description="Base IRPF" value={baseIRPF} />
          <InputReadOnly description="Desconto IRPF" value={discountIRPF} />
          <InputReadOnly description="Salário liquido" value={netSalary} />
        </div>
      </div>
    );
  }
}
