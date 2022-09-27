import { ReactComponent as CompanyIcon } from '../../../assets/images/icon-company.svg'

export const CompanyLink = (props: { company: string | undefined }) => {
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
