
import "./CarouselImagem.css";


function CarouselImagem({linkImagem}) {
    return(
        <div className="car-img">
            <img src={linkImagem} alt="Slide" />
        </div>
    );

}

export default CarouselImagem;
