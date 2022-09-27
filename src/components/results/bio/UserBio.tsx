import { GitHubUser } from 'types/Types'

export const UserBio = (props: { data: GitHubUser }) => {
  const { data } = props

  return (
    <div className="mt-[3.2rem] mb-[2.4rem] flex flex-col items-center justify-center">
      <p
        className={`${
          !data.bio ? 'text-queen-blue/75 dark:text-white/75' : 'text-queen-blue dark:text-white'
        } text-detail md:text-detail-lg text-center`}
      >
        {data.bio || 'This profile has no bio'}
      </p>
    </div>
  )
}
