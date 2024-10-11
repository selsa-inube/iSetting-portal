export interface IRuleDecision {
    decision: IDecision;
    conditions?: ICondition[];
}
export interface ICondition {
    name: string;
    description: string;
    typeData: typeof ValueDataType[keyof typeof ValueDataType];
    possibleValue: IValue;
    howToSetUp: typeof ValueHowToSetUp[keyof typeof ValueHowToSetUp];

}
export interface IDecision {
    name: string;
    description: string;
    typeData: typeof ValueDataType[keyof typeof ValueDataType];
    possibleValue: IValue;
    howToSetUp: typeof ValueHowToSetUp[keyof typeof ValueHowToSetUp];
    startDate: Date;
    endDate?: Date;
}

export interface IValue {
    value?: string | number;
    list?: string[];
    rangeTo?: number;
    rangeFrom?: number;
    listSelected?: string[];
}

export const ValueDataType = {
    ALPHABETICAL: "alphabetical",
    DATE: "date",
    CURRENCY: "currency",
    NUMBER: "number",
    PERCENTAGE: "percentage",
} as const;

export const ValueHowToSetUp = {
    EQUAL: "equal",
    RANGE: "range",
    LESS_THAN: "less_than",
    GREATER_THAN: "greater_than",
    LIST_OF_VALUES: "list_of_values",
    LIST_OF_VALUES_MULTI: "list_of_values_multi",
} as const;
