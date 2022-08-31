import { Handler,NextFunction } from "express"

const ensureToken:Handler = (req,res,next:NextFunction) => {
    const BearerHeader = req.headers["authorization"];
    if(typeof BearerHeader !== "undefined"){
        const bearer = BearerHeader.split(" ");
        const token = bearer[1];
        req.token = token;
        next();
    }
    else{
        res.status(404).json({msg:"Not Logged In"})
    }

}
export default ensureToken