import { useDarkMode } from '../../hooks/useDarkMode'
import { ReactComponent as MoonIcon } from '../../assets/images/icon-moon.svg'
import { ReactComponent as SunIcon } from '../../assets/images/icon-sun.svg'

const themeIcons = [
  {
    label: 'Dark',
    icon: <MoonIcon />,
    toggleOnClass: 'hidden',
    toggleOffClass: 'inline-flex'
  },
  {
    label: 'Light',
    icon: <SunIcon />,
    toggleOnClass: 'inline-flex',
    toggleOffClass: 'hidden'
  }
]
const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode()

  return (
    <header className="flex w-full items-center justify-between" id="site-header">
      <h1 className="text-heading-1 text-gunmetal dark:text-white">devfinder</h1>
      <label className="toggle flex uppercase hover:cursor-pointer" htmlFor="dark-mode">
        <input
          className="sr-only"
          id="dark-mode"
          name="darkMode"
          type="checkbox"
          onChange={() => toggleDarkMode((prevValue) => !prevValue)}
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
