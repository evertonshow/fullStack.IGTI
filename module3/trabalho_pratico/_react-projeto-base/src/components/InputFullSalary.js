import React, { Component } from "react";

import css from "./estelizar.module.css";
export default class InputFullSalary extends Component {
  render() {
    const { value, change } = this.props;
    return (
      <div className={css.flexRow}>
        <label htmlFor="">
          {" "}
          Salário Bruto
          <input type="number" value={value} onChange={change} />
        </label>
      </div>
    );
  }
}
