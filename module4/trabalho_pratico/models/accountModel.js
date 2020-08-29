export default (mongoose) => {
  const bankSchema = mongoose.Schema({
    agencia: {
      type: Number,
      required: true,
    },
    conta: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    balance: {
      type: Number,
      required: true,
      min: 0,
    },
  });
  const bank = mongoose.model("banks", bankSchema, "banks");
  return bank;
};
