import React, { useState } from 'react';
import { type Resource } from './components/types';
import './ResourceForm.css';

interface ResourceFormProps {
  addResource: (resource: Resource) => void;
}

const ResourceForm: React.FC<ResourceFormProps> = ({ addResource }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [contact, setContact] = useState('');
    const [category, setCategory] = useState('');
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addResource({ name, description, contact, category, lat: parseFloat(lat), lng: parseFloat(lng) });
        setName('');
        setDescription('');
        setContact('');
        setCategory('');
        setLat('');
        setLng('');
    };

    return (
        <div className="resource-form">
            <h2>Submit a New Resource</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Resource Name" required />
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required></textarea>
                <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Contact Info" required />
                <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                    <option value="">Select Category</option>
                    <option value="Events">Events</option>
                    <option value="Charities">Charities</option>
                    <option value="Donation Bins">Donation Bins</option>
                    <option value="Markets">Markets</option>
                    <option value="Libraries">Libraries</option>
                    <option value="Other">Other</option>
                </select>
                <input type="number" step="any" value={lat} onChange={(e) => setLat(e.target.value)} placeholder="Latitude" required />
                <input type="number" step="any" value={lng} onChange={(e) => setLng(e.target.value)} placeholder="Longitude" required />
                <button type="submit">Add Resource</button>
            </form>
        </div>
    );
};

export default ResourceForm;