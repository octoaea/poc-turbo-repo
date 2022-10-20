

import { Post } from "@octo/types";
import cors from "cors";
import express from "express";


const app = express();

const posts: Post[] = [
    {
        id: 1,
        title: "Culture code"
    }, 
    {
        id: 2,
        title: "Api Design"
    }
];

app.use(cors());

app.get('/', (_, res) => {
    res.send({
        posts
    });
})

app.listen(4000, () => {
    console.log("App started");
    
})