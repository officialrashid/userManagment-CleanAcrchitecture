import authController from '../../../../adapters/controller/admin/authController.js'
import userAuthRepositoryImp from '../../../../framework/databse/mongodb/repositories/admin/adminAuthRepositoryImp.js'
import userAuthRepositoryInt from '../../../../application/repositories/admin/adminRepositoriInf.js'
import userSeriviceInt from '../../../../application/services/admin/authServiceInt.js'
import userServiceImp from '../../../../framework/services/admin/authServiceImp.js'

const authRouterAdmin =(express)=>{

    const router = express.Router()
    const controller=authController(userAuthRepositoryInt,userAuthRepositoryImp,userSeriviceInt,userServiceImp)

    router.route('/adminSignup').post(controller.createadmin)
    router.route('/adminLogin').post(controller.adminLogin)
    router.route('/userList').get(controller.userList)
    router.route('/deleteUser').delete(controller.deleteUser)
    return router;
}
export default authRouterAdmin