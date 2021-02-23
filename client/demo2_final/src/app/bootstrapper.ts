import { CounterController } from './ui/counter-controller';
import { HelpController } from './ui/help-controller';
import { CounterService } from './bl/counter-service';
import { CounterDataResource } from './dl/counter-data-resource';
import { Router } from './ui/router';

// bootstrap
document.addEventListener('DOMContentLoaded', () => {
  // invoke action for index /

  const routerOutlet: HTMLElement = document.querySelector('#appContainer');
  const router = new Router({
    basePath: '/',
    routes: {
      '/': () => {
        new CounterController(
          new CounterService(
            new CounterDataResource()
          )).indexAction(routerOutlet); },
      '/help': () => {
        new HelpController(router).helpAction(routerOutlet);
      }
    }
  });
  
  router.initialize();
});