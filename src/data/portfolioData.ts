import { Project, SkillItem, PricingPlan, ProcessStep, WhyMeItem } from '../types';

/**
 * ============================================================================
 * 🖼️ EASY IMAGES CONFIGURATION — CHANGE IMAGES HERE
 * To change any image on the website, simply replace the URL string below.
 * Both local paths (e.g. "/avatar.jpg") and external URLs are supported.
 * ============================================================================
 */

// 1. BRAND LOGO (Shown in Navbar, Footer, and Favicon) - https://ibb.co/7ttNKVbS
export const BRAND_LOGO_IMAGE = "https://i.ibb.co/GQQ3RkFd/Logo.png";

// 2. PROFILE PICTURE (Shown in About Me section and all profile badges) - https://ibb.co/7ttNKVbS
export const CREATOR_PROFILE_PICTURE = "https://i.ibb.co/GQQ3RkFd/Logo.png";

// Backwards compatibility alias
export const CREATOR_AVATAR = CREATOR_PROFILE_PICTURE;

// 3. SOCIAL MEDIA & CONTACT DETAILS
export const CONTACT_INFO = {
  telegramHandle: "@YTKeshav",
  telegramUrl: "https://t.me/YTKeshav",
  instagramHandle: "@YTKeshav",
  instagramUrl: "https://www.instagram.com/YTKeshav/",
  portfolioName: "Keshav Creates",
  tagline: "High-CTR Thumbnails. Built to Get Clicks.",
  servicesSummary: "YouTube Thumbnails • Gaming Thumbnails • Creator Branding",
  clientExperience: [
    "Fast Communication",
    "Clear Revisions",
    "On-Time Delivery",
    "Custom Designs"
  ]
};

