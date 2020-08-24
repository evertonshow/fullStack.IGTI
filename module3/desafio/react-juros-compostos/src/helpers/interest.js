function compoundInterest(initialMoney, interestRates, monthPeriod) {
  const monthAmount = [
    {
      month: 0,
      monthValue: 0,
      valueMonthInterest: 0,
      percentageMonth: 0,
    },
  ];

  for (let index = 0; index <= monthPeriod; index++) {
    const montanteMaisJuros = initialMoney * (1 + interestRates / 100) ** index;
    const montanteJuroMensal = montanteMaisJuros - initialMoney;

    monthAmount[index - 1] = {
      month: index,
      monthValue: montanteMaisJuros,
      valueMonthInterest: montanteJuroMensal,
      percentageMonth: montanteJuroMensal / initialMoney,
    };
  }

  return monthAmount;
}
export { compoundInterest };
