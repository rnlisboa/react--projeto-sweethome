import Nav from '../Header/Header'
import './Banner.css'
const Banner = () => {
    return (
        <>
            <section className="banner-section">
                <img src='../../img/banner.jpg' />
                <div className='banner-center'>

                    <div className='banner-logo'>
                        SweetHome
                    </div>
                    <div className='banner-search'>
                        <Nav />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;