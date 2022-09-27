import { GitHubUser } from 'types/Types'
import dateFormat from 'dateformat'

export const UserHeader = (props: { data: GitHubUser }) => {
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
