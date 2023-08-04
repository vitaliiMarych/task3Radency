"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrUpdateCatDto = void 0;
const class_validator_1 = require("class-validator");
const category_interface_1 = require("../../categoryes/interfaces/category.interface");
class CreateOrUpdateCatDto {
}
exports.CreateOrUpdateCatDto = CreateOrUpdateCatDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(3),
    __metadata("design:type", String)
], CreateOrUpdateCatDto.prototype, "noteContent", void 0);
__decorate([
    (0, class_validator_1.IsIn)([category_interface_1.Category.IDEA, category_interface_1.Category.RANDOM_THOUGHT, category_interface_1.Category.TASK]),
    __metadata("design:type", String)
], CreateOrUpdateCatDto.prototype, "noteCategory", void 0);
//# sourceMappingURL=createNoteOrUpdate.dto.js.map