import Link from 'next/link'
import Script from 'next/script'

const Nav = () => {
    return (
        <>
        <Script src="../js/toggle.js"></Script>
        <nav>
            <ul>
                <li><Link href="/">Winderton</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/">Youtube</Link></li>
                <li><Link href="/">Patreon</Link></li>
            </ul>
        </nav>
    </>
    )
}

export default Nav