import { Trophy, Medal, Award, Star, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const mockLeaderboard = [
  { rank: 1, username: "cloudNinja42", points: 2850, badges: 12, avatar: "🥇" },
  { rank: 2, username: "devOpsQueen", points: 2640, badges: 10, avatar: "🥈" },
  { rank: 3, username: "k8sMaster", points: 2510, badges: 11, avatar: "🥉" },
  { rank: 4, username: "terraformHero", points: 2380, badges: 9, avatar: "⭐" },
  { rank: 5, username: "cicdWizard", points: 2200, badges: 8, avatar: "⭐" },
  { rank: 6, username: "linuxPro", points: 2050, badges: 7, avatar: "⭐" },
  { rank: 7, username: "dockerFan", points: 1920, badges: 7, avatar: "⭐" },
  { rank: 8, username: "awsLearner", points: 1800, badges: 6, avatar: "⭐" },
];

const Challenges = () => (
  <div className="container py-8">
    <div className="mb-8 text-center">
      <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm">
        <Zap className="h-3.5 w-3.5 mr-1.5" /> Coming Soon
      </Badge>
      <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">Challenges</h1>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Compete in periodic Cloud, DevOps, and Software Engineering challenges. Earn points, climb the leaderboard, and showcase your skills with badges.
      </p>
    </div>

    {/* Concept Cards */}
    <div className="grid sm:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
      {[
        { icon: Trophy, title: "Compete", desc: "Take on timed challenges in Cloud, DevOps, and SE." },
        { icon: Medal, title: "Earn Points", desc: "Score points for accuracy, speed, and creativity." },
        { icon: Award, title: "Win Badges", desc: "Earn Open Badge 3.0 credentials for top performance." },
      ].map((item) => (
        <Card key={item.title} className="text-center">
          <CardContent className="p-5">
            <item.icon className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-display font-semibold mb-1">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </CardContent>
        </Card>
      ))}
    </div>

    {/* Leaderboard Preview */}
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-xl font-bold flex items-center gap-2">
            <Trophy className="h-5 w-5 text-primary" /> Live Ranking Dashboard
          </h2>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Challenges</SelectItem>
              <SelectItem value="cloud">Cloud Challenge</SelectItem>
              <SelectItem value="devops">DevOps Challenge</SelectItem>
              <SelectItem value="se">SE Challenge</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-16">Rank</TableHead>
                <TableHead>Username</TableHead>
                <TableHead className="text-right">Points</TableHead>
                <TableHead className="text-right">Badges</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockLeaderboard.map((entry) => (
                <TableRow key={entry.rank}>
                  <TableCell className="font-medium">
                    <span className="text-lg">{entry.avatar}</span>
                  </TableCell>
                  <TableCell className="font-medium">{entry.username}</TableCell>
                  <TableCell className="text-right font-mono">{entry.points.toLocaleString()}</TableCell>
                  <TableCell className="text-right">
                    <Badge variant="secondary">{entry.badges}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <p className="text-xs text-muted-foreground text-center mt-4">This is a preview. Challenges feature launching soon!</p>
      </CardContent>
    </Card>
  </div>
);

export default Challenges;
