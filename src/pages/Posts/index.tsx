import {useCallback, useEffect, useMemo, useState} from "react";
import PostApi from "../../api/postApi";
import {PostResponse} from "../../api/postApi/types";
import {PageState} from "./types";
import {Post} from "./Post";
import styles from './styles.module.css'
import {Modal} from "../../components/display/Modal/Modal";
import {PreviewForm} from "../../forms/Post/previewForm";
import useSearch from "../../hooks/useFilter.hooks";

export default function Posts() {
    const [posts, setPosts] = useState<Array<PostResponse>>([]);
    const [previewPost, setPreviewPost] = useState<PostResponse>();
    const [pageState, setPageState] = useState<PageState>(PageState.LOADING);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const {searchParams } = useSearch();

    const filteredPosts = useMemo(() => {
        if(!searchParams.searchTerm) {
            return posts;
        } else {
            return posts.filter((post) => {
                return post.text.toLowerCase().includes(searchParams.searchTerm.toLowerCase())
                    || post.title.toLowerCase().includes(searchParams.searchTerm.toLowerCase())
                    || post.tags.toLowerCase().includes(searchParams.searchTerm.toLowerCase())
            })
        }
    }, [searchParams, posts])



    useEffect(() => {
        (async function() {
            const posts = await PostApi.getPosts(() => setPageState(PageState.SEMI_ERROR));
            if(posts) {
                setPosts(posts);
                setPageState(PageState.SEMI_STATIC)
            }
        })()
    }, []);

    const handlePostClick = useCallback((post: PostResponse) => {
        setIsModalOpen(true);
        setPreviewPost(post)
    }, []);

    return (
        <div className={styles.wrapper}>
            {
                pageState === PageState.LOADING
                    ? <div>...Loading</div>
                : pageState === PageState.SEMI_ERROR
                    ? <div>Whoops! Something went wrong </div>
                : pageState === PageState.SEMI_STATIC
                    ? filteredPosts?.map((post) => <Post handleClick={handlePostClick} post={post}/>) : ''
            }
            <Modal isModalOpen={isModalOpen} closeModal={setIsModalOpen}>
                <PreviewForm post={previewPost as PostResponse} />
            </Modal>
        </div>
    )
}
