import { GitHubUser } from 'types/Types'
import cx from 'classnames'

import { TwitterLink } from './TwitterLink'
import { CompanyLink } from './CompanyLink'
import { LocationLink } from './LocationLink'
import { WebsiteLink } from './WebsiteLink'

export const UserLinks = (props: { data: GitHubUser }) => {
  const { data } = props

  return (
    <section
      className={cx(
        'grid-area-links',
        'grid grid-cols-1 row-span-1',
        'w-full gap-y-[1.6rem]',
        'text-links mt-[2.4rem] ',
        'md:grid-cols-2 md:gap-x-4  md:text-links-lg'
        // 'lg:col-start-2 lg:col-end-2'
        // 'p-[1.6rem]  md:px-[3.2rem] md:py-[1.6rem] '
      )}
      id="user-links"
    >
      <TwitterLink twitterUser={data.twitter_username} />
      <CompanyLink company={data.company} />
      <LocationLink location={data.location} />
      <WebsiteLink website={data.blog} />
    </section>
  )
}
