import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { TodoContextType } from './types.ts';
// import './index.css'
import {ThemeProvider} from '@mui/material/styles';
import theme from './theme.ts';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ThemeProvider theme={ theme }>
        <App />
    </ThemeProvider>
);