// 4. PROJECTS GALLERY (Pure High-CTR Thumbnail Projects: card 1.jpg to card 10.jpg)
export const PROJECTS: Project[] = [
  {
    id: "project-card-1",
    title: "Card 1",
    category: "tech",
    categoryLabel: "Tech & AI",
    nicheDescription: "Tech & AI Niche",
    imageUrl: "./Project cards/card 1.jpg",
    posterUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_yyVDT_9rSf9TEJxc4JuP1OqCDU3CPyQscwQ-WhzkzxI2ZuyaQI5VvGezoTLX5xknF2ebCLUSZr0nxpE2Lf9V6n_4i11y_I96hO_-CGvKycO27xJbE2-rpO0z_6U9PWZZLa58nbeTKj41f-5cjuBe-kLbfZttaZxFllMHZ5xq7q0tJgBir4RCIHMZZ7NHVnEZNj-zLMmSfGjr5BZecdZd6d4JL4Ody9suYzkcIm-WHtNRwRLrLS",
    tags: ["High CTR", "Photoshop & 3D"],
  },
  {
    id: "project-card-2",
    title: "Card 2",
    category: "gaming",
    categoryLabel: "Gaming",
    nicheDescription: "Gaming Niche",
    imageUrl: "./Project cards/card 2.jpg",
    posterUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCs0ZDL9UbV-TFNC9YimpOECFu-bisUUyfsbX2wtcT7HQwXVh2wTzWIPgB0VWAZtmqLSHtkNPHPkEaOcoAf2EPbGfoHdpoOifJ6mHTNgNMDv98GHgQJq5I5KOqQEsFZvQNQ0E53kDkj_zA_fhkAw9fL35GsHStdOG58-RNPiotC3kfexYzytefuuvUxHjGXwkZgpGljvBy4fUM_jxW6fOnPYsqYdN53yYzuzMqPRFAAzjcFnutCS8oT",
    tags: ["High CTR", "Photoshop & 3D"],
  },
  {
    id: "project-card-3",
    title: "Card 3",
    category: "documentary",
    categoryLabel: "Documentary",
    nicheDescription: "Documentary & History",
    imageUrl: "./Project cards/card 3.jpg",
    posterUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxlpd4BO7k10nvdrqcF9LpO8g23wnV1IK3SyEfrTt1xczOs-ohiUcRa5MBnV_kqkn_XGcHyEjAxdby-1oFaFUywknmJYp8BULKYwufgqQ7-Tf1zl16h654vUFZAF91tPs9wbs5MBhZUbFlWZyAsQU6TZvvX2um27afuqJUZsaWiQf4bZYL0yjE9W1X7XaMSCqANLBG3rus-83Do4CjCGmQ7PXW9z4tD-qYVVpXPiYSI4RJGYAw0uGM",
    tags: ["High CTR", "Photoshop & 3D"],
  },
  {
    id: "project-card-4",
    title: "Card 4",
    category: "finance",
    categoryLabel: "Finance & Money",
    nicheDescription: "Finance & Psychology",
    imageUrl: "./Project cards/card 4.jpg",
    posterUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKeXhZ9Qca9a4Bn3bqoPszV4NylxzbHYgd6jUuU-apbiWlO6TLFs0EVp4WXkElD6vmg92GXFbyWY-jhW1r8ndrg8_4feh-GKITN4MMSB8oHOHNw1YTGgIuUen4FIlzblUOqfi_WhWFTahxx7s_H40AQv5wWbH7EuSDzP1QV8vlaHMSE-3kpGoscsRGR8mawjfH47kKqNMkOoHiroIhLtDiSst6-YuyRphBfaHT_EU7NVk2U4OqqCaS",
    tags: ["High CTR", "Photoshop & 3D"],
  },
  {
    id: "project-card-5",
    title: "Card 5",
    category: "tech",
    categoryLabel: "Tech & AI",
    nicheDescription: "Tech & AI Niche",
    imageUrl: "./Project cards/card 5.jpg",
    posterUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_yyVDT_9rSf9TEJxc4JuP1OqCDU3CPyQscwQ-WhzkzxI2ZuyaQI5VvGezoTLX5xknF2ebCLUSZr0nxpE2Lf9V6n_4i11y_I96hO_-CGvKycO27xJbE2-rpO0z_6U9PWZZLa58nbeTKj41f-5cjuBe-kLbfZttaZxFllMHZ5xq7q0tJgBir4RCIHMZZ7NHVnEZNj-zLMmSfGjr5BZecdZd6d4JL4Ody9suYzkcIm-WHtNRwRLrLS",
    tags: ["High CTR", "Photoshop & 3D"],
  },
  {
    id: "project-card-6",
    title: "Card 6",
    category: "gaming",
    categoryLabel: "Gaming",
    nicheDescription: "Gaming Niche",
    imageUrl: "./Project cards/card 6.jpg",
    posterUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCs0ZDL9UbV-TFNC9YimpOECFu-bisUUyfsbX2wtcT7HQwXVh2wTzWIPgB0VWAZtmqLSHtkNPHPkEaOcoAf2EPbGfoHdpoOifJ6mHTNgNMDv98GHgQJq5I5KOqQEsFZvQNQ0E53kDkj_zA_fhkAw9fL35GsHStdOG58-RNPiotC3kfexYzytefuuvUxHjGXwkZgpGljvBy4fUM_jxW6fOnPYsqYdN53yYzuzMqPRFAAzjcFnutCS8oT",
    tags: ["High CTR", "Photoshop & 3D"],
  },
  {
    id: "project-card-7",
    title: "Card 7",
    category: "documentary",
    categoryLabel: "Documentary",
    nicheDescription: "Documentary & History",
    imageUrl: "./Project cards/card 7.jpg",
    posterUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxlpd4BO7k10nvdrqcF9LpO8g23wnV1IK3SyEfrTt1xczOs-ohiUcRa5MBnV_kqkn_XGcHyEjAxdby-1oFaFUywknmJYp8BULKYwufgqQ7-Tf1zl16h654vUFZAF91tPs9wbs5MBhZUbFlWZyAsQU6TZvvX2um27afuqJUZsaWiQf4bZYL0yjE9W1X7XaMSCqANLBG3rus-83Do4CjCGmQ7PXW9z4tD-qYVVpXPiYSI4RJGYAw0uGM",
    tags: ["High CTR", "Photoshop & 3D"],
  },
  {
    id: "project-card-8",
    title: "Card 8",
    category: "finance",
    categoryLabel: "Finance & Money",
    nicheDescription: "Finance & Psychology",
    imageUrl: "./Project cards/card 8.jpg",
    posterUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKeXhZ9Qca9a4Bn3bqoPszV4NylxzbHYgd6jUuU-apbiWlO6TLFs0EVp4WXkElD6vmg92GXFbyWY-jhW1r8ndrg8_4feh-GKITN4MMSB8oHOHNw1YTGgIuUen4FIlzblUOqfi_WhWFTahxx7s_H40AQv5wWbH7EuSDzP1QV8vlaHMSE-3kpGoscsRGR8mawjfH47kKqNMkOoHiroIhLtDiSst6-YuyRphBfaHT_EU7NVk2U4OqqCaS",
    tags: ["High CTR", "Photoshop & 3D"],
  },
  {
    id: "project-card-9",
    title: "Card 9",
    category: "tech",
    categoryLabel: "Tech & AI",
    nicheDescription: "Tech & AI Niche",
    imageUrl: "./Project cards/card 9.jpg",
    posterUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_yyVDT_9rSf9TEJxc4JuP1OqCDU3CPyQscwQ-WhzkzxI2ZuyaQI5VvGezoTLX5xknF2ebCLUSZr0nxpE2Lf9V6n_4i11y_I96hO_-CGvKycO27xJbE2-rpO0z_6U9PWZZLa58nbeTKj41f-5cjuBe-kLbfZttaZxFllMHZ5xq7q0tJgBir4RCIHMZZ7NHVnEZNj-zLMmSfGjr5BZecdZd6d4JL4Ody9suYzkcIm-WHtNRwRLrLS",
    tags: ["High CTR", "Photoshop & 3D"],
  },
  {
    id: "project-card-10",
    title: "Card 10",
    category: "gaming",
    categoryLabel: "Gaming",
    nicheDescription: "Gaming Niche",
    imageUrl: "./Project cards/card 10.jpg",
    posterUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCs0ZDL9UbV-TFNC9YimpOECFu-bisUUyfsbX2wtcT7HQwXVh2wTzWIPgB0VWAZtmqLSHtkNPHPkEaOcoAf2EPbGfoHdpoOifJ6mHTNgNMDv98GHgQJq5I5KOqQEsFZvQNQ0E53kDkj_zA_fhkAw9fL35GsHStdOG58-RNPiotC3kfexYzytefuuvUxHjGXwkZgpGljvBy4fUM_jxW6fOnPYsqYdN53yYzuzMqPRFAAzjcFnutCS8oT",
    tags: ["High CTR", "Photoshop & 3D"],
  }
];

