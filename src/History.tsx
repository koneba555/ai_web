import { useState } from 'react'
import { Link } from 'react-router-dom'

function History() {
  const [filter, setFilter] = useState('all')

  const transactions = [
    {
      id: '1',
      type: 'sent',
      name: 'Sarah Johnson',
      username: '@sarah_j',
      amount: 250.00,
      date: '2024-01-15',
      time: '14:30',
      status: 'completed',
      note: 'Lunch payment'
    },
    {
      id: '2',
      type: 'received',
      name: 'Mike Chen',
      username: '@mike_c',
      amount: 100.00,
      date: '2024-01-14',
      time: '09:15',
      status: 'completed',
      note: 'Coffee money'
    },
    {
      id: '3',
      type: 'sent',
      name: 'Emma Wilson',
      username: '@emma_w',
      amount: 75.50,
      date: '2024-01-14',
      time: '16:45',
      status: 'completed',
      note: 'Movie tickets'
    },
    {
      id: '4',
      type: 'received',
      name: 'David Lee',
      username: '@david_l',
      amount: 200.00,
      date: '2024-01-13',
      time: '11:20',
      status: 'completed',
      note: 'Rent split'
    },
    {
      id: '5',
      type: 'sent',
      name: 'Lisa Park',
      username: '@lisa_p',
      amount: 50.00,
      date: '2024-01-12',
      time: '19:30',
      status: 'pending',
      note: 'Dinner'
    },
    {
      id: '6',
      type: 'received',
      name: 'John Smith',
      username: '@john_s',
      amount: 150.00,
      date: '2024-01-11',
      time: '13:45',
      status: 'completed',
      note: 'Birthday gift'
    }
  ]

  const filteredTransactions = transactions.filter(transaction => {
    if (filter === 'sent') return transaction.type === 'sent'
    if (filter === 'received') return transaction.type === 'received'
    return true
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return '#4caf50'
      case 'pending': return '#ff9800'
      case 'failed': return '#f44336'
      default: return '#666'
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
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
          marginBottom: '20px',
          paddingBottom: '10px'
        }}>
          <Link 
            to="/home"
            style={{
              marginRight: '15px',
              textDecoration: 'none',
              fontSize: '24px',
              color: '#1976d2'
            }}
          >
            ←
          </Link>
          <h1 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#1976d2',
            margin: '0'
          }}>
            Transaction History
          </h1>
        </div>

        {/* Filter Tabs */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '8px',
          marginBottom: '20px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          display: 'flex',
          gap: '4px'
        }}>
          {[
            { key: 'all', label: 'All' },
            { key: 'sent', label: 'Sent' },
            { key: 'received', label: 'Received' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              style={{
                flex: '1',
                padding: '12px',
                background: filter === tab.key ? '#2196f3' : 'transparent',
                color: filter === tab.key ? 'white' : '#666',
                border: 'none',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Transaction List */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '24px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          flex: '1'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#1976d2',
              margin: '0'
            }}>
              {filter === 'all' ? 'All Transactions' : 
               filter === 'sent' ? 'Money Sent' : 'Money Received'}
            </h3>
            <span style={{
              fontSize: '14px',
              color: '#666',
              background: '#f5f5f5',
              padding: '4px 12px',
              borderRadius: '20px'
            }}>
              {filteredTransactions.length} transactions
            </span>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            maxHeight: '400px',
            overflowY: 'auto'
          }}>
            {filteredTransactions.map((transaction) => (
              <div
                key={transaction.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px',
                  background: '#f8f9ff',
                  borderRadius: '12px',
                  border: '1px solid #e3f2fd',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: transaction.type === 'sent' 
                      ? 'linear-gradient(45deg, #ffcdd2, #f8bbd9)' 
                      : 'linear-gradient(45deg, #c8e6c9, #a5d6a7)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px'
                  }}>
                    {transaction.type === 'sent' ? '↗️' : '↙️'}
                  </div>
                  <div>
                    <p style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#333',
                      margin: '0 0 2px 0'
                    }}>
                      {transaction.name}
                    </p>
                    <p style={{
                      fontSize: '14px',
                      color: '#666',
                      margin: '0 0 2px 0'
                    }}>
                      {transaction.username}
                    </p>
                    {transaction.note && (
                      <p style={{
                        fontSize: '12px',
                        color: '#888',
                        margin: '0',
                        fontStyle: 'italic'
                      }}>
                        "{transaction.note}"
                      </p>
                    )}
                  </div>
                </div>
                
                <div style={{ textAlign: 'right' }}>
                  <p style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: transaction.type === 'sent' ? '#f44336' : '#4caf50',
                    margin: '0 0 2px 0'
                  }}>
                    {transaction.type === 'sent' ? '-' : '+'}${transaction.amount.toFixed(2)}
                  </p>
                  <p style={{
                    fontSize: '12px',
                    color: '#666',
                    margin: '0 0 2px 0'
                  }}>
                    {transaction.date} {transaction.time}
                  </p>
                  <span style={{
                    fontSize: '11px',
                    color: getStatusColor(transaction.status),
                    background: `${getStatusColor(transaction.status)}20`,
                    padding: '2px 8px',
                    borderRadius: '12px',
                    fontWeight: '600',
                    textTransform: 'capitalize'
                  }}>
                    {transaction.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredTransactions.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '40px 20px',
              color: '#666'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>📋</div>
              <p style={{ fontSize: '16px', margin: '0' }}>
                No {filter === 'all' ? '' : filter} transactions found
              </p>
            </div>
          )}
        </div>

        {/* Summary Stats */}
        <div style={{
          display: 'flex',
          gap: '12px',
          marginTop: '20px'
        }}>
          <div style={{
            flex: '1',
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '16px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: '12px',
              color: '#666',
              margin: '0 0 4px 0',
              textTransform: 'uppercase',
              fontWeight: '600'
            }}>
              Total Sent
            </p>
            <p style={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#f44336',
              margin: '0'
            }}>
              -${transactions
                .filter(t => t.type === 'sent')
                .reduce((sum, t) => sum + t.amount, 0)
                .toFixed(2)}
            </p>
          </div>
          
          <div style={{
            flex: '1',
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '16px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: '12px',
              color: '#666',
              margin: '0 0 4px 0',
              textTransform: 'uppercase',
              fontWeight: '600'
            }}>
              Total Received
            </p>
            <p style={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#4caf50',
              margin: '0'
            }}>
              +${transactions
                .filter(t => t.type === 'received')
                .reduce((sum, t) => sum + t.amount, 0)
                .toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default History