import { useState } from 'react';
import HighlightSection from '../HighlightSection';
import Map from '../Map';
import ResourceDirectory from '../ResourceDirectory';
import ResourceForm from '../ResourceForm';
import { type Resource, defaultResources } from '../components/types';
import './Home.css';
import { Link } from 'react-router';

export function Home() {
  const [resources, setResources] = useState<Resource[]>(defaultResources);
  
    const addResource = (newResource: Resource) => {
      setResources([...resources, newResource]);
    };

  return (
    <>
      <div id='front'>
        <h1>Blanson Estates Resource Hub</h1>
        <p>Your gateway to local resources, events, and support services around Blanson Estates.</p>
        <div id='stats'>
          <div id='stat1'>
            <h3>{resources.length}</h3>
            <p><Link to="/resources">Resources Available</Link></p>
          </div>
          <div id='stat2'>
            <h3>5</h3>
            <p>Categories</p>
          </div>
          <div id='stat3'>
            <h3>24/7</h3>
            <p>Access</p>
          </div>
        </div>
      </div>

      <div className="container">
        <HighlightSection resources={resources} />
        <Map resources={resources} />
        <ResourceDirectory resources={resources} />
        <ResourceForm addResource={addResource} />
      </div>
    </>
  );
};