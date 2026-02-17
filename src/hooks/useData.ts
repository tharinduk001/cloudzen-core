import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./useAuth";

// ===== PUBLIC DATA HOOKS =====
export const useCourses = () => useQuery({ queryKey: ["courses"], queryFn: async () => { const { data, error } = await supabase.from("courses").select("*"); if (error) throw error; return data; } });
export const useProjects = () => useQuery({ queryKey: ["projects"], queryFn: async () => { const { data, error } = await supabase.from("projects").select("*"); if (error) throw error; return data; } });
export const useInstructors = () => useQuery({ queryKey: ["instructors"], queryFn: async () => { const { data, error } = await supabase.from("instructors").select("*"); if (error) throw error; return data; } });
export const useEvents = () => useQuery({ queryKey: ["events"], queryFn: async () => { const { data, error } = await supabase.from("events").select("*"); if (error) throw error; return data; } });
export const useBlogPosts = () => useQuery({ queryKey: ["blog_posts"], queryFn: async () => { const { data, error } = await supabase.from("blog_posts").select("*"); if (error) throw error; return data; } });
export const useRoadmaps = () => useQuery({ queryKey: ["roadmaps"], queryFn: async () => { const { data, error } = await supabase.from("roadmaps").select("*"); if (error) throw error; return data; } });
export const useLearningPaths = () => useQuery({ queryKey: ["learning_paths"], queryFn: async () => { const { data, error } = await supabase.from("learning_paths").select("*"); if (error) throw error; return data; } });
export const useInterviewQuestions = () => useQuery({ queryKey: ["interview_questions"], queryFn: async () => { const { data, error } = await supabase.from("interview_questions").select("*"); if (error) throw error; return data; } });
export const useTestimonials = () => useQuery({ queryKey: ["testimonials"], queryFn: async () => { const { data, error } = await supabase.from("testimonials").select("*"); if (error) throw error; return data; } });
export const useUniversityModules = () => useQuery({ queryKey: ["university_modules"], queryFn: async () => { const { data, error } = await supabase.from("university_modules").select("*"); if (error) throw error; return data; } });

// Single item hooks
export const useCourse = (id: string | undefined) =>
  useQuery({
    queryKey: ["courses", id],
    queryFn: async () => {
      if (!id) return null;
      const { data, error } = await supabase.from("courses").select("*").eq("id", id).maybeSingle();
      if (error) throw error;
      return data;
    },
    enabled: !!id,
  });

export const useProject = (id: string | undefined) =>
  useQuery({
    queryKey: ["projects", id],
    queryFn: async () => {
      if (!id) return null;
      const { data, error } = await supabase.from("projects").select("*").eq("id", id).maybeSingle();
      if (error) throw error;
      return data;
    },
    enabled: !!id,
  });

export const useInstructor = (id: string | undefined) =>
  useQuery({
    queryKey: ["instructors", id],
    queryFn: async () => {
      if (!id) return null;
      const { data, error } = await supabase.from("instructors").select("*").eq("id", id).maybeSingle();
      if (error) throw error;
      return data;
    },
    enabled: !!id,
  });

export const useEvent = (id: string | undefined) =>
  useQuery({
    queryKey: ["events", id],
    queryFn: async () => {
      if (!id) return null;
      const { data, error } = await supabase.from("events").select("*").eq("id", id).maybeSingle();
      if (error) throw error;
      return data;
    },
    enabled: !!id,
  });

export const useBlogPost = (id: string | undefined) =>
  useQuery({
    queryKey: ["blog_posts", id],
    queryFn: async () => {
      if (!id) return null;
      const { data, error } = await supabase.from("blog_posts").select("*").eq("id", id).maybeSingle();
      if (error) throw error;
      return data;
    },
    enabled: !!id,
  });

export const useRoadmap = (id: string | undefined) =>
  useQuery({
    queryKey: ["roadmaps", id],
    queryFn: async () => {
      if (!id) return null;
      const { data, error } = await supabase.from("roadmaps").select("*").eq("id", id).maybeSingle();
      if (error) throw error;
      return data;
    },
    enabled: !!id,
  });

export const useLearningPath = (id: string | undefined) =>
  useQuery({
    queryKey: ["learning_paths", id],
    queryFn: async () => {
      if (!id) return null;
      const { data, error } = await supabase.from("learning_paths").select("*").eq("id", id).maybeSingle();
      if (error) throw error;
      return data;
    },
    enabled: !!id,
  });

// ===== USER-SPECIFIC HOOKS =====
export const useEnrollments = () => {
  const { user } = useAuth();
  return useQuery({
    queryKey: ["enrollments", user?.id],
    queryFn: async () => {
      if (!user) return [];
      const { data, error } = await supabase.from("enrollments").select("*, courses(*)").eq("user_id", user.id);
      if (error) throw error;
      return data;
    },
    enabled: !!user,
  });
};

export const useBookmarks = () => {
  const { user } = useAuth();
  return useQuery({
    queryKey: ["bookmarks", user?.id],
    queryFn: async () => {
      if (!user) return [];
      const { data, error } = await supabase.from("bookmarks").select("*").eq("user_id", user.id);
      if (error) throw error;
      return data;
    },
    enabled: !!user,
  });
};

export const useProfile = () => {
  const { user } = useAuth();
  return useQuery({
    queryKey: ["profile", user?.id],
    queryFn: async () => {
      if (!user) return null;
      const { data, error } = await supabase.from("profiles").select("*").eq("user_id", user.id).maybeSingle();
      if (error) throw error;
      return data;
    },
    enabled: !!user,
  });
};

// ===== MUTATIONS =====
export const useEnrollInCourse = () => {
  const qc = useQueryClient();
  const { user } = useAuth();
  return useMutation({
    mutationFn: async (courseId: string) => {
      if (!user) throw new Error("Must be logged in");
      const { error } = await supabase.from("enrollments").insert({ user_id: user.id, course_id: courseId });
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["enrollments"] }),
  });
};

export const useToggleBookmark = () => {
  const qc = useQueryClient();
  const { user } = useAuth();
  return useMutation({
    mutationFn: async ({ contentType, contentId }: { contentType: string; contentId: string }) => {
      if (!user) throw new Error("Must be logged in");
      const { data: existing } = await supabase
        .from("bookmarks")
        .select("id")
        .eq("user_id", user.id)
        .eq("content_type", contentType)
        .eq("content_id", contentId)
        .maybeSingle();
      if (existing) {
        await supabase.from("bookmarks").delete().eq("id", existing.id);
      } else {
        await supabase.from("bookmarks").insert({ user_id: user.id, content_type: contentType, content_id: contentId });
      }
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["bookmarks"] }),
  });
};

export const useSubmitContact = () =>
  useMutation({
    mutationFn: async (data: { name: string; email: string; subject: string; message: string }) => {
      const { error } = await supabase.from("contact_submissions").insert(data);
      if (error) throw error;
    },
  });

export const useUpdateProfile = () => {
  const qc = useQueryClient();
  const { user } = useAuth();
  return useMutation({
    mutationFn: async (data: { display_name?: string; bio?: string; avatar_url?: string }) => {
      if (!user) throw new Error("Must be logged in");
      const { error } = await supabase.from("profiles").update(data).eq("user_id", user.id);
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["profile"] }),
  });
};
