

import { PostCreate } from "@/components/client/PostCreate";
import { PostDeleteButton } from "@/components/client/postDelete";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { db } from "@/db";



export const dynamic = 'force-dynamic';


export default async function Home() {
  "use server";

  const posts = await db.query.postsTable.findMany({
    orderBy(fields, operators) {
      return operators.desc(fields.id);
    },
  });


  return (
    <main className="p-4">
      <h1 className="text-2xl mb-4">Posts</h1>
      <PostCreate />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.id} className="w-full">
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.content}</CardDescription>
            </CardHeader>
            <CardFooter>
              <PostDeleteButton id={post.id} />
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}

