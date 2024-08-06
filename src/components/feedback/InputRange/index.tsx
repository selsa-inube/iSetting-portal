import { useState } from "react";
import { Toggle } from "@inubekit/toggle";
import { Textfield } from "@inubekit/textfield";
import { Grid } from "@inubekit/grid";
import { Datefield } from "@inubekit/datefield";
import { Stack } from "@inubekit/stack";


export interface InputRangeProps {
    checked?: boolean;
    handleToggleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleInputChangeFrom: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleInputChangeTo: (event: React.ChangeEvent<HTMLInputElement>) => void;
    id: string;
    label: string;
    valueToggle?: string;
    valueFrom?: string | number;
    valueTo?: string | number;
    typeInput: ITextfieldInputType;
    required?: boolean;
}

export declare type ITextfieldInputType = (typeof inputTypes)[number];

declare const inputTypes: readonly ["date", "number"];

export const InputRange = (props: InputRangeProps) => {
    const {
        id,
        label,
        checked = false,
        valueToggle = "",
        handleToggleChange,
        handleInputChangeFrom,
        handleInputChangeTo,        
        valueFrom = "",
        valueTo = "",
        typeInput,
        required = false,
    } = props;

    const [toogleCheck, setToogleCheck] = useState(checked),
          [inputValueFrom, setInputValueFrom] = useState(valueFrom),
          [inputValueTo, setInputValueTo] = useState(valueTo);

    const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setToogleCheck(e.target.checked);
        handleToggleChange(e);
    };

    const handleChangeFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValueFrom(e.target.value);
        handleInputChangeFrom(e);
    }

    const handleChangeTo = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValueTo(e.target.value);
        handleInputChangeTo(e);
    }
    

    return (
        <>
            <Toggle
                checked={toogleCheck}
                id={`${id}Toggle`}
                label={label}
                margin="0px"
                onChange={handleToggle}
                padding="0px"
                size="large"
                value={valueToggle}
            />
            {toogleCheck && (
                <Grid templateColumns="repeat(2, 1fr)" margin="10px 0px" gap="12px">
                    <Stack>
                        {typeInput === "number" && (
                            <Textfield
                                id={`${id}TextFieldFrom`}
                                label="Desde"
                                onChange={handleChangeFrom}
                                required={required}
                                size="compact"
                                type="number"
                                value={inputValueFrom}
                            />
                        )}
                        {
                            typeInput === "date" && (
                                <Datefield
                                    id={`${id}DateFieldFrom`}
                                    label="Desde"
                                    onChange={handleChangeFrom}
                                    required={required}
                                    size="compact"
                                    value={inputValueFrom}
                                />
                            )
                        }
                    </Stack>
                    <Stack gap="12px">
                        {typeInput === "number" && (
                            <Textfield
                                id={`${id}TextFieldTo`}
                                label="Hasta"
                                onChange={handleChangeTo}
                                required={required}
                                size="compact"
                                type="number"
                                value={inputValueTo}
                            />
                        )}
                        {
                            typeInput === "date" && (
                                <Datefield
                                    id={`${id}DateFieldTo`}
                                    label="Hasta"
                                    onChange={handleChangeTo}
                                    required={required}
                                    size="compact"
                                    value={inputValueTo}
                                />
                            )
                        }
                    </Stack>
                </Grid>
            )}
        </>
    );
};
