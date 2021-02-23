import { CounterModel } from './counter-model';
import { CounterDataResource } from '../dl/counter-data-resource';
import { Container } from '../../container';

/**
 * Service which handles "Couting"
 */
// DEMO3: @Injectable
export class CounterService {
    private dataResource: CounterDataResource;

    constructor(counterDataResource: CounterDataResource) {
        this.dataResource = counterDataResource;
    }
    public load(): Promise<CounterModel> {
        return this.dataResource.get()
            .then((dto: any) => CounterModel.fromDto(dto));
    }
    public up(): Promise<CounterModel> {
        return this.dataResource.sendUp()
            .then((dto: any) => CounterModel.fromDto(dto));
    }
}

// exports DEMO3: "CounterService", ["CounterDataResource"]
