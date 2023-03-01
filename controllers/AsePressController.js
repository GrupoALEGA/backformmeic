import AsePressModels from '../models/AsePressModels.js'

//Metodos para el CRUD
//Mostrar todos los registros
export const getAllAsePes = async (req, res) => {
    try {
        const apm = await AsePressModels.findAll()
        res.json(apm) 
    } catch (error) {
        res.json({message: error.message})
    }
}

//Mostrar un registro
export const getAsePes = async (req, res) => {
    try {
        const apm = await AsePressModels.findAll({
            where:{id:req.params.id}
        })
        res.json(apm[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

//Crear un registro
export const createAsePes = async(req, res) => {
    try {
        await AsePressModels.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    } catch (error ) {
        res.json({message: error.message})
    }
}

//Actualizar
export const updateAsePes = async(req, res) => {
    try {
        AsePressModels.update(req.body, {
            where: {id: req.params.id}
        })
    } catch (error) {
        res.json({
            "message":"Registro actualizado correctamente"
        })
    }
}


//Eliminar
export const deleteAsePes = async(req, res) => {
    try {
        AsePressModels.destroy({
            where: {id: req.params.id}
        })
    } catch (error) {
        res.json({message: error.message})
    }
}