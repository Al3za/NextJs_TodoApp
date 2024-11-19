'use client'
import Link from "next/link"
import { useRouter} from 'next/navigation'

export default function Navbar() {
    const router = useRouter()
    return (
        <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
            <div className="max-w-xl mx-auto sm:px-4 flex justify-between">
                <h1 className="text-3xl font-bold mb-0">
                    <button onClick={() => [router.refresh(), router.push('/')]} >Next Todos </button>
                    {/* <Link href="/" className="text-white/90 no-underline hover:text-white">Next Todos</Link> */}
                    {/*Link works but dont uppdate the browser cache when a todo has been deleted from the Id root page */}
                    {/* router refresh has to be uset when the is a link (or other navigation method), involved that navigate us through routes segment*/}
                </h1>

            </div>
        </nav>
    )
}