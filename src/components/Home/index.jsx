import React, { useState } from 'react';
import { JourneyDetail } from '../JourneyDetail';
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
          <p>
            <JourneyDetail journey={journey} />
          </p>
        )}
      </div>
    </main>
  );
};
