import adminData from '../../../entities/admin.js'

const adminRegister = async(email,password,repositories,authService) =>{

    console.log("admin usecasse il keriiiii");
    return repositories.adminExist(email).then(async(admin)=>{

        if (!admin) {
            const bycriptPassword = await authService.adminBycriptPassword(password)
            console.log(bycriptPassword,"bcryp is cminh");
            const adminDetails = adminData( email,bycriptPassword)
            console.log(adminDetails,"adminDetails is comng");
            const createAdmin = await repositories.createAdmin(adminDetails)
            console.log(createAdmin,"success admin register")
            return{
               createAdmin
            }
         }else{
            return {message:'email already exists'}
         }

    })
}
export default adminRegister;