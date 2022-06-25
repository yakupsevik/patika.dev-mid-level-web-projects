import axios from 'axios'

const getUserWithPosts = (async (id) => {
    let { data: user } = await axios("https://jsonplaceholder.typicode.com/users/" + id);
    let { data: user_posts } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + user.id)

    user.posts = user_posts;

    return user;
})

export default getUserWithPosts;