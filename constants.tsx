
import React from 'react';
import { NavLinkItem, SocialLink, Opportunity, VideoCategory, KnowledgeBaseVideo } from './types';

export const NAV_LINKS: NavLinkItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Opportunities', path: '/opportunities' },
  { name: 'How It Works', path: '/compensation' },
  { name: 'Community', path: '/community' },
  { name: 'Knowledge Base', path: '/knowledgebase' },
  { name: 'Contact', path: '/contact' },
];

export const SITE_TITLE = "The Gifting Tribe";

// Heroicons (https://heroicons.com/)
const createIcon = (pathData: string): React.ReactElement<React.SVGProps<SVGSVGElement>> => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d={pathData} />
  </svg>
);

export const ICONS = {
  LINKEDIN: createIcon("M10.837 18.667h2.326V11.41c0-1.788.96-2.79 2.285-2.79 1.255 0 1.967.885 1.967 2.738V18.667h2.326V11.15c0-2.933-1.732-4.823-4.292-4.823-2.05 0-3.245 1.34-3.613 2.25V6.667h-2.326V18.667zM6.667 18.667h2.326V6.667H6.667v12zM7.83 5.5c.74 0 1.34-.6 1.34-1.34s-.6-1.34-1.34-1.34-1.34.6-1.34 1.34.6 1.34 1.34 1.34z"),
  YOUTUBE: createIcon("M10 15l5.196-3.196L10 8.608v6.384zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"),
  FACEBOOK: createIcon("M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"),
  TELEGRAM: createIcon("M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.71 7.71L11 14.41V10a1 1 0 00-1-1H7.59l6.12-6.12a1 1 0 011.41 0l1.59 1.59a1 1 0 010 1.41z"),
  INSTAGRAM: createIcon("M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.224-.148-4.771-1.664-4.919-4.919-.058-1.265-.069-1.644-.069-4.849 0-3.204.012-3.584.069-4.849.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.059 1.689.073 4.948.073 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.948-.073zm0 5.838a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm0 9.662a5.912 5.912 0 110-11.824 5.912 5.912 0 010 11.824zM16.965 6.575a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"),
  MENU: createIcon("M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"),
  X_MARK: createIcon("M6 18L18 6M6 6l12 12"),
  ARROW_RIGHT: createIcon("M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"),
  CHECK_CIRCLE: createIcon("M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"),
  INFO: createIcon("M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"),
  USERS: createIcon("M15 19.128a9.38 9.38 0 002.625.372m7.503 0V19.5c0-2.21-.894-4.208-2.353-5.646m-2.353-5.646A9.75 9.75 0 0020.343 6c-1.099 0-2.138.207-3.09.571m-2.353 5.646c-.032-.032-.064-.064-.096-.096m-2.353-5.646c.032.032.064.064.096.096m-2.147 5.82a9.75 9.75 0 00-5.482-1.588M3 19.372a9.38 9.38 0 012.625-.372M9.099 9.36c.032-.032.064-.064.096-.096M3.87 10.63c.032.032.064.064.096.096m-2.147-5.82A9.75 9.75 0 019.657 6c1.099 0 2.138.207 3.09.571m-5.482 3.09A9.75 9.75 0 005.482 15.09M9 10.5a3 3 0 11-6 0 3 3 0 016 0zm12 0a3 3 0 11-6 0 3 3 0 016 0z"),
  EXTERNAL_LINK: createIcon("M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"),
  CHEVRON_DOWN: createIcon("M19.5 8.25l-7.5 7.5-7.5-7.5"),
  BOOK_OPEN: createIcon("M12 6.25a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0V7A.75.75 0 0112 6.25zM12 15a3.75 3.75 0 100-7.5A3.75 3.75 0 0012 15zm0-6a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zM3.75 6.75A2.25 2.25 0 016 4.5h12A2.25 2.25 0 0120.25 6.75v10.5A2.25 2.25 0 0118 19.5H6A2.25 2.25 0 013.75 17.25V6.75zM6 6h12v12H6V6z")
};


export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Facebook', url: 'https://www.facebook.com/share/g/16VeVjBwTd/', icon: ICONS.FACEBOOK },
  { name: 'Instagram', url: 'https://www.instagram.com/salkhanempire/', icon: ICONS.INSTAGRAM },
  { name: 'Telegram PopMaxTribe', url: 'https://t.me/PopMaxTribe', icon: ICONS.TELEGRAM },
  { name: 'Telegram @popsocialmax', url: 'https://t.me/popsocialmax', icon: ICONS.TELEGRAM }, // Assuming this is a user/channel
  { name: 'YouTube', url: 'https://www.youtube.com/@TheGiftingTribe', icon: ICONS.YOUTUBE },
];

