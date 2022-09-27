import { GitHubUser } from 'types/Types'

import { UserBio } from './bio/UserBio'
import { UserLinks } from './links/UserLinks'
import { UserStats } from './stats/UserStats'
import { UserHeader } from './header/UserHeader'

const Main = (props: { data: GitHubUser }) => {
  const { data } = props

  return (
    <div className="rounded-input-radius shadow-section bg-off-white dark:bg-yankees-blue flex w-full flex-col items-center justify-between px-[2.4rem] pt-[3.2rem] pb-[3.8rem]">
      <UserHeader data={data} />

      <UserBio data={data} />

      <UserStats data={data} />

      <UserLinks data={data} />
    </div>
  )
}

export default Main
