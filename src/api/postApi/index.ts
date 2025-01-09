import {PostResponse} from "./types";

type NextHandler = (payload: any) => void;

export default class PostApi {
    public static async getPosts(onError: NextHandler): Promise<Array<PostResponse>> {
        return fetch(`${process.env.REACT_APP_BASE_URL}`)
            .then(res => res.json())
            .catch(e => onError && onError(e))
    }
}
