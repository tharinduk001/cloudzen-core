import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useAuth } from "@/hooks/useAuth";
import { useCourses, useProjects, useBlogPosts, useEvents, useInstructors } from "@/hooks/useData";
import { supabase } from "@/integrations/supabase/client";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { Plus, Trash2, Edit, Mail } from "lucide-react";

type TableName = "courses" | "projects" | "blog_posts" | "events" | "instructors";

const AdminTable = ({ title, queryKey, tableName, columns, data, isLoading }: {
  title: string; queryKey: string; tableName: TableName;
  columns: { key: string; label: string }[]; data: any[] | undefined; isLoading: boolean;
}) => {
  const qc = useQueryClient();
  const [editItem, setEditItem] = useState<any>(null);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [dialogOpen, setDialogOpen] = useState(false);

  const openCreate = () => {
    const initial: Record<string, any> = {};
    columns.forEach(c => initial[c.key] = "");
    setFormData(initial);
    setEditItem(null);
    setDialogOpen(true);
  };

  const openEdit = (item: any) => {
    const initial: Record<string, any> = {};
    columns.forEach(c => initial[c.key] = item[c.key] ?? "");
    setFormData(initial);
    setEditItem(item);
    setDialogOpen(true);
  };

  const handleSave = async () => {
    try {
      const cleanData = { ...formData };
      Object.keys(cleanData).forEach(k => {
        if (cleanData[k] === "") cleanData[k] = null;
      });

      if (editItem) {
        const { error } = await supabase.from(tableName).update(cleanData as any).eq("id", editItem.id);
        if (error) throw error;
        toast.success(`${title} updated!`);
      } else {
        const { error } = await supabase.from(tableName).insert(cleanData as any);
        if (error) throw error;
        toast.success(`${title} created!`);
      }
      qc.invalidateQueries({ queryKey: [queryKey] });
      setDialogOpen(false);
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    const { error } = await supabase.from(tableName).delete().eq("id", id);
    if (error) toast.error(error.message);
    else { toast.success("Deleted!"); qc.invalidateQueries({ queryKey: [queryKey] }); }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-xl font-bold">{title}</h2>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button size="sm" onClick={openCreate}><Plus className="h-4 w-4 mr-1" />Add</Button>
          </DialogTrigger>
          <DialogContent className="max-h-[80vh] overflow-y-auto">
            <DialogHeader><DialogTitle>{editItem ? `Edit ${title}` : `New ${title}`}</DialogTitle></DialogHeader>
            <div className="space-y-3">
              {columns.map(col => (
                <div key={col.key}>
                  <Label>{col.label}</Label>
                  {col.key === "description" || col.key === "bio" || col.key === "content" || col.key === "excerpt" || col.key === "answer" ? (
                    <Textarea value={formData[col.key] || ""} onChange={(e) => setFormData(p => ({ ...p, [col.key]: e.target.value }))} />
                  ) : (
                    <Input value={formData[col.key] || ""} onChange={(e) => setFormData(p => ({ ...p, [col.key]: e.target.value }))} />
                  )}
                </div>
              ))}
              <Button onClick={handleSave} className="w-full gradient-bg text-white border-0">
                {editItem ? "Update" : "Create"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      {isLoading ? <p>Loading...</p> : (
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                {columns.slice(0, 3).map(c => <TableHead key={c.key}>{c.label}</TableHead>)}
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.map(item => (
                <TableRow key={item.id}>
                  {columns.slice(0, 3).map(c => (
                    <TableCell key={c.key} className="max-w-[200px] truncate">
                      {typeof item[c.key] === "object" ? JSON.stringify(item[c.key]) : String(item[c.key] ?? "")}
                    </TableCell>
                  ))}
                  <TableCell>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" onClick={() => openEdit(item)}><Edit className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(item.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {!data?.length && <TableRow><TableCell colSpan={4} className="text-center text-muted-foreground py-8">No items yet.</TableCell></TableRow>}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

const ContactSubmissions = () => {
  const { data: contacts, isLoading } = useQuery({
    queryKey: ["contact_submissions"],
    queryFn: async () => {
      const { data, error } = await supabase.from("contact_submissions").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  return (
    <div>
      <h2 className="font-display text-xl font-bold mb-4 flex items-center gap-2"><Mail className="h-5 w-5" />Contact Submissions</h2>
      {isLoading ? <p>Loading...</p> : !contacts?.length ? (
        <Card><CardContent className="p-8 text-center text-muted-foreground">No contact submissions yet.</CardContent></Card>
      ) : (
        <div className="space-y-3">
          {contacts.map((c) => (
            <Card key={c.id}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-semibold">{c.name} — {c.email}</div>
                  <span className="text-xs text-muted-foreground">{new Date(c.created_at).toLocaleDateString()}</span>
                </div>
                {c.subject && <p className="text-sm font-medium mb-1">{c.subject}</p>}
                <p className="text-sm text-muted-foreground">{c.message}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

const Admin = () => {
  const { isAdmin, loading } = useAuth();
  const navigate = useNavigate();
  const courses = useCourses();
  const projects = useProjects();
  const blogPosts = useBlogPosts();
  const events = useEvents();
  const instructors = useInstructors();

  if (loading) return <div className="container py-20 text-center">Loading...</div>;
  if (!isAdmin) { navigate("/dashboard"); return null; }

  return (
    <div className="container py-8">
      <h1 className="font-display text-3xl font-bold mb-8">Admin Panel</h1>
      <Tabs defaultValue="courses">
        <TabsList className="flex-wrap">
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="blog">Blog</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="instructors">Instructors</TabsTrigger>
          <TabsTrigger value="contacts">Contacts</TabsTrigger>
        </TabsList>
        <TabsContent value="courses" className="mt-6">
          <AdminTable title="Course" queryKey="courses" tableName="courses"
            columns={[
              { key: "title", label: "Title" }, { key: "category", label: "Category" }, { key: "level", label: "Level" },
              { key: "duration", label: "Duration" }, { key: "price", label: "Price" }, { key: "type", label: "Type" },
              { key: "badge", label: "Badge" }, { key: "description", label: "Description" },
            ]}
            data={courses.data as any} isLoading={courses.isLoading} />
        </TabsContent>
        <TabsContent value="projects" className="mt-6">
          <AdminTable title="Project" queryKey="projects" tableName="projects"
            columns={[
              { key: "title", label: "Title" }, { key: "category", label: "Category" }, { key: "difficulty", label: "Difficulty" },
              { key: "duration", label: "Duration" }, { key: "description", label: "Description" },
            ]}
            data={projects.data as any} isLoading={projects.isLoading} />
        </TabsContent>
        <TabsContent value="blog" className="mt-6">
          <AdminTable title="Blog Post" queryKey="blog_posts" tableName="blog_posts"
            columns={[
              { key: "title", label: "Title" }, { key: "category", label: "Category" }, { key: "author", label: "Author" },
              { key: "excerpt", label: "Excerpt" }, { key: "content", label: "Content" }, { key: "read_time", label: "Read Time" },
            ]}
            data={blogPosts.data as any} isLoading={blogPosts.isLoading} />
        </TabsContent>
        <TabsContent value="events" className="mt-6">
          <AdminTable title="Event" queryKey="events" tableName="events"
            columns={[
              { key: "title", label: "Title" }, { key: "type", label: "Type" }, { key: "date", label: "Date" },
              { key: "time", label: "Time" }, { key: "location", label: "Location" }, { key: "description", label: "Description" },
            ]}
            data={events.data as any} isLoading={events.isLoading} />
        </TabsContent>
        <TabsContent value="instructors" className="mt-6">
          <AdminTable title="Instructor" queryKey="instructors" tableName="instructors"
            columns={[
              { key: "name", label: "Name" }, { key: "title", label: "Title" }, { key: "bio", label: "Bio" },
            ]}
            data={instructors.data as any} isLoading={instructors.isLoading} />
        </TabsContent>
        <TabsContent value="contacts" className="mt-6">
          <ContactSubmissions />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;
