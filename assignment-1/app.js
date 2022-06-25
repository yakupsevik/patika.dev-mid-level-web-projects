import getUserWithPosts from './modules/getData.js'

let user = await getUserWithPosts(1);

console.log(user);