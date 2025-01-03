import { useContext, useState } from "react";
import { useBusinessManagersId } from "@hooks/useBusinessManageresId";
import { AppContext } from "@context/AppContext";
import { PositionsUI } from "./interface";

const Positions = () => {
  const [searchPosition, setSearchPosition] = useState<string>("");
  const [loading] = useState<boolean>(false);

  const { appData } = useContext(AppContext);
  const { businessManagersData } = useBusinessManagersId(
    appData.businessManager.publicCode
  );

  const handleSearchPositions = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPosition(e.target.value);
  };

  return (
    <PositionsUI
      handleSearchPositions={handleSearchPositions}
      searchPosition={searchPosition}
      loading={loading}
      data={businessManagersData}
    />
  );
};

export { Positions };
