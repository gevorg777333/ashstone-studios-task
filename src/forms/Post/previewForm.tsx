import {PostResponse} from "../../api/postApi/types";
import styles from "../../pages/Posts/styles.module.css";

function PreviewForm({post}: {post: PostResponse}) {
    return (
        <div className={styles.postPreview}>
            <img src={post.img_2x} alt="post-banner"/>
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

export {PreviewForm}
