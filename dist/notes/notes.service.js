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
exports.NotesService = void 0;
const common_1 = require("@nestjs/common");
const notes_entity_1 = require("./notes.entity");
const sequelize_1 = require("@nestjs/sequelize");
const categoryes_service_1 = require("../categoryes/categoryes.service");
let NotesService = exports.NotesService = class NotesService {
    constructor(notesRepository, categoryHelper) {
        this.notesRepository = notesRepository;
        this.categoryHelper = categoryHelper;
    }
    async getAllNotes() {
        try {
            return await this.notesRepository.findAll();
        }
        catch (err) {
            return new common_1.HttpException('Error getting all notes', common_1.HttpStatus.NOT_FOUND);
        }
    }
    async getOneNote(id) {
        try {
            return await this.notesRepository.findByPk(id);
        }
        catch (err) {
            return new common_1.HttpException('Error getting note', common_1.HttpStatus.NOT_FOUND);
        }
    }
    async getNoteStats() {
        try {
            let arr = [];
            const res = await this.notesRepository.findAll().then(data => arr = data);
            return this.categoryHelper.getInfoAboutCategories(arr);
        }
        catch (err) {
            return new common_1.HttpException('Error getting stats', common_1.HttpStatus.NOT_FOUND);
        }
    }
    async addNote(noteContent, noteCategory) {
        try {
            const year = new Date().getFullYear();
            const month = new Date().getMonth() + 1;
            const day = new Date().getDate();
            let arr = [];
            const res = await this.notesRepository.findAll().then(data => arr = data);
            const newId = Math.max(...arr.map(note => note.id)) + 1;
            await this.notesRepository.create({
                id: newId,
                createdTime: `${year}-${month}-${day}`,
                content: noteContent,
                category: 'Task',
                archived: false,
            });
            return new common_1.HttpException('Success', common_1.HttpStatus.CREATED);
        }
        catch (err) {
            return new common_1.HttpException('Failed to create note', 500);
        }
    }
    async removeNote(id) {
        try {
            await this.notesRepository.destroy({
                where: {
                    id: id
                }
            });
            return new common_1.HttpException('Success', common_1.HttpStatus.OK);
        }
        catch (err) {
            return new common_1.HttpException('Failed to delete note', 500);
        }
    }
    async updateNote(id, noteContent, noteCategory) {
        try {
            await this.notesRepository.update({
                content: noteContent,
                category: noteCategory
            }, {
                where: {
                    id: id
                }
            });
            return new common_1.HttpException('Success', common_1.HttpStatus.OK);
        }
        catch (err) {
            return new common_1.HttpException('Failed to update note', 500);
        }
    }
    async archiveNote(id) {
        try {
            await this.notesRepository.update({
                archived: true
            }, {
                where: {
                    id: id
                }
            });
            return new common_1.HttpException('Success', common_1.HttpStatus.OK);
        }
        catch (err) {
            return new common_1.HttpException('Failed to archive note', 500);
        }
    }
    async unarchiveNote(id) {
        try {
            await this.notesRepository.update({
                archived: false
            }, {
                where: {
                    id: id
                }
            });
            return new common_1.HttpException('Success', common_1.HttpStatus.OK);
        }
        catch (err) {
            return new common_1.HttpException('Failed to unarchive note', 500);
        }
    }
};
exports.NotesService = NotesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(notes_entity_1.Note)),
    __metadata("design:paramtypes", [Object, categoryes_service_1.categoryesService])
], NotesService);
//# sourceMappingURL=notes.service.js.map