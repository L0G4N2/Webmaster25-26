import { useState } from 'react';
import ResourceDirectory from '../ResourceDirectory';
import Map from '../Map';
import ResourceForm from '../ResourceForm';
import { type Resource, defaultResources } from '../components/types';
import './Resources.css';

export function Resources() {
  const [resources, setResources] = useState<Resource[]>(defaultResources);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');

  const addResource = (newResource: Resource) => {
    setResources([...resources, newResource]);
  };

  const categories = ['all', ...Array.from(new Set(resources.map(r => r.category)))];

  const filteredResources = selectedCategory === 'all'
    ? resources
    : resources.filter(r => r.category === selectedCategory);

  return (
    <div className="resources-page">
      <div className="container">
        <section className="resources-header">
          <h1>Community Resources</h1>
          <p>Explore all available resources in Harris County</p>
        </section>

        <section className="resources-controls">
          <div className="category-filter">
            <label htmlFor="category-select">Filter by Category:</label>
            <select
              id="category-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>

          <div className="view-toggle">
            <button
              className={viewMode === 'list' ? 'active' : ''}
              onClick={() => setViewMode('list')}
            >
              📋 List View
            </button>
            <button
              className={viewMode === 'map' ? 'active' : ''}
              onClick={() => setViewMode('map')}
            >
              🗺️ Map View
            </button>
          </div>
        </section>

        <section className="resources-content">
          {viewMode === 'list' ? (
            <div className="resources-list">
              <div className="resources-summary">
                <h3>Showing {filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''}</h3>
                {selectedCategory !== 'all' && (
                  <p>Filtered by: <strong>{selectedCategory}</strong></p>
                )}
              </div>
              <ResourceDirectory resources={filteredResources} />
            </div>
          ) : (
            <div className="resources-map">
              <div className="map-info">
                <h3>Resource Locations</h3>
                <p>Showing {filteredResources.length} location{filteredResources.length !== 1 ? 's' : ''} on the map</p>
                {selectedCategory !== 'all' && (
                  <p>Filtered by: <strong>{selectedCategory}</strong></p>
                )}
              </div>
              <Map resources={filteredResources} />
            </div>
          )}
        </section>

        <section className="add-resource-section">
          <h2>Know of a Resource We're Missing?</h2>
          <p>Help us grow our community resource database by submitting new resources.</p>
          <button
            className="add-resource-btn"
            onClick={() => {
              const formSection = document.getElementById('resource-form-section');
              if (formSection) {
                formSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Add New Resource
          </button>
        </section>

        <section id="resource-form-section" className="resource-form-section">
          <ResourceForm addResource={addResource} />
        </section>
      </div>
    </div>
  );
};

export default Resources;