import React from "react";
import './PostList.css'

function PostList(props) {
	return (
		<div className="posts-section">
			<h1 className="posts-counter-title">List of Items: {props.totalItems}</h1>
			<div className="posts-list-container">
				{props.children}
			</div>
		</div>
	);
}

export { PostList };