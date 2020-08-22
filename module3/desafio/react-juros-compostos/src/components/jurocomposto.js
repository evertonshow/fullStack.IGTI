import React, { useEffect, useState } from "react";
import { compoundInterest } from "../helpers/interest";
import { formatCurrency, formatPercent } from "../helpers/formathelpers";
import Box from "./box";

import { Chart } from "primereact/chart";

export default function JuroComposto({ initialMoney, interestRates, month }) {
  const [compoundINterest, setCompoundINterest] = useState([]);
  const [dataChartLine, setDataChartLine] = useState({});
  const [initialCapital, setCapitialInicial] = useState(initialMoney);
  const [monthlyINterest, setMonthlyINterest] = useState(interestRates);
  const [monthPeriod, setMonthPeriod] = useState(month);

  useEffect(() => {
    const getCompoundInterest = () => {
      return compoundInterest(
        initialCapital,

        monthlyINterest,
        monthPeriod
      );
    };

    /* usado pra montar o grafico */
    const chartLine = getCompoundInterest();
    const chartLabels = [0];
    const chartAccumulatedMoney = [initialCapital];
    const chartTotalInterest = [0];
    const chartInitialCapital = [initialCapital];

    chartLine.forEach((chart) => {
      chartLabels.push(chart.monthPeriod);
      chartAccumulatedMoney.push(chart.valorMensal);
      chartTotalInterest.push(chart.valueMonthInterest);
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
    setCompoundINterest(getCompoundInterest());
  }, [initialCapital, monthlyINterest, monthPeriod]);

  const handleChangeInitialMoney = (event) => {
    setCapitialInicial(event.target.value);
  };

  const handleChangeMonthlyINterest = (event) => {
    setMonthlyINterest(event.target.value);
  };
  const handleChangePeriodoMensal = (event) => {
    setMonthPeriod(event.target.value);
  };

  return (
    <div>
      <div className="row">
        <div className="col s4">
          <label>Montante inicial: </label>
          <input
            type="number"
            defaultValue={initialCapital}
            onChange={handleChangeInitialMoney}
          ></input>
        </div>

        <div className="col s4">
          <label>Taxa de juros mensal: </label>
          <input
            type="number"
            defaultValue={monthlyINterest}
            min="-12"
            max="12"
            step="0.1"
            onChange={handleChangeMonthlyINterest}
          ></input>
        </div>
        <div className="col s4">
          <label>Perido (mensal): </label>
          <input
            type="number"
            defaultValue={monthPeriod}
            min="1"
            max="36"
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
        {compoundINterest.map((montante) => (
          <Box key={montante}>
            <div className="card horizontal z-depth-4">
              <div className="card-stacked">
                <div className="card-content">
                  <div className="right-align">
                    <h5>{montante.monthPeriod}</h5>
                  </div>
                  <p>{formatCurrency(montante.valorMensal)}</p>
                  <p>
                    {
                      montante.valueMonthInterest > 0
                        ? `+ (${formatCurrency(montante.valueMonthInterest)})`
                        : formatCurrency(montante.valueMonthInterest)
                      // ? formatCurrency(montante.valorMensalMaisJuros)
                      // : formatCurrency(montante.valorMensalMaisJuros)
                    }
                  </p>
                  <p>{formatPercent(montante.percentageMonth)}</p>
                </div>
              </div>
            </div>
          </Box>
        ))}

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
