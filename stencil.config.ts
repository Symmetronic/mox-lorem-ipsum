import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'mox-lorem-ipsum',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
