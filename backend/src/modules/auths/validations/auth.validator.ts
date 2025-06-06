import { body, ValidationChain } from 'express-validator';

const registartionValidation: ValidationChain[] = [
  body('username')
    .trim()
    .notEmpty()
    .withMessage('Поле не может быть пустым.')
    .isLength({ min: 3, max: 20 })
    .withMessage('Имя пользователя должно быть от 3 до 20 символов.'),
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Поле не может быть пустым.')
    .isEmail()
    .withMessage('Неверный формат почты'),
  body('password')
    .trim()
    .notEmpty()
    .withMessage('Поле не может быть пустым.')
    .isLength({ min: 5, max: 25 })
    .withMessage('Пароль должен быть от 5 до 25 символов.'),
];

export default registartionValidation