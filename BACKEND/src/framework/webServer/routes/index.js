import authRouter from "./user/auth.js"
import authRouterAdmin from "./admin/auth.js"

const routes=(app,express) =>{
   
    app.use('/api/v1/user',authRouter(express))
    app.use('/api/v1/admin',authRouterAdmin(express))
}
export default routes
