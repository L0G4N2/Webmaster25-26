import React from 'react';
import { type Resource } from './components/types';
import './HighlightSection.css';

interface HighlightSectionProps {
  resources: Resource[];
}

const HighlightSection: React.FC<HighlightSectionProps> = ({ resources }) => {
    const highlightedResources = resources.slice(0, 3); // Highlight the first three resources
    return (
        <div className="highlight-section">
            <h2>Spotlight on Community Resources</h2>
            <div className="resource-cards">
                {highlightedResources.map((resource: Resource, index: number) => (
                    <div key={index} className="resource-card">
                        <h3>{resource.name}</h3>
                        <p>{resource.description}</p>
                        <p><em>Category: {resource.category}</em></p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HighlightSection;