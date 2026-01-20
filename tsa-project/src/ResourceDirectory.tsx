import React, { useState } from 'react';
import { type Resource } from './components/types';
import './ResourceDirectory.css';

interface ResourceDirectoryProps {
  resources: Resource[];
}

const ResourceDirectory: React.FC<ResourceDirectoryProps> = ({ resources }) => {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');

    const filteredResources = resources.filter((resource: Resource) => {
        return resource.name.toLowerCase().includes(search.toLowerCase()) &&
               (filter === '' || resource.category === filter);
    });

    return (
        <div className="resource-directory">
            <h2>Interactive Resource Directory</h2>
            <div className="search-filter">
                <input type="text" placeholder="Search resources..." value={search} onChange={(e) => setSearch(e.target.value)} />
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="">All Categories</option>
                    <option value="Events">Events</option>
                    <option value="Charities">Charities</option>
                    <option value="Donation Bins">Donation Bins</option>
                    <option value="Markets">Markets</option>
                    <option value="Libraries">Libraries</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <ul>
                {filteredResources.map((resource: Resource, index: number) => (
                    <li key={index}>
                        <strong>{resource.name}</strong> ({resource.category}): {resource.description} <br />
                        Contact: {resource.contact}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResourceDirectory;