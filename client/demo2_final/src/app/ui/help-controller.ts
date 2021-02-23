import { Router } from './router';

/**
 * Controller part of MVC
 */
export class HelpController {
    private router!: Router;

    constructor(router: Router) {
        this.router = router;
    }
    
    public async helpAction(viewRef: HTMLElement) {
        this.renderIndexView(viewRef);
    }
    
    private renderIndexView(viewRef: HTMLElement) {
        viewRef.innerHTML = `
            <h2>This is the Help View!</h2>
            <button data-click="overview">Back To Counter</button>`;

        viewRef.querySelector('[data-click=overview]').addEventListener(
            'click',
            (e) => {
                e.preventDefault();
                this.router.navigate('/');
            });
    }
}
