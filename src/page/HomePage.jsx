import "../assets/css/homePeges.css"; // Importa el archivo CSS
import Carousel from "react-bootstrap/Carousel";

import universityImage from "../assets/img/university.jpg";
import universityImage1 from "../assets/img/univesity0.jpg";
import universityImage2 from "../assets/img/university3.jpg";
import { CarouselImagen } from "../components/CarouselImagen";
import { CarouselText } from "../components/CarouselText";
export const HomePage = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <CarouselImagen src={universityImage} text="First slide" />
        <Carousel.Caption>
          <div className="university-homepages ">
            <CarouselText
              textH1="Bienvenido a la Universidad"
              textH2="Proyecto: Página Principal"
              textH5=" También incluí un enlace  `Link` que redirige a la
                ruta anidada `/nested`. Al hacer clic en este enlace, utilicé
                el contexto global
                <span> `useAppContext`</span>para establecer un valor,
                permitiendo una navegación y gestión de estado más fluida en
                la ruta anidada. "
            />
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImagen src={universityImage1} text="Second slide" />
        <Carousel.Caption>
          <div className="university-homepages ">
            <CarouselText
              textH1="Bienvenido a la Universidad"
              textH2="Proyecto: Página Principal"
              textH5=" También incluí un enlace  `Link` que redirige a la
                ruta anidada `/nested`. Al hacer clic en este enlace, utilicé
                el contexto global
                <span> `useAppContext`</span>para establecer un valor,
                permitiendo una navegación y gestión de estado más fluida en
                la ruta anidada. "
            />
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImagen src={universityImage2} text="Third slide" />
        <Carousel.Caption>
          <div className="university-homepages ">
            <CarouselText
              textH1="Bienvenido a la Universidad"
              textH2="Proyecto: Página Principal"
              textH5=" También incluí un enlace  `Link` que redirige a la
                ruta anidada `/nested`. Al hacer clic en este enlace, utilicé
                el contexto global
                <span> `useAppContext`</span>para establecer un valor,
                permitiendo una navegación y gestión de estado más fluida en
                la ruta anidada. "
            />
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
