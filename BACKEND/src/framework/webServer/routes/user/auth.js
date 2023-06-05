import authController from '../../../../adapters/controller/user/authController.js'
import userAuthRepositoryImp from '../../../../framework/databse/mongodb/repositories/user/userAuthRepositoryImp.js'
import userAuthRepositoryInt from '../../../../application/repositories/user/userRepositoriInf.js'
import userSeriviceInt from '../../../../application/services/user/authServiceInt.js'
import userServiceImp from '../../../../framework/services/user/authServiceImp.js'


const authRouter=(express) =>{
     
    const router = express.Router()
   const controller=authController(userAuthRepositoryInt,userAuthRepositoryImp,userSeriviceInt,userServiceImp)
    
   router.route('/signup').post(controller.createuser)
    return router;
}
export default authRouter