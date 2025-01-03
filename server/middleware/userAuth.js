import jwt from 'jsonwebtoken';

const userAuth = async (req, resizeBy, next)=>{
    const {token} = req.cookies;
    if(!token){
        return res.json({succes: false,
            message: 'Not Authorized. Login Again'
        })
    }
    try {
        const tokenDeCode = jwt.verify(token, process.env.JWT_SECRET)

        if (tokenDeCode.id) {
            req.body.userId = tokenDeCode.id            
        }else{
            return res.json({succes: false,
                message: 'Not Authorized. Login Again'
            })
        }

        next();
        
    } catch (error) {
        return res.json({succes: false,
            message: error.message
        })
    }

}

export default userAuth;