export const COMPANY_NAME = "The Gifting Tribe";
export const CONTACT_EMAIL = "support@thegiftingtribe.com"; // Placeholder

export const YOUTUBE_VIDEOS = {
  THE_GIFTING_TRIBE_CHANNEL: "https://www.youtube.com/@TheGiftingTribe",
};

export const COMMUNITY_PLATFORMS = [
    { name: "PopMaxTribe Telegram", link: "https://t.me/PopMaxTribe", description: "For team updates, announcements, support, and giveaways." },
    { name: "@popsocialmax Telegram", link: "https://t.me/popsocialmax", description: "Pop Max official Telegram (Find us on Telegram: @popsocialmax)" },
    { name: "Facebook Group", link: "https://www.facebook.com/share/g/16VeVjBwTd/", description: "For community interaction, sharing results, marketing content, and giveaways." },
    { name: "YouTube Channel", link: "https://www.youtube.com/@TheGiftingTribe", description: "Access to video content, tutorials, interviews, and presentations." }
];

export const CONTACT_PAGE_SOCIAL_LINKS = SOCIAL_LINKS; // Reuse for consistency

export const FEATURED_OPPORTUNITIES_DATA: Opportunity[] = [
  {
    id: 'pop-social',
    title: 'Pop Social / Pop Max: Get Paid to Use Social Media',
    description: 'A Web3, AI-powered social media platform that rewards engagement. Pop Max is its staking and daily earnings arm.',
    imageUrl: 'https://picsum.photos/seed/popsocial/600/400',
    detailsLink: '/opportunities#pop-social-max'
  },
  {
    id: '7-dollar-program',
    title: 'The $7 Program Umbrella: Your Gateway to Diversified Income',
    description: 'Access multiple income streams (Forex, Crypto, Travel, etc.) under one team structure, starting with a low entry point.',
    imageUrl: 'https://picsum.photos/seed/7program/600/400',
    detailsLink: '/opportunities#7-program'
  },
  {
    id: 'blockchain-network',
    title: 'Building on the Blockchain: Own Your Network',
    description: 'Secure your team structure for long-term stability and earning potential across different projects on the blockchain.',
    imageUrl: 'https://picsum.photos/seed/blockchain/600/400',
    detailsLink: '/opportunities#blockchain-foundation'
  }
];

