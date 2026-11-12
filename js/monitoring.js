export const getTonerStatus = (toner) => {
  if (toner === null) {
    return "Desconhecido";
  } else if (toner <= 1) {
    return "Crítico";
  } else if (toner <= 10) {
    return "Médio";
  } else {
    return "Normal";
  }
};

export const getImagingUnitStatus = (imagingUnit) => {
  if (imagingUnit === null) {
    return "Desconhecido";
  } else if (imagingUnit <= 10) {
    return "Crítico";
  } else if (imagingUnit <= 20) {
    return "Médio";
  } else {
    return "Normal";
  }
};

export const getPrinterStatus = (printer) => {
  if (!printer.online) {
    return "Offline";   
  }

  const tonerStatus = getTonerStatus(printer.toner);
  const imagingStatus = getImagingUnitStatus(printer.imagingUnit);

  if (tonerStatus === "Crítico" || imagingStatus === "Crítico") {
    return "Crítico";
  } else if (tonerStatus === "Médio" || imagingStatus === "Médio") {
    return "Atenção";
  } else if (
    tonerStatus === "Desconhecido" ||
    imagingStatus === "Desconhecido"
  ) {
    return "Dados incompletos";
  } else {
    return "Normal";
  }
};
