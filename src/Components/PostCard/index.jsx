//export const PostCard = (props) => {
//destructuring {post} ao inves de props.post
export const PostCard = ({ post }) => {
  //const { post } = props;
  return (
    <div className="post-card">
      <img src={post.cover} alt={post.title} />
      <div key={post.id} className="post-content" >
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  )
}
//can  tirar brackets and return too
//export const PostCard = ({ post }) => (...)