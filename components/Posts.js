import Post from "./Post"

function Posts() {

    const posts = [
        {
            id: '1',
            username: 'jhon',
            userImg: 'https://cdns-images.dzcdn.net/images/artist/77220ccb5a36d0e5df2c9e47f2c89de4/500x500.jpg',
            img: 'https://cdns-images.dzcdn.net/images/artist/77220ccb5a36d0e5df2c9e47f2c89de4/500x500.jpg',
            caption: 'This is DOPE:',
        },
        {
            id: '2',
            username: 'jhon',
            userImg: 'https://cdns-images.dzcdn.net/images/artist/77220ccb5a36d0e5df2c9e47f2c89de4/500x500.jpg',
            img: 'https://cdns-images.dzcdn.net/images/artist/77220ccb5a36d0e5df2c9e47f2c89de4/500x500.jpg',
            caption: 'This is DOPE:',
        },
        {
            id: '3',
            username: 'jhon',
            userImg: 'https://cdns-images.dzcdn.net/images/artist/77220ccb5a36d0e5df2c9e47f2c89de4/500x500.jpg',
            img: 'https://cdns-images.dzcdn.net/images/artist/77220ccb5a36d0e5df2c9e47f2c89de4/500x500.jpg',
            caption: 'This is DOPE:',
        },
    ]

    return (
        <div>
            {/* Post */}
            {posts.map((post) => (
                <Post key={post.id} id={post.id} username={post.username} userImg={post.userImg} img={post.img} caption={post.caption}/>
            ))}
        </div>
    )
}

export default Posts
