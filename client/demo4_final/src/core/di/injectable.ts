import { Container, DiConstructor } from './container';

export type InjectableClass = DiConstructor;

export function Injectable(name: string, dependencies: string[]) {
    return function(constructor: InjectableClass) {
        Container.default.register(name, dependencies, constructor);
    }
}
