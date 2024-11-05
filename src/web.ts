import { WebPlugin } from '@capacitor/core';

import type { CapacitorAppRestartPlugin } from './definitions';

export class CapacitorAppRestartWeb extends WebPlugin implements CapacitorAppRestartPlugin {
  async restartApp() {
    window?.location.reload();
  }
}
