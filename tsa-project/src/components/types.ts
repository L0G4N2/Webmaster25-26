// Shared types and interfaces for the Harris County Community Resource Hub

export interface Resource {
  name: string;
  description: string;
  contact: string;
  category: string;
  lat: number;
  lng: number;
}

export interface ResourceFormData {
  name: string;
  description: string;
  contact: string;
  category: string;
  lat: string;
  lng: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type AddResourceFunction = (resource: Resource) => void;

export type ResourceCategory =
  | 'Events'
  | 'Charities'
  | 'Donation Bins'
  | 'Markets'
  | 'Libraries'
  | 'Other';

// Default resources for Harris County
export const defaultResources: Resource[] = [
  {
    name: 'Harris County Public Library',
    description: 'Central library with books, computers, and community programs.',
    contact: '713-555-1234',
    category: 'Libraries',
    lat: 29.7604,
    lng: -95.3698
  },
  {
    name: 'Food Bank of Harris County',
    description: 'Charity providing food assistance to residents in need.',
    contact: 'foodbank@harris.org',
    category: 'Charities',
    lat: 29.7858,
    lng: -95.3885
  },
  {
    name: 'Downtown Farmers Market',
    description: 'Weekly market with local produce and goods.',
    contact: 'market@harris.org',
    category: 'Markets',
    lat: 29.7569,
    lng: -95.3573
  },
  {
    name: 'Community Event Center',
    description: 'Hosts various community events and programs.',
    contact: 'events@harris.org',
    category: 'Events',
    lat: 29.7750,
    lng: -95.3500
  },
  {
    name: 'Donation Bin Network',
    description: 'Locations for clothing and item donations.',
    contact: 'donate@harris.org',
    category: 'Donation Bins',
    lat: 29.8000,
    lng: -95.4000
  }
];

// Utility functions
export const getAllCategories = (): string[] => {
  return ['all', ...Array.from(new Set(defaultResources.map(r => r.category)))];
};

export const validateResource = (resource: Partial<Resource>): boolean => {
  return !!(
    resource.name &&
    resource.description &&
    resource.contact &&
    resource.category &&
    typeof resource.lat === 'number' &&
    typeof resource.lng === 'number'
  );
};