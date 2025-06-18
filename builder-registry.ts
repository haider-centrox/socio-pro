import { builder, Builder } from '@builder.io/react';
import SocieProHero from './components/sections/Hero';
import Header from './components/layout/Header';
import { Logo } from './components/sections/Logo';
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

// Register the component with Builder.io

Builder.registerComponent(Header, {
  name: 'Header',
  inputs: [
    {
      name: 'logoText',
      type: 'string',
      defaultValue: 'Socie-Pro AI',
    },
    {
      name: 'navItems',
      type: 'list',
      subFields: [
        {
          name: 'label',
          type: 'string',
        },
        {
          name: 'href',
          type: 'string',
        },
      ],
      defaultValue: [
        { label: 'About Us', href: '#' },
        { label: 'FAQs', href: '#' },
        { label: 'Contact Us', href: '#' },
      ],
    },
    {
      name: 'logoMobile',
      type: 'file',
      allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
      helperText: 'URL for the mobile logo image',
    },
    {
      name: 'logoDesktop',
      type: 'file',
      allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
      helperText: 'URL for the desktop logo image',
    },
  ],
});

Builder.registerComponent(SocieProHero, {
  name: 'SocieProHero',
  inputs: [
    {
      name: 'headline',
      type: 'string',
      defaultValue:
        'Handle Every Client, Campaign, and Social Media Channel in One Place',
      helperText: 'Main headline text',
    },
    {
      name: 'subHeadline',
      type: 'string',
      defaultValue:
        'Handle Every Client, Campaign, and Social Media Channel in One Place',
      helperText: 'Sub-headline text',
    },
    {
      name: 'highlightText',
      type: 'string',
      defaultValue: 'SociePRO–AI',
      helperText: 'Highlighted text in the description',
    },
    {
      name: 'descriptionText',
      type: 'string',
      defaultValue: 'is your smarter way to plan, publish, and scale.',
      helperText: 'Description text following the highlighted text',
    },
    {
      name: 'buttonText',
      type: 'string',
      defaultValue: 'FREE',
      helperText: 'Bold text in the button',
    },
    {
      name: 'buttonPrefixText',
      type: 'string',
      defaultValue: 'Start for',
      helperText: 'Text before the bold button text',
    },
    {
      name: 'buttonSuffixText',
      type: 'string',
      defaultValue: 'today',
      helperText: 'Text after the bold button text',
    },
    {
      name: 'heroImage',
      type: 'file',
      allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
      defaultValue: '/hero-mobile.png',
      helperText: 'URL for the hero image',
    },
  ],
});