/**
 * Reads cards dynamically from index.html (#portfolio-cards-source)
 * This allows the user to easily change the thumbnail images of cards in index.html!
 */
export function getInitialProjects(): Project[] {
  if (typeof document === 'undefined') return PROJECTS;
  const container = document.getElementById('portfolio-cards-source');
  if (!container) return PROJECTS;

  const cardElements = container.querySelectorAll('.thumbnail-card, .thumbnail, .project-card, [role="listitem"]');
  if (!cardElements || cardElements.length === 0) return PROJECTS;

  const parsed: Project[] = [];
  cardElements.forEach((el, index) => {
    const imgEl = el.querySelector('img');
    const imgSrc = imgEl?.getAttribute('src') || el.getAttribute('data-src') || '';
    const fallback = imgEl?.getAttribute('data-fallback') || PROJECTS[index % PROJECTS.length]?.imageUrl || '';
    const title = el.getAttribute('data-title') || imgEl?.getAttribute('alt') || `Thumbnail ${index + 1}`;
    const category = (el.getAttribute('data-category') as any) || PROJECTS[index % PROJECTS.length]?.category || 'tech';
    const categoryLabel =
      category === 'tech'
        ? 'Tech & AI'
        : category === 'gaming'
        ? 'Gaming'
        : category === 'documentary'
        ? 'Documentary'
        : 'Finance & Money';

    parsed.push({
      id: `thumbnail-${index + 1}`,
      title,
      category,
      categoryLabel,
      nicheDescription: `${categoryLabel} Niche`,
      imageUrl: imgSrc || fallback,
      posterUrl: fallback,
      tags: ['High CTR', 'Photoshop & 3D']
    });
  });

  return parsed.length > 0 ? parsed : PROJECTS;
}

