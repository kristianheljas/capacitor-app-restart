import { registerPlugin } from '@capacitor/core';

import type { CapacitorAppRestartPlugin } from './definitions';

const CapacitorAppRestart = registerPlugin<CapacitorAppRestartPlugin>('CapacitorAppRestart', {
  web: () => import('./web').then((m) => new m.CapacitorAppRestartWeb()),
});

export * from './definitions';
export { CapacitorAppRestart };
