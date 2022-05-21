import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';

export const Home = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (journey) => {
    setJourney(journey);
  };
  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      <div className="container">
        {journey === null ? null : (
          <p>Nalezeno spojení s id {journey.journeyId}</p>
        )}
      </div>
    </main>
  );
};
