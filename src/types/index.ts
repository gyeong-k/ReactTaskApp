export interface Itask {
  taskId: string;
  taskName: string;
  taskDescription: string;
  takeOwner: string;
}

export interface ILogItem {
  logId: string;
  logAuthor: string;
  logMessage: string;
  logTimestamp: string;
}
