let posts = [
    { id: 1, title: 'Post One' },
    { id: 2, title: 'Post Two' },
    { id: 3, title: 'Post Three' },
    { id: 4, title: 'Post Four' },
];

//@desc   Get all post
//@route  GET /api/posts
export const getPosts = (req, res) => {
    // console.log(req.query); 
    // res.json(posts);

    const limit = parseInt(req.query.limit);

    if(!isNaN(limit) && limit > 0) {
        res.status(200).json(posts.slice(0, limit));
    } else {
        res.status(200).json(posts);
    }
};

// @desc    Get Single post
// @route   GET /api/posts/:id
export const getPost = (req, res, next) => {
    // console.log(req.params);
    // res.json(posts);
    const id = parseInt(req.params.id);
    // res.status(200).json(posts.filter((post) => post.id === id ));
    const post = posts.find((post) => post.id === id);

    if(!post) {
        const error = new Error(`A Post with the id of ${id} was not found `);
        error.status = 404;
        return next(error);
    } 
    
    res.status(200).json(post);

};

// @desc    Create post
// @route   POST /api/posts/:id
export const createPost = (req,res,next) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
    };

    if (!newPost.title) {
        const error = new Error(`Enter The Title `);
        error.status = 404;
        return next(error);
    }
    
    posts.push(newPost);
    res.status(201).json(posts); 
};

// @desc    Update post
// @route   PUT /api/posts/:id
export const updatePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id );
    
    if (!post) {
        const error = new Error(`A Post with the id of ${id} was not found `);
        error.status = 404;
        return next(error);
    }

    post.title = req.body.title;
    res.status(200).json(posts);
};

// @desc    Delete post
// @route   POST /api/posts/:id
export const deletePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id );
    
    if (!post) {
        const error = new Error(`A Post with the id of ${id} was not found `);
        error.status = 404;
        return next(error);
    }

    posts = posts.filter((post) =>post.id !== id );
    res.status(200).json(posts);
};