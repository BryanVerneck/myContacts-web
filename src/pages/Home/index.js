import { Link } from 'react-router-dom';
import {
  Card, Container, Header, ListContainer,
  InputSearchContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import Trash from '../../assets/images/icons/trash.svg';
import Edit from '../../assets/images/icons/edit.svg';
// import Modal from '../../components/Modal';
// import Loader from '../../components/Loader';

export default function Home() {
  return (
    <Container>
      {/* <Loader /> */}
      {/* <Modal danger /> */}

      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Bryan Verneck</strong>
              <small>Instagram</small>
            </div>
            <span>bryaverneck@gmail.com</span>
            <span>(41) 99999-9999</span>
          </div>

          <div className="actions">
            <Link to="/edit/123">
              <img src={Edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={Trash} alt="Trash" />
            </button>
          </div>
        </Card>

      </ListContainer>
    </Container>
  );
}
