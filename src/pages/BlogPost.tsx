import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, User, Share2, Twitter, Linkedin, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useBlogPost, useBlogPosts } from "@/hooks/useData";

const BlogPost = () => {
  const { id } = useParams();
  const { data: post, isLoading } = useBlogPost(id);
  const { data: blogPosts = [] } = useBlogPosts();

  if (isLoading) return <div className="container py-20 text-center text-muted-foreground">Loading...</div>;
  if (!post) return <div className="container py-20 text-center"><h1 className="text-2xl font-bold">Post not found</h1><Button asChild className="mt-4"><Link to="/blog">Back to Blog</Link></Button></div>;

  const related = blogPosts.filter((b: any) => b.id !== post.id && b.category === post.category).slice(0, 2);

  return (
    <div className="container py-8 max-w-3xl">
      <Button variant="ghost" size="sm" asChild className="mb-4"><Link to="/blog"><ArrowLeft className="mr-1 h-4 w-4" />Back to Blog</Link></Button>
      <div className="aspect-video bg-muted rounded-lg mb-6 flex items-center justify-center"><span className="text-muted-foreground">Hero image placeholder</span></div>
      <Badge variant="secondary" className="mb-3">{post.category}</Badge>
      <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
        <span className="flex items-center gap-1"><User className="h-4 w-4" />{post.author}</span>
        <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{post.date}</span>
        <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{post.read_time}</span>
      </div>
      <Card className="mb-8"><CardContent className="p-4">
        <h3 className="font-display font-semibold mb-2 text-sm">Table of Contents</h3>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li className="hover:text-foreground cursor-pointer">1. Introduction</li>
          <li className="hover:text-foreground cursor-pointer">2. Key Concepts</li>
          <li className="hover:text-foreground cursor-pointer">3. Practical Examples</li>
          <li className="hover:text-foreground cursor-pointer">4. Best Practices</li>
          <li className="hover:text-foreground cursor-pointer">5. Conclusion</li>
        </ul>
      </CardContent></Card>
      <article className="prose prose-sm dark:prose-invert max-w-none mb-8">
        <p className="text-lg text-muted-foreground mb-4">{post.excerpt}</p>
        {post.content ? <div dangerouslySetInnerHTML={{ __html: post.content }} /> : (
          <>
            <h2 className="font-display text-xl font-bold mt-8 mb-3">Introduction</h2>
            <p className="text-muted-foreground mb-4">This article explores the key concepts related to {post.title?.toLowerCase()}.</p>
            <h2 className="font-display text-xl font-bold mt-8 mb-3">Key Concepts</h2>
            <p className="text-muted-foreground mb-4">Understanding the fundamentals is crucial before diving into advanced topics.</p>
            <h2 className="font-display text-xl font-bold mt-8 mb-3">Conclusion</h2>
            <p className="text-muted-foreground mb-4">Keep practicing and building to solidify your understanding.</p>
          </>
        )}
      </article>
      <div className="flex items-center gap-3 mb-8 py-4 border-t border-b border-border">
        <span className="text-sm font-medium">Share:</span>
        <Button variant="ghost" size="icon"><Twitter className="h-4 w-4" /></Button>
        <Button variant="ghost" size="icon"><Linkedin className="h-4 w-4" /></Button>
        <Button variant="ghost" size="icon"><Share2 className="h-4 w-4" /></Button>
      </div>
      <Card className="mb-8"><CardContent className="p-5 flex items-start gap-4">
        <div className="h-14 w-14 rounded-full bg-muted flex items-center justify-center shrink-0"><User className="h-6 w-6 text-muted-foreground" /></div>
        <div><h3 className="font-display font-semibold">{post.author}</h3><p className="text-sm text-muted-foreground">CloudZen Instructor & Technical Writer</p></div>
      </CardContent></Card>
      {related.length > 0 && (
        <div>
          <h3 className="font-display text-xl font-bold mb-4">Related Posts</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {related.map((r: any) => (
              <Link key={r.id} to={`/blog/${r.id}`}>
                <Card className="hover-glow hover:border-primary/30 transition-all group">
                  <CardContent className="p-4">
                    <Badge variant="secondary" className="text-xs mb-2">{r.category}</Badge>
                    <h4 className="font-display font-semibold text-sm group-hover:text-primary transition-colors">{r.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{r.read_time}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}
      {post.tags && <div className="mt-8 flex flex-wrap gap-2">{post.tags.map((tag: string) => <Badge key={tag} variant="outline">{tag}</Badge>)}</div>}
    </div>
  );
};

export default BlogPost;
