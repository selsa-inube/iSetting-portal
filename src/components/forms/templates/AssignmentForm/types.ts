interface IEntry {
  id: string;
  value: string;
  isActive: boolean;
  k_uso?: string;
  n_uso?: string;
}

interface Option {
  id: string;
  label: string;
  checked?: boolean;
  onchange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const titlesOptions = [
  {
    id: "id",
    titleName: "",
    priority: 0,
    value: "isActive",
    type: "toggle",
  },
  {
    id: "rol",
    titleName: "Rol",
    priority: 1,
    value: "id",
  },
  {
    id: "value",
    titleName: "Aplicación",
    priority: 2,
    value: "value",
  },
];

export type { IEntry, Option };
