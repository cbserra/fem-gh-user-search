import { AxiosError } from 'axios'
import cx from 'classnames'

import { ReactComponent as SearchIcon } from '../../assets/images/icon-search.svg'

const Search = (props: {
  error: AxiosError<any, any> | null
  userName: string
  loading: boolean
  setUserName: (userName: string) => void
  handleSearch: () => void
}): JSX.Element => {
  const { error, userName, loading, setUserName, handleSearch } = props

  return (
    <>
      <section
        className={cx(
          'rounded-input-radius shadow-section  py-[.7rem] pl-[1.6rem] pr-[.7rem] ',
          'flex w-full items-center justify-between',
          'gap-x-2',
          'bg-off-white',
          'dark:bg-yankees-blue dark:shadow-transparent'
        )}
        id="search-bar"
      >
        <SearchIcon className="text-azure" />
        <input
          className="text-input md:text-input-lg w-1/3 bg-transparent focus-visible:outline-none"
          id="search-user"
          name="searchUser"
          placeholder="Search GitHub username..."
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <span className="text-input md:text-input-lg min-w-min">
          {loading && <p>Loading...</p>}
          {error && <p className="text-red">No results</p>}
        </span>

        <button
          className="bg-azure hover:bg-azure/50 rounded-button-radius text-button md:text-button-lg py-5 px-6 text-white "
          onClick={handleSearch}
        >
          Search
        </button>
      </section>
    </>
  )
}

export default Search
