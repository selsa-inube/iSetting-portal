import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Meta, StoryFn } from "@storybook/react";
import { Button } from "@inubekit/button";

import { IRuleDecision, ValueDataType, ValueHowToSetUp } from "@pages/rules/types";
import { DecisionModalEdit, DecisionModalEditProps } from "..";

const meta: Meta<typeof DecisionModalEdit> = {
    title: "components/feedback/DecisionModalEdit",
    component: DecisionModalEdit,
    decorators: [
        (Story: StoryFn) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
};

const getData = (): IRuleDecision => {
    const decision: IRuleDecision = {
        decision: {
            name: "TasaEfectivaAnual",
            description: "Tasa de interés efectiva anual",
            typeData:ValueDataType.ALPHABETICAL,
            possibleValue: {
                list: ["10%", "15%", "20%", "25%"],
                listSelected: ["20%"],
            },
            howToSetUp: ValueHowToSetUp.LIST_OF_VALUES,
            startDate: new Date("2024-08-15"),
            endDate: new Date("2024-09-15"),
        },
        conditions: [
            {
                name: "PlazoMeses",
                description: "Plazo en meses",
                typeData:ValueDataType.NUMBER,
                possibleValue: {
                    rangeFrom: 1,
                    rangeTo: 12,
                },
                howToSetUp: ValueHowToSetUp.RANGE,
            },
            {
                name: "ScoringRiesgo",
                description: "Scoring de riesgo",
                typeData:ValueDataType.NUMBER,
                possibleValue: {
                    rangeFrom: 100,
                    rangeTo: 700,
                },
                howToSetUp: ValueHowToSetUp.RANGE,
            },
            {
                name: "CategoriaCliente",
                description: "Categoria del cliente",
                typeData:ValueDataType.ALPHABETICAL,
                possibleValue: {
                    list: [
                        "Funcionario",
                        "Independiente",
                        "Pensionado",
                        "Empleado",
                    ],
                    listSelected: ["Independiente", "Pensionado"],
                },
                howToSetUp: ValueHowToSetUp.LIST_OF_VALUES_MULTI,
            },
            {
                name: "Riesgo",
                description: "Riesgo",
                typeData:ValueDataType.ALPHABETICAL,
                possibleValue: {
                    list: ["Muy alto", "Alto", "Medio", "Bajo", "Muy bajo"],
                    listSelected: ["Medio"],
                },
                howToSetUp: ValueHowToSetUp.LIST_OF_VALUES,
            },
            {
                name: "CarteraDescubierto",
                description: "Cartera de descubierto",
                typeData:ValueDataType.CURRENCY,
                possibleValue: {
                    rangeFrom: 1000000,
                    rangeTo: 15000000,
                },
                howToSetUp: ValueHowToSetUp.RANGE,
            },
            {
                name: "FechaTasa",
                description: "Fecha Tasa",
                typeData:ValueDataType.DATE,
                possibleValue: {
                    value: "2024-08-15",
                },
                howToSetUp: ValueHowToSetUp.EQUAL,
            },
            {
                name: "Porcentaje",
                description: "Porcentaje",
                typeData:ValueDataType.PERCENTAGE,
                possibleValue: {
                    value: 10,
                },
                howToSetUp: ValueHowToSetUp.EQUAL,
            },
            {
                name: "Monto",
                description: "Monto",
                typeData:ValueDataType.CURRENCY,
                possibleValue: {
                    value: 1000000,
                },
                howToSetUp: ValueHowToSetUp.EQUAL,
            }
        ],
    };
    return decision;
};

const getNotCondition = (): IRuleDecision => {
    const decision: IRuleDecision = {
        decision: {
            name: "TasaEfectivaAnual",
            description: "Tasa de interés efectiva anual",
            typeData: ValueDataType.NUMBER,
            howToSetUp: ValueHowToSetUp.LIST_OF_VALUES,
            possibleValue: {
                value: 10,
            },
            startDate: new Date("2024-08-15"),
            endDate: new Date("2024-09-15"),
        },
        conditions: [
        ],
    };
    return decision;
};

const Template: StoryFn<DecisionModalEditProps> = (args) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Button onClick={() => setShowModal(true)}>Show Modal</Button>
            {showModal && (
                <DecisionModalEdit
                    {...args}
                    onCloseModal={() => setShowModal(false)}
                    onCancel={() => setShowModal(false)}
                    onSubmitEvent={(data) => {
                        setShowModal(false);
                        console.log({data});
                    }}
                />
            )}
        </>
    );
};

export const Default = Template.bind({});
Default.args = {
    decision: getData(),
    portalId: "portal",
    onCancel: () => console.log("Cancel"),
    onSubmitEvent: (data: IRuleDecision) => console.log("Submit", data),
};




export const NotConditions = Template.bind({});
NotConditions.args = {
    decision: getNotCondition(),
    portalId: "portal",
    onCancel: () => console.log("Cancel"),
    onSubmitEvent: (data: IRuleDecision) => console.log("Submit", data),
};

const getListMulti = (): IRuleDecision => {
    const decision: IRuleDecision = {
        decision: {
            name: "TasaEfectivaAnual",
            description: "Tasa de interés efectiva anual",
            typeData: ValueDataType.ALPHABETICAL,
            howToSetUp: ValueHowToSetUp.LIST_OF_VALUES_MULTI,
            possibleValue: {
                list: ["10%", "15%", "20%", "25%"],
                listSelected: ["20%", "25%"],
            },
            startDate: new Date("2024-08-15"),
        },
        conditions: [
            {
                name: "ScoringRiesgo",
                description: "Scoring de riesgo",
                typeData: ValueDataType.NUMBER,
                possibleValue: {
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
                    list: [
                        "Funcionario",
                        "Independiente",
                        "Pensionado",
                        "Empleado",
                    ],
                    listSelected: ["Independiente", "Pensionado"],
                },
                howToSetUp: ValueHowToSetUp.LIST_OF_VALUES_MULTI,
            },
        ],
    };
    return decision;
};

export const ListMutiple = Template.bind({});
ListMutiple.args = {
    decision: getListMulti(),
    portalId: "portal",
    onCancel: () => console.log("Cancel"),
    onSubmitEvent: (data: IRuleDecision) => console.log("Submit", data),
};

const getRange = (): IRuleDecision => {
    const decision: IRuleDecision = {
        decision: {
            name: "TasaEfectivaAnual",
            description: "Tasa de interés efectiva anual",
            typeData: ValueDataType.NUMBER,
            howToSetUp: ValueHowToSetUp.RANGE,
            possibleValue: {
                rangeFrom: 10,
                rangeTo: 25,
            },
            startDate: new Date("2024-08-15"),
            endDate: new Date("2024-09-15"),
        },
        conditions: [
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
                    rangeFrom: 1000000,
                    rangeTo: 15000000,
                },
                howToSetUp: ValueHowToSetUp.RANGE,
            },
        ],
    };
    return decision;
};

export const Range = Template.bind({});
Range.args = {
    decision: getRange(),
    portalId: "portal",
    onCancel: () => console.log("Cancel"),
    onSubmitEvent: (data: IRuleDecision) => console.log("Submit", data),
};

export default meta;
