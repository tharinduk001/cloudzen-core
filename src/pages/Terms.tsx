const Terms = () => (
  <div className="container py-8 max-w-3xl">
    <h1 className="font-display text-3xl md:text-4xl font-bold mb-6">Terms & Conditions</h1>
    <div className="prose prose-sm dark:prose-invert max-w-none space-y-6">
      <p className="text-muted-foreground">Last updated: February 16, 2026</p>
      {[
        { title: "1. Acceptance of Terms", content: "By accessing and using CloudZen, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services." },
        { title: "2. Use of Services", content: "CloudZen provides online educational content including courses, projects, and learning resources. You may use our services for personal, non-commercial educational purposes. You agree not to share, redistribute, or resell any course content." },
        { title: "3. User Accounts", content: "To access certain features, you may need to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account." },
        { title: "4. Intellectual Property", content: "All content on CloudZen, including courses, projects, code samples, and documentation, is the intellectual property of CloudZen and its instructors. You may not copy, modify, or distribute this content without permission." },
        { title: "5. Badges & Credentials", content: "Digital badges issued by CloudZen comply with the Open Badge 3.0 specification. Badges are non-transferable and represent the achievement of the specific holder only." },
        { title: "6. Limitation of Liability", content: "CloudZen is not liable for any indirect, incidental, or consequential damages arising from the use of our services. Our liability is limited to the amount paid for the specific course or service." },
        { title: "7. Changes to Terms", content: "We reserve the right to modify these terms at any time. Continued use of the platform after changes constitutes acceptance of the new terms." },
      ].map((section) => (
        <div key={section.title}>
          <h2 className="font-display text-xl font-bold">{section.title}</h2>
          <p className="text-muted-foreground">{section.content}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Terms;
