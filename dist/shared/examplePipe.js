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
var CapitalizePipe = (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value) {
        return value.toLowerCase().replace(/\b\w/g, function (match) { return match.toUpperCase(); });
    };
    CapitalizePipe = __decorate([
        angular2_1.Pipe({
            name: 'capitalize'
        }), 
        __metadata('design:paramtypes', [])
    ], CapitalizePipe);
    return CapitalizePipe;
})();
exports.CapitalizePipe = CapitalizePipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZVBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2hhcmVkL2V4YW1wbGVQaXBlLnRzIl0sIm5hbWVzIjpbIkNhcGl0YWxpemVQaXBlIiwiQ2FwaXRhbGl6ZVBpcGUuY29uc3RydWN0b3IiLCJDYXBpdGFsaXplUGlwZS50cmFuc2Zvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHlCQUFtQixtQkFBbUIsQ0FBQyxDQUFBO0FBRXZDO0lBQUFBO0lBT0FDLENBQUNBO0lBSEFELGtDQUFTQSxHQUFUQSxVQUFXQSxLQUFhQTtRQUN2QkUsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsRUFBRUEsVUFBQUEsS0FBS0EsSUFBSUEsT0FBQUEsS0FBS0EsQ0FBQ0EsV0FBV0EsRUFBRUEsRUFBbkJBLENBQW1CQSxDQUFDQSxDQUFDQTtJQUMzRUEsQ0FBQ0E7SUFORkY7UUFBQ0EsZUFBSUEsQ0FBQ0E7WUFDTEEsSUFBSUEsRUFBRUEsWUFBWUE7U0FDbEJBLENBQUNBOzt1QkFLREE7SUFBREEscUJBQUNBO0FBQURBLENBQUNBLEFBUEQsSUFPQztBQUpZLHNCQUFjLGlCQUkxQixDQUFBIn0=