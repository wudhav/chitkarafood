import Header from './components/header';
import UploadForm from './components/form';
import Card from './components/card';
import SubHeader from './components/subHeader';

function App() {
  return (
    <div>
      <Header />
      {/* <UploadForm /> */}
      <SubHeader />
      <Card />
      <Card />
      <footer id='footer'>
        After uploading your mess card, If any sutdent buys it, he or she will contact you for your mess card. We don't take any responsibility for the same but, as a human being, we suppose that you know how it feels to be hungry and cheated at the same time. So, we request you to be honest with the information that you provide.
      </footer>
      
    </div>
  );
}

export default App;