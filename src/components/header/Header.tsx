import { useDarkMode } from '../../hooks/useDarkMode'
import { ReactComponent as MoonIcon } from '../../assets/images/icon-moon.svg'
import { ReactComponent as SunIcon } from '../../assets/images/icon-sun.svg'

const themeIcons = [
  {
    label: 'Dark',
    icon: <MoonIcon aria-label="Toggle Dark Mode" />,
    toggleOnClass: 'hidden',
    toggleOffClass: 'inline-flex'
  },
  {
    label: 'Light',
    icon: <SunIcon aria-label="Toggle Light Mode" />,
    toggleOnClass: 'inline-flex',
    toggleOffClass: 'hidden'
  }
]
const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode()

  return (
    <header
      aria-label="site header"
      className="flex w-full items-center justify-between"
      id="site-header"
    >
      <h1 className="text-heading-1 text-gunmetal dark:text-white">devfinder</h1>
      <label
        aria-label={`Toggle ${darkMode ? 'Light' : 'Dark'} Mode`}
        className="toggle flex uppercase hover:cursor-pointer"
        htmlFor="dark-mode"
        id="dark-mode-label"
        // tabIndex={0}
      >
        <input
          aria-labelledby="dark-mode-label"
          checked={darkMode}
          className="sr-only"
          id="dark-mode"
          name="darkMode"
          tabIndex={0}
          type="checkbox"
          value={darkMode ? 'dark' : 'light'}
          onChange={() => toggleDarkMode((prevValue) => !prevValue)}
          // onClick={() => toggleDarkMode((prevValue) => !prevValue)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              toggleDarkMode(!darkMode)
            }
          }}
        />
        {themeIcons.map((icon) => (
          <span
            key={icon.label}
            className={`toggle-icon text-toggle text-queen-blue hover:text-gunmetal hover:dark:text-dark-toggle-hover gap-x-4 dark:text-white ${
              darkMode ? icon.toggleOnClass : icon.toggleOffClass
            }`}
          >
            {icon.label}
            {icon.icon}
          </span>
        ))}
      </label>
    </header>
  )
}

export default Header
