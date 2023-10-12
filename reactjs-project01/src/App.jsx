import { Post } from "./Post"

export function App() {
  return (
    <div>
      <Post
        author="Phiilippe Wanuty"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat provident"
      />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}
