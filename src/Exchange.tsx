import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Exchange() {
  const [thbAmount, setThbAmount] = useState('')
  const [usdAmount, setUsdAmount] = useState('')
  const [exchangeRate] = useState(35.50) // อัตราแลกเปลี่ยนตัวอย่าง

  // คำนวณเงิน USD เมื่อกรอกเงินบาท
  useEffect(() => {
    if (thbAmount && !isNaN(Number(thbAmount))) {
      const usd = Number(thbAmount) / exchangeRate
      setUsdAmount(usd.toFixed(2))
    } else {
      setUsdAmount('')
    }
  }, [thbAmount, exchangeRate])

  const handleThbChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setThbAmount(e.target.value)
  }

  const clearInputs = () => {
    setThbAmount('')
    setUsdAmount('')
  }

  const presetAmounts = ['1000', '5000', '10000', '50000']

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
        minHeight: '100vh',
        maxWidth: '400px',
        margin: '0 auto',
        paddingTop: '20px'
      }}>
        
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '30px',
          paddingBottom: '10px'
        }}>
          <Link 
            to="/"
            style={{
              marginRight: '15px',
              textDecoration: 'none',
              fontSize: '24px',
              color: '#FFFFFF'
            }}
          >
            ←
          </Link>
          <h1 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#FFFFFF',
            margin: '0',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            แลกเปลี่ยนเงิน
          </h1>
        </div>

        {/* Exchange Rate Display */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          padding: '20px',
          marginBottom: '20px',
          boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '12px'
          }}>
            <span style={{ fontSize: '24px', marginRight: '8px' }}>💱</span>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#111827',
              margin: '0'
            }}>
              อัตราแลกเปลี่ยนวันนี้
            </h3>
          </div>
          <p style={{
            fontSize: '16px',
            color: '#6B7280',
            margin: '0 0 8px 0'
          }}>
            1 USD = {exchangeRate.toFixed(2)} THB
          </p>
          <p style={{
            fontSize: '14px',
            color: '#9CA3AF',
            margin: '0'
          }}>
            อัปเดตล่าสุด: วันนี้ 14:30
          </p>
        </div>

        {/* THB Input */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '20px',
          boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
        }}>
          <label style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#111827',
            display: 'block',
            marginBottom: '12px'
          }}>
            จำนวนเงินบาท (THB)
          </label>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '16px',
            border: '2px solid #E5E7EB',
            borderRadius: '12px',
            padding: '16px',
            transition: 'border-color 0.3s ease'
          }}
          onFocus={() => {}}
          >
            <span style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#00A950',
              marginRight: '12px'
            }}>
              ฿
            </span>
            <input
              type="number"
              value={thbAmount}
              onChange={handleThbChange}
              placeholder="0.00"
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#00A950',
                border: 'none',
                outline: 'none',
                background: 'transparent',
                width: '100%'
              }}
            />
          </div>

          {/* Preset Amounts */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '8px'
          }}>
            {presetAmounts.map((amount) => (
              <button
                key={amount}
                onClick={() => setThbAmount(amount)}
                style={{
                  padding: '12px',
                  background: thbAmount === amount ? '#00A950' : '#F5F7F8',
                  color: thbAmount === amount ? 'white' : '#6B7280',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                ฿{Number(amount).toLocaleString()}
              </button>
            ))}
          </div>
        </div>

        {/* Conversion Arrow */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px'
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            backgroundColor: '#FFFFFF',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
            fontSize: '20px'
          }}>
            ⬇️
          </div>
        </div>

        {/* USD Result */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '20px',
          boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
          textAlign: 'center'
        }}>
          <label style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#111827',
            display: 'block',
            marginBottom: '16px'
          }}>
            ได้เงินดอลลาร์สหรัฐ (USD)
          </label>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            background: '#e6f6ee',
            borderRadius: '12px',
            border: '2px solid #bcf0d8'
          }}>
            <span style={{
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#00A950',
              marginRight: '12px'
            }}>
              $
            </span>
            <span style={{
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#00A950'
            }}>
              {usdAmount || '0.00'}
            </span>
          </div>
          
          {thbAmount && usdAmount && (
            <p style={{
              fontSize: '14px',
              color: '#6B7280',
              marginTop: '12px',
              margin: '12px 0 0 0'
            }}>
              ฿{Number(thbAmount).toLocaleString()} = ${usdAmount}
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          gap: '12px',
          marginTop: 'auto',
          paddingBottom: '20px'
        }}>
          <button
            onClick={clearInputs}
            style={{
              flex: '1',
              padding: '16px',
              background: '#FFFFFF',
              color: '#6B7280',
              border: '2px solid #E5E7EB',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            ล้างข้อมูล
          </button>
          
          <button
            disabled={!thbAmount || !usdAmount}
            style={{
              flex: '2',
              padding: '16px',
              background: (!thbAmount || !usdAmount) 
                ? '#9CA3AF' 
                : 'linear-gradient(45deg, #00A950, #009947)',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: (!thbAmount || !usdAmount) ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: (!thbAmount || !usdAmount) 
                ? 'none' 
                : '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
            }}
          >
            💰 ทำรายการแลกเปลี่ยน
          </button>
        </div>

        {/* Additional Info */}
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          padding: '16px',
          marginBottom: '20px',
          backdropFilter: 'blur(10px)'
        }}>
          <p style={{
            fontSize: '14px',
            color: '#F5F7F8',
            margin: '0 0 8px 0',
            fontWeight: '600'
          }}>
            💡 ข้อมูลที่ควรทราบ
          </p>
          <ul style={{
            fontSize: '12px',
            color: '#F5F7F8',
            margin: '0',
            paddingLeft: '16px'
          }}>
            <li>อัตราแลกเปลี่ยนอาจเปลี่ยนแปลงตลอดเวลา</li>
            <li>ค่าธรรมเนียมการแลกเปลี่ยนอาจมีเพิ่มเติม</li>
            <li>ตรวจสอบอัตราล่าสุดก่อนทำรายการจริง</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Exchange