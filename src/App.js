import Header from 'Components/Header';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import productApi from './api/productApi';
import AlbumFeature from './features/Album';
import CounterFeature from './features/Counter';
import TodoFeature from './features/Todo';
import PageDetail from './features/Todo/pages/PageDetail';

function App() {
   useEffect(() => {
      const getProductList = async () => {
         const params = {
            _limit: 10,
         };

         const data = await productApi.getAll(params);
         console.log(data);
      };

      getProductList();
   }, []);

   return (
      <div className="App">
         <Header />

         <Routes>
            <Route path="/" element={<CounterFeature />} />
            <Route path="/todo" element={<TodoFeature />} />
            <Route path="/album" element={<AlbumFeature />} />
            <Route path="/todo/:todo-abc" element={<PageDetail />} />
         </Routes>
      </div>
   );
}

export default App;
