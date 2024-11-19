// 'use client'

// import { useEffect, useState } from "react";
// import { useUserAuth } from "../_utils/auth-context";
// import { dbGetBlogPostById } from "../_services/blog-service-";

// export default function LessonPage({params}){

//     const {user} = useUserAuth();

//     const [blogPost, setBlogPost] = useState({});

//     useEffect(() => {

//         if(user){
//             dbGetBlogPostById(user.uid, params.postid, setBlogPost)
//         }
    
//         }, [user]
//     )

//     return(
//         <main>
//             <header>
//                 <h1>{blogPost.title}</h1>
//             </header>
//             <article>
//                 <p>{blogPost.contents}</p>
//             </article>
            
//         </main>
//     );
// }