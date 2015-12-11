var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var exampleDirective_1 = require('../directive/exampleDirective');
var examplePipe_1 = require('../shared/examplePipe');
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        angular2_1.Component({
            selector: 'home-component',
            styles: [".home { padding: 4% 8%; }"],
            template: "<h1 class=\"home\">Welcome to Angular2</h1>"
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
})();
var DragComponent = (function () {
    function DragComponent() {
    }
    DragComponent = __decorate([
        angular2_1.Component({
            directives: [exampleDirective_1.DragDirective],
            selector: 'drag-component',
            styles: ["\n\t\t[drag-directive] {\n\t\t\tposition: relative;\n\t\t\tbackground: url(\"res/shield.png\") center/contain no-repeat;\n\t\t\theight: 400px;\n\t\t\twidth: 400px;\n\t\t}\n\t"],
            template: "\n\t\t<div drag-directive></div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], DragComponent);
    return DragComponent;
})();
var default_1 = (function () {
    function default_1() {
        this.appName = 'neocraft.github.io';
        this.appRoutes = [
            'Home', 'Example'
        ];
    }
    default_1 = __decorate([
        angular2_1.Component({
            directives: [angular2_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
            pipes: [examplePipe_1.CapitalizePipe],
            selector: 'neocraft.github.io',
            styles: ["\n\t\t.dash {\n\t\t\talign-items: center;\n\t\t\tbackground: #555;\n\t\t\tbox-shadow: 0 2px 2px 0 rgba(0,0,0,0.16),\n              \t\t0 3px 1px -2px rgba(0,0,0,0.20),\n              \t\t0 1px 3px 0 rgba(0,0,0,0.12);\n\t\t\tcolor: #EEE;\n\t\t\tdisplay: flex;\n\t\t\tflex-flow: row wrap;\n\t\t\tjustify-content: space-between;\n\t\t\tpadding: 2%;\n\t\t\twidth: 100%;\n\t\t}\n\t\t.dash__title {\n\t\t\tflex: auto;\n\t\t\tfont-weight: normal;\n\t\t}\n\t\t.dash__nav {\n\t\t\tflex: none;\n\t\t}\n\t\t.dash__link {\n\t\t\tcolor: inherit;\n\t\t\ttext-decoration: none;\n\t\t}\n\t\t.dash__link:hover { color: #E1BEE7; }\n\t\t.dash__link.router-link-active { color: #BA68C8; }\n\t\t.dash__link:not(:first-of-type):before {\n\t\t\tcolor: #EEE;\n\t\t\tcontent: \" \u00B7 \"\n\t\t}\n\t"],
            template: "\n\t\t<header class=\"dash\">\n\t\t\t<h1 class=\"dash__title\">{{appName | capitalize}}</h1>\n\t\t\t<nav class=\"dash__nav\">\n\t\t\t\t<a class=\"dash__link\" *ng-for=\"#route of appRoutes\" [router-link]=\"[route]\">{{route}}</a>\n\t\t\t</nav>\n\t\t</header>\n\t\t<router-outlet></router-outlet>\n\t"
        }),
        router_1.RouteConfig([
            {
                path: '/',
                redirectTo: '/home'
            },
            {
                path: '/home',
                as: 'Home',
                component: HomeComponent
            },
            {
                path: '/example',
                as: 'Example',
                component: DragComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], default_1);
    return default_1;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZUNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnQvZXhhbXBsZUNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJIb21lQ29tcG9uZW50IiwiSG9tZUNvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkRyYWdDb21wb25lbnQiLCJEcmFnQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHlCQUF5QyxtQkFBbUIsQ0FBQyxDQUFBO0FBQzdELHVCQUE2QyxpQkFBaUIsQ0FBQyxDQUFBO0FBRS9ELGlDQUE0QiwrQkFBK0IsQ0FBQyxDQUFBO0FBQzVELDRCQUE2Qix1QkFBdUIsQ0FBQyxDQUFBO0FBRXJEO0lBQUFBO0lBS3FCQyxDQUFDQTtJQUx0QkQ7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1ZBLFFBQVFBLEVBQUVBLGdCQUFnQkE7WUFDMUJBLE1BQU1BLEVBQUVBLENBQUNBLDJCQUEyQkEsQ0FBQ0E7WUFDckNBLFFBQVFBLEVBQUVBLDZDQUEyQ0E7U0FDckRBLENBQUNBOztzQkFDb0JBO0lBQURBLG9CQUFDQTtBQUFEQSxDQUFDQSxBQUx0QixJQUtzQjtBQUV0QjtJQUFBRTtJQWVxQkMsQ0FBQ0E7SUFmdEJEO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNWQSxVQUFVQSxFQUFFQSxDQUFDQSxnQ0FBYUEsQ0FBQ0E7WUFDM0JBLFFBQVFBLEVBQUVBLGdCQUFnQkE7WUFDMUJBLE1BQU1BLEVBQUVBLENBQUNBLGdMQU9SQSxDQUFDQTtZQUNGQSxRQUFRQSxFQUFFQSxzQ0FFVEE7U0FDREEsQ0FBQ0E7O3NCQUNvQkE7SUFBREEsb0JBQUNBO0FBQURBLENBQUNBLEFBZnRCLElBZXNCO0FBRXRCO0lBQUE7UUErRFFFLFlBQU9BLEdBQVdBLG9CQUFvQkEsQ0FBQ0E7UUFDdkNBLGNBQVNBLEdBQWtCQTtZQUNqQ0EsTUFBTUEsRUFBRUEsU0FBU0E7U0FDakJBLENBQUNBO0lBQ0hBLENBQUNBO0lBbkVEO1FBQUMsb0JBQVMsQ0FBQztZQUNWLFVBQVUsRUFBRSxDQUFDLDBCQUFlLEVBQUUsMEJBQWlCLENBQUM7WUFDaEQsS0FBSyxFQUFFLENBQUMsNEJBQWMsQ0FBQztZQUN2QixRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLE1BQU0sRUFBRSxDQUFDLHd3QkErQlIsQ0FBQztZQUNGLFFBQVEsRUFBRSw4U0FRVDtTQUNELENBQUM7UUFDRCxvQkFBVyxDQUFDO1lBQ1o7Z0JBQ0MsSUFBSSxFQUFFLEdBQUc7Z0JBQ1QsVUFBVSxFQUFFLE9BQU87YUFDbkI7WUFDRDtnQkFDQyxJQUFJLEVBQUUsT0FBTztnQkFDYixFQUFFLEVBQUUsTUFBTTtnQkFDVixTQUFTLEVBQUUsYUFBYTthQUN4QjtZQUNEO2dCQUNDLElBQUksRUFBRSxVQUFVO2dCQUNoQixFQUFFLEVBQUUsU0FBUztnQkFDYixTQUFTLEVBQUUsYUFBYTthQUN4QjtTQUNELENBQUM7O2tCQU1EO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBbkVELElBbUVDO0FBbkVEOzJCQW1FQyxDQUFBIn0=