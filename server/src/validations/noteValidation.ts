import { body } from 'express-validator';
import { Category } from '../types/categoryTypes';

export const noteValidation = [
  body('noteCategory', 'Bad category format').isIn([Category.IDEA, Category.RANDOM_THOUGHT, Category.TASK]),
  body('noteContent', 'noteContent at least 3 characters').isString().isLength({min: 3}),
  body().custom((value, { req }) => {

      const allowedKeys = ['noteCategory', 'noteContent', 'archived'];
      const extraKeys = Object.keys(req.body).filter(key => !allowedKeys.includes(key));
      
      if (extraKeys.length > 0) {
        throw new Error('Invalid request data');
      }
      return true;
    }),
]
