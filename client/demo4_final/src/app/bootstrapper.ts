import { Container } from '../core';
import { Router } from './ui/router';

// bootstrap
document.addEventListener('DOMContentLoaded', () => {
  /* FINAL SPA SOLUTION */
  const routerOutlet = document.querySelector('#appContainer');
  const router = new Router({
      basePath: '/',
      routes: {
          '/': () => Container.default.resolve('CounterController').indexAction(routerOutlet)
      }
  });
  router.initialize();
});