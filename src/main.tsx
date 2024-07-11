import React from 'react'
import WebApp from '@twa-dev/sdk'
import ReactDOM from 'react-dom/client'
import {App} from "./app";
import { AppRoot } from '@telegram-apps/telegram-ui';
import '@telegram-apps/telegram-ui/dist/styles.css';

WebApp.ready();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRoot>
      <App />
    </AppRoot>
  </React.StrictMode>,
)
