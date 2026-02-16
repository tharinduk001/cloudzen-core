import { useParams, Link } from "react-router-dom";
import { Star, Users, BookOpen, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { instructors, courses } from "@/data/mock-data";

const InstructorDetail = () => {
  const { id } = useParams();
  const instructor = instructors.find((i) => i.id === id);

  if (!instructor) return <div className="container py-20 text-center"><h1 className="text-2xl font-bold">Instructor not found</h1><Button asChild className="mt-4"><Link to="/instructors">Back to Instructors</Link></Button></div>;

  const instCourses = courses.filter((c) => c.instructor === instructor.name);

  return (
    <div className="container py-8 max-w-3xl">
      <div className="flex items-start gap-6 mb-8">
        <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center shrink-0">
          <Users className="h-10 w-10 text-muted-foreground/40" />
        </div>
        <div>
          <h1 className="font-display text-3xl font-bold mb-1">{instructor.name}</h1>
          <p className="text-muted-foreground mb-2">{instructor.title}</p>
          <div className="flex items-center gap-4 text-sm mb-3">
            <span className="flex items-center gap-1"><Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />{instructor.rating}</span>
            <span>{instructor.courses} courses</span>
            <span>{instructor.students} students</span>
          </div>
          <div className="flex gap-2">
            {instructor.socials.linkedin && <Button variant="ghost" size="icon" asChild><a href={instructor.socials.linkedin}><Linkedin className="h-4 w-4" /></a></Button>}
            {instructor.socials.github && <Button variant="ghost" size="icon" asChild><a href={instructor.socials.github}><Github className="h-4 w-4" /></a></Button>}
            {instructor.socials.twitter && <Button variant="ghost" size="icon" asChild><a href={instructor.socials.twitter}><Twitter className="h-4 w-4" /></a></Button>}
          </div>
        </div>
      </div>

      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="font-display text-xl font-bold mb-3">About</h2>
          <p className="text-muted-foreground">{instructor.bio}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {instructor.expertise.map((e) => <Badge key={e} variant="secondary">{e}</Badge>)}
          </div>
        </CardContent>
      </Card>

      <h2 className="font-display text-xl font-bold mb-4">Courses by {instructor.name}</h2>
      <div className="space-y-4">
        {instCourses.map((course) => (
          <Link key={course.id} to={`/courses/${course.id}`}>
            <Card className="hover-glow hover:border-primary/30 transition-all group">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="h-16 w-16 bg-muted rounded-lg flex items-center justify-center shrink-0">
                  <BookOpen className="h-6 w-6 text-muted-foreground/40" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold group-hover:text-primary transition-colors">{course.title}</h3>
                  <div className="flex gap-3 text-xs text-muted-foreground mt-1">
                    <span>{course.level}</span>
                    <span>{course.duration}</span>
                    <span className="flex items-center gap-1"><Star className="h-3 w-3 text-yellow-500" />{course.rating}</span>
                  </div>
                </div>
                <Badge variant={course.price === "Free" ? "default" : "outline"}>{course.price === "Free" ? "Free" : `$${course.price}`}</Badge>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InstructorDetail;
