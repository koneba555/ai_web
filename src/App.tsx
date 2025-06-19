import { useState } from 'react'
import { Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleMouseOver = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = 'scale(1.05)'
  }

  const handleMouseOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = 'scale(1)'
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  // Define theme colors
  const theme = {
    light: {
      background: 'linear-gradient(135deg, #00A950 0%, #009947 100%)',
      cardBg: '#FFFFFF',
      textPrimary: '#111827',
      textSecondary: '#6B7280',
      textLight: '#FFFFFF',
      textAccent: '#bcf0d8',
      shadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      logoShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
    },
    dark: {
      background: 'linear-gradient(135deg, #1F2937 0%, #111827 100%)',
      cardBg: '#374151',
      textPrimary: '#F9FAFB',
      textSecondary: '#D1D5DB',
      textLight: '#F9FAFB',
      textAccent: '#10B981',
      shadow: '0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.3)',
      logoShadow: '0 10px 15px -3px rgb(16 185 129 / 0.2), 0 4px 6px -4px rgb(16 185 129 / 0.2)'
    }
  }

  const currentTheme = isDarkMode ? theme.dark : theme.light

  return (
    <div style={{
      minHeight: '100vh',
      background: currentTheme.background,
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif',
      position: 'relative'
    }}>
      {/* Dark Mode Toggle Button */}
      <button
        onClick={toggleDarkMode}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          border: 'none',
          background: currentTheme.cardBg,
          color: currentTheme.textPrimary,
          fontSize: '24px',
          cursor: 'pointer',
          boxShadow: currentTheme.shadow,
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        
        {/* Logo section */}
        <div style={{
          display: 'flex',
          gap: '30px',
          marginBottom: '40px'
        }}>
          <a href="https://vite.dev" target="_blank" style={{ textDecoration: 'none' }}>
            <div style={{
              padding: '20px',
              backgroundColor: currentTheme.cardBg,
              borderRadius: '15px',
              boxShadow: currentTheme.logoShadow,
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img src={viteLogo} style={{ height: '60px', width: '60px' }} alt="Vite logo" />
            </div>
          </a>
          <a href="https://react.dev" target="_blank" style={{ textDecoration: 'none' }}>
            <div style={{
              padding: '20px',
              backgroundColor: currentTheme.cardBg,
              borderRadius: '15px',
              boxShadow: currentTheme.logoShadow,
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img src={reactLogo} style={{ 
                height: '60px', 
                width: '60px',
                animation: 'spin 6s linear infinite'
              }} alt="React logo" />
            </div>
          </a>
        </div>
        
        {/* Main content */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: currentTheme.textLight,
            marginBottom: '20px',
            textShadow: '0 4px 8px rgba(0,0,0,0.5)',
            filter: 'none',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale'
          }}>
            สวัสดีโลก! 🌍
          </h1>
          
          <p style={{
            fontSize: '24px',
            color: currentTheme.textLight,
            marginBottom: '15px',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale'
          }}>
            ยินดีต้อนรับสู่ <span style={{ fontWeight: 'bold', color: currentTheme.textAccent }}>React App</span> ของคุณ
          </p>
          
          <p style={{
            fontSize: '18px',
            color: currentTheme.textLight,
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            opacity: 0.9,
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale'
          }}>
            พร้อม Tailwind CSS v4 และ TypeScript สำหรับประสบการณ์การพัฒนาที่ยอดเยี่ยม
          </p>
        </div>
        
        {/* Interactive card */}
        <div style={{
          backgroundColor: currentTheme.cardBg,
          borderRadius: '20px',
          padding: '40px',
          maxWidth: '500px',
          width: '100%',
          boxShadow: currentTheme.shadow,
          textAlign: 'center',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80px',
            height: '80px',
            background: isDarkMode 
              ? 'linear-gradient(45deg, #10B981, #059669)' 
              : 'linear-gradient(45deg, #00A950, #009947)',
            borderRadius: '50%',
            marginBottom: '30px',
            fontSize: '36px',
            color: 'white',
            fontWeight: 'bold',
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
          }}>
            {count}
          </div>
          
          <h2 style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: currentTheme.textPrimary,
            marginBottom: '20px'
          }}>
            ตัวนับคลิก
          </h2>
          
          <p style={{
            fontSize: '16px',
            color: currentTheme.textSecondary,
            lineHeight: '1.6',
            marginBottom: '30px'
          }}>
            คลิกปุ่มด้านล่างเพื่อเพิ่มจำนวนการนับ และทดสอบการทำงานของ React
          </p>
          
          <button 
            onClick={() => setCount((count) => count + 1)}
            style={{
              width: '100%',
              background: isDarkMode 
                ? 'linear-gradient(45deg, #10B981, #059669)' 
                : 'linear-gradient(45deg, #00A950, #009947)',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '18px',
              padding: '15px 30px',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
              marginBottom: '30px'
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            คลิกที่นี่ ({count} ครั้ง)
          </button>
          
          {/* Grid Layout for Navigation Buttons */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '15px',
            marginBottom: '20px'
          }}>
            <Link 
              to="/home"
              style={{
                background: isDarkMode 
                  ? 'linear-gradient(45deg, #34D399, #10B981)' 
                  : 'linear-gradient(45deg, #2bdb93, #5ce3aa)',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '16px',
                padding: '15px 20px',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                minHeight: '60px'
              }}
            >
              <span style={{ fontSize: '20px' }}>🏠</span>
              <span>หน้าหลัก</span>
            </Link>
            
            <Link 
              to="/exchange"
              style={{
                background: isDarkMode 
                  ? 'linear-gradient(45deg, #6EE7B7, #34D399)' 
                  : 'linear-gradient(45deg, #8ce9c1, #2bdb93)',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '16px',
                padding: '15px 20px',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                minHeight: '60px'
              }}
            >
              <span style={{ fontSize: '20px' }}>💱</span>
              <span>แลกเปลี่ยน</span>
            </Link>
          </div>
          
          {/* Action Buttons Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '10px',
            justifyContent: 'center'
          }}>
            <button style={{
              padding: '12px 16px',
              background: '#EF4444',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.07), 0 1px 2px -1px rgb(0 0 0 / 0.07)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px'
            }}>
              <span style={{ fontSize: '16px' }}>🔥</span>
              <span>แดง</span>
            </button>
            <button style={{
              padding: '12px 16px',
              background: isDarkMode ? '#10B981' : '#00A950',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.07), 0 1px 2px -1px rgb(0 0 0 / 0.07)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px'
            }}>
              <span style={{ fontSize: '16px' }}>✅</span>
              <span>เขียว</span>
            </button>
            <button style={{
              padding: '12px 16px',
              background: '#3B82F6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.07), 0 1px 2px -1px rgb(0 0 0 / 0.07)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px'
            }}>
              <span style={{ fontSize: '16px' }}>💙</span>
              <span>น้ำเงิน</span>
            </button>
          </div>
        </div>
        
        {/* Footer */}
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <p style={{
            fontSize: '16px',
            color: currentTheme.textLight,
            marginBottom: '20px',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            opacity: 0.9
          }}>
            คลิกที่โลโก้ Vite และ React เพื่อเรียนรู้เพิ่มเติม
          </p>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px'
          }}>
            {['⚡ Vite', '⚛️ React 19', '🎨 Tailwind CSS v4', '📘 TypeScript', '🧩 shadcn/ui'].map((tech, index) => (
              <span key={index} style={{
                padding: '8px 16px',
                backgroundColor: isDarkMode 
                  ? 'rgba(16, 185, 129, 0.2)' 
                  : 'rgba(255, 255, 255, 0.2)',
                borderRadius: '20px',
                border: isDarkMode 
                  ? '1px solid rgba(16, 185, 129, 0.3)' 
                  : '1px solid rgba(255, 255, 255, 0.3)',
                color: currentTheme.textLight,
                fontSize: '14px',
                backdropFilter: 'blur(10px)'
              }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

export default App
