import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import PublicLayout from '../Layouts/PublicLayouts/PublicLayout';

const router = (props) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>

            <Routes>
                {publicRoutes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            <PublicLayout>
                                {route.component}
                            </PublicLayout>
                        }
                    />
                ))}

            </Routes>

        </div>
    )
}

export default router;