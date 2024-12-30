import { Text } from "@inubekit/text";
import { StyledNoResults } from "@components/businessUnit/styles";

interface NoResultsMessageProps {
  search: string;
}

function NoResultsMessage({ search }: NoResultsMessageProps) {
  return (
    <StyledNoResults>
      <Text size="medium">
        No se encontraron resultados para &quot;{search}&quot;.
      </Text>
      <Text size="medium">
        Por favor, intenta modificando los parámetros de búsqueda.
      </Text>
    </StyledNoResults>
  );
}

export { NoResultsMessage };
