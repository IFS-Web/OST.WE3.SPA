import { Container, Injectable } from '../../core';

@Injectable("CounterDataResource", [ ])
export class CounterDataResource {
    public get(): Promise<any> {
        return fetch('/api')
            .then((res) => res.json());
    }
    public sendUp(): Promise<any> {
        return fetch('/api/up', { method: 'POST' })
            .then((res) => res.json());
    }
}
