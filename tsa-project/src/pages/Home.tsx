import { useState } from 'react';
import HighlightSection from '../HighlightSection';
import Map from '../Map';
import ResourceDirectory from '../ResourceDirectory';
import ResourceForm from '../ResourceForm';
import { type Resource, defaultResources } from '../components/types';
import './Home.css';

export function Home() {
  const [resources, setResources] = useState<Resource[]>(defaultResources);
  
    const addResource = (newResource: Resource) => {
      setResources([...resources, newResource]);
    };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Harris County Community Resource Hub</h1>
          <p>Your gateway to local resources, events, and support services in Harris County, Texas.</p>
          <div className="hero-stats">
            <div className="stat">
              <h3>{resources.length}</h3>
              <p>Resources Available</p>
            </div>
            <div className="stat">
              <h3>5</h3>
              <p>Categories</p>
            </div>
            <div className="stat">
              <h3>24/7</h3>
              <p>Access</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <HighlightSection resources={resources} />
        <Map resources={resources} />
        <ResourceDirectory resources={resources} />
        <ResourceForm addResource={addResource} />
      </div>
    </div>
  );
};