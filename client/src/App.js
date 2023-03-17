import React, {useEffect, useState} from "react";
import { PostItem } from "./PostItem";
import { PostList } from "./PostList";
import './App.css';

function App() {

  const [itemData, setItemData] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    // Get posts from the API with fetch.
    console.log(itemData.items)
    fetch("/api/posts")
    .then(response => response.json())
    .then(data => {
      // Set itemData value with the posts values.
      setItemData(data)
      {!!itemData.items && setTotalItems(itemData.items['length'])}
      // Set loading state to false.
      setLoading(false);
      
    })
  }, [loading]);
  
  return (
    <React.Fragment>
      {!!loading && <p>cargando...</p>}
      <PostList totalItems={totalItems}>
        {(!loading && !!itemData.items) && itemData.items.map((item) => (
          <PostItem
            // post items props
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </PostList>
    </React.Fragment>
  );
}

export { App };
