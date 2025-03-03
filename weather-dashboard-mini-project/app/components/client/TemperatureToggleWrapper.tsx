'use client';

import TemperatureUnitToggle from './TemperatureUnitToggle';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function TemperatureToggleWrapper() {
  // Use client-side rendering to attach the toggle to the container
  useEffect(() => {
    const container = document.getElementById('temperature-toggle-container');
    if (container) {
      // The container is already in the DOM, we can render into it
      return;
    }
  }, []);

  // Use portal to render the toggle where needed
  return typeof document !== 'undefined'
    ? createPortal(
        <TemperatureUnitToggle />,
        document.getElementById('temperature-toggle-container') || document.body
      )
    : null;
}
