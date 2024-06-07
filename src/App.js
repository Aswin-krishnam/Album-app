
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddAlbum from './component/AddAlbum';
import SearchAlbum from './component/SearchAlbum';
import DeleteAlbum from './component/DeleteAlbum';
import ViewAllAlbum from './component/ViewAllAlbum';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddAlbum/>}/>
        <Route path="/search" element={<SearchAlbum/>}/>
        <Route path="/delete" element={<DeleteAlbum/>}/>
        <Route path="/viewall" element={<ViewAllAlbum/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
