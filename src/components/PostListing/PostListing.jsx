import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import config from "../../../data/SiteConfig";

const PostList = styled.div`
  padding: 0.8rem 1.5rem;

  & a,
  & a:visited {
    text-decoration: none;
    color: #f5f5f5;
  }

  & a:hover {
    text-decoration: underline;
  }
`;

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    return (
      <PostList>
        {/* Your post list here. */
        postList.map(post => (
          <Link to={post.path} key={post.title}>
            <h1>{post.title}</h1>
          </Link>
        ))}
      </PostList>
    );
  }
}

export default PostListing;
