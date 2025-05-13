const Banner = ({type}) => {

    const renderBanner = ()=>{
        switch (type) {
            case 'home':
                return <div className="bg-cover h-screen w-full" style={{backgroundImage: "url('/src/assets/hero-image.jpg')"}}>heloo</div>;
            case 'product':
                return <div className="bg-cover h-screen w-full" style={{backgroundImage: "url('/src/assets/product-hero-image.jpg')"}}>product</div>;
            default:
                return <div className="bg-cover h-screen w-full" style={{backgroundImage: "url('/src/assets/hero-image.jpg')"}}></div>;
        }
    }
    return ( 
        <div>
            {renderBanner()}
        </div>
     );
}
 
export default Banner;