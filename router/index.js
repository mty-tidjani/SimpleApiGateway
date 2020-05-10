
const express = require('express');
import { createProxyMiddleware } from "http-proxy-middleware";
import authRoutes from "./auth.routes";
import userRoutes from "./user.routes";
import todoRoutes from "./todos.routes";

const router = express.Router();


router.use('/', todoRoutes)
router.use('/auth', authRoutes)
router.use('/users', userRoutes)



export default router;
