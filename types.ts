import React from 'react';

export interface NavLinkItem {
  name: string;
  path: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactElement; // Changed from React.ReactNode
}

export interface Opportunity {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  detailsLink?: string;
}

export interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export interface ResourceItem {
    name: string;
    description?: string;
    link?: string;
    type: 'link' | 'text' | 'document';
}

export interface KnowledgeBaseVideo {
  id: string; // Unique identifier for the video entry
  videoId: string; // YouTube video ID
  title: string;
  description: string;
  thumbnailUrl: string;
  category: string; // To link back to a category name/ID
}

export interface VideoCategory {
  id: string; // Unique identifier for the category
  name: string;
  videos: KnowledgeBaseVideo[];
}
