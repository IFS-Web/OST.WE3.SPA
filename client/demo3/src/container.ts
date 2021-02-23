import { ContainerBucket } from './container-bucket';

export type DiConstructor = new (...any: any[]) => any;

export class Container {
    private registrations: {
        [key: string]: ContainerBucket
    } = { };

    constructor() {
    }
    
    public register(name: string, dependencies: string[], type: DiConstructor) {
        // DEMO3 implement register
    }

    public resolve<T = any>(name: string): T {
        // DEMO3 implement resolve
        return null;
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
