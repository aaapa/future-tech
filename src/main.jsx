import React from 'react';
import ReactDOM from 'react-dom/client';

import 'simplebar-react/dist/simplebar.min.css';
import 'tippy.js/dist/tippy.css';
import '@/app/styles/simple-normalize.scss';
import '@/app/styles/fonts.scss';
import '@/app/styles/base.scss';
import '@/shared/ui/Title/Title.scss';
import '@/shared/ui/Tag/Tag.scss';
import '@/shared/ui/Badge/Badge.scss';

import { App } from '@/app/App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
