import * as Handlebars from 'handlebars';
import { CounterService } from '../bl/counter-service';
import { Injectable } from '../../injectable';

/**
 * Controller part of MVC
 */
@Injectable("CounterController", ["CounterService"])
export class CounterController {
    private counterService: CounterService;
    private indexTemplateCompiled: HandlebarsTemplateDelegate<any>;

    constructor(counterService: CounterService) {
        this.counterService = counterService;
        this.indexTemplateCompiled = Handlebars.compile(
            document.querySelector('#index-view').innerHTML);
    }
    
    public async indexAction(viewRef: HTMLElement) {
        const model = await this.counterService.load();
        this.renderIndexView(viewRef, model);
    }
    
    private renderIndexView(viewRef: HTMLElement, model: any) {
        viewRef.innerHTML = this.indexTemplateCompiled({ counter: model });
        viewRef.querySelector('[data-click=up]').addEventListener(
            'click',
            async (e) => {
                e.preventDefault();

                const modelUp = await this.counterService.up();
                this.renderIndexView(viewRef, modelUp);
            });
    }
}