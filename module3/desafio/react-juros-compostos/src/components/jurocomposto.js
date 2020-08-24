import React, { useEffect, useState } from "react";
import { compoundInterest } from "../helpers/interest";
import { formatCurrency, formatPercent } from "../helpers/formathelpers";
import Box from "./box";

import { Chart } from "primereact/chart";

export default function JuroComposto() {
  const [compoundInterests, setCompoundInterests] = useState([]);
  const [dataChartLine, setDataChartLine] = useState({});
  const [initialCapital, setCapitialInicial] = useState();
  const [monthlyInterest, setMonthlyInterest] = useState("");
  const [monthPeriod, setMonthPeriod] = useState("");

  useEffect(() => {
    const getCompoundInterest = () => {
      return compoundInterest(initialCapital, monthlyInterest, monthPeriod);
    };

    /* usado pra montar o grafico */
    const chartLine = getCompoundInterest();
    const chartLabels = [0];
    const chartAccumulatedMoney = [initialCapital];
    const chartTotalInterest = [0];
    const chartInitialCapital = [initialCapital];

    chartLine.forEach(({ month, monthValue, valueMonthInterest }) => {
      chartLabels.push(month);
      chartAccumulatedMoney.push(monthValue);
      chartTotalInterest.push(valueMonthInterest);
      chartInitialCapital.push(initialCapital);
    });

    setDataChartLine({
      labels: chartLabels,
      datasets: [
        {
          label: "Dinheiro investido",
          data: chartInitialCapital,
          fill: false,
          backgroundColor: "#66BB6A",
          borderColor: "#66BB6A",
        },
        {
          label: "Dinheiro acumulado",
          data: chartAccumulatedMoney,
          fill: false,
          backgroundColor: "#42A5F5",
          borderColor: "#42A5F5",
        },
        {
          label: "Total em juros",
          data: chartTotalInterest,
          fill: false,
          backgroundColor: "#ef5350",
          borderColor: "#ef5350",
        },
      ],
    });

    /* conforme desafio */
    setCompoundInterests(getCompoundInterest());
  }, [initialCapital, monthlyInterest, monthPeriod]);

  const handleChangeInitialMoney = (event) => {
    setCapitialInicial(event.target.value);
  };

  const handleChangeMonthlyInterest = ({ target }) => {
    // desestruturando do target direto aonde se coloca a chaves
    setMonthlyInterest(target.value);
  };
  const handleChangePeriodoMensal = ({ target }) => {
    //quando tive mais de um item pra busca da target
    const { value } = target;
    setMonthPeriod(value);
  };

  return (
    <div>
      <div className="row">
        <div className="col s4">
          <label>Montante inicial: </label>
          <input
            type="number"
            value={initialCapital}
            onChange={handleChangeInitialMoney}
          ></input>
        </div>

        <div className="col s4">
          <label>Taxa de juros mensal: </label>
          <input
            type="number"
            value={monthlyInterest}
            min="-12"
            max="12"
            step="0.1"
            onChange={handleChangeMonthlyInterest}
          ></input>
        </div>
        <div className="col s4">
          <label>Perido (mensal): </label>
          <input
            type="number"
            value={monthPeriod}
            min="1"
            max="72"
            onChange={handleChangePeriodoMensal}
          ></input>
        </div>
      </div>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {/* conforme desafio */}
        {compoundInterests.map((montante) => {
          const {
            month,
            monthValue,
            valueMonthInterest,
            percentageMonth,
          } = montante;
          return (
            <Box key={month}>
              <div className="card horizontal z-depth-4">
                <div className="card-stacked">
                  <div className="card-content">
                    <div className="right-align">
                      <h5>{month}</h5>
                    </div>
                    <p>{formatCurrency(monthValue)}</p>
                    <p>
                      {
                        valueMonthInterest > 0
                          ? `+ (${formatCurrency(valueMonthInterest)})`
                          : formatCurrency(valueMonthInterest)
                        // ? formatCurrency(montante.valorMensalMaisJuros)
                        // : formatCurrency(montante.valorMensalMaisJuros)
                      }
                    </p>
                    <p>{formatPercent(percentageMonth)}</p>
                  </div>
                </div>
              </div>
            </Box>
          );
        })}

        {/* usado pra montar o grafico */}
        {
          <Chart
            type="line"
            data={dataChartLine}
            options={options}
            width="70%"
            height="20%"
          />
        }
      </div>
    </div>
  );
}

/* usado para estilizar o grafico */
const options = {
  legend: {
    position: "left",
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
        scaleLabel: {
          display: true,
          labelString: "Capital",
          padding: 8,
        },
      },
    ],
    xAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: "Mesês",
        },
      },
    ],
  },
};
