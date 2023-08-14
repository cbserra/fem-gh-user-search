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
  const userNameRef = React.createRef<HTMLInputElement>()

  async function handleSearch(evt: React.FormEvent<HTMLFormElement>) {
    console.log(`🚀 ~ handleSearch ~ handleSearch`, handleSearch)
    evt.preventDefault()

    // new FormData(evt.currentTarget).forEach(console.log)

    // console.log(.get('searchUser'))

    // if (!userName || userName === data?.login) {
    //   return
    // }
    const userName = userNameRef.current?.value

    console.log(`🚀 ~ handleSearch ~ userName`, userName)

    if (!userName) {
      userNameRef.current?.setCustomValidity('User name is required')
      userNameRef.current?.reportValidity()

      return false
    }

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
        refetch={refetch}
        setUserName={setUserName}
        userName={userName}
        userNameRef={userNameRef}
      />
      <Main data={data} />
    </>
  )
}

export default GitHubSearch
