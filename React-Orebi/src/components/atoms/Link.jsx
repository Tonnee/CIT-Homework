

const Link = ({ linkRef, linkText, className, children}) => {
  return (
    <>
          <a href={linkRef} className={className}>{linkText}{children}</a>
    </>
  )
}

export default Link
