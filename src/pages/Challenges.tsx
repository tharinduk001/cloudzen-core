import { motion } from "framer-motion";
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
  <div className="container py-12">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-12 text-center"
    >
      <Badge variant="outline" className="mb-5 px-5 py-2 text-base">
        <Zap className="h-4 w-4 mr-2" /> Coming Soon
      </Badge>
      <h1 className="font-display text-5xl lg:text-6xl font-bold mb-4">Challenges</h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        Compete in periodic Cloud, DevOps, and Software Engineering challenges. Earn points, climb the leaderboard, and showcase your skills with badges.
      </p>
    </motion.div>

    {/* Concept Cards */}
    <div className="grid lg:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
      {[
        { icon: Trophy, title: "Compete", desc: "Take on timed challenges in Cloud, DevOps, and Software Engineering." },
        { icon: Medal, title: "Earn Points", desc: "Score points for accuracy, speed, and creativity." },
        { icon: Award, title: "Win Badges", desc: "Earn Open Badge 3.0 credentials for top performance." },
      ].map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + i * 0.1 }}
        >
          <Card className="text-center hover-glow transition-shadow h-full">
            <CardContent className="p-8">
              <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-display font-bold text-2xl mb-2">{item.title}</h3>
              <p className="text-base text-muted-foreground">{item.desc}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>

    {/* Leaderboard Preview */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <Card>
        <CardContent className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-2xl font-bold flex items-center gap-3">
              <Trophy className="h-6 w-6 text-primary" /> Live Ranking Dashboard
            </h2>
            <Select defaultValue="all">
              <SelectTrigger className="w-[200px] h-12 text-base"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Challenges</SelectItem>
                <SelectItem value="cloud">Cloud Challenge</SelectItem>
                <SelectItem value="devops">DevOps Challenge</SelectItem>
                <SelectItem value="se">SE Challenge</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="rounded-xl border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-20 text-base">Rank</TableHead>
                  <TableHead className="text-base">Username</TableHead>
                  <TableHead className="text-right text-base">Points</TableHead>
                  <TableHead className="text-right text-base">Badges</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockLeaderboard.map((entry) => (
                  <TableRow key={entry.rank}>
                    <TableCell className="font-medium">
                      <span className="text-xl">{entry.avatar}</span>
                    </TableCell>
                    <TableCell className="font-medium text-base">{entry.username}</TableCell>
                    <TableCell className="text-right font-mono text-base">{entry.points.toLocaleString()}</TableCell>
                    <TableCell className="text-right">
                      <Badge variant="secondary" className="text-sm">{entry.badges}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="text-base text-muted-foreground text-center mt-6">This is a preview. Challenges feature launching soon!</p>
        </CardContent>
      </Card>
    </motion.div>
  </div>
);

export default Challenges;
