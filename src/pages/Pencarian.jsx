import Nav from '../components/Navbar/Nav'
import Content from '../components/Content/Content'
import Footer from '../components/Footer/Footer'
import FormPencarian from '../components/FormPencarian'
import HomeComponent from '../components/CardCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';



function Pencarian() {
  return (
    <div className='Home'>
            <Nav/>
            <Content/>
            <FormPencarian/>
            <HomeComponent/>
            <Footer/>
    </div>

  );
}

export default Pencarian;