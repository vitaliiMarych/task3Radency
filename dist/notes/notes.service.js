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
exports.NotesService = void 0;
const common_1 = require("@nestjs/common");
const categoryes_service_1 = require("../categoryes/categoryes.service");
const repository_service_1 = require("../repository/repository.service");
let NotesService = exports.NotesService = class NotesService {
    constructor(repository, categoryHelper) {
        this.repository = repository;
        this.categoryHelper = categoryHelper;
    }
    getAllNotes() {
        try {
            return this.repository.getAll();
        }
        catch (err) {
            return new common_1.HttpException('Error getting all notes', common_1.HttpStatus.NOT_FOUND);
        }
    }
    getOneNote(id) {
        try {
            return this.repository.getById(id);
        }
        catch (err) {
            return new common_1.HttpException('Error getting note', common_1.HttpStatus.NOT_FOUND);
        }
    }
    getNoteStats() {
        try {
            return this.categoryHelper.getInfoAboutCategories(this.repository.getAll());
        }
        catch (err) {
            return new common_1.HttpException('Error getting stats', common_1.HttpStatus.NOT_FOUND);
        }
    }
    addNote(noteContent, noteCategory) {
        try {
            const year = new Date().getFullYear();
            const month = new Date().getMonth() + 1;
            const day = new Date().getDate();
            const newId = Math.max(...this.repository.getAll().map(note => note.id)) + 1;
            this.repository.addNote({
                id: newId,
                createdTime: `${year}-${month}-${day}`,
                content: noteContent,
                category: noteCategory,
                archived: false,
            });
            return new common_1.HttpException('Success', common_1.HttpStatus.CREATED);
        }
        catch (err) {
            return new common_1.HttpException('Failed to create note', 500);
        }
    }
    removeNote(id) {
        try {
            this.repository.deleteById(id);
            return new common_1.HttpException('Success', common_1.HttpStatus.OK);
        }
        catch (err) {
            return new common_1.HttpException('Failed to delete note', 500);
        }
    }
    updateNote(id, noteContent, noteCategory) {
        try {
            const archiveStatus = (this.repository.getById(id)).archived;
            this.repository.updateById(id, noteContent, noteCategory, archiveStatus);
            return new common_1.HttpException('Success', common_1.HttpStatus.OK);
        }
        catch (err) {
            return new common_1.HttpException('Failed to update note', 500);
        }
    }
    archiveNote(id) {
        try {
            const note = this.repository.getById(id);
            this.repository.updateById(id, note.content, note.category, true);
            return new common_1.HttpException('Success', common_1.HttpStatus.OK);
        }
        catch (err) {
            return new common_1.HttpException('Failed to archive note', 500);
        }
    }
    unarchiveNote(id) {
        try {
            const note = this.repository.getById(id);
            this.repository.updateById(id, note.content, note.category, false);
            return new common_1.HttpException('Success', common_1.HttpStatus.OK);
        }
        catch (err) {
            return new common_1.HttpException('Failed to unarchive note', 500);
        }
    }
};
exports.NotesService = NotesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repository_service_1.fakeRepositoryService,
        categoryes_service_1.categoryesService])
], NotesService);
//# sourceMappingURL=notes.service.js.map