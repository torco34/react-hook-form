import "../assets/css/homePeges.css"; // Importa el archivo CSS
import Carousel from "react-bootstrap/Carousel";

import ExampleCarouselImage from "../assets/img/univecity.jpg";

export const HomePage = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <img src={ExampleCarouselImage} alt="" />
        <Carousel.Caption>
          <div className="university-homepages container">
            <div className="university-homepage container">
              <h1>Bienvenido a la Universidad XYZ</h1>
              <p>Explora nuestras oportunidades educativas de clase mundial.</p>

              {/* Sección de explicación del proyecto */}
              <section className="project-explanation">
                <h2>Proyecto: Página Principal</h2>
                <p>
                  En esta página, he construido la página principal de mi
                  aplicación. Diseñé un formulario utilizando{" "}
                  <span>`react-hook-form`</span> que incorpora
                  <span> ` FieldArray`</span> para gestionar un conjunto
                  dinámico de campos.
                </p>
                <p>
                  También incluí un enlace <span> `Link`</span>que redirige a la
                  ruta anidada `/nested`. Al hacer clic en este enlace, utilicé
                  el contexto global
                  <span> `useAppContext`</span>para establecer un valor,
                  permitiendo una navegación y gestión de estado más fluida en
                  la ruta anidada.
                </p>
              </section>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    // <div className="university-homepages container">
    //   <div className="university-homepage container">
    //     <h1>Bienvenido a la Universidad XYZ</h1>
    //     <p>Explora nuestras oportunidades educativas de clase mundial.</p>

    //     {/* Sección de explicación del proyecto */}
    //     <section className="project-explanation">
    //       <h2>Proyecto: Página Principal</h2>
    //       <p>
    //         En esta página, he construido la página principal de mi aplicación.
    //         Diseñé un formulario utilizando <span>`react-hook-form`</span> que
    //         incorpora
    //         <span> ` FieldArray`</span> para gestionar un conjunto dinámico de
    //         campos.
    //       </p>
    //       <p>
    //         También incluí un enlace <span> `Link`</span>que redirige a la ruta
    //         anidada `/nested`. Al hacer clic en este enlace, utilicé el contexto
    //         global
    //         <span> `useAppContext`</span>para establecer un valor, permitiendo
    //         una navegación y gestión de estado más fluida en la ruta anidada.
    //       </p>
    //     </section>
    //   </div>
    // </div>
  );
};
