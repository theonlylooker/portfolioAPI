import express, { json } from "express";
import workRoutes from "./routes/works.routes"
import userRoutes from "./routes/user.routes"
declare module "express-serve-static-core"{
    interface Request{
        token?:string
    }
}

require("dotenv").config();

const app = express();

app.use(express.json());

app.set("port",process.env.PORT || 3000);
app.set("db",process.env.DB_URI as string)
//routes config
//index
app.get("/",(req,res)=>
{ res.json({msg:"Welcome to the Portfolio API"})})

//works
app.use("/works",workRoutes);
//user
app.use("/user",userRoutes)

export default app;