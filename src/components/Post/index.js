import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Vote from 'src/components/Votes';

const Post = ({ postId }) => {
  const currentPost = useSelector((state) => state.posts).find((item) => item.id === postId);

  return (
    <Card className="p-0" key={currentPost.id}>
      <Card.Header>
        <Link to={`/detail_post/${currentPost.id}`}>
          <Card.Img variant="top" src={`http://localhost:8080/imgPosts/${currentPost.image}`} />
        </Link>
      </Card.Header>
      <Card.Footer>
        <Vote id={currentPost.id} />
      </Card.Footer>
    </Card>
  );
};

Post.propTypes = {
  postId: PropTypes.number.isRequired,
};

export default Post;
