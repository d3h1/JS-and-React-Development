const App = () => {
    const title = 'Blogpost'
    const body = 'This is my blog post'
    const comments = [
        {id: 1, text: 'Comment 1'},
        {id: 2, text: 'Comment 2'},
        {id: 3, text: 'Comment 3'},
        {id: 4, text: 'Comment 4'},
    ]


    return (
        <div className="container">
            <h1>{title.toUpperCase()}</h1>
            <p>{body}</p>

            <div className="comments">
                <h3>Comments ({comments.length})</h3>
                <ul>
                    {comments.map((comment,idx) => (
                        <li key={idx}>{comment.text}</li>
                    ))}
                </ul>
            </div>
        </div>

  )
}

export default App