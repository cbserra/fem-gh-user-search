import { GitHubUser } from 'types/Types'

const Main = (props: { data: GitHubUser }) => {
  return (
    <div className="rounded-input-radius dark:bg-yankees-blue flex w-full items-center justify-between px-[2.4rem] pt-[3.2rem] pb-[3.8rem]">
      <pre>
        <span>{JSON.stringify(props?.data, null, 2)}</span>
        <span>{props?.data.avatar_url}</span>
        <span>{props?.data.html_url}</span>
        <span>{props?.data.name}</span>
        <span>{props?.data.login}</span>
        <span>{props?.data.created_at.toISOString()}</span>
        <span>{props?.data.bio}</span>
        <span>{props?.data.public_repos}</span>
        <span>{props?.data.followers}</span>
        <span>{props?.data.following}</span>
        <span>{props?.data.location}</span>
        <span>{props?.data.twitter_username}</span>
        <span>{props?.data.company}</span>
        <span>{props?.data.blog}</span>
      </pre>
    </div>
  )
}

export default Main
