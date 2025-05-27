
import React, { useState, useEffect, ReactNode, useCallback } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, SITE_TITLE, SOCIAL_LINKS, ICONS, FEATURED_OPPORTUNITIES_DATA, COMMUNITY_PLATFORMS, CONTACT_PAGE_SOCIAL_LINKS, KNOWLEDGE_BASE_CATEGORIES } from './constants';
import { NavLinkItem, Opportunity, SectionProps, ResourceItem, KnowledgeBaseVideo, VideoCategory } from './types';

// --- Reusable UI Components ---

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = 'py-12 md:py-20', titleClassName = 'text-3xl md:text-4xl font-bold text-center mb-4 text-neutral-darkest', subtitleClassName = 'text-xl text-center text-neutral-dark mb-12 max-w-3xl mx-auto' }) => (
  <section id={id} className={`container mx-auto px-6 ${className}`}>
    {title && <h2 className={titleClassName}>{title}</h2>}
    {subtitle && <p className={subtitleClassName}>{subtitle}</p>}
    {children}
  </section>
);

const Card: React.FC<{children: ReactNode, className?: string}> = ({ children, className }) => (
  <div className={`bg-white shadow-xl rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300 ${className}`}>
    {children}
  </div>
);

const Button: React.FC<{children: ReactNode, onClick?: () => void, className?: string, type?: 'button' | 'submit' | 'reset', to?: string, variant?: 'primary' | 'secondary' | 'outline'}> = ({ children, onClick, className, type = 'button', to, variant = 'primary' }) => {
  const baseStyle = "px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center";
  let variantStyle = "";
  switch (variant) {
    case 'primary':
      variantStyle = "bg-primary text-white hover:bg-primary-dark focus:ring-primary";
      break;
    case 'secondary':
      variantStyle = "bg-secondary text-neutral-darkest hover:bg-secondary-dark focus:ring-secondary";
      break;
    case 'outline':
      variantStyle = "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary";
      break;
  }

  if (to) {
    return <Link to={to} className={`${baseStyle} ${variantStyle} ${className}`}>{children}</Link>;
  }
  return <button type={type} onClick={onClick} className={`${baseStyle} ${variantStyle} ${className}`}>{children}</button>;
};

const OpportunityCard: React.FC<Opportunity> = ({ title, description, imageUrl, detailsLink }) => (
  <Card className="flex flex-col h-full">
    {imageUrl && <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-t-lg mb-4" />}
    <div className="flex-grow">
      <h3 className="text-xl font-semibold mb-2 text-primary-dark">{title}</h3>
      <p className="text-neutral-dark text-sm mb-4">{description}</p>
    </div>
    {detailsLink && (
      <div className="mt-auto">
         <Button to={detailsLink} variant="outline" className="w-full">
          Learn More {React.cloneElement<React.SVGProps<SVGSVGElement>>(ICONS.ARROW_RIGHT, {className: "ml-2 w-4 h-4"})}
        </Button>
      </div>
    )}
  </Card>
);

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-neutral-DEFAULT">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 px-2 text-left text-lg font-medium text-neutral-darkest hover:bg-neutral-light transition-colors"
      >
        <span>{title}</span>
        <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          {React.cloneElement<React.SVGProps<SVGSVGElement>>(ICONS.CHEVRON_DOWN, {className:"w-5 h-5"})}
        </span>
      </button>
      {isOpen && (
        <div className="p-4 bg-white">
          <div className="prose max-w-none text-neutral-dark">{children}</div>
        </div>
      )}
    </div>
  );
};


