import './Header.css'
import {FaSearch} from 'react-icons/fa'
const Nav = () => {
    return (
        <>
            <nav className='nav'>
                <form>
                    <input className='search' type='text' placeholder='Busque um produto' />
                    <button className='nav-button' type='submit'><FaSearch/></button>
                </form>

            </nav>
        </>
    )
}

export default Nav;