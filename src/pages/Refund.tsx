const Refund = () => (
  <div className="container py-8 max-w-3xl">
    <h1 className="font-display text-3xl md:text-4xl font-bold mb-6">Refund & Returns Policy</h1>
    <div className="prose prose-sm dark:prose-invert max-w-none space-y-6">
      <p className="text-muted-foreground">Last updated: February 16, 2026</p>
      {[
        { title: "1. Free Courses", content: "Free courses are provided at no cost and are non-refundable. You can unenroll from free courses at any time." },
        { title: "2. Premium Courses", content: "We offer a 30-day money-back guarantee on all premium recorded courses. If you're not satisfied, contact us within 30 days of purchase for a full refund." },
        { title: "3. Live Workshops", content: "Live workshops can be refunded up to 48 hours before the scheduled start time. No refunds are available after the workshop begins." },
        { title: "4. Consultation Services", content: "Consultation fees are refundable if cancelled at least 24 hours before the scheduled session. No-shows are non-refundable." },
        { title: "5. How to Request a Refund", content: "To request a refund, contact us at refunds@cloudzen.dev with your order details. Refunds are processed within 5-10 business days to your original payment method." },
        { title: "6. Exceptions", content: "Refunds may be denied if there is evidence of misuse, such as completing a significant portion of the course or downloading all resources before requesting a refund." },
      ].map((section) => (
        <div key={section.title}>
          <h2 className="font-display text-xl font-bold">{section.title}</h2>
          <p className="text-muted-foreground">{section.content}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Refund;
