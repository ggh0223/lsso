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
exports.UpdateSystemDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateSystemDto {
}
exports.UpdateSystemDto = UpdateSystemDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '시스템 이름',
        example: 'Sample System',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateSystemDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '시스템 설명',
        example: 'This is a sample system description',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateSystemDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '시스템 도메인',
        example: 'example.com',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateSystemDto.prototype, "domain", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '허용된 출처 URL 목록',
        example: ['https://sample-system.com'],
        type: [String],
        required: false,
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], UpdateSystemDto.prototype, "allowedOrigin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '헬스 체크 URL',
        example: 'https://sample-system.com/health',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateSystemDto.prototype, "healthCheckUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '클라이언트 ID',
        example: 'client-a1b2c3d4',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateSystemDto.prototype, "clientId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '클라이언트 시크릿',
        example: 'secret-a1b2c3d4e5f6',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateSystemDto.prototype, "clientSecret", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '활성 여부',
        example: true,
        required: false,
    }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateSystemDto.prototype, "isActive", void 0);
//# sourceMappingURL=update-system.dto.js.map