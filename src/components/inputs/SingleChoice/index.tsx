import { IOption, Select } from "@inubekit/select";
import { useState } from "react";

export interface SingleChoiceProps {
    handleSelectChange: (
        value: string,
        name: string
    ) => void;
    id: string;
    labelSelect: string;
    name: string;
    options: IOption[];
    required?: boolean;
    valueSelected?: string;
    message?: string;
    onBlur?: () => void;
}

export const SingleChoice = (props: SingleChoiceProps) => {
    const {
        handleSelectChange,
        id,
        labelSelect,
        name,
        options,
        required,
        valueSelected = "",
        message,
        onBlur,
    } = props;

    const [valueSelect, setValueSelect] = useState(valueSelected);

    const handleSelect = (
        name: string,
        value: string
    ) => {
        setValueSelect(value);
        handleSelectChange(value, name);
    };

    return (
        <Select
            id={id}
            label={labelSelect}
            name={name}
            onChange={handleSelect}
            options={options}
            placeholder="Seleccione una opción"
            required={required}
            size="wide"
            value={valueSelect}
            fullwidth={true}
            message={message}
            onBlur={onBlur}
        />
    );
};
