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
      <form
        className={cx(
          'rounded-input-radius shadow-section  py-[.7rem] pl-[1.6rem] pr-[.7rem] ',
          'flex w-full items-center justify-between',
          'gap-x-2',
          'bg-off-white',
          'dark:bg-yankees-blue dark:shadow-transparent'
        )}
        id="search-bar"
        onSubmit={handleSearch}
      >
        <label htmlFor="search-user">
          <SearchIcon aria-label="Search GitHub User Icon" className="text-azure" />
        </label>
        <input
          className="text-input md:text-input-lg w-1/3 bg-transparent focus-visible:outline-none"
          id="search-user"
          name="searchUser"
          placeholder="Search GitHub username..."
          tabIndex={0}
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
          tabIndex={0}
          type="submit"
        >
          Search
        </button>
      </form>
    </>
  )
}

export default Search
