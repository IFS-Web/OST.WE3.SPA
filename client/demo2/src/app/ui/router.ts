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

    // DEMO2: implement activate / navigate / initialize
    public activate(route: string) {
    }

    public initialize() {
        let activatedRoute = self.location.pathname;
        if (self.location.pathname.indexOf(this.routeConfig.basePath) == 0) {
            activatedRoute = self.location.pathname.substring(this.routeConfig.basePath.length);
        }
        this.activate(`/${activatedRoute}`);
    }

    public navigate(route: string, title?: string)  {
    }
}
