import { Footer, SearchBar } from '../AllFiles'
import logo from '../assets/clapperboard.png'
import { headerLink } from '../data/headerData'
import { Link } from 'react-router-dom'

function Home() {


    return (
        <>
            <div className='HomePageWrapper max-w-[1800px] h-[100vh] bg-[black] m-[auto]'>
                <nav className="heading flex items-center justify-center bg-[black]">
                    <div className="logo w-[3.4rem] max-[588px]:w-[2.7rem] max-[470px]:w-[2.2rem]">
                        <img src={logo} alt="" />
                    </div>
                    <h1 className='py-[0.7rem] px-[0.2rem] text-[3.2rem] text-[white] max-[588px]:text-[2rem] max-[470px]:text-[1.8rem] max-[470px]:p-[0.4rem]'>Movie mart.com</h1>
                </nav>
                <hr />
                <div className='HomePage bg-[white] pt-[2.4rem] pb-[3.5rem]'>
                    <div className="container m-[auto]">
                        <div className='mb-[1rem]'><Link to='/Search'><SearchBar /></Link></div>
                        <div className="categories flex items-start justify-center flex-wrap max-[620px]:justify-evenly">
                            {headerLink.map((item) => <h3 key={item.id} className='hover:text-[red] text-[white] text-[1.3rem] rounded-[0.14rem] bg-[black] m-[2rem] py-[0.4rem] px-[0.6rem] cursor-pointer max-[620px]:w-[45%] max-[620px]:mx-[0rem] max-[620px]:my-[1rem] max-[620px]:py-[1rem] max-[620px]:text-center max-[339px]:w-[47%] max-[339px]:text-[1rem]'> <Link to={`/${item.displayName}`}>{item.displayName}</Link></h3>)}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Home