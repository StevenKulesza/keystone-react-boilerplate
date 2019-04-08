import React from 'react';

const posts = ({ posts }) => {
	return (
		<div>
			{posts.map(post => {
				return (
					<React.Fragment>
						<h1>{post.title}</h1>
						<p>{post.content.extended}</p>
					</React.Fragment>
				);
			})}
		</div>
	);
};

export default posts;