const rawVideoData: Omit<KnowledgeBaseVideo, 'id' | 'thumbnailUrl' | 'category'>[] = [
  // Data for 61 videos. VideoId is extracted, title is from OCR.
  // Descriptions are short, based on titles.
  { videoId: 'fSrqiqfz9fE', title: 'Pop Max | Comp Plan & Backoffice Training', description: 'Detailed training on the Pop Max compensation plan and navigating the backoffice.' },
  { videoId: 'lgVfITolW2s', title: 'Pop Max | Leadership Training With CMO', description: 'Leadership training session featuring the Pop Max CMO, discussing strategy and team building.' },
  { videoId: 'R4GHjerBbhQ', title: 'Pop Max | South Korea Form Tutorial', description: 'A step-by-step tutorial on completing forms related to Pop Max activities in South Korea.' },
  { videoId: 'ItQWZAgAkVI', title: 'Pop Max | $676 Per Day Comp Plan', description: 'Exploring the Pop Max compensation plan with a focus on achieving $676 per day earnings.' },
  { videoId: '0Cab9ZBJXq8', title: 'Pop Max | Ecosystem & Partnerships', description: 'An overview of the Pop Max ecosystem and its strategic partnerships within the industry.' },
  { videoId: 'fWaHMJRyCcU', title: 'Pop Max | FREE Trip To South Korea Event', description: 'Information on qualifying for a free trip to a Pop Max event in South Korea.' },
  { videoId: 'JGQ0eGx3hM0', title: 'Pop Max | WOW $502 Per Day!', description: 'Highlighting the exciting potential of earning $502 per day with Pop Max.' },
  { videoId: 'xyWu7b6J80g', title: 'Pop Max | Comp Plan Training With CMO', description: 'In-depth compensation plan training directly from the Pop Max CMO.' },
  { videoId: 'y0O4IRzc6IM', title: 'Pop Max | Easy Step To Swap PPT To USDT', description: 'A simple guide on how to swap PPT tokens to USDT within the Pop Max system.' },
  { videoId: 'rBWM6SN7ICg', title: 'What Is Pop Social? $$$', description: 'An introduction to Pop Social and its earning potential in the Web3 space.' },
  { videoId: 'vW-mkdEVgQ4', title: 'Pop Max | $435/Day + Live Withdraw (Sleeping Giant)', description: 'Showcasing $435 daily earnings and live withdrawal process with Pop Max.' },
  { videoId: 'hqJWrNt-m94', title: 'Pop Max | Weekly Update On Comp Plan/ Nxone/ Partnerships', description: 'Regular updates on the Pop Max compensation plan, Nxone integration, and new partnerships.' },
  { videoId: 'k_p-1YpDXTc', title: 'Pop Max | Powerful Profits On Profits Presentation', description: 'A presentation detailing the powerful profit generation mechanisms within Pop Max.' },
  { videoId: 'r0OrMbP140U', title: 'Pop Max | Social Media Daily Pay Sizzle', description: 'A quick look at the daily pay structure related to Pop Max social media activities.' },
  { videoId: 'gnTTSTP9S-Q', title: 'Pop Max | Marketing Content & Japan Event', description: 'Insights into Pop Max marketing content and details about an event in Japan.' },
  { videoId: 'WSzN74chAYI', title: 'Pop Max | Weekly Update Leadership Zoom', description: 'Key takeaways from the weekly leadership zoom call regarding Pop Max updates.' },
  { videoId: 'OSfZgpFjjt8', title: 'Pop Social | $40,000,000 With 500,000 Users', description: 'Discussing Pop Social\'s milestone of $40 million in funding with 500,000 users.' },
  { videoId: 'TkrHu1JV_zA', title: 'Pop Max | $1,000 To $10,000 Per Daily Possible??', description: 'Exploring the potential of earning between $1,000 to $10,000 daily with Pop Max.' },
  { videoId: 'ad1LQkqyMEg', title: 'Pop Max | Sunny\'s BIG Money Speech @ Vietnam Event', description: 'Highlights from Sunny\'s impactful speech about significant earnings at the Vietnam event.' },
  { videoId: '3na69qJe9Wg', title: 'Pop Max | Future Of Social Media @ Vietnam Event', description: 'A presentation on the future of social media, discussed at the Pop Max Vietnam event.' },
  { videoId: 'J8HsUKGCV0M', title: 'Pop Max | Sign Up + Funding Tutorial + $2,002 Deposit', description: 'A tutorial covering the sign-up process, funding methods, and a $2,002 deposit example.' },
  { videoId: '-VCnI3WmrvU', title: 'Pop Max | PunkVerse Partnership @ Vietnam Event', description: 'Details about the Pop Max partnership with PunkVerse, announced at the Vietnam event.' },
  { videoId: 'eIb6UW8kxpg', title: 'Pop Max | Ruben Mata Speech @ Vietnam Event', description: 'Key points from Ruben Mata\'s speech delivered at the Pop Max Vietnam event.' },
  { videoId: 'm3gqldRjuKA', title: 'Pop Max | Goran Speech @ Vietnam Event', description: 'Insights from Goran\'s speech at the Pop Max event in Vietnam.' },
  { videoId: 'OC6zubP9ufQ', title: 'Pop Max | CMO Anjali\'s Speech @ Vietnam Event', description: 'Highlights from Pop Max CMO Anjali\'s speech at the Vietnam event.' },
  { videoId: 'bArb9VEfylw', title: 'Pop Max | New Feature! Stake USDT Only', description: 'Announcement of a new Pop Max feature allowing users to stake USDT directly.' },
  { videoId: '4UCahR4kUEw', title: 'Pop Max | On Stage At Vietnam Event', description: 'Coverage of on-stage presentations and announcements from the Pop Max Vietnam event.' },
  { videoId: 'ORqNLNat0Sw', title: 'Pop Max | Team Launch Presentation & Live Withdraw', description: 'Presentation for a team launch within Pop Max, including a live withdrawal demonstration.' },
  { videoId: 'sh0qbxkWLfw', title: 'Pop Max | Interview With Main VC Investor', description: 'An exclusive interview with a main Venture Capital investor in Pop Max.' },
  { videoId: '2sL7R8ggfdc', title: 'OlyLife | Earn Matching On Your Sponsor?!?', description: 'Explaining how to earn matching bonuses from your sponsor in the OlyLife program.' },
  { videoId: 'UZss5YTsqm4', title: 'OlyLife | BioTech Business $2,000-$3,000 /Daily', description: 'Overview of the OlyLife BioTech business opportunity with potential daily earnings of $2,000-$3,000.' },
  { videoId: '6juzpUvziVI', title: '$7 Program | $200 Instant Withdraw + New Level Unlocked', description: 'Details on the $7 Program, featuring $200 instant withdrawals and new level unlocking benefits.' },
  { videoId: '0HRpONZ20Bo', title: 'Pop Max | All Time High Price + 2500 PPT Withdraw', description: 'Celebrating Pop Max\'s all-time high price alongside a 2500 PPT withdrawal demonstration.' },
  { videoId: 'tZ1QMJ9b0n8', title: 'Already Making 22% Commission', description: 'Showcasing the achievement of already making a 22% commission.' },
  { videoId: 'jV4Lq5Hv-DY', title: 'Pop Max | Live 8,000 PPT Withdraw Into USDT ($765)', description: 'Live demonstration of withdrawing 8,000 PPT, equivalent to $765 USDT, from Pop Max.' },
  { videoId: 'X4ZDyOi-Ce8', title: 'Pop Max | 10 Day Unstaking & Withdraw', description: 'Explaining the 10-day unstaking process and withdrawal feature in Pop Max.' },
  { videoId: '4QQN0k-cSUc', title: 'Pop Max | Presentation & Live 5k PPT Withdraw', description: 'A presentation combined with a live withdrawal of 5,000 PPT from Pop Max.' },
  { videoId: 'UvItNRMhEFw', title: 'Pop Max | Passive Staking & Comp Plan Overview', description: 'An overview of Pop Max\'s passive staking options and its comprehensive compensation plan.' },
  { videoId: 'LXNyErvMz1k', title: 'Pop Max | Earn Daily From Blockchain Social Media', description: 'How to earn daily income through Pop Max by leveraging blockchain-based social media.' },
  { videoId: 'APUY6RSI30g', title: '$7 Program | BIG Money Comp Plan', description: 'Detailed explanation of the substantial earnings potential within the $7 Program\'s compensation plan.' },
  { videoId: 'S2SxCKOEWAY', title: 'Pop Social | Web3 BlockChain Social Media Pays You Daily!', description: 'Discover how Pop Social, a Web3 blockchain social media platform, enables daily earnings.' },
  { videoId: 'IQIK1eaZL0A', title: '$7 Program | A Million Dollar Plan', description: 'Outlining the strategy and potential of achieving a million dollars through the $7 Program.' },
  { videoId: 'PdG7YoDZcAc', title: 'Pop Max | 10K PPT Withdraw & Conversion Into USDT', description: 'Demonstration of a 10,000 PPT withdrawal and its conversion into USDT within Pop Max.' },
  { videoId: 'nMhZIA4AYvg', title: '$7 Program One Team = Multiple Incomes', description: 'The core concept of the $7 Program: building one team to generate multiple streams of income.' },
  { videoId: 'jwzADva4tAM', title: 'Pop Max | Live $2,000 Deposit | $8k Total', description: 'Live demonstration of a $2,000 deposit in Pop Max, contributing to an $8,000 total.' },
  { videoId: '3DQrnWgI7Cc', title: 'Pop Max | Daily Profit, Commissions & Node Bonus Withdraw Tutorial', description: 'A tutorial on withdrawing daily profits, commissions, and node bonuses from Pop Max.' },
  { videoId: 'jpj1oZq4mqs', title: 'BitFoot | Automatically Copy Million Dollar Meme Wallets', description: 'Introduction to BitFoot, a tool for automatically copying trades from successful meme coin wallets.' },
  { videoId: '7afZTUtscIA', title: 'Get Paid Daily To Do Social Media Tasks!', description: 'Learn how you can get paid daily for completing simple social media tasks.' },
  { videoId: 'VZDfbteguJc', title: 'The Greatest Project I Found', description: 'A personal testimonial about discovering what the speaker considers the greatest project.' },
  { videoId: 'tSoh4E-AEDA', title: 'Self Growth In Isolation | The Gifting Tribe', description: 'Exploring self-growth concepts within the context of The Gifting Tribe community.' },
  { videoId: 'Gq9MKD2LGOU', title: 'Gifting Joy To Kids In The Slums Of Bangladesh | The Gifting Tribe', description: 'The Gifting Tribe\'s initiative to bring joy to children in the slums of Bangladesh.' },
  { videoId: 'zWOZObfLQP4', title: 'Broke But Not Broken In Egypt', description: 'A Gifting Tribe story or initiative focusing on resilience and support in Egypt.' },
  { videoId: 'QME-GlpV8wA', title: 'Gifting Back | Connecting Orphan Girls With Lonely Mothers', description: 'The Gifting Tribe\'s efforts in connecting orphan girls with lonely mothers, a Gifting Back initiative.' },
  { videoId: '4tdAju7DJJU', title: 'The 5 Daily C\'s To Building Momentum', description: 'A guide to the five daily C\'s (Consistency, Clarity, Courage, Commitment, Contribution) for building momentum.' },
  { videoId: 'UHRoQLAxfel', title: 'Celebrating Birthday With The Street Kids Of Dhaka, Bangladesh', description: 'A heartwarming Gifting Tribe event celebrating a birthday with street children in Dhaka.' },
  { videoId: 'IO5nkrSvEtA', title: 'Game Plan For Re-Starting From $0.00 To $100,000 Per Month', description: 'A strategic game plan for restarting and scaling income from $0 to $100,000 per month.' },
  { videoId: 'dhnuWFRQvlg', title: '10 Lessons From Losing $4,440,746.51', description: 'Valuable lessons learned from a significant financial loss, offering insights and wisdom.' },
  { videoId: 'd4djb-couuU', title: 'TGT Vlog #2: Back At Sal Mahal', description: 'The Gifting Tribe Vlog episode 2, featuring Sal Mahal and updates on his journey.' },
  { videoId: '-pC_gsfqE48', title: 'TGT Vlog #1: From $3.7M To Starting Over', description: 'The Gifting Tribe Vlog episode 1, detailing the journey from $3.7M to starting over.' },
  { videoId: 'xkQzxXkYMSQ', title: 'Our Gifting Back Work Begins!', description: 'Announcing the commencement of "Gifting Back" initiatives by The Gifting Tribe.' },
  { videoId: 'HwURq7FZgYo', title: 'Greetings Gifting Tribe!', description: 'A general greeting and message to The Gifting Tribe community.' },
];


