import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './layout/Header'
import Dashboard from './pages/Dashboard'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'

/**
 * Application routes
 * @component
 * @category Common
 */
const AppRouter = () => {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard/:userId" element={<Dashboard />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </main>
        </Router>
    )
}

export default AppRouter
