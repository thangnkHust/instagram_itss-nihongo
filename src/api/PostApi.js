import {db} from '../lib/firebase'

export const getAllPost = () => {
    db.collection('posts').onSnapshot(querySnapshot => {
        const posts = querySnapshot.docs.map(doc => {
            return {id: doc.id, data: doc.data()}
        });
        console.log("Get all post", posts);
        return posts
    })
};

export const getDetailPost = (postId) => {
    db.collection('posts').onSnapshot(querySnapshot => {
        const post = querySnapshot.docs.find(doc => doc.id === postId);
        console.log("Get detail post", post);
        return post
    })
};

export const createPost = (postData) => {
    db
    .collection('posts')
    .add({
        creat_at: Date.now(),
        image: postData.image,
        title: postData.title,
        user: postData.user,
        update_at: Date.now()
    })
    .then(() => {
        console.log("Added new post");
    })
};

export const updatePost = (postId, postData) => {
    db
    .collection('posts')
    .doc(postId)
    .update({
        creat_at: Date.now(),
        image: postData.image,
        title: postData.title,
        user: postData.user,
        update_at: Date.now()
    })
    .then(() => {
        console.log("Updated post");
    })
};

export const deletePost = (postId) => {
    db
    .collection('posts')
    .doc(postId)
    .delete()
    .then(() => {
        console.log("Delete post")
    })
};