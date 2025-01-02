import express from 'express';
import { getPosts, getPost, createPost, updatePost, deletePost } from '../controllers/postController.js'
const router = express.Router();



//get all post
router.get('/', getPosts );

// Get Single post
router.get('/:id', getPost );

//create new post
router.post('/', createPost );

// Update post
router.put('/:id', updatePost );

// Delete post
router.delete('/:id', deletePost );



export default router;