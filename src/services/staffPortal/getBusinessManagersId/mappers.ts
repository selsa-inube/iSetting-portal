import { IBusinessUnitsPortalStaffId } from "@ptypes/staffBusinessManagersId";

const mapBusinessUnitsPortalStaffIdApiToEntity = (
  businessUnit: IBusinessUnitsPortalStaffId
): IBusinessUnitsPortalStaffId => {
  const businessUnitData: IBusinessUnitsPortalStaffId = {
    abbreviatedName: String(businessUnit.abbreviatedName),
    businessManagerId: String(businessUnit.businessManagerId),
    descriptionUse: String(businessUnit.descriptionUse),
    missionId: String(businessUnit.missionId),
    publicCode: String(businessUnit.publicCode),
    businessManagerStaffMissionByRole: Object(
      businessUnit.businessManagerStaffMissionByRole
    ),
  };
  return businessUnitData;
};

const mapBusinessUnitsPortalStaffToEntities = (
  data: IBusinessUnitsPortalStaffId[]
): IBusinessUnitsPortalStaffId[] => {
  const missions = data
    .filter((entry) => entry.businessManagersStaffMissionCatalog?.length > 0)
    .flatMap((entry) => entry.businessManagersStaffMissionCatalog);

  return missions.map(mapBusinessUnitsPortalStaffIdApiToEntity);
};

export {
  mapBusinessUnitsPortalStaffToEntities,
  mapBusinessUnitsPortalStaffIdApiToEntity,
};
