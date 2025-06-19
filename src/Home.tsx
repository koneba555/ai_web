import { Link } from 'react-router-dom'

function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)',
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
        
        {/* Header */}
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
            🏠 หน้าหลัก
          </h1>
          
          <p style={{
            fontSize: '24px',
            color: '#ffffff',
            marginBottom: '15px',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            ยินดีต้อนรับสู่หน้า <span style={{ fontWeight: 'bold', color: '#ffeb3b' }}>Home</span>
          </p>
        </div>
        
        {/* Content Card */}
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '20px',
          padding: '40px',
          maxWidth: '500px',
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
            background: 'linear-gradient(45deg, #4ecdc4, #44a08d)',
            borderRadius: '50%',
            marginBottom: '20px',
            fontSize: '36px',
            boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
          }}>
            🏠
          </div>
          
          <h2 style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '20px'
          }}>
            หน้าหลัก
          </h2>
          
          <p style={{
            fontSize: '16px',
            color: '#666',
            lineHeight: '1.6',
            marginBottom: '30px'
          }}>
            นี่คือหน้าหลักของเว็บไซต์ คุณสามารถนำทางไปยังหน้าต่าง ๆ ได้ที่นี่
          </p>
          
          <div style={{
            display: 'flex',
            gap: '15px',
            justifyContent: 'center'
          }}>
            <Link 
              to="/"
              style={{
                padding: '12px 24px',
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '10px',
                fontWeight: 'bold',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                display: 'inline-block'
              }}
            >
              📱 แอปหลัก
            </Link>
            
            <button style={{
              padding: '12px 24px',
              background: 'linear-gradient(45deg, #4ecdc4, #44a08d)',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
            }}>
              ⚡ ฟังก์ชันอื่น ๆ
            </button>
          </div>
        </div>
        
        {/* Footer */}
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px'
          }}>
            {['🏠 Home Page', '🎯 Navigation', '⚡ Fast Routing', '🎨 Beautiful UI'].map((feature, index) => (
              <span key={index} style={{
                padding: '8px 16px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: 'white',
                fontSize: '14px',
                backdropFilter: 'blur(10px)'
              }}>
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home