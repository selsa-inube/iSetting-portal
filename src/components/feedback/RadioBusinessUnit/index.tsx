import { Grid } from "@inubekit/grid";
import { useMediaQueries } from "@inubekit/hooks";
import { Text } from "@inubekit/text";
import { basic } from "@design/tokens";
import { StyledRadioBusinessUnit, StyledRadio, StyledImage } from "./styles";

interface RadioBusinessUnitProps {
  id: string;
  label: string;
  logo: string;
  name: string;
  value: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

function RadioBusinessUnit(props: RadioBusinessUnitProps) {
  const { name, id, value, label, logo, handleChange } = props;

  const mediaQueries = ["(max-width: 532px)", "(max-width: 460px)"];
  const matches = useMediaQueries(mediaQueries);
  return (
    <StyledRadioBusinessUnit>
      <Grid
        templateColumns={
          matches["(max-width: 532px)"] ? "auto 1fr" : "auto 1fr 130px"
        }
        padding={
          matches["(max-width: 532px)"]
            ? `${basic.spacing.s100} ${basic.spacing.s200}`
            : `${basic.spacing.s200} ${basic.spacing.s300}`
        }
        height={matches["(max-width: 532px)"] ? "auto" : "72px"}
        alignItems="center"
        alignContent="center"
        gap={basic.spacing.s200}
        width="100%"
      >
        <StyledRadio
          type="radio"
          name={name}
          id={id}
          value={value}
          onChange={handleChange}
        />
        <Text size="medium">{label}</Text>
        <StyledImage src={logo} alt="Logo de empresa" />
      </Grid>
    </StyledRadioBusinessUnit>
  );
}

export { RadioBusinessUnit };
export type { RadioBusinessUnitProps };
