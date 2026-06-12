
import jwt from "jsonwebtoken";

export const userAuthentication = (req, res, next)=>{

    try {
        let token = req.header("Authorization")?.replace("Bearer","").trim();

        // if (!authHeader || !authHeader.startsWith("Bearer ")) {
        //     return res.status(401).json({
        //         message: "Unauthorized User",
        //         success: false
        //     });
        // }

        if(!token){
            return res.status(401).json({
                message : "Unauthorized User", 
                success : false, 
                status : 401
            });
        }

        let decode = jwt.verify(token,"superman");
      
        req.user = decode;
        next();
        
    } catch (error) {
        console.log("error 123 " , error)
        return res.status(401).json({
            message: "Invalid or Expired Token",
            success: false
        });
    }
}