import { Container } from '../container';
import { Router } from './ui/router';

// bootstrap
document.addEventListener('DOMContentLoaded', () => {
  // invoke action for index /

  const routerOutlet: HTMLElement = document.querySelector('#appContainer');
  const router = new Router({
    basePath: '/',
    routes: {
      '/': () => Container.default.resolve('CounterController').indexAction(routerOutlet)
    }
  });
  
  router.initialize();
});