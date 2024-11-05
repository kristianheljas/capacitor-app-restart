export interface CapacitorAppRestartPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
