"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fakeRepositoryService = void 0;
const common_1 = require("@nestjs/common");
const category_interface_1 = require("../categoryes/interfaces/category.interface");
let fakeRepositoryService = exports.fakeRepositoryService = class fakeRepositoryService {
    constructor() {
        this.notes = [
            {
                id: 1,
                createdTime: '2023-7-25',
                content: "I'm gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
                category: category_interface_1.Category.TASK,
                archived: false,
            },
            {
                id: 2,
                createdTime: '2023-7-24',
                content: "This is a random thought.",
                category: category_interface_1.Category.RANDOM_THOUGHT,
                archived: false,
            },
            {
                id: 3,
                createdTime: '2023-7-23',
                content: "I have an idea for a new project.",
                category: category_interface_1.Category.IDEA,
                archived: false,
            },
            {
                id: 4,
                createdTime: '2023-7-22',
                content: "Remember to buy groceries on 27/7/2021.",
                category: category_interface_1.Category.TASK,
                archived: true,
            },
            {
                id: 5,
                createdTime: '2023-7-21',
                content: "Don't forget the meeting on 26/7/2021.",
                category: category_interface_1.Category.TASK,
                archived: false,
            },
            {
                id: 6,
                createdTime: '2023-7-20',
                content: "I need to call the support team tomorrow.",
                category: category_interface_1.Category.TASK,
                archived: false,
            },
            {
                id: 7,
                createdTime: '2023-7-19',
                content: "I had an interesting idea today.",
                category: category_interface_1.Category.IDEA,
                archived: false,
            },
            {
                id: 8,
                createdTime: '2023-7-18',
                content: "This is an archived note.",
                category: category_interface_1.Category.TASK,
                archived: true,
            },
            {
                id: 9,
                createdTime: '2023-7-16',
                content: "I had an archived idea.",
                category: category_interface_1.Category.IDEA,
                archived: true,
            }
        ];
        this.getAll = () => {
            return this.notes;
        };
        this.getById = (id) => {
            const note = this.notes.find(note => note.id === id);
            if (!note) {
                throw new Error('Error to get note id: ' + id);
            }
            return note;
        };
        this.addNote = (note) => {
            this.notes.push(note);
        };
        this.deleteById = (id) => {
            const deletedNote = this.notes.find(note => note.id === id);
            if (!deletedNote) {
                throw new Error('Error to delete note');
            }
            this.notes = this.notes.filter(note => note !== deletedNote);
        };
        this.updateById = (idNote, noteContent, noteCategory, archived) => {
            const note = this.notes.find(note => note.id === idNote);
            if (!note) {
                throw new Error('Error to update note');
            }
            this.notes = this.notes.map((note) => note.id === idNote ? {
                ...note,
                content: noteContent,
                category: noteCategory,
                archived: archived,
            } : note);
        };
    }
};
exports.fakeRepositoryService = fakeRepositoryService = __decorate([
    (0, common_1.Injectable)()
], fakeRepositoryService);
//# sourceMappingURL=repository.service.js.map