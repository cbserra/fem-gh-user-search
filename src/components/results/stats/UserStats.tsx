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
    <div className="rounded-button-radius bg-ghost-white dark:bg-dark-gunmetal flex w-full items-center justify-center gap-x-4 p-[1.6rem]">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col items-center justify-center gap-y-2">
          <span className="text-stats-label">{stat.label}</span>
          <span className="text-heading-3 font-bold">{stat.value}</span>
        </div>
      ))}
    </div>
  )
}
