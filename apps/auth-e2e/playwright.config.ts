import { createE2EConfig } from '@omnisphere-portal/testing';

export default createE2EConfig(__filename, { appName: 'auth', port: 4201 });
