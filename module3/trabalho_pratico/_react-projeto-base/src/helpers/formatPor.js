function porcentagem() {
  const discountINSSPor = discountINSS / number || 0;
  const discountIRPFPor = discountIRPF / number || 0;
  const discountSalar = netSalary / number || 0;
  return { discountINSSPor, discountIRPFPor, discountSalar };
}
function format(value, porc) {
  return `${value} (${porcentagem(porc)})`;
}
export { format };
