import { IInvitationsEntry } from "@services/positions/invitation.types";
import { EMessageType, IMessage } from "./messages.types";

interface IAssignmentFormEntry {
  id: string;
  value: string;
  isActive: boolean;
  k_uso?: string;
  n_uso?: string;
}

interface IFormsInvitation {
  generalInformation: { entries?: IInvitationsEntry };
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
