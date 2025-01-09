import {PostResponse} from "../../api/postApi/types";
import styles from './styles.module.css'

interface PostProps {
    post: PostResponse;
    handleClick: (post: PostResponse) => void;
}
function Post({ post, handleClick }: PostProps) {

    const handlePostPreview = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        handleClick(post);
    }

    return (
        <div onClick={handlePostPreview} className={styles.post}>
            <img src={post.img} alt="post-banner"/>
            <div className={styles.tag}>{post.tags}</div>
            <div className={styles.title}>{post.title}</div>
            <div className={styles.author}>
                <span>{post.autor}</span>
                <li>{post.date}</li>
            </div>
            <div className={styles.text}>{post.text}</div>
        </div>
    )
}

export {Post};
