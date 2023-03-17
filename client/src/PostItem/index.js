import React from 'react';
import './PostItem.css';

function PostItem(props) {
	return (
		<div className="post-item-container">
			<h2 className='post-item-title'>
				{props.title}
			</h2>
			<p className='post-item-description'>
				{props.description}
			</p>
		</div>
	);
}

export { PostItem };