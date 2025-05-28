import { Router } from 'express'
import {
    getArticlesHandler,
    postArticlesHandler,
    getArticleByIdHandler,
    putArticleByIdHandler,
    deleteArticleByIdHandler
} from '../controllers/articles.mjs'

import { checkAccess } from '../middleware/authHandler.mjs'
import { validateArticleBody, validateParamsArticleId } from '../validators/articleValidation.mjs'


const articlesRouter = Router()

articlesRouter
    .route('/')
    .get(getArticlesHandler) //checkAccess,
    .post(validateArticleBody, postArticlesHandler) //checkAccess,

articlesRouter
    .route('/:id')
    .get(validateParamsArticleId, getArticleByIdHandler) //checkAccess,
    .put(validateParamsArticleId, validateArticleBody, putArticleByIdHandler) //checkAccess,
    .delete(validateParamsArticleId, deleteArticleByIdHandler) //checkAccess,

export default articlesRouter