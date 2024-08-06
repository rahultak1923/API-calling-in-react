export const getPosts = async ()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts",{method:"GET",

    });
    return await response.json();
}

export const rendomPost = async ()=>{
    const response = await fetch("https://randomuser.me/api/",{method: "GET",

    });
    return await response.json();
}


export const userPosts = async ()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments",{method: "GET",

    });
    return await response.json();
}