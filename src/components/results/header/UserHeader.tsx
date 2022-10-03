import { GitHubUser } from 'types/Types'
import dateFormat from 'dateformat'
import cx from 'classnames'

export const UserHeader = (props: { data: GitHubUser }) => {
  const { data } = props

  return (
    <>
      <aside
        className={cx(
          'grid-area-avatar',
          // 'hidden',
          'h-[7rem] w-[7rem]',
          'md:h-[11.7rem] md:w-[11.7rem]',
          'lg:col-start-1 lg:col-end-1 lg:row-span-full'
          // 'lg:block'
        )}
      >
        <img
          alt={data.name}
          className="outline-avatar-outline-green  rounded-full outline outline-1"
          src={data.avatar_url}
        />
      </aside>

      <header
        className={cx(
          'grid-area-header',
          // 'row-span-1',
          'flex items-center justify-center gap-x-8'
          // 'lg:col-start-2 lg:col-end-2 lg:self-start'
        )}
        id="user-header"
      >
        <div
          className={cx(
            // 'flex w-full flex-col items-start justify-center',
            'grid grid-cols-2 w-full',
            // 'lg:grid-cols-2',
            'gap-y-[.6rem]'
            // 'lg:flex-row lg:flex-wrap lg:justify-between'
          )}
        >
          <h2 className="text-heading-3 md:text-heading-1 col-span-2 font-bold lg:order-1 lg:col-span-1">
            {data.name || data.login}
          </h2>
          <span className="text-links md:text-links-lg text-azure col-span-2 lg:order-3 lg:col-span-2 lg:self-center">
            <a href={data.html_url} rel="noreferrer" target="_blank">
              @{data.login}
            </a>
          </span>
          <span className="text-detail md:text-detail-lg col-span-2 lg:order-2 lg:col-span-1 lg:self-center lg:text-right">
            Joined {dateFormat(new Date(data.created_at), 'dd mmm yyyy')}
          </span>
        </div>
      </header>
    </>
  )
}
