import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './layout/Header'
import Dashboard from './pages/Dashboard'
import ErrorPage from './pages/ErrorPage'

// Composant contenant les différentes routes de l'application
// Le composant header est sur toutes les pages
export default function AppRouter() {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/:userId" element={<Dashboard />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </main>
        </Router>
    )
}
