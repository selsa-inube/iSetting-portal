import { IRuleDecision, ValueDataType, ValueHowToSetUp } from "@isettingkit/input";

const decision1: IRuleDecision = {
  id: "decision-1",
  decision: {
    name: "TasaInteresAnual",
    description: "Tasa de interés anual",
    typeData: ValueDataType.PERCENTAGE,
    possibleValue: {
      list: ["10%", "15%", "20%", "25%"],
      listSelected: ["10%"],
    },
    howToSetUp: ValueHowToSetUp.LIST_OF_VALUES,
    startDate: new Date("2024-08-15"),
    endDate: new Date("2024-09-15"),
  },
  conditions: [
    {
      name: "PlazoMeses",
      description: "Plazo en meses",
      typeData: ValueDataType.NUMBER,
      possibleValue: {
        labelFrom: "1",
        labelTo: "12",
        rangeFrom: 1,
        rangeTo: 12,
      },
      howToSetUp: ValueHowToSetUp.RANGE,
    },
    {
      name: "ScoringRiesgo",
      description: "Scoring de riesgo",
      typeData: ValueDataType.NUMBER,
      possibleValue: {
        labelFrom: "1",
        labelTo: "12",
        rangeFrom: 100,
        rangeTo: 700,
      },
      howToSetUp: ValueHowToSetUp.RANGE,
    },
    {
      name: "CategoriaCliente",
      description: "Categoria del cliente",
      typeData: ValueDataType.ALPHABETICAL,
      possibleValue: {
        list: ["Funcionario", "Independiente", "Pensionado", "Empleado"],
        listSelected: ["Independiente", "Pensionado"],
      },
      howToSetUp: ValueHowToSetUp.LIST_OF_VALUES_MULTI,
    },
    {
      name: "Riesgo",
      description: "Riesgo",
      typeData: ValueDataType.ALPHABETICAL,
      possibleValue: {
        list: ["Muy alto", "Alto", "Medio", "Bajo", "Muy bajo"],
        listSelected: ["Medio"],
      },
      howToSetUp: ValueHowToSetUp.LIST_OF_VALUES,
    },
    {
      name: "CarteraDescubierto",
      description: "Cartera de descubierto",
      typeData: ValueDataType.CURRENCY,
      possibleValue: {
        labelFrom: "1",
        labelTo: "12",
        rangeFrom: 1000000,
        rangeTo: 15000000,
      },
      value:{
        labelFrom: "desde",
        labelTo: "hasta",
      },
      howToSetUp: ValueHowToSetUp.RANGE,
    },
    {
      name: "FechaTasa",
      description: "Fecha Tasa",
      typeData: ValueDataType.DATE,
      possibleValue: {
        value: "2024-08-15",
      },
      howToSetUp: ValueHowToSetUp.EQUAL,
    },
    {
      name: "Porcentaje",
      description: "Porcentaje",
      typeData: ValueDataType.PERCENTAGE,
      possibleValue: {
        value: 10,
      },
      howToSetUp: ValueHowToSetUp.EQUAL,
    },
    {
      name: "Monto",
      description: "Monto",
      typeData: ValueDataType.CURRENCY,
      possibleValue: {
        value: 1000000,
      },
      howToSetUp: ValueHowToSetUp.EQUAL,
    },
  ],
};

const decision2: IRuleDecision = {
  id: "decision-2",
  decision: {
    name: "TasaInteresAnual",
    description: "Tasa de interés anual",
    typeData: ValueDataType.PERCENTAGE,
    possibleValue: {
      list: ["10%", "15%", "23%", "25%"],
      listSelected: ["23%"],
    },
    howToSetUp: ValueHowToSetUp.LIST_OF_VALUES,
    startDate: new Date("2024-08-15"),
    endDate: new Date("2024-09-15"),
  },
  conditions: [
    {
      name: "AntiguedadCliente",
      description: "Antigüedad del cliente (Días)",
      typeData: ValueDataType.NUMBER,
      possibleValue: {
        list: ["10%", "15%", "23%", "25%"],
        listSelected: ["25%"],
      },
      howToSetUp: ValueHowToSetUp.EQUAL,
    },
    {
      name: "ReciprocidadAhorro",
      description: "Reciprocidad de ahorro",
      typeData: ValueDataType.CURRENCY,
      possibleValue: {
        value: 10000,
      },
      howToSetUp: ValueHowToSetUp.EQUAL,
    },
  ],
};

