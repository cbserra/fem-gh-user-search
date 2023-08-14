import { Alert } from 'flowbite-react'

import GitHubSearch from './search/GitHubSearch'
import Header from './header/Header'

function App() {
  return (
    <main className="grid grid-cols-1 gap-y-[3.6rem]">
      {/* <Alert /> */}
      <Header />
      <GitHubSearch />
    </main>
  )
}

export default App
