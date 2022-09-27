import GitHubSearch from './search/GitHubSearch'
import Header from './header/Header'

function App() {
  return (
    <main className="flex flex-col gap-y-[1.6rem]">
      <Header />
      <GitHubSearch />
    </main>
  )
}

export default App