// --- Layout Components ---
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="bg-neutral-darkest shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white font-poppins hover:text-primary-light transition-colors">
          {SITE_TITLE}
        </Link>
        <div className="hidden md:flex space-x-4">
          {NAV_LINKS.map((link: NavLinkItem) => (
            <Link
              key={link.name}
              to={link.path}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === link.path
                  ? 'bg-primary text-white'
                  : 'text-neutral-light hover:bg-neutral-dark hover:text-white'
              } transition-colors`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-neutral-light hover:text-white focus:outline-none">
            {isOpen ? React.cloneElement<React.SVGProps<SVGSVGElement>>(ICONS.X_MARK, {className:"w-7 h-7"}) : React.cloneElement<React.SVGProps<SVGSVGElement>>(ICONS.MENU, {className:"w-7 h-7"})}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-neutral-darkest">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link: NavLinkItem) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={toggleMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'bg-primary text-white'
                    : 'text-neutral-light hover:bg-neutral-dark hover:text-white'
                } transition-colors`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-neutral-darkest text-neutral-light py-12">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-semibold text-white mb-4 font-poppins">{SITE_TITLE}</h3>
          <p className="text-sm">One Team. Multiple Income Streams. Building Your Legacy on the Blockchain.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {NAV_LINKS.map(link => (
              <li key={link.name}>
                <Link to={link.path} className="text-sm hover:text-primary-light transition-colors">{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            {SOCIAL_LINKS.map(link => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary-light transition-colors" title={link.name}>
                {React.cloneElement<React.SVGProps<SVGSVGElement>>(link.icon, {className: "w-7 h-7"})}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-dark pt-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} {SITE_TITLE}. All rights reserved.</p>
        <p className="mt-1">This is a conceptual design. Information presented is based on provided data.</p>
      </div>
    </div>
  </footer>
);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

// --- Page Components ---

const HomePage: React.FC = () => (
  <>
    {/* Hero Section */}
    <section className="bg-gradient-to-r from-primary-dark via-primary to-accent-light text-white py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-poppins animate-fade-in-down">Build Your Team Once, Earn Multiple Income Streams Forever</h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto animate-fade-in-up">
          Join The Gifting Tribe and unlock a diversified ecosystem of opportunities starting from just $7.
        </p>
        <p className="text-lg mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
          Tired of programs that disappear and having to restart your team? Discover a revolutionary platform built on the blockchain.
        </p>
        <div className="space-x-0 space-y-4 md:space-y-0 md:space-x-4 animate-fade-in-up delay-400">
          <Button to="/opportunities" variant="secondary" className="text-lg">Explore Opportunities</Button>
          <Button to="/compensation#getting-started" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-primary">Get Started for $7</Button>
        </div>
      </div>
    </section>

    {/* Featured Opportunities Section */}
    <Section id="featured-opportunities" title="Featured Opportunities" subtitle="Discover the main pillars of our ecosystem designed for your growth and success.">
      <div className="grid md:grid-cols-3 gap-8">
        {FEATURED_OPPORTUNITIES_DATA.map(op => <OpportunityCard key={op.id} {...op} />)}
      </div>
    </Section>

    {/* Problem/Solution Section */}
    <Section id="problem-solution" title="The Problem We Solve" className="bg-neutral-light">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-secondary-dark">The Online Earning Maze</h3>
          <p className="mb-4 text-neutral-dark">Many face challenges in the online earning space: rampant scams, unsustainable programs, unethical owners, and the constant grind of rebuilding teams. It's frustrating and demotivating.</p>
          <ul className="list-disc list-inside space-y-2 text-neutral-dark">
            <li>Too many short-lived programs</li>
            <li>Difficulty in finding genuine opportunities</li>
            <li>Losing your network and starting over</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-accent-dark">Our Solution: My Business Club</h3>
          <p className="mb-4 text-neutral-dark">We present My Business Club – a single, unified platform built on the security and transparency of the blockchain. Our ecosystem offers genuine, sustainable opportunities designed to secure your network and foster long-term growth.</p>
           <Button to="/about" variant="primary">Learn About Our Vision</Button>
        </div>
      </div>
    </Section>
    
    {/* Community & Support Section */}
    <Section id="community-support" title="Join Our Thriving Community" subtitle="Become part of The Gifting Tribe, access exclusive resources, and connect with like-minded individuals.">
      <div className="text-center">
        <p className="mb-8 text-lg text-neutral-dark max-w-2xl mx-auto">We believe in the power of community. Get access to regular Zooms, learning resources, and a supportive network to help you succeed.</p>
        <Button to="/community#join-our-tribe" variant="primary" className="text-lg">
          {React.cloneElement<React.SVGProps<SVGSVGElement>>(ICONS.USERS, {className: "mr-2 w-5 h-5"})} Join Our Community
        </Button>
      </div>
    </Section>
  </>
);

const AboutUsPage: React.FC = () => (
  <>
    <Section title="About The Gifting Tribe" subtitle="Empowering individuals with genuine opportunities for wealth building and lasting legacy." className="bg-gradient-to-br from-primary to-accent-DEFAULT text-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <img src="https://picsum.photos/seed/aboutus/800/600" alt="Community working together" className="rounded-lg shadow-2xl" />
        <div>
          <h3 className="text-3xl font-semibold mb-6 font-poppins">Our Mission & Vision</h3>
          <p className="text-lg mb-4">Our core mission is to empower every member with genuine, sustainable opportunities for wealth building and personal creation. We emphasize a long-term legacy project approach, moving beyond short-lived trends to build something truly lasting.</p>
          <p className="text-lg">We envision a world where individuals can confidently build their financial future through a supportive community and a robust, transparent platform.</p>
        </div>
      </div>
    </Section>

    <Section id="backstory" title="Our Story: The $7 Program" subtitle="The genesis of a platform designed to solve a core industry problem.">
        <Card>
          <p className="text-lg mb-4">The Gifting Tribe, and its core $7 program, was born from extensive experience and success in the online earning industry. Our founder witnessed firsthand the frustration of constantly restarting teams due to fleeting programs. </p>
          <p className="text-lg">The intention was clear: create a stable, reliable platform that solves this problem, allowing members to build their network once and benefit from multiple income streams securely on the blockchain.</p>
        </Card>
    </Section>

    <Section id="gifting-tribe-mission" title="The Gifting Tribe: More Than a Name" className="bg-neutral-light">
        <Card>
            <div className="text-center">
                 <div className="mx-auto text-primary w-16 h-16 mb-4">{React.cloneElement<React.SVGProps<SVGSVGElement>>(ICONS.USERS, {className:"w-16 h-16"})}</div>
                <h3 className="text-2xl font-semibold mb-4">Our Community Mission</h3>
                <p className="text-lg mb-4">The name "The Gifting Tribe" reflects our core mission: "of making the most to gift back the most." This isn't just about financial gain; it's about giving back through opportunities, sharing valuable information, and engaging in offline charity to make a real-world impact.</p>
            </div>
        </Card>
    </Section>

    <Section id="why-different" title="Why We Are Different">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: "One Team Structure", description: "Build your network once and leverage it across multiple income streams.", icon: React.cloneElement<React.SVGProps<SVGSVGElement>>(ICONS.USERS, {className:"w-12 h-12 text-primary mx-auto"}) },
          { title: "Blockchain Foundation", description: "Enjoy the security, transparency, and longevity of a blockchain-based system.", icon: React.cloneElement<React.SVGProps<SVGSVGElement>>(ICONS.LINKEDIN, {className:"w-12 h-12 text-primary mx-auto"}) /* Placeholder */ },
          { title: "Real Businesses & Profits", description: "We focus on opportunities backed by real businesses and sustainable profit models.", icon: React.cloneElement<React.SVGProps<SVGSVGElement>>(ICONS.CHECK_CIRCLE, {className:"w-12 h-12 text-primary mx-auto"}) },
          { title: "Solving Industry Problems", description: "Our platform directly addresses common issues like scams and the need to constantly restart.", icon: React.cloneElement<React.SVGProps<SVGSVGElement>>(ICONS.INFO, {className:"w-12 h-12 text-primary mx-auto"}) }
        ].map(item => (
          <Card key={item.title} className="text-center">
            <div className="mb-4">{item.icon}</div>
            <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
            <p className="text-neutral-dark text-sm">{item.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  </>
);

const OpportunitiesPage: React.FC = () => (
  <>
    <Section title="Unlock Diverse Opportunities" subtitle="Our platform is an umbrella for a wide range of income-generating possibilities.">
      <p className="text-center text-lg mb-12 max-w-3xl mx-auto">We provide a diversified ecosystem designed to cater to various interests and investment levels, all under one unified team structure.</p>
    </Section>

    <Section id="7-program" title="The $7 Program / My Business Club Core" className="bg-neutral-light">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
            <h3 className="text-2xl font-semibold mb-4">Your Entry Point to Success</h3>
            <p className="mb-3">Start your journey with an accessible $7 entry, which includes the Namaste app (a digital business card) and entry into our core ecosystem.</p>
            <p className="mb-3">Unlock greater potential with our subscription levels, offering access to more opportunities, exclusive educational content, and Mastermind Zooms with industry leaders.</p>
            <p>Our unique profit split mechanism ensures fair rewards based on your membership level and engagement.</p>
        </div>
        <img src="https://picsum.photos/seed/7programdetail/600/400" alt="$7 Program" className="rounded-lg shadow-lg" />
      </div>
    </Section>

    <Section id="pop-social-max" title="Featured: Pop Max / Pop Social">
      <AccordionItem title="What is Pop Social?">
        <p>Pop Social is a revolutionary Web3, AI-powered social media platform. It rewards users for their engagement (liking, commenting, sharing). With a 2-year development history, it's poised for an upcoming launch, aiming to decentralize content creation and reward its community fairly.</p>
      </AccordionItem>
      <AccordionItem title="What is Pop Max?">
        <p>Pop Max serves as the marketing and staking arm for the Pop Social ecosystem. It facilitates user participation in staking programs, offering daily earnings and managing the referral system.</p>
      </AccordionItem>
      <AccordionItem title="How to Earn with Pop Max">
        <h4 className="font-semibold mt-2 mb-1">Staking:</h4>
        <ul className="list-disc pl-5 mb-3">
          <li>Options: 10, 30, 90, 180, 360 days.</li>
          <li>Daily Earnings: .4% to 1% daily.</li>
          <li>Principal Returned: Your initial stake is returned at the end of the term.</li>
          <li>Minimum Stake: $100.</li>
          <li>Withdrawal: Daily PUSD to PPT conversion, usable on exchanges.</li>
        </ul>
        <h4 className="font-semibold mb-1">Optional Referral Program:</h4>
        <p>Earn matching bonuses on your team's earnings. Starts at 15% for direct referrals, with deeper levels unlocked based on rank. Earning is possible even without recruiting.</p>
      </AccordionItem>
      <AccordionItem title="Why Pop Social / Pop Max?">
        <ul className="list-disc pl-5">
          <li>User Ownership & Data Privacy.</li>
          <li>AI-Powered Content Creation Tools.</li>
          <li>Verifiable Reputation System (No Algorithm Manipulation).</li>
          <li>Innovative Tokenomics (PPT Rewards).</li>
          <li>Listed on Major Exchanges.</li>
          <li>Backed by Credible VCs and Executives.</li>
          <li>Upcoming Developments: PopChain, NX1 Integration, Payment Gateways.</li>
        </ul>
      </AccordionItem>
    </Section>

    <Section id="other-opportunities" title="Explore More Opportunities" className="bg-neutral-light">
      <div className="grid md:grid-cols-3 gap-8">
        <OpportunityCard id="bitfoot" title="BitFoot" description="Capitalize on the meme coin space by automatically copying the trades of successful wallets. High-risk, high-reward potential." imageUrl="https://picsum.photos/seed/bitfoot/600/400" />
        <OpportunityCard id="social-boosters" title="Social Boosters" description="Earn by completing simple social media tasks. A great way to start for free and understand the power of engagement." imageUrl="https://picsum.photos/seed/socialboost/600/400" />
        <OpportunityCard id="olylife" title="OlyLife" description="Engage in a BioTech/physical product business with earnings paid in cryptocurrency. A unique blend of traditional business with Web3 rewards." imageUrl="https://picsum.photos/seed/olylife/600/400" />
      </div>
       <p className="text-center mt-8 text-neutral-dark">We are constantly looking to add more JV partners and diverse opportunities over time.</p>
    </Section>
  </>
);

const CompensationPage: React.FC = () => (
  <>
    <Section title="How It Works & Compensation" subtitle="Understand the mechanics of earning and growing within The Gifting Tribe.">
      <></>
    </Section>

    <Section id="getting-started" title="Getting Started is Easy" className="bg-neutral-light">
        <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg mb-3">1. Join for just $7 to access the foundational level of our ecosystem.</p>
            <p className="text-lg mb-3">2. Upgrade your membership to unlock more benefits and earning potential.</p>
            <p className="text-lg mb-3">3. Set up a Web3 wallet (e.g., MetaMask, Trust Wallet) and have some BNB/USDT (Binance Smart Chain) for transactions/staking.</p>
            <Button to="/contact" variant="primary" className="mt-4">Need Help? Contact Us</Button>
        </div>
    </Section>

    <Section id="earning-mechanisms" title="Earning Mechanisms">
      <AccordionItem title="Multiple Ways to Earn">
        <p>Our ecosystem is designed for diverse earning strategies. You can earn commissions and profits through various activities including staking, referral programs (optional), and participation in specific project rewards. Each opportunity has its unique way of generating income, all consolidated under your Gifting Tribe network.</p>
      </AccordionItem>
      <AccordionItem title="The Million-Dollar Bonus">
        <p>Unlock the potential to earn a million dollars by building a significant team and volume. The "Club 10,000" initiative rewards leaders who achieve substantial volume/people requirements over 1-2 years. This includes a tiered payout structure (e.g., $100k/month for 10 months, $50k/month for 20, $25k/month for 40). Keep an eye out for early bird deadlines for potentially better requirements!</p>
      </AccordionItem>
      <AccordionItem title="Pop Max Staking Earnings">
        <p>Reiteration: Earn daily percentages based on your stake in Pop Max (.4% to 1%). Withdrawals are processed efficiently, allowing you to access your earnings regularly. Your principal is returned at the end of the staking period.</p>
      </AccordionItem>
      <AccordionItem title="Pop Max Referral Plan (Optional)">
        <p>Benefit from an optional referral program. Earn matching bonuses on the earnings of team members you introduce. This allows for leveraged growth but is not a requirement to earn.</p>
      </AccordionItem>
    </Section>

    <Section id="withdrawal-process" title="Withdrawal Process" className="bg-neutral-light">
        <Card>
            <h3 className="text-xl font-semibold mb-3 text-center">Simple & Efficient Withdrawals</h3>
            <p className="mb-2">Earnings are typically available daily.</p>
            <p className="mb-2">The process often involves converting platform-specific earnings (e.g., PUSD) to a transferable token (e.g., PPT), which can then be swapped on exchanges.</p>
            <p>Some programs feature instant withdrawal capabilities, highlighting our commitment to providing timely access to your funds.</p>
        </Card>
    </Section>

    <Section id="income-disclaimer" title="Income Disclaimer">
        <Card className="bg-secondary-light border-secondary border-2">
            <div className="flex items-center">
                <div className="text-secondary-dark mr-4">{React.cloneElement<React.SVGProps<SVGSVGElement>>(ICONS.INFO, {className:"w-8 h-8"})}</div>
                <p className="text-secondary-darkest font-medium">Results are not guaranteed. Earnings depend on individual effort, market conditions, and adherence to program terms. The Gifting Tribe provides opportunities, not financial advice. Please participate responsibly.</p>
            </div>
        </Card>
    </Section>
  </>
);

const CommunityPage: React.FC = () => (
  <>
    <Section title="Our Community & Resources" subtitle="Connect, learn, and grow with The Gifting Tribe.">
      <></>
    </Section>

    <Section id="join-our-tribe" title="Join Our Tribe: Connect on Your Favorite Platforms" className="bg-neutral-light">
      <div className="grid md:grid-cols-2 gap-6">
        {COMMUNITY_PLATFORMS.map(platform => (
          <Card key={platform.name}>
            <h3 className="text-xl font-semibold mb-2 text-primary">{platform.name}</h3>
            <p className="text-sm text-neutral-dark mb-3">{platform.description}</p>
            <a href={platform.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-accent hover:text-accent-dark font-semibold">
              Join Now {React.cloneElement<React.SVGProps<SVGSVGElement>>(ICONS.EXTERNAL_LINK, {className:"ml-1 w-4 h-4"})}
            </a>
          </Card>
        ))}
      </div>
      <div className="mt-8 text-center">
        <h4 className="text-lg font-semibold mb-2">Daily Zooms</h4>
        <p className="text-neutral-dark">Attend live team and company presentations/trainings. Check schedules for Dubai and Eastern Standard Time zones.</p>
      </div>
    </Section>

    <Section id="team-building" title="Team Building Philosophy">
        <Card>
            <h3 className="text-2xl font-semibold mb-4 text-center">Personalized Connection & Consistent Effort</h3>
            <p className="mb-3">We emphasize the importance of personalized communication – simple video messages can build strong bonds. Reinvesting in your team and maintaining consistent effort are key. Our motto: "Reach out to 100 people for 100 days" to see significant growth.</p>
        </Card>
    </Section>

    <Section id="events" title="Events: Build, Learn, Experience" className="bg-neutral-light">
        <Card>
            <h3 className="text-2xl font-semibold mb-4 text-center">Past & Upcoming Gatherings</h3>
            <p className="mb-3">We host and participate in events (e.g., Vietnam, South Korea) that offer invaluable opportunities for community building and deeper understanding of our ecosystem. These events can also be an opportunity to qualify for international travel and experiences.</p>
            <img src="https://picsum.photos/seed/events/800/400" alt="Community Event" className="rounded-lg shadow-md mt-4" />
        </Card>
    </Section>
    
    <Section id="resources-library" title="Resources Library">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {([
          { name: "Pop Social White Paper", type: "document", description: "In-depth details about the Pop Social platform." },
          { name: "Marketing Flyers & Infographics", type: "document", description: "Ready-to-use materials for sharing." },
          { name: "Past Zoom Recordings", type: "link", description: "Catch up on previous trainings and announcements." },
          { name: "Tutorial Videos", type: "link", description: "Guides on signing up, funding, withdrawing, etc." }
        ] as ResourceItem[]).map(item => (
          <Card key={item.name}>
            <h4 className="text-lg font-semibold mb-2">{item.name}</h4>
            {item.description && <p className="text-sm text-neutral-dark mb-3">{item.description}</p>}
            <Button variant="outline" className="w-full" onClick={() => alert(`Accessing ${item.name}`)}>Access Resource</Button>
          </Card>
        ))}
      </div>
    </Section>
    
    <Section id="income-disclaimer-community" title="Income Disclaimer">
       <Card className="bg-secondary-light border-secondary border-2">
            <div className="flex items-center">
                <div className="text-secondary-dark mr-4">{React.cloneElement<React.SVGProps<SVGSVGElement>>(ICONS.INFO, {className:"w-8 h-8"})}</div>
                <p className="text-secondary-darkest font-medium">Results are not guaranteed. Earnings depend on individual effort, market conditions, and adherence to program terms. All resources are for informational purposes.</p>
            </div>
        </Card>
    </Section>
  </>
);

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <>
      <Section title="Get In Touch" subtitle="We'd love to hear from you! Connect with our team and community.">
        <></>
      </Section>

      <Section id="contact-form" title="Send Us a Message" className="bg-neutral-light">
        <div className="max-w-2xl mx-auto">
          {isSubmitted && (
            <div className="mb-6 p-4 bg-accent-light text-accent-dark rounded-lg shadow text-center">
              Thank you for your message! We'll get back to you soon.
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-xl">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-darkest">Full Name</label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-neutral-DEFAULT rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-darkest">Email Address</label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-neutral-DEFAULT rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-darkest">Message</label>
              <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-neutral-DEFAULT rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"></textarea>
            </div>
            <Button type="submit" variant="primary" className="w-full">Send Message</Button>
          </form>
        </div>
      </Section>

      <Section id="social-connect" title="Connect Via Social Media">
        <p className="text-center text-lg mb-8 max-w-xl mx-auto">Follow us and join our conversations on your favorite platforms. We believe in a personal touch and active community engagement.</p>
        <div className="flex justify-center space-x-6">
          {CONTACT_PAGE_SOCIAL_LINKS.map(link => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-neutral-dark hover:text-primary transition-colors p-2 rounded-full hover:bg-neutral-light" title={link.name}>
              {React.cloneElement<React.SVGProps<SVGSVGElement>>(link.icon, { className: "w-8 h-8" })}
            </a>
          ))}
        </div>
      </Section>
    </>
  );
};

// --- Knowledge Base Components ---

const VideoPlayerModal: React.FC<{ videoId: string; onClose: () => void }> = ({ videoId, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[100] p-4" onClick={onClose} role="dialog" aria-modal="true">
    <div className="bg-neutral-darkest p-1 sm:p-2 rounded-lg shadow-xl relative w-full max-w-3xl" onClick={e => e.stopPropagation()}>
      <button 
        onClick={onClose} 
        className="absolute -top-2 -right-2 sm:top-2 sm:right-2 bg-white text-neutral-darkest rounded-full p-1 hover:bg-red-500 hover:text-white transition-colors z-10"
        aria-label="Close video player"
      >
        {React.cloneElement<React.SVGProps<SVGSVGElement>>(ICONS.X_MARK, { className: "w-6 h-6"})}
      </button>
      <div className="aspect-w-16 aspect-h-9 bg-black"> {/* Tailwind aspect ratio plugin needed or use padding trick */}
        <iframe
          className="w-full h-full rounded"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
);

const VideoCard: React.FC<{ video: KnowledgeBaseVideo }> = ({ video }) => {
  const [showPlayer, setShowPlayer] = useState(false);

  const handlePlayVideo = () => {
    setShowPlayer(true);
  };

  return (
    <>
      <Card className="flex flex-col flex-shrink-0 w-72 sm:w-80 md:w-96 transform hover:scale-105 transition-transform duration-300 h-full overflow-hidden">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="w-full h-40 sm:h-48 object-cover rounded-t-lg mb-4 cursor-pointer"
          onClick={handlePlayVideo}
          aria-label={`Play video: ${video.title}`}
          loading="lazy"
        />
        <div className="flex-grow flex flex-col p-1">
          <h4 className="text-md sm:text-lg font-semibold mb-2 text-primary-dark leading-tight" title={video.title}>
            {video.title.length > 60 ? video.title.substring(0, 57) + "..." : video.title}
          </h4>
          <p className="text-neutral-dark text-xs sm:text-sm mb-4 flex-grow h-20 overflow-y-auto"> {/* Custom scrollbar might be nice here */}
            {video.description}
          </p>
          <Button onClick={handlePlayVideo} variant="outline" className="w-full mt-auto text-sm py-2">
            Watch Video
          </Button>
        </div>
      </Card>
      {showPlayer && <VideoPlayerModal videoId={video.videoId} onClose={() => setShowPlayer(false)} />}
    </>
  );
};

const KnowledgeBasePage: React.FC = () => (
  <>
    <Section 
      title="Knowledge Base" 
      subtitle="Explore our video library for tutorials, event highlights, strategy sessions, and community updates from The Gifting Tribe."
      className="bg-gradient-to-b from-neutral-light to-white"
    >
       <div className="flex items-center justify-center mb-2 text-primary">
        {React.cloneElement<React.SVGProps<SVGSVGElement>>(ICONS.BOOK_OPEN, {className: "w-12 h-12"})}
      </div>
    </Section>

    {KNOWLEDGE_BASE_CATEGORIES.filter(category => category.videos.length > 0).map(category => (
      <section key={category.id} className="py-8 md:py-12 odd:bg-neutral-light">
        <div className="container mx-auto px-4 sm:px-6">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-primary-dark font-poppins">{category.name}</h3>
          <div className="flex overflow-x-auto space-x-4 sm:space-x-6 pb-6 -mb-4"> {/* Horizontal scroll */}
            {category.videos.map(video => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section>
    ))}
    
    {KNOWLEDGE_BASE_CATEGORIES.every(cat => cat.videos.length === 0) && (
         <Section title="No videos available yet." subtitle="Please check back later for updates.">
            <></>
         </Section>
    )}
  </>
);


// --- Main App Component ---
const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/opportunities" element={<OpportunitiesPage />} />
        <Route path="/compensation" element={<CompensationPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/knowledgebase" element={<KnowledgeBasePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<HomePage />} /> 
      </Routes>
    </Layout>
  );
};

export default App;
