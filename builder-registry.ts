import { builder, Builder } from '@builder.io/react';
import SocieProHero from './components/sections/Hero';
import Header from './components/layout/Header';
import Logo from './components/sections/Logo';
import AchivementBadges from './components/sections/AchievementBadges';
import { ProductFeatures } from './components/sections/ProductFeatures';
import { SocieProDashboard } from './components/sections/SocieProDashboard';
import { GrowthStrategies } from './components/sections/GrowthStrategies';
import { ConstactUsForm } from './components/sections/ContactUsForm';
import { UserReviewsSlider } from './components/sections/UserReviewsSlider';
import { FAQ } from './components/sections/FAQ';
import { ContentCreators } from './components/sections/contentCreators';
import { ProductPromoBanner } from './components/sections/ProductPromoBanner';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(SocieProHero, {
  name: 'SocieProHero',
  inputs: [
    {
      name: 'logoText',
      type: 'string',
      defaultValue: 'Socie-Pro AI',
    },
    {
      name: 'headline',
      type: 'string',
      defaultValue:
        'Handle Every Client, Campaign, and Social Media Channel in One Place',
    },
    {
      name: 'subHeadline',
      type: 'string',
      defaultValue:
        'Handle Every Client, Campaign, and Social Media Channel in One Place',
    },
    {
      name: 'highlightedText',
      type: 'string',
      defaultValue: 'SociePRO–AI',
    },
    {
      name: 'buttonText',
      type: 'string',
      defaultValue: 'Start for FREE today →',
    },
    {
      name: 'initialCount',
      type: 'number',
      defaultValue: 0,
      friendlyName: 'Counter Initial Count',
      description: 'Set the initial value of the counter',
    },
  ],
});

Builder.registerComponent(Header, {
  name: 'Header',
  inputs: [
    {
      name: 'logoText',
      type: 'string',
      defaultValue: 'Socie-Pro AI',
      friendlyName: 'Logo Text',
    },
    {
      name: 'navItems',
      type: 'list',
      defaultValue: [
        { label: 'About Us', href: '#' },
        { label: 'FAQs', href: '#' },
        { label: 'Contact Us', href: '#' },
      ],
      subFields: [
        {
          name: 'label',
          type: 'string',
          required: true,
          friendlyName: 'Label',
        },
        {
          name: 'href',
          type: 'string',
          required: true,
          friendlyName: 'Link URL',
        },
      ],
      friendlyName: 'Navigation Items',
      description: 'Add, edit or remove navigation links',
    },
  ],
});

Builder.registerComponent(Logo, {
  name: 'LogoComponent',
  inputs: [
    {
      name: 'logos',
      type: 'list',
      defaultValue: [
        { src: '/images/logo1.png', alt: 'Logo 1' },
        { src: '/images/logo2.png', alt: 'Logo 2' },
        { src: '/images/logo3.png', alt: 'Logo 3' },
      ],
    },
  ],
});

Builder.registerComponent(AchivementBadges, {
  name: 'AchievementBadges',
  inputs: [
    {
      name: 'heading',
      type: 'string',
      defaultValue:
        'Trusted by industry leaders and over 1,000 brands, Socie Pro AI redefines social media management excellence.',
    },
    {
      name: 'logos',
      type: 'list',
    },
  ],
});

Builder.registerComponent(ProductFeatures, {
  name: 'ProductFeatures',
  inputs: [
    {
      name: 'features',
      type: 'list',
      defaultValue: [
        {
          title: 'AI-Powered Post Scheduling',
          description:
            'SociePRO-AI helps you manage multiple clients, tight deadlines, and campaigns by critically analyzing the target audience’s behavior.',
          imageSrc: '/images/ai-post-scheduling.png',
          imageAlt: 'AI-Powered Post Scheduling',
          buttonText: 'Learn More',
          buttonLink: '#',
          backgroundColor: 'bg-blue-100',
        },
        {
          title: 'Multi-Platform Publishing',
          description:
            'SociePRO-AI allows you to publish to Facebook, Instagram, Twitter, TikTok, LinkedIn, and more, optimizing your content for each platform.',
          imageSrc: '/images/multi-platform-publishing.png',
          imageAlt: 'Multi-Platform Publishing',
          buttonText: 'Learn More',
          buttonLink: '#',
          backgroundColor: 'bg-green-100',
        },
        {
          title: 'AI-Optimized Timing',
          description:
            'Using advanced AI technology, SociePRO-AI analyzes your audience’s activity to identify the best times for posting, ensuring maximum engagement.',
          imageSrc: '/images/ai-optimized-timing.png',
          imageAlt: 'AI-Optimized Timing',
          buttonText: 'Learn More',
          buttonLink: '#',
          backgroundColor: 'bg-orange-100',
        },
        // Add more default values as needed
      ],
    },
  ],
});

