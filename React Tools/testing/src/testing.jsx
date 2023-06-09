const App = () => {
    const title = 'Blogpost'
    const body = 'This is my blog post'
    const comments = [
        {id: 1, text: 'Comment 1'},
        {id: 2, text: 'Comment 2'},
        {id: 3, text: 'Comment 3'},
        {id: 4, text: 'Comment 4'},
    ]

    const loading = false;
    const showComments = true;
    const commentsLoop = (
        <div className="comments">
            <h3>Comments ({comments.length})</h3>
            <ul>
                {comments.map((comment,idx) => (
                    <li key={idx}>{comment.text}</li>
                ))}
            </ul>
        </div>
    ) 

    if(loading) return <h1>Loading ...</h1>

    
    return (
        <div className="container">
            <h1>{title.toUpperCase()}</h1>
            <p>{body}</p>

            {/* If show comments is true, then show below */}
            {showComments && commentsLoop}

            
        </div>

  )
}

export default App