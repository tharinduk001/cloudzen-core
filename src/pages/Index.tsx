import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, Clock, Users, Award, ChevronRight, BookOpen, Zap, TrendingUp, Quote, Cloud, Settings, Code, CheckCircle, RefreshCw, Brain } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import HeroTerminal from "@/components/home/HeroTerminal";
import { courses, projects, testimonials, categories } from "@/data/mock-data";

const iconMap: Record<string, React.ElementType> = {
  Cloud, Settings, Code, CheckCircle, RefreshCw, Brain,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Index = () => {

  return (
    <div className="overflow-hidden">
      {/* Hero with Orbit Categories */}
      <section className="relative py-16 md:py-24 gradient-bg-subtle bg-grid overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-float" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-secondary/10 blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        </div>
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left column - Text */}
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <Badge variant="secondary" className="mb-4 px-3 py-1 text-xs font-medium">
                <Award className="h-3 w-3 mr-1" /> Open Badge 3.0 Compliant
              </Badge>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                Advanced Skills.{" "}
                <span className="gradient-text">Simplified Learning.</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-5">
                CloudZen is the Sri Lanka's most reliable platform for learn Cloud, DevOps, Full Stack Development and QA Engineering with the simplest way!
              </p>

              {/* Category Buttons */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }} className="flex flex-wrap gap-2 mb-6">
                {categories.map((cat) => {
                  const Icon = iconMap[cat.icon] || Cloud;
                  return (
                    <Link key={cat.name} to="/courses">
                      <Badge variant="outline" className="px-3 py-1.5 text-sm font-medium gap-1.5 cursor-pointer hover:bg-primary/10 hover:border-primary/40 transition-all">
                        <Icon className="h-3.5 w-3.5 text-primary" />
                        {cat.name}
                      </Badge>
                    </Link>
                  );
                })}
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="gradient-bg text-primary-foreground border-0 text-base px-8" asChild>
                  <Link to="/courses">Explore Courses <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="text-base px-8" asChild>
                  <Link to="/consultations">Contact Us</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right column - Terminal */}
            <div className="hidden lg:block">
              <HeroTerminal />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section id="featured-courses" className="py-20 bg-grid">
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
      <section className="py-20 gradient-bg-subtle bg-grid">
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




      {/* Testimonials */}
      <section className="py-20 bg-grid">
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




      {/* Open Badge 3.0 Banner */}
      <section className="py-20 bg-grid">
        <div className="container">
          <Card className="gradient-bg border-0 overflow-hidden relative">
            <div className="absolute inset-0 bg-black/10" />
            <CardContent className="relative p-8 md:p-12 text-white">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Badge Icon */}
                <div className="flex-shrink-0">
                  <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <Award className="h-16 w-16 md:h-20 md:w-20 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <Badge variant="secondary" className="mb-3 px-3 py-1 text-xs font-semibold">
                    International Standard
                  </Badge>
                  <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                    Open Badge 3.0 Compliant Credentials
                  </h2>
                  <p className="text-base md:text-lg opacity-90 mb-6 max-w-2xl">
                    Earn industry-recognized digital badges powered by CertDirectory Credentials that prove your skills to employers worldwide.
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                    {[
                      { icon: "🔒", label: "Tamper-Proof" },
                      { icon: "🌐", label: "Globally Verifiable" },
                      { icon: "📱", label: "Offline Backed" },
                      { icon: "🔗", label: "Shareable on LinkedIn" },
                    ].map((feature) => (
                      <div key={feature.label} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2.5 border border-white/10">
                        <span className="text-lg">{feature.icon}</span>
                        <span className="text-sm font-medium">{feature.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3">
                    <Button size="lg" variant="secondary" className="text-base px-8" asChild>
                      <Link to="/courses">Explore Courses</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="text-base px-8 border-white/40 bg-white/15 text-white hover:bg-white/25" asChild>
                      <Link to="/about">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
