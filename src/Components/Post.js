// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { fetchPosts } from "../Actions/postActions";

// class Posts extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     posts: [],
//   //   };
//   // }

//   // componentDidMount() {
//   //   fetch("https://jsonplaceholder.typicode.com/posts")
//   //     .then((res) => res.json())
//   //     .then((data) => this.setState({ posts: data }));
//   // }

//   componentWillMount(){
//     this.props.fetchPosts();
//   }

//   render() {
//     const postItems = this.props.posts.map((post) => (
//       <div key={post.id}>
//         <h3>{post.title}</h3>
//         <p>{post.body}</p>
//       </div>
//     ));

//     // let arr = [];
//     // this.state.posts.forEach(({ id, title, body }) => {
//     //   arr.push(
//     //     <div key={id}>
//     //       <h3>{title}</h3>
//     //       <p>{body}</p>
//     //     </div>
//     //   );
//     // });
//     return (
//       <div>
//         <h1>Posts</h1>
//         {postItems}
//         {/* {arr} */}
//       </div>
//     );
//   }
// }

// Posts.propTypes = {
//   fetchPosts: PropTypes.func.isRequired,
//   posts: PropTypes.array.isRequired
// }

//  const mapStateToProps = state => ({
//   posts: state.posts.items
//  });

// export default connect(mapStateToProps, { fetchPosts })(Posts);
