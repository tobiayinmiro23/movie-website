import { footerLink, footerLinkImg } from '../data/FooterData'

const Footer = () => {
    return (
        <footer className='bg-[black] text-[white] p-[1rem] pb-[12rem] '>
            <div className="flex items-center justify-center mb-[0.4rem]  max-[950px]:flex-wrap">
                {footerLink.map((item) => <h5 className='text-[1.04rem] cursor-pointer hover:text-[red] m-[2rem] max-[680px]:m-[1rem]' key={item.id}>{item.name}</h5>)}
            </div>
            <div className="sm flex max-[680px]:m-[2rem]">

                {footerLinkImg.map((item) => <div key={item.id} className='flex h-[2rem] w-[2rem] mr-[0.5rem] p-[0.05rem] rounded-[50%] cursor-pointer hover:bg-[#e31f14]'> <img key={item.id} src={item.img} /> </div>)}


            </div>
        </footer>
    )
}

export default Footer
