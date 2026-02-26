import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { events } from "@/data/mock-data";

const Events = () => {
  const upcoming = events.filter((e) => !e.isPast);
  const past = events.filter((e) => e.isPast);

  const EventCard = ({ event, i }: { event: typeof events[0]; i: number }) => (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
      <Link to={`/events/${event.id}`}>
        <Card className="hover-glow hover:border-primary/30 transition-all group h-full">
          <CardContent className="p-5">
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <Badge variant={event.type === "Workshop" ? "default" : event.type === "Meetup" ? "secondary" : "outline"}>{event.type}</Badge>
              {event.isPast && <Badge variant="outline" className="text-xs">Past</Badge>}
            </div>
            <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{event.title}</h3>
            <p className="text-sm text-muted-foreground mb-3">{event.description}</p>
            <div className="space-y-1.5 text-xs text-muted-foreground">
              <div className="flex items-center gap-2"><Calendar className="h-3.5 w-3.5" />{event.date}</div>
              <div className="flex items-center gap-2"><Clock className="h-3.5 w-3.5" />{event.time}</div>
              <div className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" />{event.location}</div>
              <div className="flex items-center gap-2"><Users className="h-3.5 w-3.5" />{event.speakers.join(", ")}</div>
            </div>
            {!event.isPast && <Button size="sm" className="mt-4 gradient-bg text-white border-0">Register</Button>}
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">Events</h1>
        <p className="text-muted-foreground">Join our community meetups, workshops, and webinars.</p>
      </div>
      <Tabs defaultValue="upcoming">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming ({upcoming.length})</TabsTrigger>
          <TabsTrigger value="past">Past ({past.length})</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          <div className="grid sm:grid-cols-2 gap-6 mt-6">
            {upcoming.map((e, i) => <EventCard key={e.id} event={e} i={i} />)}
          </div>
        </TabsContent>
        <TabsContent value="past">
          <div className="grid sm:grid-cols-2 gap-6 mt-6">
            {past.map((e, i) => <EventCard key={e.id} event={e} i={i} />)}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Events;
