// Content for the service landing pages (one page per main search people make)

export type ServicePageContent = {
  slug: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string[];
  includesTitle: string;
  includes: { title: string; text: string }[];
  idealForTitle: string;
  idealFor: string[];
  faqs: { q: string; a: string }[];
  waMessage: string;
  serviceType: string;
};

export const SERVICE_PAGES: ServicePageContent[] = [
  {
    slug: "digital-marketing-mysore",
    navLabel: "Digital marketing in Mysore",
    metaTitle: "Affordable Digital Marketing in Mysore | Social Media, Ads & SEO",
    metaDescription:
      "Looking for affordable digital marketing in Mysore? TC Web & Studio plans and runs social media, reels, Meta & Google ads, SEO and websites for local businesses and personal brands.",
    eyebrow: "Digital marketing · Mysore",
    h1: "Affordable digital marketing in Mysore",
    intro: [
      "Looking for the best digital marketing in Mysore that actually fits your budget? TC Web & Studio is a founder-led studio in Mysore that plans, creates and runs your marketing in one place: social media, reels, posters, Meta and Google ads, SEO and your website.",
      "Because the same small team makes the content and runs the campaigns, your brand looks consistent everywhere, and you don't pay for four different agencies. No fixed packages: tell us your goal and budget, and we'll tell you honestly what we can do for it.",
    ],
    includesTitle: "What our digital marketing covers",
    includes: [
      { title: "Social media management", text: "Content calendar, captions and page management for Instagram and Facebook." },
      { title: "Reels & content creation", text: "Short videos and posts planned, shot and edited in-house, made for your audience." },
      { title: "Meta ads (Facebook & Instagram)", text: "Campaigns set up and managed for enquiries, calls and WhatsApp messages." },
      { title: "Google Ads", text: "Search ads that show your business when people in Mysore look for what you sell." },
      { title: "Local SEO & Google Business Profile", text: "Help customers find you on Google Search and Maps." },
      { title: "Websites & landing pages", text: "Fast, mobile-friendly pages that turn visitors into enquiries." },
    ],
    idealForTitle: "Who it's for",
    idealFor: [
      "Shops, cafés and restaurants",
      "Coaching centres and schools",
      "Car dealers and showrooms",
      "Real estate and home loans",
      "Clinics, doctors and hospitals",
      "Startups and personal brands",
    ],
    faqs: [
      {
        q: "How much does digital marketing cost in Mysore?",
        a: "We don't sell fixed packages. Tell us what you want to achieve and what you can spend, and we'll suggest a plan that fits. Ad budgets are separate and paid directly by you to Meta or Google.",
      },
      {
        q: "How soon will I see results?",
        a: "Ads can start bringing enquiries soon after they go live. Social media growth and SEO build over months. We'll be honest about what to expect for your business before we start.",
      },
      {
        q: "Do you handle everything, or only ads?",
        a: "Everything, if you want: content, posters, reels, page management, ads, SEO and your website. You can also pick just the parts you need.",
      },
      {
        q: "Do you work with businesses outside Mysore?",
        a: "Yes. Digital marketing, social media, ads and websites can be done for clients anywhere in India over WhatsApp and calls.",
      },
    ],
    waMessage: "Hi! I'm looking for digital marketing for my business in Mysore.",
    serviceType: "Digital marketing",
  },
  {
    slug: "pre-wedding-shoot-mysore",
    navLabel: "Pre-wedding shoots in Mysore",
    metaTitle: "Pre-Wedding Shoot in Mysore | Affordable Couple Shoots & Films",
    metaDescription:
      "Affordable pre-wedding shoots in Mysore: couple photos, save-the-date reels and pre-wedding films planned, shot and edited by TC Web & Studio. We travel across Karnataka.",
    eyebrow: "Pre-wedding shoots · Mysore",
    h1: "Pre-wedding shoots in Mysore",
    intro: [
      "Mysore is one of the most beautiful places in Karnataka for a pre-wedding shoot, with heritage buildings, gardens, lakes and quiet countryside close by. We help you plan the idea, choose the spots, then shoot and edit everything in-house.",
      "You get reels that are ready for Instagram and WhatsApp, plus photos and a short film if you want one. Most shoots are filmed on iPhone to keep costs low, and a pro camera setup is available on request.",
    ],
    includesTitle: "What's included",
    includes: [
      { title: "Concept & location planning", text: "Ideas, looks and locations that suit your story and budget." },
      { title: "Couple photos", text: "Natural and styled portraits you'll want to share and print." },
      { title: "Save-the-date reels", text: "Short, shareable reels for Instagram, WhatsApp and invites." },
      { title: "Pre-wedding film", text: "A short cinematic film of your shoot, edited with music." },
      { title: "Editing & colour grading", text: "Every photo and clip finished in-house for a consistent look." },
      { title: "Travel across Karnataka", text: "Based in Mysore, happy to travel. Travel is quoted upfront." },
    ],
    idealForTitle: "Popular add-ons",
    idealFor: ["Engagement coverage", "Wedding day reels", "Invitation video", "Haldi & mehendi coverage"],
    faqs: [
      {
        q: "How much does a pre-wedding shoot cost in Mysore?",
        a: "It depends on the number of locations, hours and what you want delivered (reels, photos, film). Tell us your idea and budget on WhatsApp and we'll quote honestly.",
      },
      {
        q: "Do you shoot outside Mysore?",
        a: "Yes, anywhere in Karnataka. Travel is quoted separately and agreed before the shoot.",
      },
      {
        q: "Can you help us choose locations and ideas?",
        a: "Yes. We suggest concepts, locations and looks based on your style and budget, and plan the shoot day with you.",
      },
      {
        q: "When will we get our photos and videos?",
        a: "We agree delivery dates with you before the shoot, so you know exactly when to expect your reels, photos and film.",
      },
    ],
    waMessage: "Hi! I'd like to know about a pre-wedding shoot in Mysore.",
    serviceType: "Pre-wedding photography and videography",
  },
  {
    slug: "wedding-event-shoot-mysore",
    navLabel: "Wedding & event shoots in Mysore",
    metaTitle: "Wedding & Event Shoots in Mysore | Photos, Reels & Videos",
    metaDescription:
      "Wedding, engagement, birthday and event shoots in Mysore. Photos, highlight reels and event videos by TC Web & Studio, at a price that fits your budget.",
    eyebrow: "Weddings & events · Mysore",
    h1: "Wedding & event shoots in Mysore",
    intro: [
      "From engagements, haldi and mehendi to weddings, receptions, birthdays and baby showers, we capture the moments that matter and turn them into photos and reels you'll keep sharing.",
      "We also cover business events: store openings, inaugurations, corporate events and college fests. Our small team plans, shoots and edits everything in-house, so the price stays fair without cutting corners on quality.",
    ],
    includesTitle: "What we cover",
    includes: [
      { title: "Weddings & engagements", text: "Engagement, haldi, mehendi, wedding and reception coverage." },
      { title: "Birthdays & family events", text: "Birthdays, baby showers, maternity and naming ceremonies." },
      { title: "Openings & corporate events", text: "Store launches, inaugurations, office events and college fests." },
      { title: "Highlight reels", text: "Short, music-led reels ready for Instagram and WhatsApp." },
      { title: "Event photos", text: "Candid and posed photos of the people and moments that matter." },
      { title: "Event videos", text: "Longer edits of the full event, finished and colour graded in-house." },
    ],
    idealForTitle: "Good to know",
    idealFor: ["Shoots across Karnataka", "Pro camera setup on request", "Reels for social media", "Quotes based on your budget"],
    faqs: [
      {
        q: "How much does a wedding or event shoot cost in Mysore?",
        a: "It depends on the event length, number of days and what you want delivered. Share the date, venue and your budget on WhatsApp and we'll quote honestly.",
      },
      {
        q: "Do you cover events outside Mysore?",
        a: "Yes, anywhere in Karnataka. Travel is quoted separately and agreed upfront.",
      },
      {
        q: "Do you shoot business events too?",
        a: "Yes. Store openings, inaugurations, corporate events and college fests, with photos and reels ready for your social media.",
      },
      {
        q: "How do we book?",
        a: "Message us on WhatsApp with the event type, date and venue. We'll confirm availability and share a quote.",
      },
    ],
    waMessage: "Hi! I'd like to book a wedding / event shoot in Mysore.",
    serviceType: "Wedding and event photography and videography",
  },
  {
    slug: "car-delivery-shoot-mysore",
    navLabel: "Car delivery shoots in Mysore",
    metaTitle: "Car & Bike Delivery Shoot in Mysore | Delivery Reels & Photos",
    metaDescription:
      "Car and bike delivery shoots in Mysore. Delivery-day reels and photos for happy owners and showrooms, shot and edited by TC Web & Studio at an affordable price.",
    eyebrow: "Car & bike delivery · Mysore",
    h1: "Car & bike delivery shoots in Mysore",
    intro: [
      "Delivery day is a big moment. We capture the unveiling, the key handover, the family's reactions and the first drive, and turn it into a short reel and photos you'll want to share.",
      "For showrooms and dealers, we can cover deliveries regularly so every happy customer becomes content for your page. Most delivery shoots are filmed on iPhone, which keeps them quick and affordable.",
    ],
    includesTitle: "What's included",
    includes: [
      { title: "Delivery reel", text: "A short, music-led reel of the big day, ready for Instagram and WhatsApp." },
      { title: "Handover photos", text: "Key handover, unveiling and family photos with the new car or bike." },
      { title: "Reactions & first drive", text: "The real moments that make delivery videos worth watching." },
      { title: "For showrooms", text: "Regular delivery coverage that keeps your social media active." },
      { title: "Quick edits", text: "Edited in-house so you can post while the excitement is fresh." },
      { title: "Affordable shoots", text: "A small, quick setup keeps the cost low." },
    ],
    idealForTitle: "Who books these",
    idealFor: ["New car and bike owners", "Car showrooms and dealers", "Bike showrooms", "Pre-owned car dealers"],
    faqs: [
      {
        q: "How much does a car delivery shoot cost in Mysore?",
        a: "It's one of our most affordable shoots. Prices depend on whether you want a reel, photos or both. Message us for a quote.",
      },
      {
        q: "Can showrooms book regular delivery shoots?",
        a: "Yes. We can cover deliveries on a regular basis and keep your showroom's Instagram and Facebook active with real customer moments.",
      },
      {
        q: "Do you shoot bike deliveries too?",
        a: "Yes, car and bike deliveries both.",
      },
      {
        q: "When will I get the reel?",
        a: "We agree the delivery time when you book. Delivery reels are short, so they're quick to edit.",
      },
    ],
    waMessage: "Hi! I'd like to book a car / bike delivery shoot in Mysore.",
    serviceType: "Car delivery photography and videography",
  },
];

export function getServicePage(slug: string) {
  return SERVICE_PAGES.find((page) => page.slug === slug);
}
