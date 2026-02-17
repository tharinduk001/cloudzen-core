import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/hooks/useAuth";
import { useEnrollments, useBookmarks, useProfile, useUpdateProfile } from "@/hooks/useData";
import { BookOpen, Bookmark, User, LogOut, Settings } from "lucide-react";
import { toast } from "sonner";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const { user, signOut, isAdmin } = useAuth();
  const navigate = useNavigate();
  const { data: enrollments, isLoading: enrollLoading } = useEnrollments();
  const { data: bookmarks } = useBookmarks();
  const { data: profile } = useProfile();
  const updateProfile = useUpdateProfile();

  const [displayName, setDisplayName] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    if (profile) {
      setDisplayName(profile.display_name || "");
      setBio(profile.bio || "");
    }
  }, [profile]);

  if (!user) {
    navigate("/sign-in");
    return null;
  }

  const handleProfileUpdate = async () => {
    try {
      await updateProfile.mutateAsync({ display_name: displayName, bio });
      toast.success("Profile updated!");
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <div className="container py-8 max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-3xl font-bold mb-1">Dashboard</h1>
          <p className="text-muted-foreground">{user.email}</p>
        </div>
        <div className="flex gap-2">
          {isAdmin && (
            <Button variant="outline" asChild><Link to="/admin">Admin Panel</Link></Button>
          )}
          <Button variant="ghost" onClick={handleSignOut}><LogOut className="h-4 w-4 mr-2" />Sign Out</Button>
        </div>
      </div>

      <Tabs defaultValue="enrollments">
        <TabsList>
          <TabsTrigger value="enrollments"><BookOpen className="h-4 w-4 mr-1" />My Courses</TabsTrigger>
          <TabsTrigger value="bookmarks"><Bookmark className="h-4 w-4 mr-1" />Bookmarks</TabsTrigger>
          <TabsTrigger value="profile"><User className="h-4 w-4 mr-1" />Profile</TabsTrigger>
        </TabsList>

        <TabsContent value="enrollments" className="mt-6">
          {enrollLoading ? (
            <p className="text-muted-foreground">Loading...</p>
          ) : !enrollments?.length ? (
            <Card><CardContent className="p-8 text-center">
              <BookOpen className="h-12 w-12 mx-auto text-muted-foreground/40 mb-4" />
              <h3 className="font-display text-lg font-bold mb-2">No courses yet</h3>
              <p className="text-muted-foreground mb-4">Start learning by enrolling in a course.</p>
              <Button asChild className="gradient-bg text-white border-0"><Link to="/courses">Browse Courses</Link></Button>
            </CardContent></Card>
          ) : (
            <div className="grid sm:grid-cols-2 gap-4">
              {enrollments.map((e: any) => (
                <Card key={e.id}>
                  <CardContent className="p-4">
                    <h3 className="font-display font-semibold mb-2">{e.courses?.title || "Course"}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <Progress value={e.progress} className="flex-1" />
                      <span className="text-sm text-muted-foreground">{e.progress}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge variant={e.completed ? "default" : "secondary"}>{e.completed ? "Completed" : "In Progress"}</Badge>
                      {e.courses && <Button size="sm" variant="outline" asChild><Link to={`/courses/${e.course_id}`}>Continue</Link></Button>}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="bookmarks" className="mt-6">
          {!bookmarks?.length ? (
            <Card><CardContent className="p-8 text-center">
              <Bookmark className="h-12 w-12 mx-auto text-muted-foreground/40 mb-4" />
              <h3 className="font-display text-lg font-bold mb-2">No bookmarks yet</h3>
              <p className="text-muted-foreground">Save courses and projects for later.</p>
            </CardContent></Card>
          ) : (
            <div className="grid sm:grid-cols-2 gap-4">
              {bookmarks.map((b: any) => (
                <Card key={b.id}>
                  <CardContent className="p-4">
                    <Badge variant="outline" className="mb-2">{b.content_type}</Badge>
                    <Button size="sm" variant="outline" asChild className="w-full">
                      <Link to={`/${b.content_type}s/${b.content_id}`}>View</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="profile" className="mt-6">
          <Card>
            <CardContent className="p-6 space-y-4">
              <div><Label>Display Name</Label><Input value={displayName} onChange={(e) => setDisplayName(e.target.value)} /></div>
              <div><Label>Bio</Label><Textarea value={bio} onChange={(e) => setBio(e.target.value)} rows={3} /></div>
              <Button onClick={handleProfileUpdate} disabled={updateProfile.isPending} className="gradient-bg text-white border-0">
                {updateProfile.isPending ? "Saving..." : "Save Profile"}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
