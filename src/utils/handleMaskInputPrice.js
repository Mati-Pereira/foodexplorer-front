export function handleMaskInputPrice(value) {
  return (
    "R$ " +
    value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
  );
}
