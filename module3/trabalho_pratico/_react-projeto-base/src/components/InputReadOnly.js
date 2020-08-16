import React, { Component } from "react";
import { formatNumber } from "../helpers/formater";

import css from "./estelizar.module.css";

export default class InputReadOnly extends Component {
  render() {
    const { description, value } = this.props;
    return (
      <div className={css.flex}>
        <label>
          {description}
          <input type="text" readOnly disabled value={formatNumber(value)} />
        </label>
      </div>
    );
  }
}
