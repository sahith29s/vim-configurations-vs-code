import express, { Response, Request } from "express";
import { createUser } from "../controllers/userController";
const router = express.Router();

// router.get("/" , (req : Request, res : Response) => {

// })

router.post("/", createUser);

router.delete("/", (req: Request, res: Response) => {
})

router.patch("/", (req: Request, res: Response) => {

})

export default router;