import { GitHubUser } from 'types/Types'

import { TwitterLink } from './TwitterLink'
import { CompanyLink } from './CompanyLink'
import { LocationLink } from './LocationLink'
import { WebsiteLink } from './WebsiteLink'

export const UserLinks = (props: { data: GitHubUser }) => {
  const { data } = props

  return (
    <div className="mt-[2.4rem] flex w-full flex-col gap-y-[1.6rem] md:flex-row md:gap-x-4 md:gap-y-0">
      <TwitterLink twitterUser={data.twitter_username} />
      <CompanyLink company={data.company} />
      <LocationLink location={data.location} />
      <WebsiteLink website={data.blog} />
    </div>
  )
}
