import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Clock, Search, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { blogPosts } from "@/data/mock-data";

const allCategories = [...new Set(blogPosts.map((b) => b.category))];

const Blog = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filtered = blogPosts.filter((b) => {
    const matchSearch = !search || b.title.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === "all" || b.category === category;
    return matchSearch && matchCat;
  });

  // Featured post (first one)
  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="font-display text-5xl lg:text-6xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-muted-foreground">Insights, tutorials, and industry updates from the CloudZen team.</p>
      </motion.div>

      <div className="flex flex-wrap gap-4 mb-10">
        <div className="relative flex-1 min-w-[240px] max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input placeholder="Search posts..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-12 h-12 text-base" />
        </div>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-[180px] h-12 text-base"><SelectValue placeholder="Category" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {allCategories.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>

      {/* Featured post */}
      {featured && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <Link to={`/blog/${featured.id}`}>
            <Card className="hover-glow hover:border-primary/30 transition-all group overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto bg-muted flex items-center justify-center min-h-[280px]">
                  <BookOpen className="h-16 w-16 text-muted-foreground/20" />
                </div>
                <CardContent className="p-8 lg:p-10 flex flex-col justify-center">
                  <Badge variant="secondary" className="text-sm w-fit mb-4">{featured.category}</Badge>
                  <h2 className="font-display text-3xl font-bold mb-4 group-hover:text-primary transition-colors">{featured.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-base text-muted-foreground">
                    <span className="font-medium text-foreground">{featured.author}</span>
                    <span>{featured.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{featured.readTime}</span>
                  </div>
                </CardContent>
              </div>
            </Card>
          </Link>
        </motion.div>
      )}

      <div className="grid lg:grid-cols-3 gap-8">
        {rest.map((post, i) => (
          <motion.div key={post.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.05 }}>
            <Link to={`/blog/${post.id}`}>
              <Card className="hover-glow hover:border-primary/30 transition-all group h-full">
                <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
                  <BookOpen className="h-10 w-10 text-muted-foreground/30" />
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="text-sm mb-3">{post.category}</Badge>
                  <h3 className="font-display font-bold text-xl mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-base text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="font-medium">{post.author}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
