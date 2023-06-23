import React from "react";

//include images into your bundle
//...

//IMPORTACION DE COMPONENTES
import Card from "./card.jsx";
import Footer from "./footer.jsx";
import Jumbo from "./jumbo.jsx";
import Navbar from "./navbar.jsx";

//DISPLAY DE COMPONENTES
const Home = () => {
  return (
    <div className="container">
      <Navbar brand="Start Bootstrap" />

      <Jumbo
        title="Una Calurosa Bienvenida!"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque porro minima exercitationem facilis eveniet, officiis placeat dignissimos natus sequi fugit ratione consequuntur ad debitis accusamus, aliquid explicabo ipsum nam non."
        button="Call to action!"
      />

      <div className="d-flex justify-content-between">
        <Card
          LinkImg="https://optimise2.assets-servd.host/maniacal-finch/production/animals/red-kangaroo-02-01.jpg?w=1200&auto=compress%2Cformat&fit=crop&dm=1654795233&s=c3ce4aa2f652473feecf05288c8df627"
          title="Card title"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis molestias unde ipsa quo cumque nulla."
          button="Find Out More!"
        />

        <Card
          LinkImg="https://optimise2.assets-servd.host/maniacal-finch/production/animals/red-kangaroo-02-01.jpg?w=1200&auto=compress%2Cformat&fit=crop&dm=1654795233&s=c3ce4aa2f652473feecf05288c8df627"
          title="Card title"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis molestias unde ipsa quo cumque nulla."
          button="Find Out More!"
        />

        <Card
          LinkImg="https://optimise2.assets-servd.host/maniacal-finch/production/animals/red-kangaroo-02-01.jpg?w=1200&auto=compress%2Cformat&fit=crop&dm=1654795233&s=c3ce4aa2f652473feecf05288c8df627"
          title="Card title"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis molestias unde ipsa quo cumque nulla."
          button="Find Out More!"
        />

        <Card
          LinkImg="https://optimise2.assets-servd.host/maniacal-finch/production/animals/red-kangaroo-02-01.jpg?w=1200&auto=compress%2Cformat&fit=crop&dm=1654795233&s=c3ce4aa2f652473feecf05288c8df627"
          title="Card title"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis molestias unde ipsa quo cumque nulla."
          button="Find Out More!"
        />
      </div>

      <Footer
      description="Copyright © My Website 2023"/>
    </div>
  );
};

export default Home;
