// Import
import React from 'react';
import { Container, Image } from 'react-bootstrap';

import './styles.css';

const HomePage = () => {
  const articles = [
    {
      id: 1,
      title: 'Non ergo erunt homines deliciis diffluentes',
      text: 'Alii nullo quaerente vultus severitate adsimulata patrimonia sua in inmensum extollunt, cultorum ut puta feracium multiplicantes annuos fructus, quae a primo ad ultimum solem se abunde iactitant possidere, ignorantes profecto maiores suos, per quos ita magnitudo Romana porrigitur, non divitiis eluxisse sed per bella saevissima, nec opibus nec victu nec indumentorum vilitate gregariis militibus discrepantes opposita cuncta superasse virtute.',
      image: "http://localhost:8080/illustrations/home2.jpg"
    },
    {
      id: 2,
      title: 'Hac ita persuasione',
      text: 'Sin autem ad adulescentiam perduxissent, dirimi tamen interdum contentione vel uxoriae condicionis vel commodi alicuius, quod idem adipisci uterque non posset. Quod si qui longius in amicitia provecti essent, tamen saepe labefactari, si in honoris contentionem incidissent; pestem enim nullam maiorem esse amicitiis quam in plerisque pecuniae cupiditatem, in optimis quibusque honoris certamen et gloriae; ex quo inimicitias maximas saepe inter amicissimos exstitisse.',
      image: "http://localhost:8080/illustrations/home3.jpg"
    },
  ];

  const articlesList = articles.map((article, index) => {

    return (
      <article key={article.id} className={`article row ${index % 2 === 1 && 'reverse'}`}>
        <figure className="col-md-4 d-md-block">
          <Image
            src={article.image}
            fluid
          />
        </figure>
        <div className="content col-md-8 col-12 text-md-left">
          <h3>{article.title}</h3>
          <p>{article.text}</p>
        </div>
      </article>
    );
  });

  return (
    <main>
      <section className="homePage">
        <Container className="mb-5">
          <h1>Paréidolie...oui mais encore?</h1>
          <figure>
            <Image
              className="img2"
              src="http://localhost:8080/illustrations/home1.jpg"
              fluid
            />
          </figure>
          <p>Inter haec Orfitus praefecti potestate regebat urbem aeternam ultra modum delatae dignitatis sese efferens insolenter, vir quidem prudens et </p>
        </Container>

        <Container>
          {articlesList}
        </Container>
      </section>
    </main>
  );
};

export default HomePage;
