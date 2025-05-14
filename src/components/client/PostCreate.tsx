'use client';

import { createPost } from "@/lib/actions";
import { useActionState } from "react";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card";
import { Input } from "../ui/input";




const initialState: {
    error: string | null;
} = {
    error: null
}


export function PostCreate() {

    const [state, action, pending,] = useActionState(createPost, initialState);

    return <div className="max-w-2xl mb-4">
        <form action={action}>
            <Card>
                <CardHeader>
                    <CardTitle>New Post</CardTitle>
                    <CardDescription>Create a new post</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">

                    <Input name="title" placeholder="Title" required />
                    <Input name="content" placeholder="Content" required />
                    {state.error && <div className="text-red-500">{state.error}</div>}

                </CardContent>
                <CardFooter>
                    <Button type="submit" disabled={pending}>
                        {pending ? 'Creating...' : 'Create Post'}
                    </Button>
                </CardFooter>
            </Card>
        </form>

    </div>;
}