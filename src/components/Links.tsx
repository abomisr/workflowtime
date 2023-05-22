import Link from "next/link"
import { navbarLinks } from "../../constants"
import { useAppStore } from "../../lib/store"

const Links = () => {
    const {closeAllClicked} = useAppStore()
  return (
    <div className="flex items-center justify-center flex-col gap-4">
        {navbarLinks.map((link) => (
            <Link
            href={`/${link.link}`}
            onClick={closeAllClicked}
            className="flex items-center justify-center bg-second-light dark:bg-second-dark drop-shadow-lg rounded-3xl"
            >
              <div
              key={link.link}
                style={{backgroundColor:link.color}}
                className={`p-2.5 drop-shadow-md text-[28px] text-white rounded-full`}
              >
                <link.icon />
              </div>
                <p className="font-bold px-4">{link.title}</p>
            </Link>
            ))}
    </div>
  )
}

export default Links