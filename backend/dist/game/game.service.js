"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameService = void 0;
class GameService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prisma.game.create({ data });
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prisma.game.findMany();
        });
    }
    findOne(id) {
        return `This action returns a #${id} post`;
    }
    update(id, data) {
        return `This action updates a #${id} post`;
    }
    remove(id) {
        return `This action removes a #${id} post`;
    }
}
exports.GameService = GameService;
