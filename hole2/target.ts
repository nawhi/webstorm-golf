// Extract a type called LogFn! (Par: 8)

type LogFn = (msg: string, ...args: any[]) => void;
export type Logger = {
  fatal: LogFn;
  error: LogFn;
  warn: LogFn;
  log: LogFn;
  info: LogFn;
  debug: LogFn;
  trace: LogFn
}
