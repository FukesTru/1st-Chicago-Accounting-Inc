/**
 * Brad's real Google reviews (pulled 2026-11-03 from the "1st Chicago Accounting" Business Profile).
 * Rules agreed with Griff: every 5-star review with written text, names exactly as shown on Google,
 * obvious typos fixed, no wording changes. Excluded: the two 1-star reviews, five 5-stars with no text,
 * one review that mentions Brad "gets busy sometimes", and one posted under a username.
 * Source data: /mnt/project-files/build/google-reviews.json (project files).
 */
export interface GoogleReview {
  name: string;
  text: string;
}

export const GOOGLE_LISTING_URL = "https://www.google.com/maps/place/?q=place_id:ChIJH5TJDpNWDogRfS45ndzL69E";

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    name: "Josephtal",
    text: "1st Chicago helped me save on my business taxes by pointing out tax saving measures that I had overlooked or didn't know about. Brad has always been very responsive whenever I needed advice. Highly recommended.",
  },
  {
    name: "Maria Rivera",
    text: "Brad at 1st Chicago Accounting Inc has been an innovative planner, as well as a major stress reliever. His knowledge of accounting and the IRS tax laws has us continually reassessing how we can strategize and realize improved planning and tax returns. As an owner of 5 businesses, I need a team that is knowledgeable, proactive and communicable. I strongly recommend Brad and his highly competent, professional and reliable team for any and all accounting needs.",
  },
  {
    name: "Michael Cavanaugh",
    text: "I have been working with Brad and 1st Chicago for over 20 years. That should say enough about their company. He gets it done, efficiently, effectively, and no BS.",
  },
  {
    name: "Kristi",
    text: "I have been working with Brad for over 20+ years. He is very prompt with answering questions and ensuring we are minimizing the taxes we pay. I would highly recommend him for any individual or business tax return.",
  },
  {
    name: "Peter",
    text: "Working with 1st Chicago Accounting has been an outstanding experience. Their responsiveness and attention are second to none. I cannot recommend Brad and his employees enough and wish I had known about them earlier in my business life.",
  },
  {
    name: "Leeshah Kim",
    text: "Brad is very knowledgeable and helpful! I was new to doing business taxes and he made it very easy to understand. He even sends monthly tips on how to better invest your money too. He is very quick to respond and patient when explaining topics I don't understand. Highly recommend.",
  },
  {
    name: "Justin Gruby",
    text: "Brad and his firm are the best resource for both working professionals and people managing companies to gather sound tax strategies and advice. They are trustworthy, honest, up to date on the ever-changing accounting world. They will put in the time to truly make sure that you understand how things work and are a true asset to have on your team. Highly recommend them.",
  },
  {
    name: "Jim Bland",
    text: "I have been going to 1st Chicago Accounting for decades. They have always done a great job on my taxes and very fast turnaround time. I cannot see myself going anywhere else. Plus his tax tips that he sends out are great!!",
  },
  {
    name: "Dan Cha",
    text: "Highly recommend. I have used them for almost 20 years now. Proactive about optimal and reasonable tax savings for personal and business. Also offers payroll services.",
  },
  {
    name: "Dave Saper",
    text: "Brad and 1st Accounting has been our CPA firm on both the personal and corporate side for many years. Fantastic experience always, and professional and knowledgeable. I've referred him to many friends and family and business colleagues. A no-brainer firm to retain.",
  },
  {
    name: "GEORGE ALAMIR",
    text: "I have been with 1st Chicago Accounting for over five years now, and I couldn't be happier. Finding an accountant you can completely trust with your finances is tough, but they consistently go above and beyond. They truly take care of me, handle everything seamlessly, and give me total peace of mind. Highly recommended!",
  },
  {
    name: "Robert P.",
    text: "I've been working with Brad and the team at 1st Chicago Accounting for many years, and I believe I was one of their first clients. Throughout that time, they have consistently provided outstanding service, and I couldn't be happier with their professionalism and support. If you own or operate businesses, you know how complicated accounting, payroll, and tax planning can become. They have helped us navigate those challenges, including a recent payroll transition after major issues with QuickBooks, making the entire process much smoother than I expected. What I value most is that they do much more than just prepare taxes or process accounting. They are trusted advisors who take the time to understand your business, answer questions, and help you make better decisions. I've personally recommended Brad and 1st Chicago Accounting to many friends over the years, and I will continue to do so. If you're looking for an accounting firm that truly takes care of your business and gives you confidence that everything is handled properly, I recommend 1st Chicago Accounting without any reservation.",
  },
  {
    name: "Brian Tanner",
    text: "I have been a client of 1st Chicago Accounting since 1997, nearly three decades, and I can say without hesitation that their accounting services are outstanding. Year after year, they have been reliable, thorough, and genuinely invested in my financial well-being. Their team brings a level of expertise and personal attention that is increasingly rare to find. Whether it's tax preparation, financial planning, or just answering a question quickly, they have always delivered. If you are looking for an accounting firm you can trust for the long haul, look no further than 1st Chicago Accounting. Highly recommended.",
  },
  {
    name: "John Alvarez",
    text: "I first used 1st Chicago Accounting in 2006. During the time with Brad and the company they have consistently demonstrated accuracy, attention to detail, and a strong understanding of financial principles. Their ability to manage complex accounts, meet deadlines, and maintain clear communication with first, our company and later with me personally has been outstanding. I strongly recommend them.",
  },
  {
    name: "Jyothi Pallapothu",
    text: "I have been using 1st Chicago Accounting for several years now. Brad, Troy and the rest of the team have been responsive, informative and have kept me accountable. They have done a great job with keeping the books and filing my taxes every year. They are also very open to discuss any business tax concerns that I have. I highly recommend them.",
  },
  {
    name: "Joe Shebetich",
    text: "Brad and his team at 1st Chicago Accounting has been a great addition and immense help throughout the many years for all of my accounting needs. I always let others know how helpful they have been and especially when I hear anyone complain about their current accountant. I tell them to just call Brad at 1st Chicago.",
  },
  {
    name: "Gabriel Villegas",
    text: "We have been working with 1st Chicago Accounting for 4 years and they have been a crucial partner for our business. They provide consistent communication and great accounting services. I would recommend.",
  },
  {
    name: "Scott Blumenshine",
    text: "Brad and his team have handled both accounting and tax returns for my business and personally. Brad has served as a trusted viable business financial advisor for me for many years.",
  },
  {
    name: "Kevin Welsh",
    text: "You won't find a better firm for your business accounting needs. Always ahead of the curve on technology, current rules and regulations and sound tax advice.",
  },
  {
    name: "David Barker",
    text: "Brad and his staff are always professional and make document sharing and communication simple. He certainly makes tax season less stressful for me. I highly recommend him!",
  },
  {
    name: "James Fitzgerald",
    text: "Brad is always available to help with whatever comes up! His planning and advice for my business is well thought out and I depend on his attention to detail to expand.",
  },
  {
    name: "John O'Brien",
    text: "Excellent firm. Brad, Courtney and Troy are the best.",
  },
  {
    name: "aaron nowak",
    text: "Brad is always responsive, quick to answer or resolve any issues.",
  },
  {
    name: "Michael Lechner",
    text: "Brad provides exceptional service. Highly recommended.",
  },
  {
    name: "efrain flores",
    text: "Great job all the time. I highly recommend it. They are very professional.",
  },
];
