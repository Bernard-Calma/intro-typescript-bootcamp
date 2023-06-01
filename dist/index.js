"use strict";
var _a, _b;
const posts = [];
const myPost = {
    userId: 1,
    postId: 1,
    title: "TypeScript",
    body: {
        topic: "",
        explanation: "Adds functionality"
    }
};
console.log(myPost.title);
if (myPost.body && myPost.body.topic)
    console.log(myPost.body.topic);
posts.push((_a = myPost.body.topic) !== null && _a !== void 0 ? _a : "No Topic");
if ((_b = myPost.body) === null || _b === void 0 ? void 0 : _b.topic)
    console.log(myPost.title);
console.log(posts);
