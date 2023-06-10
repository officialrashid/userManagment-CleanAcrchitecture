const uploadImage = async(userID,imageDataUrl,repositories,authService)=>{
     
    await repositories.uploadImage(userID,imageDataUrl).then((response)=>{

        if(response){
            console.log(response);
        }

    })
   
}
export default uploadImage