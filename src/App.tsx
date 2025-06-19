import { useState } from 'react'
import { Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  const handleMouseOver = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = 'scale(1.05)'
  }

  const handleMouseOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = 'scale(1)'
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif'
    }}>
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
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '15px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
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
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '15px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
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
            color: '#ffffff',
            marginBottom: '20px',
            textShadow: '0 4px 8px rgba(0,0,0,0.3)',
            background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            สวัสดีโลก! 🌍
          </h1>
          
          <p style={{
            fontSize: '24px',
            color: '#ffffff',
            marginBottom: '15px',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            ยินดีต้อนรับสู่ <span style={{ fontWeight: 'bold', color: '#ffeb3b' }}>React App</span> ของคุณ
          </p>
          
          <p style={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.9)',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            พร้อม Tailwind CSS v4 และ TypeScript สำหรับประสบการณ์การพัฒนาที่ยอดเยี่ยม
          </p>
        </div>
        
        {/* Interactive card */}
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '20px',
          padding: '40px',
          maxWidth: '400px',
          width: '100%',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
          textAlign: 'center',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80px',
            height: '80px',
            background: 'linear-gradient(45deg, #667eea, #764ba2)',
            borderRadius: '50%',
            marginBottom: '20px',
            fontSize: '36px',
            color: 'white',
            fontWeight: 'bold',
            boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
          }}>
            {count}
          </div>
          
          <h2 style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '20px'
          }}>
            ตัวนับคลิก
          </h2>
          
          <p style={{
            fontSize: '16px',
            color: '#666',
            lineHeight: '1.6',
            marginBottom: '30px'
          }}>
            คลิกปุ่มด้านล่างเพื่อเพิ่มจำนวนการนับ และทดสอบการทำงานของ React
          </p>
          
          <button 
            onClick={() => setCount((count) => count + 1)}
            style={{
              width: '100%',
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '18px',
              padding: '15px 30px',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
              marginBottom: '20px'
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            คลิกที่นี่ ({count} ครั้ง)
          </button>
          
          <Link 
            to="/home"
            style={{
              width: '100%',
              background: 'linear-gradient(45deg, #4ecdc4, #44a08d)',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '18px',
              padding: '15px 30px',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
              marginBottom: '20px',
              textDecoration: 'none',
              display: 'block',
              textAlign: 'center'
            }}
          >
            🏠 ไปยังหน้าหลัก
          </Link>
          
          <div style={{
            display: 'flex',
            gap: '10px',
            justifyContent: 'center'
          }}>
            <button style={{
              padding: '8px 16px',
              background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
            }}>
              🔥 ปุ่มแดง
            </button>
            <button style={{
              padding: '8px 16px',
              background: 'linear-gradient(45deg, #2ecc71, #27ae60)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
            }}>
              ✅ ปุ่มเขียว
            </button>
            <button style={{
              padding: '8px 16px',
              background: 'linear-gradient(45deg, #3498db, #2980b9)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
            }}>
              💙 ปุ่มน้ำเงิน
            </button>
          </div>
        </div>
        
        {/* Footer */}
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <p style={{
            fontSize: '16px',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '20px',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
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
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: 'white',
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
