import React from 'react';
import axios from 'axios';
import Posts from '../components/posts';

export default class Home extends React.Component {
	state = {
		posts: []
	};

	componentDidMount() {
		axios.get('/api/blog/')
			.then(response => {
				this.setState({
					posts: response.data.post,
				});
			})
			.catch(error => {
                console.log(error)
            });
	}

	render () {
		return (
			<div>
				<Posts posts={this.state.posts}/>
            </div>
		);
	}
}
