import { Router } from 'express'
import { ProductsController } from '../controllers/products.controller.js'
import { authenticationMiddleware } from '../middlewares/authentication.middleware.js'

export const productsRouter = Router()
const productsController = new ProductsController()

productsRouter.post('/', authenticationMiddleware, productsController.createProduct)
productsRouter.get('/', authenticationMiddleware, productsController.getProducts)
productsRouter.patch('/:id', authenticationMiddleware, productsController.updateProduct)
productsRouter.delete('/:id', authenticationMiddleware, productsController.deleteProduct)