import { Tag } from "../utils/typs";

export const handleTags = (tags: Tag[]) => {
    return {
        type: "GET_TAGS",
        payload: tags
    }
}