import React from 'react';
import { ThemeProvider } from 'styled-components';

import PullQuote from './index';

export default {
  title: 'Components|Articles/PullQuote',
  component: PullQuote,
};

export const DefaultWithAttribution = () => (
  <ThemeProvider theme={{ siteKey: 'cco' }}>
    <PullQuote
      attribution="First Last"
      quote="All blue cheeses are made with the same species of mold, Penicillium roqueforti."
    />
  </ThemeProvider>
);

export const DefaultWithoutAttribution = () => (
  <PullQuote
    quote="All blue cheeses are made with the same species of mold, Penicillium roqueforti."
  />
);

export const DefaultWithoutIcon = () => (
  <PullQuote
    attribution="First Last"
    includeIcon={false}
    quote="All blue cheeses are made with the same species of mold, Penicillium roqueforti."
  />
);

export const WideWithAttribution = () => (
  <PullQuote
    attribution="First Last"
    quote="All blue cheeses are made with the same species of mold, Penicillium roqueforti."
    width="wide"
  />
);

export const WideWithoutAttribution = () => (
  <PullQuote
    quote="All blue cheeses are made with the same species of mold, Penicillium roqueforti."
    width="wide"
  />
);

export const WideWithoutIcon = () => (
  <PullQuote
    attribution="First Last"
    includeIcon={false}
    quote="All blue cheeses are made with the same species of mold, Penicillium roqueforti."
    width="wide"
  />
);
