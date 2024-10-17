import localforage from "localforage";

import { intializedData } from "@mocks/utils/dataMock.service";
import { MockPositions } from "@mocks/privileges/positions/Positions.mock";
import { mockRoles } from "@mocks/privileges/roles/Roles.mock";
import { mockApplication } from "@mocks/privileges/application/Application.mock";

export function initializeDataDB() {
  localforage.clear();

  intializedData<(typeof MockPositions)[number]>(
    "staff-positions",
    MockPositions
  );
  intializedData<(typeof mockRoles)[number]>("staff-roles", mockRoles);
  intializedData<(typeof mockApplication)[number]>(
    "staff-application",
    mockApplication
  );
}
