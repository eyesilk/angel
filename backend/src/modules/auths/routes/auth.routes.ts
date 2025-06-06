import authController from '../controller/auth.controller';
import registartionValidation from '../validations/auth.validator';
import validationMiddleware from '@/middlewares/validation.middleware';
import loginValidations from '../validations/login.validator';
import authMiddleware from '@/middlewares/auth.middleware';
import express from 'express';
import nameValidations from '../validations/name.validator';
import passwordValidation from '../validations/password.validator';
import emailValidation from '../validations/email.validator';

const router = express.Router();

router.get('/user', authMiddleware, authController.getUser);
router.get('/refresh', authController.refresh);
router.get('/logout', authController.logout);
router.get('/activate/:link', authController.activate);
router.get('/activateEmail/:link', authMiddleware, authController.activateEmail);

router.post(
  '/registration',
  registartionValidation,
  validationMiddleware,
  authController.registration,
);
router.post('/login', loginValidations, validationMiddleware, authController.login);

router.patch(
  '/changeName',
  authMiddleware,
  nameValidations,
  validationMiddleware,
  authController.changeName,
);
router.patch(
  '/changePass',
  authMiddleware,
  passwordValidation,
  validationMiddleware,
  authController.changePass,
);
router.patch(
  '/changeEmail',
  authMiddleware,
  emailValidation,
  validationMiddleware,
  authController.changeEmail,
);

export { router as authRouter };
