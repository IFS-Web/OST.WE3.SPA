import { CounterController } from './ui/counter-controller';
import { HelpController } from './ui/help-controller';
import { CounterService } from './bl/counter-service';
import { CounterDataResource } from './dl/counter-data-resource';
import { Router } from './ui/router';

// bootstrap
document.addEventListener('DOMContentLoaded', () => {
  // invoke action for index /

  // DEMO2: add router / routing table

  new CounterController(
    new CounterService(
      new CounterDataResource()
    )
  ).indexAction(
    document.querySelector('#appContainer')
  );

  // DEMO2: add router initialization
});