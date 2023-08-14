import { AxiosError, AxiosPromise, AxiosRequestConfig } from 'axios'
import { RefetchOptions } from 'axios-hooks'
import cx from 'classnames'
import React, { BaseSyntheticEvent, useCallback } from 'react'
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'
import { FieldErrors } from 'react-hook-form/dist/types/errors'

import { ReactComponent as SearchIcon } from '../../assets/images/icon-search.svg'

type FormValues = {
  userName: string
}

// type GitHubFormValue extends FormValue = {
//   githubUserName: GithubUserName
// }

// function isApiError(error: AxiosError): boolean {
//   return error.isAxiosError
// }

// function isFormError(isSubmitted: boolean, isValid: boolean, errors: FieldErrors): boolean {
//   return isSubmitted && !isValid && Object.keys(errors).length > 0
// }

const Search = (props: {
  error: AxiosError<any, any> | null
  userName: string
  loading: boolean
  setUserName: (userName: string) => void
  handleSearch: (evt: React.FormEvent<HTMLFormElement>) => void
  userNameRef: React.RefObject<HTMLInputElement>
  refetch: (
    config?: AxiosRequestConfig<any> | undefined,
    options?: RefetchOptions | undefined
  ) => AxiosPromise<any>
}): JSX.Element => {
  const { error: axiosError, setUserName, userNameRef, refetch } = props

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors, isValid, isSubmitted }
  } = useForm<FormValues>({
    // mode: 'onSubmit',
    // reValidateMode: 'onChange'
  })

  const onSubmit: SubmitHandler<FormValues> = async (
    data: FormValues,
    evt?: BaseSyntheticEvent<object, any, any> | undefined
  ) => {
    evt?.preventDefault()

    console.log(`🚀 ~ userNameRef.current?.value`, userNameRef.current?.value)

    console.log(data)
    console.log(evt)
    setUserName(data.userName)

    await refetch({ url: data.userName || 'octocat' })
      .then(console.info)
      .catch(console.error)

    // handleSearch(evt as React.FormEvent<HTMLFormElement>)

    // await refetch({ url: userName || 'octocat' })
    //   .then(console.info)
    //   .catch(console.error)
  }

  const onError: SubmitErrorHandler<FormValues> = async (
    errors: FieldErrors<FormValues>,
    evt?: BaseSyntheticEvent<object, any, any> | undefined
  ) => {
    evt?.preventDefault()

    console.log(`🚀 ~ userNameRef.current?.value`, userNameRef.current?.value)

    console.log(errors)
    console.log(evt)
  }

  const isApiError = useCallback(() => {
    const isAxiosError = axiosError?.isAxiosError ?? false

    console.log(`🚀 ~ isApiError ~ ?`, isAxiosError)

    return isAxiosError
  }, [axiosError])

  const isFormError = useCallback(() => {
    const isFormError = isSubmitted && !isValid && Object.keys(formErrors).length > 0

    console.log(`🚀 ~ isFormError ~ ?`, isFormError)

    return isFormError
  }, [formErrors, isSubmitted, isValid])

  // return (
  //   <form
  //     className={cx('search', {
  //       'search--loading': loading,
  //       'search--error': isFormOrApiError
  //     })}
  //     onSubmit={handleSubmit(onSubmit)}
  //   >
  //     <label className="search__label" htmlFor="searchUser">
  //       <SearchIcon className="search__icon" />
  //       <input
  //         className="search__input"
  //         id="searchUser"
  //         name="userName"
  //         placeholder="Search GitHub user"
  //         ref={userNameRef}
  //         {...register('userName', { required: 'User name is required' })}
  //       />
  //     </label>
  //     <button className="search__button" type="submit">
  //       Search
  //     </button>
  //     {isFormError() && (
  //       <div className="search__error">
  //         {Object.entries(errors).map(([key, value]) => (
  //           <div key={key}>{value.message}</div>
  //         ))}
  //       </div>
  //     )}
  //     {isApiError() && (
  //       <div className="search__error">
  //         <div>{error?.message}</div>
  //       </div>
  //     )}

  return (
    <>
      <form
        className={cx(
          'rounded-input-radius shadow-section',
          // 'py-[.7rem] pl-[1.6rem] pr-[.7rem] ',
          'p-[.7rem]',
          'md:p-[1rem]',
          'flex w-full items-center justify-between',
          // 'gap-x-2',
          'bg-off-white',
          'dark:bg-yankees-blue dark:shadow-transparent'
        )}
        id="search-bar"
        noValidate={true}
        // onSubmit={(evt) => handleSearch(evt)}
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <label htmlFor="userName">
          <SearchIcon
            aria-label="Search GitHub User Icon"
            className={cx(
              'text-azure ml-[.9rem] mr-[.9rem]',
              'w-[2rem]',
              'md:mr-[2.6rem] md:ml-[2.5rem] md:w-[2.4rem]',
              'not-sr-only'
            )}
            viewBox="0 0 24 24"
          />
        </label>
        <input
          // name="userName"
          {...register('userName', { required: 'User name is required' })}
          // ref={userNameRef}
          className={cx(
            'text-input md:text-input-lg bg-transparent',
            // ' w-auto',
            'w-full',
            'flex-shrink',
            // 'outline-none',
            // 'focus:outline-0',
            // 'focus:border-0',
            // 'focus-visible:outline-0',
            'focus:ring-0',
            'border-none',
            { 'w-1/2': isFormError() || isApiError() }
          )}
          tabIndex={0}
          id="search-user"
          // name="searchUser"
          placeholder="Search GitHub username…"
          type="text"
          // value={userName || ''}
          // onChange={(e) => setUserName(e.target.value)}
        />
        <span
          className={cx(
            'text-input md:text-input-lg',
            // 'w-20 md:w-48 lg:w-64',
            'w-fit whitespace-nowrap',
            'text-red-600'
          )}
        >
          {/* {loading && <p>Loading...</p>} */}
          {isFormError() && formErrors.userName?.message?.length && (
            <p>{formErrors.userName.message}</p>
          )}
          {isApiError() && <p>No Results</p>}
        </span>

        <button
          className="bg-azure hover:bg-azure/50 rounded-button-radius text-button md:text-button-lg py-5 px-[1.6rem] text-white "
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
