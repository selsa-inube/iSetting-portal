import { IOptionItem, Select } from "@inubekit/select";
import { Toggle } from "@inubekit/toggle";
import { useState } from "react";


export interface SingleChoiceProps {
    checked:boolean;
    handleSelectChange: (event: React.ChangeEvent<HTMLInputElement>, name: string) => void;
    handleToggleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    id: string;
    labelSelect: string;
    labelToggle: string;
    name: string;
    options: IOptionItem[];
    required?: boolean;
    valueSelected?: string;
    valueToggle?: string;

}

export const SingleChoice = (props: SingleChoiceProps) => {

    const {
        checked,
        handleSelectChange,
        handleToggleChange,
        id,
        labelSelect,
        labelToggle,
        name,
        options,
        required,
        valueSelected = "",
        valueToggle = "",
    } = props;

    const [toogleCheck, setToogleCheck] = useState(checked),
          [valueSelect, setValueSelect] = useState(valueSelected);

    const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setToogleCheck(e.target.checked);
        handleToggleChange(e);
    }

    const handleSelect = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
      setValueSelect(event.target.innerText);
      handleSelectChange(event, name);
    }
        

  return (
    <>
        <Toggle    
          checked={ toogleCheck }
          id={ `${id}Toggle` }
          label={ labelToggle }
          margin="10px"
          name={ `${name}Toggle` }
          onChange={ handleToggle }
          padding="0px"
          size="small"
          value={ valueToggle}
        />
      {
        toogleCheck && (
          <Select
            id={ `${id}Select` }
            label={ labelSelect }
            name={ `${name}Select` }
            onChange={ handleSelect }
            options= { options }
            placeholder="Seleccione una opción"
            required={ required }
            size= "wide"
            value={ valueSelect }
          />
        )
      }
    </>
  );
};

