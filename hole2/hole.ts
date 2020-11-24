// Extract a type called LogFn!

export type Logger = {
  fatal: (msg: string, ...args: any[]) => void;
  error: (msg: string, ...args: any[]) => void;
  warn: (msg: string, ...args: any[]) => void;
  log: (msg: string, ...args: any[]) => void;
  info: (msg: string, ...args: any[]) => void;
  debug: (msg: string, ...args: any[]) => void;
  trace: (msg: string, ...args: any[]) => void
}
