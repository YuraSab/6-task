export default class PostService{
    url = 'https://jsonplaceholder.typicode.com/posts';

    async getPosts() {
        return await fetch(this.url)
            .then(value => value.json())
    }

    async getPostById(id) {
        return await fetch(`${this.url}/${id}`)
            .then(value => value.json())
    }

    async getPostOfUser(id) {
        return await fetch(`${this.url}/${id}/comments`)
            .then(value => value.json())
    }

// /posts/1/comments
}