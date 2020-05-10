
const express = require('express');
import { createProxyMiddleware } from "http-proxy-middleware";
import userRoutes from "./user.routes";
import todoRoutes from "./todos.routes";

const router = express.Router();


router.use('/auth', userRoutes)
router.use('/auth', userRoutes)
router.use('/todos', todoRoutes)


export default router;
