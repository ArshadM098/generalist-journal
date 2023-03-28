import Link from "next/link"

export default function NavBtns({children, link}) {
  // Component that renders a navigation button

  return (
    <p className="text-white px-5 py-2 text-3xl text-left justify-items-end test">
      {/* Create a link to the provided URL */}
      <Link href={link}>
        {/* Display children inside the link */}
        <span className="hover:underline transition-all hover:cursor-pointer select-none">
          {children}
        </span>
      </Link>
    </p>
  )
}