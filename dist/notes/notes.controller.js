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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesController = void 0;
const common_1 = require("@nestjs/common");
const notes_service_1 = require("./notes.service");
const createNoteOrUpdate_dto_1 = require("./dto/createNoteOrUpdate.dto");
let NotesController = exports.NotesController = class NotesController {
    constructor(notesService) {
        this.notesService = notesService;
    }
    async getAllNotes() {
        return this.notesService.getAllNotes();
    }
    async getNoteStats() {
        return this.notesService.getNoteStats();
    }
    async getNoteById(id) {
        return this.notesService.getOneNote(id);
    }
    async createNote(note) {
        return this.notesService.addNote(note.noteContent, note.noteCategory);
    }
    async deleteNote(id) {
        return this.notesService.removeNote(id);
    }
    async archiveNote(id) {
        return this.notesService.archiveNote(id);
    }
    async unarchiveNote(id) {
        return this.notesService.unarchiveNote(id);
    }
    async updateNote(id, note) {
        return this.notesService.updateNote(id, note.noteContent, note.noteCategory);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "getAllNotes", null);
__decorate([
    (0, common_1.Get)('/stats'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "getNoteStats", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "getNoteById", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true, whitelist: true, forbidNonWhitelisted: true, })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createNoteOrUpdate_dto_1.CreateOrUpdateCatDto]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "createNote", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "deleteNote", null);
__decorate([
    (0, common_1.Patch)('archive/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "archiveNote", null);
__decorate([
    (0, common_1.Patch)('unarchive/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "unarchiveNote", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true, whitelist: true, forbidNonWhitelisted: true, })),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, createNoteOrUpdate_dto_1.CreateOrUpdateCatDto]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "updateNote", null);
exports.NotesController = NotesController = __decorate([
    (0, common_1.Controller)('api/notes'),
    __metadata("design:paramtypes", [notes_service_1.NotesService])
], NotesController);
//# sourceMappingURL=notes.controller.js.map