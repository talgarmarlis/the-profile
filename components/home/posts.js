import PostCard from "./postCard";



export default function Posts({postList}) {
    return (
        <>
            {postList.map((post, index) => (
                <PostCard post={post} key={`post_card_key_${index} `}/>
            ))}
        </>
    );
}