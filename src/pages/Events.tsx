import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
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
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <Badge variant={event.type === "Workshop" ? "default" : event.type === "Meetup" ? "secondary" : "outline"} className="text-sm px-3 py-1">{event.type}</Badge>
              {event.isPast && <Badge variant="outline" className="text-sm">Past</Badge>}
            </div>
            <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{event.title}</h3>
            <p className="text-base text-muted-foreground mb-5 leading-relaxed">{event.description}</p>
            <div className="space-y-2.5 text-base text-muted-foreground">
              <div className="flex items-center gap-3"><Calendar className="h-5 w-5 text-primary/60" />{event.date}</div>
              <div className="flex items-center gap-3"><Clock className="h-5 w-5 text-primary/60" />{event.time}</div>
              <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-primary/60" />{event.location}</div>
              <div className="flex items-center gap-3"><Users className="h-5 w-5 text-primary/60" />{event.speakers.join(", ")}</div>
            </div>
            {!event.isPast && <Button size="lg" className="mt-6 gradient-bg text-white border-0 h-12 text-base">Register Now <ArrowRight className="ml-2 h-4 w-4" /></Button>}
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );

  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="font-display text-5xl lg:text-6xl font-bold mb-4">Events</h1>
        <p className="text-xl text-muted-foreground">Join our community meetups, workshops, and webinars.</p>
      </motion.div>

      <Tabs defaultValue="upcoming">
        <TabsList className="h-12">
          <TabsTrigger value="upcoming" className="text-base px-6">Upcoming ({upcoming.length})</TabsTrigger>
          <TabsTrigger value="past" className="text-base px-6">Past ({past.length})</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          <div className="grid lg:grid-cols-2 gap-8 mt-8">
            {upcoming.map((e, i) => <EventCard key={e.id} event={e} i={i} />)}
          </div>
        </TabsContent>
        <TabsContent value="past">
          <div className="grid lg:grid-cols-2 gap-8 mt-8">
            {past.map((e, i) => <EventCard key={e.id} event={e} i={i} />)}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Events;