const decision3: IRuleDecision = {
  id: "decision-3",
  decision: {
    name: "TasaInteresAnual",
    description: "Tasa de interés anual",
    typeData: ValueDataType.PERCENTAGE,
    possibleValue: {
      labelFrom: "1",
      labelTo: "12",
      rangeFrom: 12,
      rangeTo: 28,
    },
    howToSetUp: ValueHowToSetUp.RANGE,
    startDate: new Date("2024-08-15"),
    endDate: new Date("2024-09-15"),
  },
  conditions: [
    {
      name: "CategoriaCliente",
      description: "Categoría del cliente",
      typeData: ValueDataType.ALPHABETICAL,
      possibleValue: {
        list: ["Premium", "Leales"],
        listSelected: ["Premium", "Leales"],
      },
      howToSetUp: ValueHowToSetUp.LIST_OF_VALUES_MULTI,
    },
    {
      name: "ReciprocidadInversion",
      description: "Reciprocidad de inversión",
      typeData: ValueDataType.CURRENCY,
      possibleValue: {
        value: 25000,
      },
      howToSetUp: ValueHowToSetUp.EQUAL,
    },
  ],
};

const decision4: IRuleDecision = {
  id: "decision-4",
  decision: {
    name: "PorcentajeDescuento",
    description: "Porcentaje de descuento",
    typeData: ValueDataType.PERCENTAGE,
    possibleValue: {
      labelFrom: "1",
      labelTo: "12",
      rangeFrom: 24,
      rangeTo: 32,
    },
    howToSetUp: ValueHowToSetUp.RANGE,
    startDate: new Date("2024-08-15"),
    endDate: new Date("2024-09-15"),
  },
  conditions: [
    {
      name: "FrecuenciaCompra",
      description: "Frecuencia de compra",
      typeData: ValueDataType.NUMBER,
      possibleValue: {
        value: 12,
      },
      howToSetUp: ValueHowToSetUp.EQUAL,
    },
    {
      name: "Temporada",
      description: "Temporada",
      typeData: ValueDataType.ALPHABETICAL,
      possibleValue: {
        value: "Festiva",
      },
      howToSetUp: ValueHowToSetUp.EQUAL,
    },
  ],
};

const decision5: IRuleDecision = {
  id: "decision-5",
  decision: {
    name: "TasaDescuento",
    description: "Tasa de descuento",
    typeData: ValueDataType.PERCENTAGE,
    possibleValue: {
      labelFrom: "1",
      labelTo: "12",
      rangeFrom: 24,
      rangeTo: 32,
    },
    howToSetUp: ValueHowToSetUp.RANGE,
    startDate: new Date("2024-08-15"),
    endDate: new Date("2024-09-15"),
  },
  conditions: [
    {
      name: "CategoriaProducto",
      description: "Categoría del producto",
      typeData: ValueDataType.ALPHABETICAL,
      possibleValue: {
        list: ["Electrónica"],
        listSelected: ["Electrónica"],
      },
      howToSetUp: ValueHowToSetUp.LIST_OF_VALUES_MULTI,
    },
    {
      name: "ReciprocidadCompra",
      description: "Reciprocidad de compra",
      typeData: ValueDataType.CURRENCY,
      possibleValue: {
        value: 3000,
      },
      howToSetUp: ValueHowToSetUp.EQUAL,
    },
  ],
};

const decisions = [
  decision1,
  decision2,
  decision3,
  decision4,
  decision5,
];

export { decisions };
