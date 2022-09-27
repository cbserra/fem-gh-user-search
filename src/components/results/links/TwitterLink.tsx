import { ReactComponent as TwitterIcon } from '../../../assets/images/icon-twitter.svg'

export const TwitterLink = (props: { twitterUser: string | null | undefined }) => {
  const { twitterUser } = props
  const hasTwitter = twitterUser?.length

  return (
    <div
      className={`${
        hasTwitter ? 'text-queen-blue dark:text-white' : 'text-queen-blue/50 dark:text-white/50'
      } flex gap-x-[1.2rem]`}
    >
      <span className="w-8 text-left">
        <TwitterIcon />
      </span>
      <span className="text-links">
        {hasTwitter ? (
          <a
            className="text-links md:text-links-lg text-azure"
            href={`https://twitter.com/${twitterUser}`}
            rel="noreferrer"
            target="_blank"
          >
            @{twitterUser}
          </a>
        ) : (
          'Not Available'
        )}
      </span>
    </div>
  )
}