Builder.registerComponent(SocieProDashboard, {
  name: 'SocieProDashboard',
  inputs: [
    {
      name: 'heading',
      type: 'string',
      defaultValue:
        'Trusted by industry leaders and over 1,000 brands, Socie Pro AI redefines social media management excellence.',
    },
    {
      name: 'logos',
      type: 'list',
    },
  ],
});

Builder.registerComponent(GrowthStrategies, {
  name: 'GrowthStrategies',
  inputs: [
    {
      name: 'heading',
      type: 'string',
      defaultValue:
        'Trusted by industry leaders and over 1,000 brands, Socie Pro AI redefines social media management excellence.',
    },
    {
      name: 'logos',
      type: 'list',
    },
  ],
});

Builder.registerComponent(ConstactUsForm, {
  name: 'ContactUsForm',
  inputs: [
    {
      name: 'features',
      type: 'list',
      defaultValue: [
        {
          title: 'AI-Powered Post Scheduling',
          description:
            'SociePRO-AI helps you manage multiple clients, tight deadlines, and campaigns by critically analyzing the target audience’s behavior.',
          imageSrc: '/images/ai-post-scheduling.png',
          imageAlt: 'AI-Powered Post Scheduling',
          buttonText: 'Learn More',
          buttonLink: '#',
          backgroundColor: 'bg-blue-100',
        },
        {
          title: 'Multi-Platform Publishing',
          description:
            'SociePRO-AI allows you to publish to Facebook, Instagram, Twitter, TikTok, LinkedIn, and more, optimizing your content for each platform.',
          imageSrc: '/images/multi-platform-publishing.png',
          imageAlt: 'Multi-Platform Publishing',
          buttonText: 'Learn More',
          buttonLink: '#',
          backgroundColor: 'bg-green-100',
        },
        {
          title: 'AI-Optimized Timing',
          description:
            'Using advanced AI technology, SociePRO-AI analyzes your audience’s activity to identify the best times for posting, ensuring maximum engagement.',
          imageSrc: '/images/ai-optimized-timing.png',
          imageAlt: 'AI-Optimized Timing',
          buttonText: 'Learn More',
          buttonLink: '#',
          backgroundColor: 'bg-orange-100',
        },
        // Add more default values as needed
      ],
    },
  ],
});
Builder.registerComponent(UserReviewsSlider, {
  name: 'UserReviewsSlider',
  inputs: [
    {
      name: 'heading',
      type: 'string',
      defaultValue:
        'Trusted by industry leaders and over 1,000 brands, Socie Pro AI redefines social media management excellence.',
    },
    {
      name: 'logos',
      type: 'list',
    },
  ],
});

Builder.registerComponent(FAQ, {
  name: 'FAQ',
  inputs: [
    {
      name: 'heading',
      type: 'string',
      defaultValue:
        'Trusted by industry leaders and over 1,000 brands, Socie Pro AI redefines social media management excellence.',
    },
    {
      name: 'logos',
      type: 'list',
    },
  ],
});

Builder.registerComponent(ContentCreators, {
  name: 'ContentCreators',
  inputs: [
    {
      name: 'heading',
      type: 'string',
      defaultValue:
        'Trusted by industry leaders and over 1,000 brands, Socie Pro AI redefines social media management excellence.',
    },
    {
      name: 'logos',
      type: 'list',
    },
  ],
});

Builder.registerComponent(ProductPromoBanner, {
  name: 'ProductPromoBanner',
  inputs: [
    {
      name: 'heading',
      type: 'string',
      defaultValue:
        'Trusted by industry leaders and over 1,000 brands, Socie Pro AI redefines social media management excellence.',
    },
    {
      name: 'logos',
      type: 'list',
    },
  ],
});