const assignCategory = (title: string): string => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('comp plan') || lowerTitle.includes('tutorial') || lowerTitle.includes('swap ppt') || lowerTitle.includes('stake usdt') || lowerTitle.includes('withdraw') || lowerTitle.includes('unstaking') || lowerTitle.includes('deposit')) return 'cat1';
  if (lowerTitle.includes('pop social') || lowerTitle.includes('ecosystem') || lowerTitle.includes('punkverse') || lowerTitle.includes('bitfoot') || lowerTitle.includes('olylife')) return 'cat2';
  if (lowerTitle.includes('$7 program') || lowerTitle.includes('million dollar plan')) return 'cat3';
  if (lowerTitle.includes('event') || lowerTitle.includes('speech') || lowerTitle.includes('leadership zoom') || lowerTitle.includes('weekly update') || lowerTitle.includes('team launch') || lowerTitle.includes('on stage')) return 'cat4';
  if (lowerTitle.includes('tgt vlog') || lowerTitle.includes('gifting tribe') || lowerTitle.includes('lessons from losing') || lowerTitle.includes('self growth') || lowerTitle.includes('gifting back') || lowerTitle.includes('starting over')) return 'cat5';
  if (lowerTitle.includes('per day') || lowerTitle.includes('profits') || lowerTitle.includes('commission') || lowerTitle.includes('possible??') || lowerTitle.includes('pays you daily')) return 'cat6';
  return 'cat6'; // Default category
};

