import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inbox from './Pages/Inbox';
import Sidebar from './components/Sidebar';
import Input from './Pages/Input';
import MessageModule from './Pages/MessageModule';
import Header from './Pages/Header';

const App = () => {
  return (
    <BrowserRouter>
    <Sidebar/>
    
      <Routes>
        
        <Route path="/" element={<Inbox />} />
        <Route path="/input" element={<Input />} />
        <Route path="/messagemodule/:id" element={<MessageModule />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
