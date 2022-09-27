import { GitHubUser } from 'types/Types'
import dateFormat from 'dateformat'

import { ReactComponent as TwitterIcon } from '../assets/images/icon-twitter.svg'
import { ReactComponent as CompanyIcon } from '../assets/images/icon-company.svg'
import { ReactComponent as LocationIcon } from '../assets/images/icon-location.svg'
import { ReactComponent as WebsiteIcon } from '../assets/images/icon-website.svg'

const UserHeader = (props: { data: GitHubUser }) => {
  const { data } = props

  return (
    <header className="flex w-full items-center justify-center gap-x-8">
      <img
        alt={data.name}
        className="outline-avatar-outline-green h-[7rem] w-[7rem] rounded-full outline outline-1 md:h-[11.7rem] md:w-[11.7rem]"
        src={data.avatar_url}
      />
      <div className="flex w-full flex-col items-start justify-center gap-y-[.6rem]">
        <h2 className="text-heading-3 font-bold">{data.name || data.login}</h2>
        <span className="text-links md:text-links-lg text-azure">
          <a href={data.html_url} rel="noreferrer" target="_blank">
            @{data.login}
          </a>
        </span>
        <span className="text-detail md:text-detail-lg">
          Joined {dateFormat(new Date(data.created_at), 'dd mmm yyyy')}
        </span>
      </div>
    </header>
  )
}

const UserStats = (props: { data: GitHubUser }) => {
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

const TwitterLink = (props: { twitterUser: string | null | undefined }) => {
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

const CompanyLink = (props: { company: string | undefined }) => {
  const { company } = props
  const hasCompany = company?.length

  return (
    <div
      className={`${
        hasCompany ? 'text-queen-blue dark:text-white' : 'text-queen-blue/50 dark:text-white/50'
      } flex gap-x-[1.2rem]`}
    >
      <span className="w-8 text-left">
        <CompanyIcon />
      </span>
      <span className="text-links">
        {hasCompany ? (
          <a href={`https://github.com/${company.replace('@', '')}`}>{company}</a>
        ) : (
          'Not Available'
        )}
      </span>
    </div>
  )
}

const LocationLink = (props: { location: string | undefined }) => {
  const { location } = props
  const hasLocation = location?.length

  return (
    <div
      className={`${
        hasLocation ? 'text-queen-blue dark:text-white' : 'text-queen-blue/50 dark:text-white/50'
      } flex gap-x-[1.2rem]`}
    >
      <span className="w-8 text-left">
        <LocationIcon />
      </span>
      <span className="text-links">{location || 'Not Available'}</span>
    </div>
  )
}

const WebsiteLink = (props: { website: string | undefined }) => {
  const { website } = props
  const hasWebsite = website?.length

  return (
    <div
      className={`${
        hasWebsite ? 'text-queen-blue dark:text-white' : 'text-queen-blue/50 dark:text-white/50'
      } flex gap-x-[1.2rem]`}
    >
      <span className="w-8 text-left">
        <WebsiteIcon />
      </span>
      <span className="text-links">
        {hasWebsite ? (
          <a href={website} rel="noreferrer" target="_blank">
            {website}
          </a>
        ) : (
          'Not Available'
        )}
      </span>
    </div>
  )
}

const UserLinks = (props: { data: GitHubUser }) => {
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

const UserBio = (props: { data: GitHubUser }) => {
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

const Main = (props: { data: GitHubUser }) => {
  const { data } = props

  return (
    <div className="rounded-input-radius shadow-section bg-off-white dark:bg-yankees-blue flex w-full flex-col items-center justify-between px-[2.4rem] pt-[3.2rem] pb-[3.8rem]">
      <UserHeader data={data} />

      <UserBio data={data} />

      <UserStats data={data} />

      <UserLinks data={data} />
    </div>
  )
}

export default Main
