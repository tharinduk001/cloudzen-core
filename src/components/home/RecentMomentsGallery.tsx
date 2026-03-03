import { motion } from "framer-motion";
import { useState } from "react";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    alt: "Tech conference workshop session",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
    alt: "Students collaborating on project",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1591115765373-5f9cf1da1776?w=600&q=80",
    alt: "Hands-on lab session",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80",
    alt: "Speaker presenting at event",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80",
    alt: "Team discussion and mentoring",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    alt: "Workshop breakout session",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
    alt: "Classroom training",
    span: "col-span-2 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80",
    alt: "Networking event",
    span: "col-span-1 row-span-1",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

const RecentMomentsGallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const goPrev = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null
    );
  const goNext = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % galleryImages.length : null
    );

  return (
    <section className="py-20 gradient-bg-subtle bg-grid">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            <Camera className="h-4 w-4" />
            Gallery
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
            Our Recent Moments
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Snapshots from our workshops, bootcamps, and community events across Sri Lanka.
          </p>
        </motion.div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[200px] gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`${img.span} relative group cursor-pointer overflow-hidden rounded-xl border border-border`}
              onClick={() => openLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-medium">{img.alt}</span>
              </div>
              {/* Subtle corner accent */}
              <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Camera className="h-3.5 w-3.5 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 z-50 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 z-50 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <motion.img
            key={lightboxIndex}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            src={galleryImages[lightboxIndex].src}
            alt={galleryImages[lightboxIndex].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <p className="text-white/80 text-sm font-medium">{galleryImages[lightboxIndex].alt}</p>
            <p className="text-white/40 text-xs mt-1">{lightboxIndex + 1} / {galleryImages.length}</p>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default RecentMomentsGallery;
