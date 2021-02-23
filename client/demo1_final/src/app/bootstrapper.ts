import { CounterController } from './ui/counter-controller';
import { CounterService } from './bl/counter-service';
import { CounterDataResource } from './dl/counter-data-resource';

// bootstrap
document.addEventListener('DOMContentLoaded', () => {
  // invoke action for index /
  new CounterController(
    new CounterService(
      new CounterDataResource()
    )
  ).indexAction(
    document.querySelector('#appContainer')
  );
});