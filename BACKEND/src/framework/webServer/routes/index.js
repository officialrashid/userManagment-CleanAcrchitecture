import authRouter from "./user/auth.js"

const routes=(app,express) =>{
   
    app.use('/api/v1/user',authRouter(express))
}
export default routes