const Privacy = () => (
  <div className="container py-8 max-w-3xl">
    <h1 className="font-display text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
    <div className="prose prose-sm dark:prose-invert max-w-none space-y-6">
      <p className="text-muted-foreground">Last updated: February 16, 2026</p>
      {[
        { title: "1. Information We Collect", content: "We collect information you provide directly (name, email, payment info) and automatically (usage data, cookies, device info). We use this to provide and improve our services." },
        { title: "2. How We Use Your Information", content: "We use your data to: provide educational services, process payments, send communications, improve our platform, and comply with legal obligations." },
        { title: "3. Data Sharing", content: "We do not sell your personal information. We may share data with service providers (payment processors, analytics tools) who help operate our platform, under strict confidentiality agreements." },
        { title: "4. Cookies", content: "We use cookies to enhance your experience, remember preferences, and analyze usage patterns. You can control cookie settings through your browser." },
        { title: "5. Data Security", content: "We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure." },
        { title: "6. Your Rights", content: "You have the right to access, correct, delete, or export your personal data. Contact us at privacy@cloudzen.dev to exercise these rights." },
        { title: "7. Contact", content: "For privacy-related questions, contact us at privacy@cloudzen.dev or through our Contact page." },
      ].map((section) => (
        <div key={section.title}>
          <h2 className="font-display text-xl font-bold">{section.title}</h2>
          <p className="text-muted-foreground">{section.content}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Privacy;
