'use client'
import { deletePost } from "@/lib/actions";
import { Button } from "../ui/button";

export function PostDeleteButton(post: { id: number; }, afterDelete?: () => void) {
    return <Button variant="destructive" onClick={() => {
        deletePost(post.id).then(() => {
            afterDelete?.();
        });

    }}>
        Delete
    </Button>;
}