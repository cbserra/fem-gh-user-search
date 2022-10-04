import { ReactComponent as LocationIcon } from '../../../assets/images/icon-location.svg'

export const LocationLink = (props: { location: string | undefined }) => {
  const { location } = props
  const hasLocation = location?.length

  return (
    <div
      className={`${
        hasLocation ? 'text-queen-blue dark:text-white' : 'text-queen-blue/50 dark:text-white/50'
      } flex gap-x-[1.2rem] md:order-1`}
    >
      <span className="w-8 text-left">
        <LocationIcon aria-label="Location Icon" />
      </span>
      <span className="">{location || 'Not Available'}</span>
    </div>
  )
}
