/* =====================================================================
   ALL PRODMAP SITE CONTENT LIVES HERE.
   Wording is Salman's own; agreed fixes (2026-10-09): slogan capitals,
   "Description:" labels removed, team placeholder line removed,
   name/title capitals, quote marks removed from the call to action.
   ===================================================================== */

window.SITE = {

  brand: {
    name: 'ProdMap Consulting',
    short: 'ProdMap',
    slogan: 'Through and beyond the map',
  },

  contact: {
    email: 'salman@prodmap.co.uk',   // "for now, review later" (Salman 2026-10-09)
  },

  nav: [
    { id: 'home',     label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about',    label: 'About us' },
    { id: 'contact',  label: 'Contact' },
  ],
  navCta: 'Free consultation',

  // labels on the decorative route in the hero (agreed 2026-10-09)
  routeLabels: ['Idea', 'Design', 'Deployment', 'Beyond'],

  /* ---------- Home ---------- */
  home: {
    title: 'Charting the Course to Your Product Success',
    text: 'Product development is an art, involving several social and technical factors, and at ProdMap Consulting, we understand this intricate landscape intimately. With decades of experience and a wealth of expertise, we specialize in crafting a seamless path for your product development journey. From the initial spark of an idea to the final stages of deployment and ongoing servicing, we are your trusted guides, helping you chart a course to success in the world of product development.',
    ctaPrimary: 'Contact us for a free consultation',
    ctaSecondary: 'Our services',
    whyTitle: 'Why Choose Us',
    why: [
      { title: 'Your Product Navigator', text: 'Let us chart your course to successful product delivery.' },
      { title: 'Client-Centric Approach', text: "We're dedicated to understanding and fulfilling your product needs." },
      { title: 'Quality Assurance',       text: 'We maintain the highest standards of quality and innovation.' },
    ],
  },

  /* ---------- Services ---------- */
  services: {
    title: 'Services',
    items: [
      {
        title: 'Product Strategy and Roadmapping',
        paras: [
          'Our product strategy and roadmapping service is your blueprint for success.',
          'We collaborate closely with you to define a clear vision for your product. We then create a comprehensive roadmap that outlines the steps, milestones, and timelines required to bring your vision to life. Our approach combines market research, user insights, and industry expertise to ensure your product is well-positioned for success.',
        ],
      },
      {
        title: 'Product Design and Management',
        paras: [
          "We understand that a great product is more than just code—it's about user experience, aesthetics, and effective management.",
          'Our product design and management services encompass the entire product development lifecycle. Our talented design team crafts user-centric interfaces, ensuring your product is intuitive and visually appealing. Simultaneously, our project managers oversee every aspect of development, from ideation and design to deployment and ongoing maintenance. We ensure your product remains on track, on budget, and aligned with your strategic goals.',
        ],
      },
      {
        title: 'Proof of Concept (POC) Development',
        paras: [
          'At ProdMap Consulting, we recognize the importance of validating your innovative ideas before full-scale development.',
          'Our POC development service is designed to bring your concepts to life in a controlled and cost-effective manner. We leverage our technical prowess and creative problem-solving to build prototypes and POCs that demonstrate the feasibility and potential of your ideas. This step minimizes risks and informs strategic decisions before committing to full development.',
        ],
      },
      {
        title: 'Outsourcing Development',
        paras: [
          'Outsourcing development to ProdMap Consulting means gaining access to a pool of highly skilled developers and a wide range of technology stacks.',
          'We offer end-to-end development solutions tailored to your specific project needs. Our outsourcing services ensure cost-effectiveness, flexibility, and scalability, allowing you to focus on your core business while we handle the technical aspects of your project. Whether you need web development, mobile app development, or custom software solutions, we have you covered.',
        ],
      },
    ],
  },

  /* ---------- About us ---------- */
  about: {
    title: 'About us',
    founded: 'Founded in 2021, ProdMap Consulting has been guiding clients to product excellence.',
    profileLabel: 'Profile',
    teamTitle: 'Meet Our Product Navigators',
    team: [
      { name: 'Salman Abdul Ghaffar', role: 'Chief Navigator', initials: 'SG', profile: 'https://salman.prodmap.co.uk' },
      { name: 'Rehan Younus',         role: 'Chief Navigator', initials: 'RY', profile: 'https://www.linkedin.com/in/rehanyounus/' },
    ],
    valuesTitle: 'Core Values',
    values: [
      { title: 'Navigation',    text: "We're your compass on the product development journey." },
      { title: 'Innovation',    text: 'We explore new routes to optimize your product strategy.' },
      { title: 'Collaboration', text: 'We work hand-in-hand with you to reach your product destination.' },
    ],
    approachTitle: 'Our Approach',
    approach: [
      'At ProdMap Consulting, our approach is rooted in a commitment to excellence and a deep understanding of the product development landscape. We begin with a thorough discovery and framing phase, where we work closely with our clients to crystallize their ideas.',
      'This stage involves the development of prototypes and comprehensive market research to ensure a solid foundation for your project. Our goal here is to minimize risks and clarify the path forward. From there, we seamlessly transition into the delivery phase, leveraging the valuable lessons learned during discovery.',
      'We firmly believe in a full collaborative model, valuing your input and insights throughout the development process. Our agile methodology ensures flexibility, adaptability, and a commitment to delivering results that exceed your expectations.',
    ],
  },

  /* ---------- Contact ---------- */
  contactSection: {
    title: 'Ready to navigate your product journey? Contact us for a free consultation!',
    form: {   // on: false = hidden (Salman 2026-10-10: email only for now; bring back with Formspree, see DECISIONS.md)
      on: false,
      name: 'Your name', email: 'Your email', company: 'Company (optional)', message: 'Tell us about your product',
      submit: 'Send message',
      subject: 'Free consultation request',
      note: 'Sending opens your email app with your message ready to send.',
    },
    infoTitle: 'Contact information',
  },
};
