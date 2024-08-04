import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { ROUTER } from './router/router'

import './plugins/i18n/i18n'


const appRoot: HTMLElement | null = document.getElementById('root')

if (appRoot) {
    ReactDOM.createRoot(appRoot).render(
        <React.StrictMode>
            <RouterProvider router={ROUTER} />
        </React.StrictMode>,
    )
}
