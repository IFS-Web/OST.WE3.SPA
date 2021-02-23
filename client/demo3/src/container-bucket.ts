export interface ContainerBucket {
    name: string;
    dependencies: string[];
    type: new (...any: any[]) => any;
    instance: Object;
}
