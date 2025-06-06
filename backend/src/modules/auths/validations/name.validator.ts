import { body, ValidationChain } from 'express-validator';

const nameValidations: ValidationChain[] = [
  body('username')
    .trim()
    .notEmpty()
    .withMessage('Поле не может быть пустым.')
    .isLength({ min: 3, max: 20 })
    .withMessage('Имя пользователя должно быть от 3 до 20 символов.'),
];

export default nameValidations