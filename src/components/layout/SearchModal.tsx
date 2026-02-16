import { useState, useMemo } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, FolderGit2, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { courses, projects, blogPosts } from "@/data/mock-data";

interface SearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchModal({ open, onOpenChange }: SearchModalProps) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return { courses: [], projects: [], posts: [] };
    const q = query.toLowerCase();
    return {
      courses: courses.filter((c) => c.title.toLowerCase().includes(q) || c.tags.some((t) => t.toLowerCase().includes(q))).slice(0, 4),
      projects: projects.filter((p) => p.title.toLowerCase().includes(q) || p.tools.some((t) => t.toLowerCase().includes(q))).slice(0, 3),
      posts: blogPosts.filter((b) => b.title.toLowerCase().includes(q) || b.tags.some((t) => t.toLowerCase().includes(q))).slice(0, 3),
    };
  }, [query]);

  const hasResults = results.courses.length > 0 || results.projects.length > 0 || results.posts.length > 0;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg p-0 gap-0">
        <div className="flex items-center gap-3 p-4 border-b border-border">
          <Search className="h-5 w-5 text-muted-foreground shrink-0" />
          <Input
            placeholder="Search courses, projects, blog..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border-0 focus-visible:ring-0 px-0 text-base"
            autoFocus
          />
        </div>
        <div className="max-h-80 overflow-y-auto p-2">
          {!query.trim() && (
            <p className="text-sm text-muted-foreground text-center py-8">Start typing to search...</p>
          )}
          {query.trim() && !hasResults && (
            <p className="text-sm text-muted-foreground text-center py-8">No results found for "{query}"</p>
          )}
          {results.courses.length > 0 && (
            <div className="mb-2">
              <p className="text-xs font-medium text-muted-foreground px-3 py-2">Courses</p>
              {results.courses.map((c) => (
                <Link key={c.id} to={`/courses/${c.id}`} onClick={() => onOpenChange(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors">
                  <BookOpen className="h-4 w-4 text-primary shrink-0" />
                  <div>
                    <p className="text-sm font-medium">{c.title}</p>
                    <p className="text-xs text-muted-foreground">{c.category} · {c.level}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
          {results.projects.length > 0 && (
            <div className="mb-2">
              <p className="text-xs font-medium text-muted-foreground px-3 py-2">Projects</p>
              {results.projects.map((p) => (
                <Link key={p.id} to={`/projects/${p.id}`} onClick={() => onOpenChange(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors">
                  <FolderGit2 className="h-4 w-4 text-secondary shrink-0" />
                  <div>
                    <p className="text-sm font-medium">{p.title}</p>
                    <p className="text-xs text-muted-foreground">{p.category} · {p.difficulty}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
          {results.posts.length > 0 && (
            <div>
              <p className="text-xs font-medium text-muted-foreground px-3 py-2">Blog Posts</p>
              {results.posts.map((b) => (
                <Link key={b.id} to={`/blog/${b.id}`} onClick={() => onOpenChange(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors">
                  <FileText className="h-4 w-4 text-accent shrink-0" />
                  <div>
                    <p className="text-sm font-medium">{b.title}</p>
                    <p className="text-xs text-muted-foreground">{b.category} · {b.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
