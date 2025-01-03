import { StyledDivider } from "./styles";

interface IDivider {
  dashed?: boolean;
}

const Divider = (props: IDivider) => {
  const { dashed } = props;

  return <StyledDivider $dashed={dashed} />;
};

export { Divider };
export type { IDivider };
