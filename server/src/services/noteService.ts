import * as NoteRepo from "../repositories/repo";
import * as CategoryHelper from '../helpers/categoryHelper';

export const getAllNotes = async (req, res) => {
    try {
        const notes = await NoteRepo.getAll()

        res.status(200).json(notes)

    } catch(err) {
        console.log(err);
        res.status(500).json({
            error: err.message
        })
    }
}

export const getOneNote = async (req, res) => {
    try {
        const idNote = req.params.id;
        const note = await NoteRepo.getById(Number(idNote))

        res.status(200).json(note);

    } catch(err) {
        console.log(err);
        res.status(500).json({
            error: err.message
        })
    }
}

export const getStatsAboutCategory = async (req, res) => {
    try {
        const stats = await CategoryHelper.getInfoAboutCategories();

        res.status(200).json(stats);

    } catch(err) {
        console.log(err);
        res.status(500).json({
            error: err.message
        })
    }
}

export const postNote = async (req, res) => {
    try {
        const noteContent = req.body.noteContent;
        const noteCategory = req.body.noteCategory;

        const year = new Date().getFullYear();
        const month = new Date().getMonth() + 1;
        const day = new Date().getDate();

        const newId = Math.max(...NoteRepo.getAll().map(note => note.id)) + 1;
        
        await NoteRepo.addNote({
            id: newId,
            createdTime: `${year}-${month}-${day}`,
            content: noteContent,
            category: noteCategory,
            archived: false,
        })

        res.status(200).json({success: true});
    } catch(err) {
        console.log(err);
        res.status(500).json({
            success: false,  
            error: err.message
        })
    }
}

export const removeNote = async (req, res) => {
    try {
        const idNote = req.params.id;
        const note = await NoteRepo.deleteById(Number(idNote))

        res.status(200).json({success: true});

    } catch(err) {
        console.log(err);
        res.status(500).json({
            success: false,  
            error: err.message
        })
    }
}

export const updateNote = async (req, res) => {
    try {
        const idNote = req.params.id;

        const noteContent = req.body.noteContent;
        const noteCategory = req.body.noteCategory;
        const noteArchived = (await NoteRepo.getById(Number(idNote))).archived;

        await NoteRepo.updateById(Number(idNote),noteContent, noteCategory, noteArchived)

        res.status(200).json({success: true});

    } catch(err) {
        console.log(err);
        res.status(500).json({
            success: false,  
            error: err.message
        })
    }
}

export const archiveNote = async (req, res) => {
    try {
        const idNote = req.params.id;
        const note = await NoteRepo.getById(Number(idNote));

        const noteContent = note.content;
        const noteCategory = note.category;
        const noteArchived = !note.archived;

        await NoteRepo.updateById(Number(idNote),noteContent, noteCategory, noteArchived)

        res.status(200).json({success: true});

    } catch(err) {
        console.log(err);
        res.status(500).json({
            success: false,  
            error: err.message
        })
    }
}
