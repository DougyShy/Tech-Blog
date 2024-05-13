const router = require('express').Router();
const { Comment, Blog } = require('../../models');
const { getAttributes } = require('../../models/Blog');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {

    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
            blog_id: 2,
        });

        res.status(200).json(newComment);
    }   catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;