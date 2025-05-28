import { Router } from 'express'
import {
    deleteUserByIdHandler,
    getUserByIdHandler,
    getUsersHandler,
    postUsersHandler,
    putUserByIdHandler
} from '../controllers/users.mjs'

import { authHandler } from '../middleware/authHandler.mjs'
import { validateUserBody, validateParamsUserId } from '../validators/userValidation.mjs'


const usersRouter = Router()

usersRouter
    .route('/')
    .get(getUsersHandler) // authHandler,
    .post(validateUserBody, postUsersHandler) // authHandler,

usersRouter
    .route('/:id')
    .get(validateParamsUserId, getUserByIdHandler) // authHandler,
    .put(validateParamsUserId, validateUserBody, putUserByIdHandler) // authHandler,
    .delete(validateParamsUserId, deleteUserByIdHandler) // authHandler,

export default usersRouter