import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center p-8">
      <div className="flex space-x-8 mb-8">
        <a href="https://vite.dev" target="_blank" className="transition-transform hover:scale-110">
          <img src={viteLogo} className="h-24 w-24" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="transition-transform hover:scale-110">
          <img src={reactLogo} className="h-24 w-24 animate-spin" alt="React logo" />
        </a>
      </div>
      
      <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4 text-center">
        สวัสดีโลก! 🌍
      </h1>
      
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 text-center max-w-md">
        ยินดีต้อนรับสู่ React App ของคุณ พร้อม Tailwind CSS v4
      </p>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-md w-full">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg"
        >
          คลิกแล้ว {count} ครั้ง
        </button>
        
        <p className="mt-6 text-gray-600 dark:text-gray-400 text-center">
          แก้ไขไฟล์ <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">src/App.tsx</code> แล้วบันทึกเพื่อทดสอบ Hot Module Replacement
        </p>
      </div>
      
      <p className="mt-8 text-gray-500 dark:text-gray-400 text-center">
        คลิกที่โลโก้ Vite และ React เพื่อเรียนรู้เพิ่มเติม
      </p>
    </div>
  )
}

export default App