const categorizedVideos: KnowledgeBaseVideo[] = rawVideoData.map((video, index) => ({
  ...video,
  id: video.videoId + '_' + index, // Ensure unique ID if videoId could repeat (though unlikely for 61 unique)
  thumbnailUrl: `https://img.youtube.com/vi/${video.videoId}/sddefault.jpg`,
  category: assignCategory(video.title),
}));

export const KNOWLEDGE_BASE_CATEGORIES: VideoCategory[] = [
  {
    id: 'cat1',
    name: 'Pop Max Tutorials & Explainers',
    videos: categorizedVideos.filter(v => v.category === 'cat1'),
  },
  {
    id: 'cat2',
    name: 'Pop Social & Ecosystem Insights',
    videos: categorizedVideos.filter(v => v.category === 'cat2'),
  },
  {
    id: 'cat3',
    name: '$7 Program Deep Dives',
    videos: categorizedVideos.filter(v => v.category === 'cat3'),
  },
  {
    id: 'cat4',
    name: 'Event Coverage & Team Updates',
    videos: categorizedVideos.filter(v => v.category === 'cat4'),
  },
  {
    id: 'cat5',
    name: 'Gifting Tribe Philosophy & Vlogs',
    videos: categorizedVideos.filter(v => v.category === 'cat5'),
  },
  {
    id: 'cat6',
    name: 'General Earnings & Opportunities',
    videos: categorizedVideos.filter(v => v.category === 'cat6' || !['cat1','cat2','cat3','cat4','cat5'].includes(v.category)),
  },
];
