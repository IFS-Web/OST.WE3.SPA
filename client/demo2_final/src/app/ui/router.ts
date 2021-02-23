export interface RouteConfig {
    basePath: string;
    routes: {
        [ key: string ]: (() => void)
    }
}

export class Router {
    private routeConfig: RouteConfig;

    constructor(routeConfig: RouteConfig) {
        this.routeConfig = routeConfig;
    }

    public activate(route: string) {
        if (this.routeConfig.routes[route]) {
            this.routeConfig.routes[route]();
        }
      }      

    public initialize() {
        let activatedRoute = self.location.pathname;
        if (self.location.pathname.indexOf(this.routeConfig.basePath) == 0) {
            activatedRoute = self.location.pathname.substring(this.routeConfig.basePath.length);
        }
        this.activate(`/${activatedRoute}`);
    }
    

    public navigate(route: string, title?: string) {
        window.history.pushState(null, title, route);
        this.activate(route);
    }
}
