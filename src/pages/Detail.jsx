import Nav from '../components/Navbar/Nav'
import Content from '../components/Content/Content'
import Footer from '../components/Footer/Footer'
import FormPencarian from '../components/FormPencarian'
import DetailComponent from '../components/DetailComponent';
import '../App.css';



function Detail() {
  return (
    <div className='Home'>
            <Nav/>
            <Content/>
            <FormPencarian/>
            <DetailComponent/>
            <Footer/>
    </div>

  );
}

export default Detail;