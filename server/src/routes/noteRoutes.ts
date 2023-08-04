
import * as NoteService from '../services/noteService';

import handleValidationErrors from '../helpers/handleValitionErrors';
import {noteValidation} from '../validations/noteValidation';

const express = require('express');
const router = express.Router();

router.get('/', NoteService.getAllNotes);

router.get('/stats', NoteService.getStatsAboutCategory);

router.get('/:id', NoteService.getOneNote);

router.post('/', noteValidation, handleValidationErrors, NoteService.postNote);

router.delete('/:id', NoteService.removeNote);

router.patch('/archive/:id', NoteService.archiveNote);

router.patch('/:id', noteValidation, handleValidationErrors, NoteService.updateNote);


export default router;
