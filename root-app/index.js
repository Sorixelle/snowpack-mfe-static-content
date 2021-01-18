import { registerApplication, start } from 'single-spa';

registerApplication({
  name: "@demo/mfe",
  app: () => import("@demo/mfe"),
  activeWhen: '/',
});

start();
