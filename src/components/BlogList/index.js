// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="blog-list">
      {blogsList.map(eachBlogItem => (
        <BlogItem eachBlogDetails={eachBlogItem} key={eachBlogItem.id} />
      ))}
    </ul>
  )
}
export default BlogList
