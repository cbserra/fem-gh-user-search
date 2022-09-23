import axios from 'axios'
import { makeUseAxios } from 'axios-hooks'
import React from 'react'

import Search from './Search'
import Main from './Main'

const useAxios = makeUseAxios({
  axios: axios.create({ baseURL: 'https://api.github.com/users/' })
})

const GitHubSearch = () => {
  const [userName, setUserName] = React.useState('')
  const [{ data, loading, error }, refetch] = useAxios({ url: 'octocat' })

  const handleSearch = () => {
    const searchResult = refetch({ url: userName || 'octocat' })

    console.log(searchResult)
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <>
      <Search handleSearch={handleSearch} setUserName={setUserName} userName={userName} />
      <Main data={data} />
    </>
  )
}

export default GitHubSearch
