import { useState } from 'react'
import { Link } from 'react-router-dom'

function SendMoney() {
  const [amount, setAmount] = useState('')
  const [recipient, setRecipient] = useState('')
  const [note, setNote] = useState('')
  const [selectedContact, setSelectedContact] = useState<string | null>(null)

  const recentContacts = [
    { id: '1', name: 'Sarah Johnson', username: '@sarah_j', avatar: '👩' },
    { id: '2', name: 'Mike Chen', username: '@mike_c', avatar: '👨' },
    { id: '3', name: 'Emma Wilson', username: '@emma_w', avatar: '👩‍💼' },
    { id: '4', name: 'David Lee', username: '@david_l', avatar: '👨‍💻' }
  ]

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
            to="/home"
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
            Send Money
          </h1>
        </div>

        {/* Amount Input */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '20px',
          boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '16px',
            color: '#6B7280',
            margin: '0 0 16px 0'
          }}>
            Amount to Send
          </p>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '16px'
          }}>
            <span style={{
              fontSize: '36px',
              fontWeight: 'bold',
              color: '#00A950',
              marginRight: '8px'
            }}>
              $
            </span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              style={{
                fontSize: '36px',
                fontWeight: 'bold',
                color: '#00A950',
                border: 'none',
                outline: 'none',
                background: 'transparent',
                textAlign: 'center',
                width: '150px'
              }}
            />
          </div>
          <div style={{
            display: 'flex',
            gap: '8px',
            justifyContent: 'center'
          }}>
            {['10', '25', '50', '100'].map((preset) => (
              <button
                key={preset}
                onClick={() => setAmount(preset)}
                style={{
                  padding: '8px 16px',
                  background: amount === preset ? '#00A950' : '#F5F7F8',
                  color: amount === preset ? 'white' : '#6B7280',
                  border: 'none',
                  borderRadius: '20px',
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                ${preset}
              </button>
            ))}
          </div>
        </div>

        {/* Recent Contacts */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '20px',
          boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#111827',
            margin: '0 0 16px 0'
          }}>
            Recent Contacts
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '12px'
          }}>
            {recentContacts.map((contact) => (
              <div
                key={contact.id}
                onClick={() => {
                  setSelectedContact(contact.id)
                  setRecipient(contact.username)
                }}
                style={{
                  padding: '16px',
                  border: selectedContact === contact.id ? '2px solid #00A950' : '2px solid #E5E7EB',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  background: selectedContact === contact.id ? '#e6f6ee' : '#FFFFFF'
                }}
              >
                <div style={{
                  fontSize: '24px',
                  marginBottom: '8px'
                }}>
                  {contact.avatar}
                </div>
                <p style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#111827',
                  margin: '0 0 4px 0'
                }}>
                  {contact.name.split(' ')[0]}
                </p>
                <p style={{
                  fontSize: '12px',
                  color: '#6B7280',
                  margin: '0'
                }}>
                  {contact.username}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recipient Input */}
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
            marginBottom: '8px'
          }}>
            Send to
          </label>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder="@username or email"
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #E5E7EB',
              borderRadius: '8px',
              fontSize: '16px',
              outline: 'none',
              marginBottom: '16px',
              transition: 'border-color 0.3s ease'
            }}
            onFocus={(e) => e.target.style.borderColor = '#00A950'}
            onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
          />
          
          <label style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#111827',
            display: 'block',
            marginBottom: '8px'
          }}>
            Note (Optional)
          </label>
          <input
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="What's this for?"
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #E5E7EB',
              borderRadius: '8px',
              fontSize: '16px',
              outline: 'none',
              transition: 'border-color 0.3s ease'
            }}
            onFocus={(e) => e.target.style.borderColor = '#00A950'}
            onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
          />
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          gap: '12px',
          marginTop: 'auto',
          paddingBottom: '20px'
        }}>
          <Link
            to="/home"
            style={{
              flex: '1',
              padding: '16px',
              background: '#FFFFFF',
              color: '#6B7280',
              border: '2px solid #E5E7EB',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '600',
              textDecoration: 'none',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}
          >
            Cancel
          </Link>
          <button
            disabled={!amount || !recipient}
            style={{
              flex: '2',
              padding: '16px',
              background: (!amount || !recipient) 
                ? '#9CA3AF' 
                : 'linear-gradient(45deg, #00A950, #009947)',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: (!amount || !recipient) ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: (!amount || !recipient) 
                ? 'none' 
                : '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
            }}
          >
            Send ${amount || '0.00'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default SendMoney