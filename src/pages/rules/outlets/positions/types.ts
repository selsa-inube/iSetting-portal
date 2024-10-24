export interface IActions {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface IAction {
  id: string;
  actionName: string;
  content: (entry: IActions) => React.ReactNode;
}
