// import react from '@/Assets/images/react.svg'
// import tailwindcss from '@/Assets/images/tailwindcss.svg'
// import typescript from '@/Assets/images/typescript.svg'
// import vercel from '@/Assets/images/vercel.svg'
// import vite from '@/Assets/images/vite.svg'

import { useState } from 'react'

import GitHubSearch from './GitHubSearch'
import Header from './Header'
import Main from './Main'
import Search from './Search'

function App() {
  const [darkMode, toggleDarkMode] = useState(false)

  return (
    <main className="flex flex-col gap-y-[1.6rem]">
      <Header />
      <GitHubSearch />
    </main>
  )
}

export default App
