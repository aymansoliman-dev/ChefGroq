import './css/style.css'

import Header from "./components/Header.jsx";
import MainContent from "./components/MainContent.jsx";

export default function App() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100dvh' }}>
            {/* Win2k teal desktop area with the app window */}
            <div style={{ flex: 1 }}>
                <MainContent />
            </div>
            {/* Win2k taskbar pinned to bottom */}
            <Header />
        </div>
    )
}
