/* eslint-disable no-console */
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

  async function handleSearch() {
    await refetch({ url: userName || 'octocat' })
      .then(console.info)
      .catch(console.error)

    // console.log(searchResult)
  }

  if (loading) return <p>Loading...</p>
  // if (error) return <p>{JSON.stringify(error.toJSON())}</p>

  return (
    <>
      <Search
        error={error}
        handleSearch={handleSearch}
        setUserName={setUserName}
        userName={userName}
      />
      <Main data={data} />
    </>
  )
}

export default GitHubSearch
