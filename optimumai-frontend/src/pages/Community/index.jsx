import React from 'react';
import './style.css'
import HeaderSection from './components/HeaderSection';
import CounterSection from './components/CounterSection';
import CompaniesAndUniversitiesSection from './components/CompaniesAndUniversitiesSection';
import AIGoodChallengesSection from './components/AIGoodChallengesSection';
import InformationSection from './components/InformationSection';
import TeamMemberList from './components/TeamMemberList';
import NewsletterSubscribeSection from './components/NewsletterSubscribeSection';

const CommunityPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px] text-dark dark:text-white">
      <HeaderSection />
      <CounterSection />
      <CompaniesAndUniversitiesSection />
      <AIGoodChallengesSection />
      <InformationSection />
      <TeamMemberList />
      <NewsletterSubscribeSection />
    </div>
  );
}

export default CommunityPage;
