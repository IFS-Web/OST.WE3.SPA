import { ContainerBucket } from './container-bucket';

export type DiConstructor = new (...any: any[]) => any;

export class Container {
    private registrations: {
        [key: string]: ContainerBucket
    } = { };

    constructor() {
    }
    
    public register(name: string, dependencies: string[], type: DiConstructor) {
        this.registrations[name] = { name, dependencies, type, instance: null };
    }

    public resolve<T = any>(name: string): T {
        if (!this.registrations[name].instance) {
            this.registrations[name].instance = new this.registrations[name].type(...this.resolveDependencies(name));
        }
        return <T>this.registrations[name].instance;    
    }

    private resolveDependencies(name: string): any[] {
        let dependencies: any[] = [ ];
        if (this.registrations[name].dependencies) {
            this.registrations[name].dependencies.forEach(r => {
                dependencies.push(this.resolve(r));
            });
        }
        return dependencies;
    }

    public static default = new Container();
}
