import { CounterModel } from './counter-model';
import { CounterDataResource } from '../dl/counter-data-resource';

/**
 * Service which handles "Couting"
 */
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
