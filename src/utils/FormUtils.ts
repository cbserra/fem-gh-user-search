import React from 'react'

// async function validateForm(form: FormData): Promise<boolean> {
//   const { entries: fields } = form
//   const promises = fields.map((field) => field.validate())
//   const results = await Promise.all(promises)

//   return results.every((result) => result)
// }

export function validateUserName(userNameRef: React.RefObject<HTMLInputElement>): boolean {
  const userName = userNameRef.current?.value

  if (!userName) {
    userNameRef.current?.setCustomValidity('User name is required')
    userNameRef.current?.reportValidity()

    return false
  }

  // if (err) userNameRef.current.valid

  return userNameRef.current?.value !== ''
}

// export async function handleSearch(evt: React.FormEvent<HTMLFormElement>) {
//   evt.preventDefault()

//   new FormData(evt.currentTarget).forEach(console.log)

// console.log(.get('searchUser'))

//   if (!userName || userName === data?.login) {
//     return
//   }

//   await refetch({ url: userName || 'octocat' })
//     .then(console.info)
//     .catch(console.error)
// }
