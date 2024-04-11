import { Router } from "express";
import { checkAuth } from "../utils/checkAuth.js";
import { createPost, getAll, getById, getMyPosts, getPostComments, removePost, updatePost } from "../controllers/posts.js";

const router = new Router()

//Create Post
router.post('/', checkAuth, createPost)

//Get all Posts
router.get('/', getAll)

//Get Post by Id
router.get('/:id', getById)

//Get my posts
// http://localhost:3002/api/posts/user/me
router.get('/user/me', checkAuth, getMyPosts)

//Remove Post
router.delete('/:id', checkAuth, removePost)

//Update Post
router.put('/:id', checkAuth, updatePost)

//Get Post Comments
router.get('/comments/:id', getPostComments)

export default router