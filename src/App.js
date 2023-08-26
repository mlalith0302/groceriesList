import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Additem from "./Additem";
import SearchItem from "./SearchItem";
import { useState } from 'react'
function App() {

  const [items, SetItems] = useState(JSON.parse(localStorage.getItem('groceriesList')));

  const [newItem, SetNewItem] = useState('');

  const [search, setSearch] =  useState('');

  const SetAndSave = (newItem)=>{
    SetItems(newItem);
    localStorage.setItem('groceriesList', JSON.stringify(newItem));
  }

  const addItem = (item)=>{
    const id = items.length ? items[items.length-1].id + 1 : 1;
    const myNewItem = {id, checked: false, item};
    const listItems = [...items, myNewItem];
    SetAndSave(listItems);
  }

  const handleCheck = (id)=>{
      const listItems = items.map((item)=> item.id === id ? {...item, checked: !item.checked} : item);
      SetAndSave(listItems);
  }

  const handleDelete = (id)=>{
      const listItems= items.filter((item)=>item.id!== id);
      SetAndSave(listItems);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    SetNewItem('')

  }

  return (
    <div className="App">
      <Header 
        title="Groceries List"
      />
      <Additem 
        newItem={newItem}
        SetNewItem={SetNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <Content 
        items={items.filter(item=> ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer 
        length={items.length}
      />
    </div>
  );
}

export default App;
