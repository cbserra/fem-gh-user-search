import { GitHubUser } from 'types/Types'
import cx from 'classnames'

import { UserBio } from './bio/UserBio'
import { UserLinks } from './links/UserLinks'
import { UserStats } from './stats/UserStats'
import { UserHeader } from './header/UserHeader'

const Main = (props: { data: GitHubUser }) => {
  const { data } = props

  return (
    <div
      className={cx(
        'rounded-input-radius shadow-section bg-off-white dark:bg-yankees-blue dark:shadow-transparent',
        'w-full',
        // 'flex  flex-col items-end justify-end',
        'grid',
        'grid-areas-default grid-cols-[min-content_auto] lg:grid-areas-lg',
        'gap-x-[2rem] md:gap-x-[3.2rem]',
        // 'grid-cols-1',
        // 'grid-rows-4 auto-rows-min',
        // 'lg:grid-cols-[12rem_auto]',
        'px-[2.4rem] pt-[3.2rem] pb-[3.8rem] md:p-16 lg:p-[4.8rem]'
      )}
      id="user-content"
    >
      {data && <UserHeader data={data} />}

      {data && <UserBio data={data} />}

      {data && <UserStats data={data} />}

      {data && <UserLinks data={data} />}
    </div>
  )
}

export default Main
