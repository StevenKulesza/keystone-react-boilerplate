var keystone = require('keystone');
var Post = keystone.list('Post');

/**
 * List Post
 */
exports.list = function (req, res) {
	Post.model.find(function (err, items) {

		if (err) return res.json({
			err: err
		});

		res.json({
			post: items
		});

	});
}

/**
 * Get Post by ID
 */
exports.get = function (req, res) {
	Post.model.findById(req.params.id).exec(function (err, item) {

		if (err) return res.json({
			err: err
		});
		if (!item) return res.json('not found');

		res.json({
			post: item
		});

	});
}


/**
 * Create a Post
 */
exports.create = function (req, res) {

	var item = new Post.model(),
		data = (req.method == 'POST') ? req.body : req.query;

	item.getUpdateHandler(req).process(data, function (err) {

		if (err) return res.json({
			error: err
		});

		res.json({
			post: item
		});

	});
}

/**
 * Patch Post by ID
 */
exports.update = function (req, res) {

	Post.model.findById(req.params.id).exec(function (err, item) {

		if (err) return res.json({
			err: err
		});
		if (!item) return res.json({
			err: 'not found'
		});

		var data = (req.method == 'PUT') ? req.body : req.query;

		item.getUpdateHandler(req).process(data, function (err) {

			if (err) return res.json({
				err: err
			});

			res.json({
				post: item
			});

		});

	});
}

/**
 * Delete Post by ID
 */
exports.remove = function (req, res) {
	Post.model.findById(req.params.id).exec(function (err, item) {

		if (err) return res.json({
			dberror: err
		});
		if (!item) return res.json('not found');

		item.remove(function (err) {
			if (err) return res.json({
				dberror: err
			});

			return res.json({
				success: true
			});
		});

	});
}