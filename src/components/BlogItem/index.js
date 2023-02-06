// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {eachBlogDetails} = props
  const {title, description, publishedDate} = eachBlogDetails

  return (
    <li className="list-item-container">
      <div className="head-container">
        <h1>{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p>{description}</p>
    </li>
  )
}

export default BlogItem
