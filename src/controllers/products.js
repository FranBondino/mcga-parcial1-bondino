const Schema_Products = require('../models/products')

const getAllProducts = async (req, res) => {    
    try {
        const response = await Schema_Products.find() 
        return res.status(200).json({
            data: response,
            error: false,
            msg: 'Productos'
        })
    } catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}

const getProductById = async (req, res) => {
     try {
         const response = await Schema_Products.findOne({ id: req.params.id })

         if(!response || response.length === 0){
             return res.status(404).json({
                 error: true,
                 msg: 'El producto no existe'
             })
         }

         return res.status(200).json({
             data: response,
             error: false,
             msg: 'Producto encontrado'
         })
     } catch(error){
         return res.status(400).json({
             error: true,
             msg: error
         })
     }
 }

 const getProductByName = async (req, res) => {
    try {
        const response = await Schema_Products.findOne({ name: req.params.name })

        if(!response || response.length === 0){
            return res.status(404).json({
                error: true,
                msg: 'El producto no existe'
            })
        }

        return res.status(200).json({
            data: response,
            error: false,
            msg: 'Producto encontrado'
        })
    } catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}

 const addProduct =  async (req, res) => {
    try {
        console.debug(req)
         const Product = new Schema_Products(req.body)
         console.debug(Product)
         const newProduct = await Product.save()
         return res.status(200).json({
            data: newProduct,
            error: false,
            msg: 'Producto creado'
         })
    } catch (error){
        console.debug(error)
         return res.status(400).json({
             error: true,
             msg: error
         })
     }
 }

 const deleteProductById = async (req, res) => {
    try {
        const response = await Schema_Products.deleteOne({ id: req.params.id })
        if(!response || response.length === 0){
            return res.status(404).json({
                error: true,
                msg: 'No existe el producto'
            })
        }
        return res.status(200).json({
            data: response,
            error: false,
            msg: 'Producto eliminado'
        })
    } catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}

const updateProductById = async (req, res) => {
    try {
     
        const response = await Schema_Products.findByIdAndUpdate(req.params.id, req.body, {new: true, });
        if (!response) {
            return res.status(400).json({
                error: true,
                msg: 'No se pudo actualizar el Producto',
            });
        }
        return res.status(200).json({
            data: response,
            error: false,
            message: 'Producto actualizado'
        }) 
    } catch (error) {
        return res.status(400).json({
            error: true,
            msg: error,
        });
    }
}

module.exports = {getAllProducts,addProduct,getProductById,getProductByName,deleteProductById,updateProductById}