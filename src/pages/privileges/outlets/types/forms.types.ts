import { EMessageType, IMessage } from "@ptypes/messages.types";

interface IAssignmentFormEntry {
  id: string;
  value: string;
  isActive: boolean;
}

interface IFormsInvitation {
  generalInformation: {entries?: [] };
  branches: { entries: IAssignmentFormEntry[] };
  projects: { entries: IAssignmentFormEntry[] };
  events: { entries: IAssignmentFormEntry[] };
  aidBudgetUnits: { entries: IAssignmentFormEntry[] };
  payrolls: { entries: IAssignmentFormEntry[] };
}

interface IMessageState {
  visible: boolean;
  data?: IMessage;
  type?: EMessageType;
}

export type { IFormsInvitation, IAssignmentFormEntry, IMessageState };
