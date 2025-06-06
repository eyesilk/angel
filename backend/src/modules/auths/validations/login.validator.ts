import { body, ValidationChain } from 'express-validator';

const loginValidations: ValidationChain[] = [
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

export default loginValidations
