import Swal from 'sweetalert2';
import './App.css';

function App() {

const handleAlert =()=>{
  Swal.fire({
    title: "The Internet?",
    text: "That thing is still around?",
    icon: "question"
  });

}
  return (
    <button className='alert-btn' onClick={handleAlert}>ALERT</button>
  );
}

export default App;
