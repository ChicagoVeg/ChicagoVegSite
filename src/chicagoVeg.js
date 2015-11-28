
export class ChicagoVeg {
	constructor() {
		// viewmodel's model
		this.router = null;
	}

	configureRouter(config, router) {
		config.title = 'ChicagoVeg';

		// need default router: https://github.com/aurelia/router/issues/62
		config.map([
			{ route: ['', 'mission'], 'name':"mission", moduleId: 'src/mission/mission', title: 'Mission', nav: true },
			{ route: 'news', 'name':"news", moduleId: 'src/news/news', title: 'News', nav: true }, 
			{ route: 'resources', 'name':"resources", moduleId: 'src/resources/resources', title: 'Resources', nav: true },
			{ route: 'about', 'name':"about", moduleId: 'src/about/about', title: 'About', nav: true }  
		]);

		this.router = router;
	}
}