import { body, ValidationChain } from 'express-validator';

const emailValidation: ValidationChain[] = [
  body('password')
    .trim()
    .notEmpty()
    .withMessage('Поле не может быть пустым.')
    .isLength({ min: 5, max: 25 })
    .withMessage('Пароль должен быть от 5 до 25 символов.'),
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Поле не может быть пустым.')
    .isEmail()
    .withMessage('Неверный формат почты'),
];

export default emailValidation;
