export function RedirectLink({ href, title }) {
  return (
    <a target="_blank" href={href} rel="noopener noreferrer">
      {title}
    </a>
  )
}
