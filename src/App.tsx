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
      background: 'linear-gradient(135deg, #00A950 0%, #009947 100%)',
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
              backgroundColor: '#FFFFFF',
              borderRadius: '15px',
              boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
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
              backgroundColor: '#FFFFFF',
              borderRadius: '15px',
              boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
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
            color: '#FFFFFF',
            marginBottom: '20px',
            textShadow: '0 4px 8px rgba(0,0,0,0.3)',
            background: 'linear-gradient(45deg, #2bdb93, #5ce3aa, #8ce9c1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            สวัสดีโลก! 🌍
          </h1>
          
          <p style={{
            fontSize: '24px',
            color: '#FFFFFF',
            marginBottom: '15px',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            ยินดีต้อนรับสู่ <span style={{ fontWeight: 'bold', color: '#bcf0d8' }}>React App</span> ของคุณ
          </p>
          
          <p style={{
            fontSize: '18px',
            color: '#F5F7F8',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            พร้อม Tailwind CSS v4 และ TypeScript สำหรับประสบการณ์การพัฒนาที่ยอดเยี่ยม
          </p>
        </div>
        
        {/* Interactive card */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '20px',
          padding: '40px',
          maxWidth: '400px',
          width: '100%',
          boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
          textAlign: 'center',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80px',
            height: '80px',
            background: 'linear-gradient(45deg, #00A950, #009947)',
            borderRadius: '50%',
            marginBottom: '20px',
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
            color: '#111827',
            marginBottom: '20px'
          }}>
            ตัวนับคลิก
          </h2>
          
          <p style={{
            fontSize: '16px',
            color: '#6B7280',
            lineHeight: '1.6',
            marginBottom: '30px'
          }}>
            คลิกปุ่มด้านล่างเพื่อเพิ่มจำนวนการนับ และทดสอบการทำงานของ React
          </p>
          
          <button 
            onClick={() => setCount((count) => count + 1)}
            style={{
              width: '100%',
              background: 'linear-gradient(45deg, #00A950, #009947)',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '18px',
              padding: '15px 30px',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
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
              background: 'linear-gradient(45deg, #2bdb93, #5ce3aa)',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '18px',
              padding: '15px 30px',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
              marginBottom: '20px',
              textDecoration: 'none',
              display: 'block',
              textAlign: 'center'
            }}
          >
            🏠 ไปยังหน้าหลัก
          </Link>
          
          <Link 
            to="/exchange"
            style={{
              width: '100%',
              background: 'linear-gradient(45deg, #8ce9c1, #2bdb93)',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '18px',
              padding: '15px 30px',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
              marginBottom: '20px',
              textDecoration: 'none',
              display: 'block',
              textAlign: 'center'
            }}
          >
            💱 แลกเปลี่ยนเงิน
          </Link>
          
          <div style={{
            display: 'flex',
            gap: '10px',
            justifyContent: 'center'
          }}>
            <button style={{
              padding: '8px 16px',
              background: '#EF4444',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.07), 0 1px 2px -1px rgb(0 0 0 / 0.07)'
            }}>
              🔥 ปุ่มแดง
            </button>
            <button style={{
              padding: '8px 16px',
              background: '#00A950',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.07), 0 1px 2px -1px rgb(0 0 0 / 0.07)'
            }}>
              ✅ ปุ่มเขียว
            </button>
            <button style={{
              padding: '8px 16px',
              background: '#3B82F6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.07), 0 1px 2px -1px rgb(0 0 0 / 0.07)'
            }}>
              💙 ปุ่มน้ำเงิน
            </button>
          </div>
        </div>
        
        {/* Footer */}
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <p style={{
            fontSize: '16px',
            color: '#F5F7F8',
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
