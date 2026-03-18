<<<<<<< HEAD
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';


const getContextFromGlobal = (): any | undefined => {
  try {
    const g = (globalThis as any);
    return g?.context ?? g?.__server_context ?? undefined;
  } catch {
    return undefined;
  }
};


export default function serverBootstrap(context?: any) {
 
  const ctx = context ?? getContextFromGlobal();

  const baseProviders = Array.isArray(config) ? config : [config];

  const extraProviders = (ctx && Array.isArray(ctx.providers))
    ? [...baseProviders, ...ctx.providers]
    : baseProviders;

  return bootstrapApplication(App, { providers: extraProviders }, ctx);
}
=======
import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';

const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(App, config, context);

export default bootstrap;
>>>>>>> origin/dev
