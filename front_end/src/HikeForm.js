// HikeForm.js
import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

const HikeForm = ({ onSubmit, selectedHike, onEdit }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // Fetch and parse the CSV file
    const fetchData = async () => {
      try {
        const response = await fetch('databases/park_locations/MO_State_Park_and_Historic_Sites_Trails.csv'); // Path to csv in fatuazc branch
        const csvData = await response.text();

        Papa.parse(csvData, {
          header: true,
          dynamicTyping: true,
          complete: (result) => {
            setLocations(result.data);
          },
        });
      } catch (error) {
        console.error('Error fetching or parsing CSV:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch locations only once on component mount

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedHike) {
      onEdit({ ...selectedHike, name, location, date, notes });
    } else {
      onSubmit({ name, location, date, notes });
    }

    // Reset form fields
    setName('');
    setLocation('');
    setDate('');
    setNotes('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{selectedHike ? 'Edit Hike' : 'Add Trip'}</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Location:
        {/* Use a dropdown select element */}
        <select value={location} onChange={(e) => setLocation(e.target.value)} required>
          <option value="" disabled>Select a location</option>
          {locations.map((loc) => (
            <option key={loc.ID} value={loc.LOC_NAME}>
              {loc.LOC_NAME}
            </option>
          ))}
        </select>
      </label>
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </label>
      <label>
        Notes:
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
      </label>
      <button type="submit">{selectedHike ? 'Update Hike' : 'Add Trip'}</button>
    </form>
  );
};

export default HikeForm;