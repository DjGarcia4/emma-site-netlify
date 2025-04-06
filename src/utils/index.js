export const formatDate = (date, format = "DD/MM/YYYY") => {
  if (!date) return "Fecha no válida";

  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };

  const dateObj = new Date(date);

  switch (format) {
    case "DD/MM/YYYY":
      return dateObj.toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });

    case "YYYY-MM-DD":
      return dateObj.toISOString().split("T")[0];

    case "DD MMM YYYY":
      return dateObj.toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });

    case "full":
      return dateObj.toLocaleDateString("es-ES", options);

    default:
      return dateObj.toLocaleDateString("es-ES");
  }
};

export const formatToLps = (amount) => {
  if (isNaN(amount) || amount === null) return "L 0.00";

  return new Intl.NumberFormat("es-HN", {
    style: "currency",
    currency: "HNL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};
export const generateSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/ /g, "-") // Reemplaza espacios con guiones
    .replace(/[^\w-]+/g, ""); // Elimina caracteres especiales
};
