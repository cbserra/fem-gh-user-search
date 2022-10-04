import { ReactComponent as WebsiteIcon } from '../../../assets/images/icon-website.svg'

export const WebsiteLink = (props: { website: string | undefined }) => {
  const { website } = props
  const hasWebsite = website?.length

  return (
    <div
      className={`${
        hasWebsite ? 'text-queen-blue dark:text-white' : 'text-queen-blue/50 dark:text-white/50'
      } flex gap-x-[1.2rem] md:order-3`}
    >
      <span className="w-8 text-left">
        <WebsiteIcon aria-label="Website Icon" />
      </span>
      <span className="">
        {hasWebsite ? (
          <a href={website} rel="noreferrer" tabIndex={0} target="_blank">
            {website}
          </a>
        ) : (
          'Not Available'
        )}
      </span>
    </div>
  )
}
