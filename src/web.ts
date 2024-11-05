import { WebPlugin } from '@capacitor/core';

import type { CapacitorAppRestartPlugin } from './definitions';

export class CapacitorAppRestartWeb extends WebPlugin implements CapacitorAppRestartPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
