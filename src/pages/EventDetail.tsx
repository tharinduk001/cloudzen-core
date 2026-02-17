import { useParams, Link } from "react-router-dom";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { events } from "@/data/mock-data";

const EventDetail = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === id);

  if (!event) return <div className="container py-20 text-center"><h1 className="text-2xl font-bold">Event not found</h1><Button asChild className="mt-4"><Link to="/events">Back to Events</Link></Button></div>;

  return (
    <div className="container py-8 max-w-3xl">
      <Badge variant={event.type === "Workshop" ? "default" : "secondary"} className="mb-3">{event.type}</Badge>
      <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">{event.title}</h1>
      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
        <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />{event.date}</span>
        <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{event.time}</span>
        <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" />{event.location}</span>
      </div>
      <p className="text-lg mb-8">{event.description}</p>

      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="font-display text-xl font-bold mb-4">Speakers</h2>
          <div className="space-y-3">
            {event.speakers.map((s) => (
              <div key={s} className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center"><Users className="h-4 w-4 text-muted-foreground" /></div>
                <span className="font-medium">{s}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="font-display text-xl font-bold mb-4">Agenda</h2>
          <div className="space-y-3 text-sm">
            <div className="flex gap-4"><span className="text-muted-foreground w-20 shrink-0">6:00 PM</span><span>Welcome & Networking</span></div>
            <div className="flex gap-4"><span className="text-muted-foreground w-20 shrink-0">6:30 PM</span><span>Main Presentation</span></div>
            <div className="flex gap-4"><span className="text-muted-foreground w-20 shrink-0">7:30 PM</span><span>Q&A Session</span></div>
            <div className="flex gap-4"><span className="text-muted-foreground w-20 shrink-0">8:00 PM</span><span>Closing & Networking</span></div>
          </div>
        </CardContent>
      </Card>

      {!event.isPast && <Button size="lg" className="gradient-bg text-white border-0">Register for Event</Button>}
    </div>
  );
};

export default EventDetail;
