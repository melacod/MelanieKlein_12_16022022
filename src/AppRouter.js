import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './layout/Header'
import Dashboard from './pages/Dashboard'
import Error from './pages/Error'

export default function AppRouter() {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </main>
        </Router>
    )
}
