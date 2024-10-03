import { useEffect, useState } from "react";
import { Toggle } from "@inubekit/toggle";
import { basic } from "@design/tokens";
import { Text } from "@inubekit/text";

export interface ToggleOptionProps {
    checked: boolean;
    children: React.ReactNode;
    handleToggleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    id: string;
    labelToggle: string;
    name: string;
    valueToggle?: string;
}

export const ToggleOption = (props: ToggleOptionProps) => {
    const {
        checked,
        children,
        handleToggleChange,
        id,
        labelToggle,
        name,
        valueToggle = "",
    } = props;
    const [toogleCheck, setToogleCheck] = useState(checked);
    const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setToogleCheck(e.target.checked);
        handleToggleChange(e);
    };

    useEffect(() => {
        setToogleCheck(checked);
    }, [checked]);

    return (
        <>
            <Toggle
                checked={toogleCheck}
                id={id}
                margin={basic.spacing.s10}
                name={name}
                onChange={handleToggle}
                padding={basic.spacing.s0}
                size="small"
                value={valueToggle}
            >
                <Text size="medium" type="label" weight="bold">{labelToggle}</Text>
            </Toggle>
            {toogleCheck && (<>{children}</>)}
        </>
    );
};
