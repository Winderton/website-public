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
                <li><Link href="https://www.youtube.com/channel/winderton">Youtube</Link></li>
                <li><Link href="https://www.patreon.com/winderton">Patreon</Link></li>
            </ul>
            <a>
                <span class="bar"></span>
            </a>
        </nav>
    </>
    )
}

export default Nav;