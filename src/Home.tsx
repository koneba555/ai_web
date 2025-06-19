import { Link } from 'react-router-dom'

function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #00A950 0%, #009947 100%)',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        maxWidth: '400px',
        margin: '0 auto',
        paddingTop: '40px'
      }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '10px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(45deg, #2bdb93, #5ce3aa)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '12px',
              color: 'white',
              fontSize: '20px',
              fontWeight: 'bold'
            }}>
              ☁️
            </div>
            <h1 style={{
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#FFFFFF',
              margin: '0',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>
              PayWise
            </h1>
          </div>
          
          <p style={{
            fontSize: '16px',
            color: '#F5F7F8',
            margin: '0',
            fontWeight: '500',
            textShadow: '0 1px 2px rgba(0,0,0,0.3)'
          }}>
            Fast, Simple & Secure Transfers
          </p>
        </div>
        
        {/* Available Balance Card */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          padding: '24px',
          width: '100%',
          boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
          marginBottom: '20px',
          textAlign: 'left'
        }}>
          <p style={{
            fontSize: '16px',
            color: '#6B7280',
            margin: '0 0 8px 0',
            fontWeight: '600'
          }}>
            Available Balance
          </p>
          <h2 style={{
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#111827',
            margin: '0'
          }}>
            $15,420.50
          </h2>
        </div>
        
        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          gap: '16px',
          width: '100%',
          marginBottom: '24px'
        }}>
          <Link 
            to="/send-money"
            style={{
              flex: '1',
              background: 'linear-gradient(45deg, #00A950, #009947)',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              padding: '16px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              textDecoration: 'none'
            }}
          >
            <span style={{ fontSize: '18px' }}>✈️</span>
            Send Money
          </Link>
          
          <Link
            to="/history"
            style={{
              flex: '1',
              background: '#FFFFFF',
              color: '#00A950',
              border: '2px solid #bcf0d8',
              borderRadius: '12px',
              padding: '16px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.07), 0 1px 2px -1px rgb(0 0 0 / 0.07)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              textDecoration: 'none'
            }}
          >
            <span style={{ fontSize: '18px' }}>🔄</span>
            History
          </Link>
        </div>
        
        {/* Recent Activity Section */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          padding: '24px',
          width: '100%',
          boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px'
          }}>
            <h3 style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#111827',
              margin: '0'
            }}>
              Recent Activity
            </h3>
            <button style={{
              background: 'none',
              border: 'none',
              color: '#00A950',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              View All
            </button>
          </div>
          
          {/* Transaction Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Transaction 1 */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(45deg, #EF4444, #DC2626)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px'
                }}>
                  ↗️
                </div>
                <div>
                  <p style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#111827',
                    margin: '0 0 2px 0'
                  }}>
                    Sarah Johnson
                  </p>
                  <p style={{
                    fontSize: '14px',
                    color: '#6B7280',
                    margin: '0'
                  }}>
                    @sarah_j
                  </p>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#EF4444',
                  margin: '0 0 2px 0'
                }}>
                  -$250.00
                </p>
                <p style={{
                  fontSize: '12px',
                  color: '#00A950',
                  margin: '0'
                }}>
                  2024-01-15
                </p>
              </div>
            </div>
            
            {/* Transaction 2 */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(45deg, #2bdb93, #5ce3aa)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px'
                }}>
                  ↙️
                </div>
                <div>
                  <p style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#111827',
                    margin: '0 0 2px 0'
                  }}>
                    Mike Chen
                  </p>
                  <p style={{
                    fontSize: '14px',
                    color: '#6B7280',
                    margin: '0'
                  }}>
                    from @mike_c
                  </p>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#00A950',
                  margin: '0 0 2px 0'
                }}>
                  +$100.00
                </p>
                <p style={{
                  fontSize: '12px',
                  color: '#00A950',
                  margin: '0'
                }}>
                  2024-01-14
                </p>
              </div>
            </div>
            
            {/* Transaction 3 */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(45deg, #EF4444, #DC2626)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px'
                }}>
                  ↗️
                </div>
                <div>
                  <p style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#111827',
                    margin: '0 0 2px 0'
                  }}>
                    Emma Wilson
                  </p>
                  <p style={{
                    fontSize: '14px',
                    color: '#6B7280',
                    margin: '0'
                  }}>
                    @emma_w
                  </p>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#EF4444',
                  margin: '0 0 2px 0'
                }}>
                  -$75.50
                </p>
                <p style={{
                  fontSize: '12px',
                  color: '#00A950',
                  margin: '0'
                }}>
                  2024-01-14
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation Back */}
        <div style={{ marginTop: '30px', width: '100%' }}>
          <Link 
            to="/"
            style={{
              width: '100%',
              background: 'linear-gradient(45deg, #2bdb93, #5ce3aa)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '12px',
              padding: '16px',
              fontSize: '16px',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
              transition: 'all 0.3s ease'
            }}
          >
            <span>📱</span>
            กลับไปยังแอปหลัก
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home