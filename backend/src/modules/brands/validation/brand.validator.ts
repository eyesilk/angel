import { body, ValidationChain } from 'express-validator';

export const brandValidations: ValidationChain[] = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Поле не может быть пустым.')
    .isLength({ max: 100 })
    .withMessage('Введите название бренда до 100 символов.'),
  body('description')
    .trim()
    .notEmpty()
    .withMessage('Поле не может быть пустым.')
    .isLength({ max: 1000 })
    .withMessage('Введите описание до 1000 символов.'),
  body('imageUrl')
    .isURL({
      require_tld: false,
      require_protocol: true,
      allow_underscores: true,
      host_whitelist: ['localhost'],
    })
    .withMessage('Неверный формат Url'),
];
