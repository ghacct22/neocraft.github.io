var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var exampleComponent_1 = require('./component/exampleComponent');
angular2_1.bootstrap(exampleComponent_1.default, [
    router_1.ROUTER_PROVIDERS,
    angular2_1.provide(router_1.APP_BASE_HREF, { useValue: '/' }),
    angular2_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
]).catch(function (e) { return console.error(e, "\nReport errors at https://github.com/thevelourfog/slush-angular2/issues"); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9ib290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlCQUFpQyxtQkFBbUIsQ0FBQyxDQUFBO0FBQ3JELHVCQUFzRixpQkFBaUIsQ0FBQyxDQUFBO0FBRXhHLGlDQUFvQiw4QkFBOEIsQ0FBQyxDQUFBO0FBRW5ELG9CQUFTLENBQUMsMEJBQU8sRUFBRTtJQUNsQix5QkFBZ0I7SUFDaEIsa0JBQU8sQ0FBQyxzQkFBYSxFQUFFLEVBQUMsUUFBUSxFQUFFLEdBQUcsRUFBQyxDQUFDO0lBQ3ZDLGtCQUFPLENBQUMseUJBQWdCLEVBQUUsRUFBQyxRQUFRLEVBQUUsNkJBQW9CLEVBQUMsQ0FBQztDQUMzRCxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsMEVBQTBFLENBQUMsRUFBM0YsQ0FBMkYsQ0FBQyxDQUFDIn0=