import userModel from "../models/userModel.js";


export const getUserData = async(req,res)=>{

    try {
        const {userId} = req.body;
        const user = await userModel.findById(userId);

        if (!user) {
            return res.json({succes: false, message: 'User not found'});
          }
          res.json({
            succes:true,
            userData:{
                name:user.name,
                isAccountVerified: user.isAccountVerified
            }
          });
    } catch (error) {
             return res.json({succes: false, message: error.message});
    }
 }
