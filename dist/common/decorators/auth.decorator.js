"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
const common_1 = require("@nestjs/common");
exports.Token = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const token = request.headers['authorization']?.split(' ')[1];
    return token;
});
//# sourceMappingURL=auth.decorator.js.map