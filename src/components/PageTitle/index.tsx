import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { Icon } from "@inubekit/icon";
import { useMediaQuery } from "@inubekit/hooks";
import { isMobile580 } from "@config/environment";
import { basic } from "@design/tokens";

interface IPageTitle {
  title: string;
  icon?: React.ReactNode;
  description: string;
  navigatePage?: string;
}

const PageTitle = ({ title, icon, description, navigatePage }: IPageTitle) => {
  const smallScreen = useMediaQuery(isMobile580);
  const navigate = useNavigate();

  return (
    <>
      <Stack gap={basic.spacing.s8} direction="column">
        <Stack gap={basic.spacing.s8} alignItems="center">
          {icon ? (
            <Icon
              appearance="dark"
              cursorHover={true}
              icon={icon}
              spacing="narrow"
              size="20px"
            />
          ) : (
            <Icon
              appearance="dark"
              cursorHover={true}
              icon={<MdArrowBack />}
              spacing="narrow"
              size="20px"
              onClick={() =>
                navigatePage ? navigate(navigatePage) : navigate(-1)
              }
            />
          )}
          <Text as="h1" type="title" size={smallScreen ? "medium" : "large"}>
            {title}
          </Text>
        </Stack>
        <Text appearance="gray" size={smallScreen ? "small" : "medium"}>
          {description}
        </Text>
      </Stack>
    </>
  );
};

export { PageTitle };
export type { IPageTitle };
