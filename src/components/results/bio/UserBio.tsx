import cx from 'classnames'
import { GitHubUser } from 'types/Types'

export const UserBio = (props: { data: GitHubUser }) => {
  const { bio } = props.data

  return (
    <section
      className={cx(
        'grid-area-bio',
        'row-span-1',
        'mt-[3.2rem] mb-[2.4rem] flex flex-col items-start justify-start self-start',
        'lg:col-start-2 lg:col-end-2'
      )}
      id="user-bio"
    >
      <p
        className={`${
          !bio ? 'text-queen-blue/75 dark:text-white/75' : 'text-queen-blue dark:text-white'
        } text-detail md:text-detail-lg self-start text-left`}
      >
        {bio || 'This profile has no bio'}
      </p>
    </section>
  )
}
