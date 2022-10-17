import PostCard from '../components/PostCard';


const Blogs = ({data}) => {
    return (
        <div className='blogs page'>
            <div className="banner">
                <h1>READ FROM HERE</h1>
            </div>
            <div className="wrapper">
                <div className="posts-container">
                    {data && data.map(blog => {
                        return blog.image_url && <PostCard key={blog.title} data={blog}/>
                    })}
                </div>
                <div className="tags-container">
                    <h1>Tags</h1>
                    <div className="tag">javascript</div>
                    <div className="tag">java</div>
                    <div className="tag">c++</div>
                    <div className="tag">javascript</div>
                    <div className="tag">javascript</div>

                    <div className="tag">javascript</div>
                    <div className="tag">java</div>
                    <div className="tag">c++</div>
                    <div className="tag">javascript</div>
                    <div className="tag">javascript</div>

                    <div className="tag">javascript</div>
                    <div className="tag">java</div>
                    <div className="tag">c++</div>
                    <div className="tag">javascript</div>
                    <div className="tag">javascript</div>

                    <div className="tag">javascript</div>
                    <div className="tag">java</div>
                    <div className="tag">c++</div>
                    <div className="tag">javascript</div>
                    <div className="tag">javascript</div>
                </div>
            </div>
            
        </div>
    );
}

export default Blogs;
