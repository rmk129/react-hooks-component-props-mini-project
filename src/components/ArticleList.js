import React from "react";
import Article from "./Article"

function ArticleList({posts}){
    const postElement = posts.map((po)=>{
        return <Article key={po.id} title={po.title} date={po.date} preview={po.preview}/>
    })
    return (
        <main>
            {postElement}
        </main>
    )
}

export default ArticleList;