import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Cloud, Settings, Code, GitBranch, RefreshCw, Box, Layers, Star, Clock, Users, Award, ChevronRight, BookOpen, Zap, CheckCircle2, TrendingUp, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { courses, projects, learningPaths, roadmaps, testimonials, events, blogPosts, categories } from "@/data/mock-data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const iconMap: Record<string, React.ElementType> = {
  Cloud, Settings, Code, GitBranch, RefreshCw, Box, Layers,
};

const Index = () => {
  return (
    <div className="overflow-hidden bg-grid-fine">
      {/* Hero */}
      <section className="relative py-20 md:py-32 gradient-bg-subtle overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-float" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-secondary/10 blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        </div>
        <div className="container relative">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm font-medium">
              <Award className="h-3.5 w-3.5 mr-1.5" /> Open Badge 3.0 Compliant
            </Badge>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Master Cloud & DevOps.{" "}
              <span className="gradient-text">Build Real Skills.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Online courses (recorded + live), hands-on projects, interview practice, roadmaps, and Open Badge 3.0 compliant digital badges.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="gradient-bg text-white border-0 text-base px-8" asChild>
                <Link to="/courses">Explore Courses <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8" asChild>
                <Link to="/learning-paths">View Learning Paths</Link>
              </Button>
            </div>
          </motion.div>
          {/* Trust Indicators */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.7 }} className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            {[{ icon: Award, text: "Open Badge 3.0" }, { icon: Zap, text: "Hands-on Projects" }, { icon: TrendingUp, text: "Career-Focused" }, { icon: Users, text: "5,000+ Students" }].map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <item.icon className="h-4 w-4 text-primary" />
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Explore by Category</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">From cloud foundations to advanced DevOps — find the right skills for your career.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {categories.map((cat, i) => {
              const Icon = iconMap[cat.icon] || Cloud;
              return (
                <motion.div key={cat.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="h-full">
                  <Link to="/courses" className="block h-full">
                    <Card className="text-center hover-glow hover:border-primary/30 transition-all group h-full flex flex-col">
                      <CardContent className="pt-6 pb-4 flex-1 flex flex-col items-center justify-center">
                        <div className={`mx-auto mb-3 h-12 w-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="font-display font-semibold text-sm">{cat.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{cat.count} courses</p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 gradient-bg-subtle">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">How CloudZen Works</h2>
            <p className="text-muted-foreground">Three simple steps to level up your career.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Learn", desc: "Watch expert-led courses, attend live workshops, and study at your own pace.", icon: BookOpen },
              { step: "02", title: "Build", desc: "Practice with hands-on projects that simulate real-world scenarios.", icon: Code },
              { step: "03", title: "Get Certified", desc: "Earn Open Badge 3.0 compliant credentials recognized globally.", icon: Award },
            ].map((item, i) => (
              <motion.div key={item.step} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="h-full">
                <Card className="text-center border-0 bg-transparent shadow-none h-full flex flex-col">
                  <CardContent className="pt-6 flex-1 flex flex-col items-center">
                    <div className="mx-auto mb-4 h-16 w-16 rounded-2xl gradient-bg flex items-center justify-center text-white">
                      <item.icon className="h-7 w-7" />
                    </div>
                    <p className="text-sm font-bold text-primary mb-2">STEP {item.step}</p>
                    <h3 className="font-display text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-base text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">Featured Courses</h2>
              <p className="text-muted-foreground">Start learning with our most popular courses.</p>
            </div>
            <Button variant="ghost" asChild className="hidden sm:flex">
              <Link to="/courses">View All <ChevronRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.slice(0, 4).map((course, i) => (
              <motion.div key={course.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="h-full">
                <Link to={`/courses/${course.id}`} className="block h-full">
                  <Card className="hover-glow hover:border-primary/30 transition-all group h-full flex flex-col">
                    <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
                      <BookOpen className="h-8 w-8 text-muted-foreground/40" />
                    </div>
                    <CardContent className="p-4 flex-1 flex flex-col">
                      <div className="flex gap-2 mb-2">
                        <Badge variant="secondary" className="text-sm">{course.category}</Badge>
                        <Badge variant={course.price === "Free" ? "default" : "outline"} className="text-sm">
                          {course.price === "Free" ? "Free" : `$${course.price}`}
                        </Badge>
                      </div>
                      <h3 className="font-display font-semibold text-base mb-1 group-hover:text-primary transition-colors">{course.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2 flex-1">{course.description}</p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto">
                        <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{course.duration}</span>
                        <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 text-yellow-500" />{course.rating}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Spotlight */}
      <section className="py-20 gradient-bg-subtle">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">Hands-on Projects</h2>
              <p className="text-muted-foreground">Build real skills with guided projects.</p>
            </div>
            <Button variant="ghost" asChild className="hidden sm:flex">
              <Link to="/projects">View All <ChevronRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project, i) => (
              <motion.div key={project.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="h-full">
                <Link to={`/projects/${project.id}`} className="block h-full">
                  <Card className="hover-glow hover:border-primary/30 transition-all group h-full flex flex-col">
                    <CardContent className="p-5 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline">{project.category}</Badge>
                        <Badge variant={project.difficulty === "Easy" ? "secondary" : project.difficulty === "Medium" ? "default" : "destructive"} className="text-sm">{project.difficulty}</Badge>
                      </div>
                      <h3 className="font-display font-semibold text-base mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2 flex-1">{project.description}</p>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground mt-auto">
                        <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{project.duration}</span>
                        <span>{project.tools.slice(0, 2).join(", ")}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">Learning Paths</h2>
              <p className="text-muted-foreground">Structured paths from beginner to job-ready.</p>
            </div>
            <Button variant="ghost" asChild className="hidden sm:flex">
              <Link to="/learning-paths">View All <ChevronRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningPaths.map((path, i) => (
              <motion.div key={path.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="h-full">
                <Link to={`/learning-paths/${path.id}`} className="block h-full">
                  <Card className="hover-glow hover:border-primary/30 transition-all group h-full flex flex-col">
                    <CardContent className="p-5 flex-1 flex flex-col">
                      <div className="h-10 w-10 rounded-lg gradient-bg flex items-center justify-center text-white mb-3">
                        <TrendingUp className="h-5 w-5" />
                      </div>
                      <h3 className="font-display font-semibold text-base mb-1 group-hover:text-primary transition-colors">{path.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2 flex-1">{path.description}</p>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground mt-auto">
                        <span>{path.steps} steps</span>
                        <span>{path.duration}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmaps */}
      <section className="py-20 gradient-bg-subtle">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Career Roadmaps</h2>
            <p className="text-muted-foreground">Visual guides to your dream tech role.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {roadmaps.map((rm, i) => (
              <motion.div key={rm.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="h-full">
                <Link to={`/roadmaps/${rm.id}`} className="block h-full">
                  <Card className="hover-glow hover:border-primary/30 transition-all group h-full flex flex-col">
                    <CardContent className="p-5 flex-1 flex flex-col">
                      <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{rm.role}</h3>
                      <p className="text-sm text-muted-foreground mb-3 flex-1">{rm.description}</p>
                      <div className="flex items-center gap-1 text-sm text-primary font-medium mt-auto">
                        View Roadmap <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">What Students Say</h2>
            <p className="text-muted-foreground">Hear from our community of learners.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="h-full">
                <Card className="h-full flex flex-col">
                  <CardContent className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className={`h-4 w-4 ${j < t.rating ? "text-yellow-500 fill-yellow-500" : "text-muted"}`} />
                      ))}
                    </div>
                    <Quote className="h-4 w-4 text-primary/30 mb-2" />
                    <p className="text-sm text-muted-foreground mb-4 flex-1">{t.quote}</p>
                    <div className="mt-auto">
                      <p className="text-base font-semibold">{t.name}</p>
                      <p className="text-sm text-muted-foreground">{t.university}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-20 gradient-bg-subtle">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">Upcoming Events</h2>
              <p className="text-muted-foreground">Join our community events and workshops.</p>
            </div>
            <Button variant="ghost" asChild className="hidden sm:flex">
              <Link to="/events">View All <ChevronRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {events.filter((e) => !e.isPast).map((event, i) => (
              <motion.div key={event.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="h-full">
                <Link to={`/events/${event.id}`} className="block h-full">
                  <Card className="hover-glow hover:border-primary/30 transition-all group h-full flex flex-col">
                    <CardContent className="p-5 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{event.type}</Badge>
                        <span className="text-sm text-muted-foreground">{event.date} · {event.time}</span>
                      </div>
                      <h3 className="font-display font-semibold text-base mb-1 group-hover:text-primary transition-colors">{event.title}</h3>
                      <p className="text-sm text-muted-foreground flex-1">{event.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-20">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">Latest from the Blog</h2>
              <p className="text-muted-foreground">Insights, tutorials, and industry updates.</p>
            </div>
            <Button variant="ghost" asChild className="hidden sm:flex">
              <Link to="/blog">View All <ChevronRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post, i) => (
              <motion.div key={post.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="h-full">
                <Link to={`/blog/${post.id}`} className="block h-full">
                  <Card className="hover-glow hover:border-primary/30 transition-all group h-full flex flex-col">
                    <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
                      <BookOpen className="h-8 w-8 text-muted-foreground/40" />
                    </div>
                    <CardContent className="p-4 flex-1 flex flex-col">
                      <Badge variant="secondary" className="text-sm mb-2 w-fit">{post.category}</Badge>
                      <h3 className="font-display font-semibold text-base mb-1 group-hover:text-primary transition-colors">{post.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2 line-clamp-2 flex-1">{post.excerpt}</p>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground mt-auto">
                        <span>{post.author}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20">
        <div className="container">
          <Card className="gradient-bg border-0 overflow-hidden relative">
            <div className="absolute inset-0 bg-black/10" />
            <CardContent className="relative p-8 md:p-12 text-center text-white">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Get a Personalized Learning Plan</h2>
              <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
                Not sure where to start? Our experts will create a custom roadmap tailored to your goals.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" variant="secondary" className="text-base px-8" asChild>
                  <Link to="/consultations">Request Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-base px-8 border-white/30 text-white hover:bg-white/10" asChild>
                  <Link to="/learning-paths">Browse Paths</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
