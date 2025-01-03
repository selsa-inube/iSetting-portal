import { StyledOptionList } from "./styles";
interface IOptionList {
  children: React.ReactNode;
  onClick?: React.ChangeEventHandler<HTMLInputElement>;
}

const OptionList = (props: IOptionList) => {
  const { children, onClick } = props;

  return <StyledOptionList $onClick={onClick}>{children}</StyledOptionList>;
};

export { OptionList };
export type { IOptionList };
