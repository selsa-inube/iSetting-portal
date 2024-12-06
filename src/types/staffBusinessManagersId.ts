interface IBusinessManagerStaffMissionByRole {
  missionId: string;
  roleId: string;
  transactionOperation: "Insert";
}
interface IBusinessUnitsPortalStaffId {
  abbreviatedName: string;
  businessManagerId: string;
  businessManagerStaffMissionByRole: IBusinessManagerStaffMissionByRole[];
  descriptionUse: string;
  missionId: string;
  publicCode: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export type { IBusinessUnitsPortalStaffId };
