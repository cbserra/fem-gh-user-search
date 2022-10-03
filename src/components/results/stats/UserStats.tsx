import cx from 'classnames'
import { GitHubUser } from 'types/Types'

export const UserStats = (props: { data: GitHubUser }) => {
  const { data } = props

  const stats = [
    {
      label: 'Repos',
      value: data.public_repos
    },
    {
      label: 'Followers',
      value: data.followers
    },
    {
      label: 'Following',
      value: data.following
    }
  ]

  return (
    <section
      className={cx(
        'grid-area-stats',
        'row-span-1',
        'rounded-button-radius bg-ghost-white dark:bg-dark-gunmetal  flex w-full items-center justify-center gap-x-4 p-[1.6rem] md:px-[3.2rem]',
        'lg:col-start-2 lg:col-end-2'
      )}
      id="user-stats"
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex w-1/3 flex-col items-center justify-center gap-y-2 md:items-start"
        >
          <span className="text-stats-label md:text-stats-label-lg">{stat.label}</span>
          <span className="text-heading-3 md:text-heading-2 font-bold">{stat.value}</span>
        </div>
      ))}
    </section>
  )
}
