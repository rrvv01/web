import Link from 'next/link'

const Header = () => {
    return(
        <>
        <nav className='bg-red-900 py-4 px-8'>
            <div className='flex items-center justify-between container'>
                <div className='flex items-center font-bold'>
                    <Link href='/'>
                        <div className='text-lg text-white'>Clerk Auth</div>
                    </Link>
                </div>
                <div className='flex items-center font-bold'>
                    <Link
                    href="/Dashboard"
                    className='text-blue-300 hover:text-white mr-4'
                    >
                    대시보드
                    </Link>
                </div>
                <div className='flex items-center font-bold'>
                    <Link
                    href="/sign-in"
                    className='text-yellow-300 hover:text-white mr-4'
                    >
                    sign in
                    </Link>
                    <Link
                    href="/sign-up"
                    className='text-yellow-300 hover:text-white mr-4'
                    >
                    sign up
                    </Link>
                </div>
            </div>
        </nav>
        </>
    )
}
export default Header