export const SKILLS: SkillItem[] = [
  {
    number: "01",
    title: "Thumbnail Design",
    description: "Creating high-CTR YouTube thumbnails with uncompromising visual hierarchy, crisp focal points, and maximum readability on mobile screens."
  },
  {
    number: "02",
    title: "Graphic Design",
    description: "Channel art, banner assets, brand identity kits, posters, and social graphics that deliver a cohesive, premium creator reputation."
  },
  {
    number: "03",
    title: "Script Writing & Hooks",
    description: "Crafting viral first 30-second hooks and structured narrative video scripts that guarantee audience retention from click to end screen."
  },
  {
    number: "04",
    title: "Visual Storytelling",
    description: "Condensing 20-minute video narratives into one single frame that immediately sparks emotional curiosity and curiosity gaps."
  },
  {
    number: "05",
    title: "Typography & Composition",
    description: "Using bold, custom 3D text styling, dynamic spacing, and subject positioning so text is instantly readable even on 2-inch phone feeds."
  },
  {
    number: "06",
    title: "Color & Lighting",
    description: "Mastering rim lights, atmospheric volumetric haze, deep contrast, and color grading that makes subjects pop out from competitors."
  },
  {
    number: "07",
    title: "Curiosity-Driven Concepts",
    description: "Developing psychological angles, before-and-after contrasts, and visual tension that trigger the viewer's natural urge to discover what happens next."
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "thumbnail-design",
    planNumber: "PLAN 01",
    title: "Thumbnail Design",
    price: "₹499",
    period: "/ per thumbnail",
    isPopular: true,
    features: [
      "Custom creative concept & composition",
      "Bold 3D typography & visual hooks",
      "1–2 revisions included",
      "Fast 24-hour turnaround delivery"
    ]
  },
  {
    id: "graphic-design",
    planNumber: "PLAN 02",
    title: "Graphic Design",
    price: "₹499",
    period: "starting / project-based",
    isPopular: false,
    features: [
      "YouTube channel art & banner redesign",
      "Social media creative posters & banners",
      "Vector assets, badge & logo treatment",
      "High-resolution ready-for-print/export files"
    ]
  },
  {
    id: "script-writing",
    planNumber: "PLAN 03",
    title: "Script Writing",
    price: "₹499",
    period: "starting / per script",
    isPopular: false,
    features: [
      "Hook-driven first 30-second introduction",
      "Retention-focused narrative pacing",
      "Visual cue instructions & B-roll prompts",
      "Revision loop until creator alignment"
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Research & Idea",
    description: "Deep dive into the video topic, target demographic, competitor thumbnails, and identifying the exact curiosity gap."
  },
  {
    number: "02",
    title: "Gather References",
    description: "Collecting high-resolution creator cutouts, background environments, 3D elements, props, and lighting styles."
  },
  {
    number: "03",
    title: "Concept & Composition",
    description: "Setting the focal point, blocking out subject placement, and constructing the depth layers to guide the viewer's gaze."
  },
  {
    number: "04",
    title: "Copy/Script & Hierarchy",
    description: "Integrating 2-4 punchy thumbnail words with maximum contrast and syncing them directly to the script's primary hook."
  },
  {
    number: "05",
    title: "Colors, Effects & Polish",
    description: "Brushing realistic rim lighting, color-matching elements, adding subtle glow flares, and dialing in deep contrast."
  },
  {
    number: "06",
    title: "Review & Delivery",
    description: "Stress-testing the thumbnail on YouTube homepage mockups at 10% phone size, final revision round, and fast export."
  }
];

export const WHY_ME_ITEMS: WhyMeItem[] = [
  {
    title: "Attention to Detail",
    description: "Every rim light, feather mask, and drop shadow is hand-tuned with precision so your assets look crisp and high-budget.",
    icon: "eye"
  },
  {
    title: "Creator-Focused",
    description: "Built strictly around your channel identity, tone of voice, audience psychology, and realistic retention goals.",
    icon: "user"
  },
  {
    title: "Multiple Niches",
    description: "Equally comfortable producing intense gaming art, high-tech documentary visuals, luxury travel concepts, and finance guides.",
    icon: "layers"
  },
  {
    title: "Consistent Quality",
    description: "Reliable communication, disciplined delivery turnarounds, and systematic design standards across every single order.",
    icon: "check"
  }
];
