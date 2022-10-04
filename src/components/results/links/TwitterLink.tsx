import { ReactComponent as TwitterIcon } from '../../../assets/images/icon-twitter.svg'

export const TwitterLink = (props: { twitterUser: string | null | undefined }) => {
  const { twitterUser } = props
  const hasTwitter = twitterUser?.length

  return (
    <div
      className={`${
        hasTwitter ? 'text-queen-blue dark:text-white' : 'text-queen-blue/50 dark:text-white/50'
      } flex gap-x-[1.2rem] md:order-2`}
    >
      <span className="w-8 text-left">
        <TwitterIcon aria-label="Twitter Icon" />
      </span>
      <span className="">
        {hasTwitter ? (
          <a
            href={`https://twitter.com/${twitterUser}`}
            rel="noreferrer"
            tabIndex={0}
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