Builder.registerComponent(Logo, {
  name: 'LogoComponent',
  inputs: [
    {
      name: 'logos',
      type: 'list',
      subFields: [
        {
          name: 'src',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
          helperText: 'URL for the logo image',
        },
        {
          name: 'alt',
          type: 'string',
          helperText: 'Alt text for the logo image',
        },
        {
          name: 'className',
          type: 'string',
          defaultValue: 'rounded-full',
          helperText: 'CSS class for the logo image',
          advanced: true,
        },
        {
          name: 'width',
          type: 'number',
          defaultValue: 220,
          helperText: 'Width of the logo image in pixels',
        },
        {
          name: 'height',
          type: 'number',
          defaultValue: 60,
          helperText: 'Height of the logo image in pixels',
        },
      ],
      defaultValue: [
        {
          src: '/logo1.png',
          alt: 'Logo 1',
          className: '',
          width: 100,
          height: 100,
        },
        {
          src: '/logo2.png',
          alt: 'Logo 2',
          className: ' ',
          width: 176,
          height: 176,
        },
        {
          src: '/logo3.png',
          alt: 'Logo 3',
          className: ' ',
          width: 128,
          height: 128,
        },
        {
          src: '/logo4.png',
          alt: 'Logo 4',
          className: ' ',
          width: 96,
          height: 96,
        },
        {
          src: '/logo5.png',
          alt: 'Logo 5',
          className: ' ',
          width: 128,
          height: 128,
        },
        {
          src: '/logo6.png',
          alt: 'Logo 6',
          className: '',
          width: 100,
          height: 100,
        },
        {
          src: '/logo7.png',
          alt: 'Logo 7',
          className: '',
          width: 100,
          height: 100,
        },
      ],
      helperText: 'List of logos to display',
    },
    {
      name: 'containerClassName',
      type: 'string',
      defaultValue: 'flex w-full flex-wrap items-center justify-around gap-6',
      helperText: 'CSS class for the container div',
      advanced: true,
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

// Register the component with Builder.io
Builder.registerComponent(ProductFeatures, {
  name: 'ProductFeatures',
  inputs: [
    {
      name: 'mainHeading',
      type: 'string',
      defaultValue:
        'Everything You Need to Plan, Publish, and Grow Your Social Presence',
      helperText: 'Main heading text for the features section',
      required: true,
    },
    {
      name: 'features',
      type: 'list',
      subFields: [
        {
          name: 'title',
          type: 'string',
          defaultValue: 'AI-Powered Post Scheduling',
          helperText: 'Feature title',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          defaultValue:
            'SociePRO-AI helps you manage multiple clients, tight deadlines, and campaigns by carefully analyzing the target audiences behavior. Find the best times for engagement and build your social calendar with AI-powered post scheduling.',
          helperText: 'Feature description',
          required: true,
        },
        {
          name: 'imageSrc',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
          defaultValue: '/feature1.png',
          helperText: 'URL for the feature image',
          required: true,
        },
        {
          name: 'imageAlt',
          type: 'string',
          defaultValue: 'Feature',
          helperText: 'Alt text for the feature image',
          required: true,
        },
        {
          name: 'iconSrc',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
          defaultValue: '/feature-icon1.png',
          helperText: 'URL for the feature icon',
          required: true,
        },
        {
          name: 'iconAlt',
          type: 'string',
          defaultValue: 'Feature Icon',
          helperText: 'Alt text for the feature icon',
          required: true,
        },
        {
          name: 'buttonText',
          type: 'string',
          defaultValue: 'Learn More',
          helperText: 'Text for the button',
          required: true,
        },
        {
          name: 'buttonLink',
          type: 'string',
          defaultValue: '#',
          helperText: 'Link URL for the button',
          required: true,
        },
        {
          name: 'backgroundColor',
          type: 'string',
          defaultValue: 'bg-socie-yellow',
          helperText:
            'Tailwind background class for the feature (e.g., bg-socie-yellow)',
          required: true,
        },
        {
          name: 'imageWidth',
          type: 'number',
          defaultValue: 300,
          helperText: 'Width of the feature image in pixels',
          required: true,
        },
        {
          name: 'imageHeight',
          type: 'number',
          defaultValue: 300,
          helperText: 'Height of the feature image in pixels',
          required: true,
        },
      ],
      defaultValue: [
        {
          title: 'AI-Powered Post Scheduling',
          description:
            'SociePRO-AI helps you manage multiple clients, tight deadlines, and campaigns by carefully analyzing the target audiences behavior. Find the best times for engagement and build your social calendar with AI-powered post scheduling.',
          imageSrc: '/feature1.png',
          imageAlt: 'Feature 1',
          iconSrc: '/feature-icon1.png',
          iconAlt: 'Feature Icon 1',
          buttonText: 'Learn More',
          buttonLink: '#',
          backgroundColor: 'bg-socie-yellow',
          imageWidth: 300,
          imageHeight: 300,
        },
        {
          title: 'Multi-Platform Publishing',
          description:
            'With SociePRO-AI, you can publish to Facebook, Instagram, Twitter (X), Threads, LinkedIn, TikTok, Reddit, and Nextdoor with a single click. Your social media posts will be optimized for all platforms, saving you time and effort.',
          imageSrc: '/feature2.png',
          imageAlt: 'Feature 2',
          iconSrc: '/feature-icon2.png',
          iconAlt: 'Feature Icon 2',
          buttonText: 'Learn More',
          buttonLink: '#',
          backgroundColor: 'bg-socie-green',
          imageWidth: 300,
          imageHeight: 300,
        },
        {
          title: 'AI-Optimized Timing',
          description:
            'Using advanced AI technology, SociePRO-AI analyzes your audiences activity to identify the best times for posting. With one simple scheduling, your content will go live at the peak time for maximum engagement, every time.',
          imageSrc: '/feature3.png',
          imageAlt: 'Feature 3',
          iconSrc: '/feature-icon3.png',
          iconAlt: 'Feature Icon 3',
          buttonText: 'Learn More',
          buttonLink: '#',
          backgroundColor: 'bg-socie-peach',
          imageWidth: 300,
          imageHeight: 300,
        },
        {
          title: 'Real-Time Analytics Dashboard',
          description:
            'With the real-time analytics board of SociePRO-AI, you can get instant insights about the performance of your content across all integrated platforms. Plan smarter, modify your strategies, and drive better ROI.',
          imageSrc: '/feature4.png',
          imageAlt: 'Feature 4',
          iconSrc: '/feature-icon4.png',
          iconAlt: 'Feature Icon 4',
          buttonText: 'Learn More',
          buttonLink: '#',
          backgroundColor: 'bg-socie-purple',
          imageWidth: 300,
          imageHeight: 300,
        },
        {
          title: 'Team Collaboration',
          description:
            'With SociePRO-AI, managing large teams can be streamlined by assigning roles, providing feedback, and tracking progress. Keep your team aligned on the same page and avoid delays in the efficient and smart project execution.',
          imageSrc: '/feature5.png',
          imageAlt: 'Feature 5',
          iconSrc: '/feature-icon5.png',
          iconAlt: 'Feature Icon 5',
          buttonText: 'Learn More',
          buttonLink: '#',
          backgroundColor: 'bg-socie-pink',
          imageWidth: 300,
          imageHeight: 300,
        },
      ],
      helperText: 'List of features to display (exactly 5 required)',
      required: true,
    },
  ],
});

Builder.registerComponent(SocieProDashboard, {
  name: 'SocieProDashboard',
  inputs: [
    {
      name: 'mainHeading',
      type: 'string',
      defaultValue: 'One Dashboard. Every Platform. Zero Headaches',
      helperText: 'Main heading text for the dashboard section',
    },
    {
      name: 'description',
      type: 'text',
      defaultValue:
        'Whether you are managing a single brand, handling multiple client accounts, or leading a team, SociePRO-AI will combine everything in one intuitive platform. Stay ahead of deadlines while reaching your audience at the right time.',
      helperText: 'Description text for the dashboard section',
    },
    {
      name: 'imageSrc',
      type: 'file',
      allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
      defaultValue: '/connected-apps.png',
      helperText: 'URL for the dashboard image',
      required: true,
    },
    {
      name: 'imageAlt',
      type: 'string',
      defaultValue: 'Connected Apps',
      helperText: 'Alt text for the dashboard image',
    },
    {
      name: 'imageWidth',
      type: 'number',
      defaultValue: 800,
      helperText: 'Width of the dashboard image in pixels',
    },
    {
      name: 'imageHeight',
      type: 'number',
      defaultValue: 400,
      helperText: 'Height of the dashboard image in pixels',
    },
  ],
});
Builder.registerComponent(GrowthStrategies, {
  name: 'GrowthStrategies',
  inputs: [
    {
      name: 'mainHeading',
      type: 'string',
      defaultValue: 'Turn Social Posts Into Business Results',
      helperText: 'Main heading text for the growth strategies section',
    },
    {
      name: 'description',
      type: 'text',
      defaultValue:
        'Whether you are managing a single brand, handling multiple client accounts, or leading a team, SociePRO-AI will combine everything in one intuitive platform. Stay ahead of deadlines while reaching your audience at the right time.',
      helperText: 'Description text for the growth strategies section',
    },
    {
      name: 'strategies',
      type: 'list',
      subFields: [
        {
          name: 'title',
          type: 'string',
          defaultValue: 'Higher Engagement',
          helperText: 'Title of the strategy',
        },
        {
          name: 'subDescription',
          type: 'text',
          defaultValue:
            'Customised AI-generated content that grabs attention, improves engagement, and builds loyal audiences.',
          helperText: 'Sub-description of the strategy',
        },
        {
          name: 'imageSrc',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
          defaultValue: '/growth1.png',
          helperText: 'URL for the strategy image',
        },
        {
          name: 'imageAlt',
          type: 'string',
          defaultValue: 'Higher Engagement',
          helperText: 'Alt text for the strategy image',
        },
        {
          name: 'imageWidth',
          type: 'number',
          defaultValue: 80,
          helperText: 'Width of the strategy image in pixels',
        },
        {
          name: 'imageHeight',
          type: 'number',
          defaultValue: 80,
          helperText: 'Height of the strategy image in pixels',
        },
        {
          name: 'backgroundColor',
          type: 'string',
          defaultValue: 'bg-socie-yellow',
          helperText:
            'Tailwind background class for the strategy (e.g., bg-socie-yellow)',
        },
      ],
      defaultValue: [
        {
          title: 'Higher Engagement',
          subDescription:
            'Customised AI-generated content that grabs attention, improves engagement, and builds loyal audiences.',
          imageSrc: '/growth1.png',
          imageAlt: 'Higher Engagement',
          imageWidth: 80,
          imageHeight: 80,
          backgroundColor: 'bg-socie-yellow',
        },
        {
          title: 'Smarter Decisions',
          subDescription:
            'Offers you to monitor and gain insights from analytics with no spreadsheets or guesswork required.',
          imageSrc: '/growth2.png',
          imageAlt: 'Smarter Decisions',
          imageWidth: 80,
          imageHeight: 80,
          backgroundColor: 'bg-socie-green',
        },
        {
          title: 'Accelerated Follower Growth',
          subDescription:
            'Helps to create consistent & valuable posts that attract new followers and convert them into paying customers.',
          imageSrc: '/growth3.png',
          imageAlt: 'Accelerated Follower Growth',
          imageWidth: 80,
          imageHeight: 80,
          backgroundColor: 'bg-socie-peach',
        },
        {
          title: 'Increased Traffic',
          subDescription:
            'Channel-specific strategies that divert targeted clicks to your site, product pages, and lead funnels.',
          imageSrc: '/growth4.png',
          imageAlt: 'Increased Traffic',
          imageWidth: 80,
          imageHeight: 80,
          backgroundColor: 'bg-socie-purple',
        },
      ],
      helperText: 'List of growth strategies to display (exactly 4 required)',
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

// Register the component with Builder.io
Builder.registerComponent(UserReviewsSlider, {
  name: 'UserReviewsSlider',
  inputs: [
    {
      name: 'mainHeading',
      type: 'string',
      defaultValue: 'What our users who have used it say?',
      helperText: 'Main heading text for the reviews slider section',
      required: true,
    },
    {
      name: 'reviews',
      type: 'list',
      subFields: [
        {
          name: 'name',
          type: 'string',
          defaultValue: 'James R',
          helperText: 'Name of the reviewer',
          required: true,
        },
        {
          name: 'rating',
          type: 'string',
          defaultValue: '⭐⭐⭐⭐⭐',
          helperText: 'Rating of the review (e.g., ⭐⭐⭐⭐⭐)',
          required: true,
        },
        {
          name: 'comment',
          type: 'text',
          defaultValue:
            "It's like having a full-time assistant. Posting, scheduling, analytics—all in one dashboard. Love the clean UI!",
          helperText: 'Comment text for the review',
          required: true,
        },
        {
          name: 'userImage',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png'],
          defaultValue: '/default-user.png',
          helperText: 'URL for the user profile image',
          required: false,
        },
      ],
      defaultValue: [
        {
          name: 'James R',
          rating: '⭐⭐⭐⭐⭐',
          comment:
            "It's like having a full-time assistant. Posting, scheduling, analytics—all in one dashboard. Love the clean UI!",
          userImage: '/default-user.png',
        },
        {
          name: 'Sarah M.',
          rating: '⭐⭐⭐⭐⭐',
          comment:
            'As an agency, managing client posts has never been this smooth. Approvals, feedback, publishing—its all just faster.',
          userImage: '/default-user.png',
        },
        {
          name: 'Emily D.',
          rating: '⭐⭐⭐⭐⭐',
          comment:
            'Socie-Pro AI cut our posting time in half. A game changer for our small team.',
          userImage: '/default-user.png',
        },
      ],
      helperText: 'List of user reviews to display (minimum 1 required)',
      required: true,
    },
  ],
});

Builder.registerComponent(ContentCreators, {
  name: 'ContentCreators',
  inputs: [
    {
      name: 'mainHeading',
      type: 'html',
      defaultValue: 'By Content Creators,\nfor Content Creators',
      helperText: 'Main heading text for the content creators section',
    },
    {
      name: 'description',
      type: 'html',
      defaultValue:
        '<span className="font-bold">SociePRO-AI</span> was designed for content creators just like you. We know the struggle of juggling multiple tools, battling burnout, and trying to keep up with ever-changing algorithms. Thats why every feature in <span className="font-bold">SociePro-AI</span> is built with your needs in mind',
      helperText: 'Description text for the content creators section',
    },
    {
      name: 'listItems',
      type: 'list',
      subFields: [
        {
          name: 'text',
          type: 'html',
          defaultValue:
            'AI-based content creation that saves you time while staying true to your voice.',
          helperText: 'Text for each list item',
        },
      ],
      defaultValue: [
        {
          text: 'AI-based content creation that saves you time while staying true to your voice.',
        },
        { text: 'Effortless scheduling and posting across all platforms.' },
        {
          text: 'Analytics that make sense, helping you fine-tune your strategy for better results.',
        },
      ],
      helperText: 'List of features for content creators (minimum 1 required)',
    },
    {
      name: 'mainImageSrc',
      type: 'file',
      allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
      defaultValue: '/image-1.png',
      helperText: 'URL for the main feature image',
    },
    {
      name: 'mainImageAlt',
      type: 'string',
      defaultValue: 'content creators',
      helperText: 'Alt text for the main feature image',
    },
    {
      name: 'mainImageWidth',
      type: 'number',
      defaultValue: 482,
      helperText: 'Width of the main feature image in pixels',
    },
    {
      name: 'mainImageHeight',
      type: 'number',
      defaultValue: 377,
      helperText: 'Height of the main feature image in pixels',
    },
    {
      name: 'overlayImageSrc',
      type: 'file',
      allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
      defaultValue: '/image-2.png',
      helperText: 'URL for the overlay feature image',
    },
    {
      name: 'overlayImageAlt',
      type: 'string',
      defaultValue: 'content creators',
      helperText: 'Alt text for the overlay feature image',
    },
    {
      name: 'overlayImageWidth',
      type: 'number',
      defaultValue: 332,
      helperText: 'Width of the overlay feature image in pixels',
    },
    {
      name: 'overlayImageHeight',
      type: 'number',
      defaultValue: 200,
      helperText: 'Height of the overlay feature image in pixels',
    },
  ],
});

Builder.registerComponent(FAQ, {
  name: 'FAQ',
  inputs: [
    {
      name: 'faqs',
      type: 'list',
      subFields: [
        {
          name: 'question',
          type: 'text',
          defaultValue: 'What is Socie-Pro AI, and how does it work?',
          helperText: 'Question text for the FAQ item',
        },
        {
          name: 'answer',
          type: 'text',
          defaultValue:
            'Socie-Pro AI is an AI-powered social media management tool that helps you create, schedule, and publish posts across multiple platforms with just a few clicks.',
          helperText: 'Answer text for the FAQ item',
        },
      ],
      defaultValue: [
        {
          question: 'What is Socie-Pro AI, and how does it work?',
          answer:
            'Socie-Pro AI is an AI-powered social media management tool that helps you create, schedule, and publish posts across multiple platforms with just a few clicks.',
        },
        {
          question: 'What platforms does Socie-Pro AI support?',
          answer:
            'Socie-Pro AI supports platforms like Facebook, Instagram, Twitter, and more.',
        },
        {
          question: 'Can I schedule posts on multiple platforms at once?',
          answer:
            'Yes, Socie-Pro AI allows you to schedule posts for multiple platforms simultaneously, saving you time and effort.',
        },
        {
          question: 'Can I see performance analytics for my posts?',
          answer:
            "Yes, Socie-Pro AI provides detailed analytics on your posts' performance to help you fine-tune your strategy.",
        },
        {
          question: 'Can I collaborate with my team and approve posts?',
          answer:
            'Yes, Socie-Pro AI offers collaboration features that allow you and your team to approve and edit posts before publishing.',
        },
        {
          question: 'Is there a free trial available?',
          answer:
            'Yes, Socie-Pro AI offers a 7-day free trial to help you explore the features and see how it works.',
        },
      ],
      helperText: 'List of FAQ items to display',
    },
  ],
});

// Register the component with Builder.io
Builder.registerComponent(ProductPromoBanner, {
  name: 'ProductPromoBanner',
  inputs: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Fuel Your Social Strategy with the Power of AI',
      helperText: 'Heading text for the product promo banner',
    },
    {
      name: 'buttonText',
      type: 'text',
      defaultValue: 'Get Started',
      helperText: 'Text for the button',
    },
    {
      name: 'mainImageSrc',
      type: 'file',
      allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
      defaultValue:
        'https://cdn.builder.io/api/v1/image/assets%2F0a047baeedce410bb94ede0ae7df9827%2Fde9e73d3e73e4048923db049d68f56a3',
      helperText: 'URL for the main feature image',
    },
    {
      name: 'mainImageAlt',
      type: 'string',
      defaultValue: 'feature',
      helperText: 'Alt text for the main feature image',
    },
    {
      name: 'mainImageWidth',
      type: 'number',
      defaultValue: 400,
      helperText: 'Width of the main feature image in pixels',
    },
    {
      name: 'mainImageHeight',
      type: 'number',
      defaultValue: 300,
      helperText: 'Height of the main feature image in pixels',
    },
    {
      name: 'overlayImageSrc',
      type: 'file',
      allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
      defaultValue:
        'https://cdn.builder.io/api/v1/image/assets%2F0a047baeedce410bb94ede0ae7df9827%2Fddf8a84e752948d6a20455c7d3217277',
      helperText: 'URL for the overlay feature image',
    },
    {
      name: 'overlayImageAlt',
      type: 'string',
      defaultValue: 'feature',
      helperText: 'Alt text for the overlay feature image',
    },
    {
      name: 'overlayImageWidth',
      type: 'number',
      defaultValue: 650,
      helperText: 'Width of the overlay feature image in pixels',
    },
    {
      name: 'overlayImageHeight',
      type: 'number',
      defaultValue: 650,
      helperText: 'Height of the overlay feature image in pixels',
    },
  ],
});
