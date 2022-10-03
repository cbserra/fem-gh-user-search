/* eslint-disable no-console */
import axios from 'axios'
import { makeUseAxios } from 'axios-hooks'
import React from 'react'

import Main from '../results/Main'

import Search from './Search'

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
  }

  return (
    <>
      <Search
        error={error}
        handleSearch={handleSearch}
        loading={loading}
        setUserName={setUserName}
        userName={userName}
      />
      <Main data={data} />
    </>
  )
}

export default GitHubSearch
