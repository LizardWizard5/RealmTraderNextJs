// Server side approach
import React from "react";
const items = [
    { id: "1", name: "Item 1" },
    { id: "2", name: "Item 2" },
  ];
  
  export default function DiscoverTabs() {
  
    const handleDelete = async (data) => {
        "use server";
        
        // API call to delete an item
        console.log(data.itemId);
        console.log(data.get("itemId"));    
        
        // Example API call: await fetch(`/api/deleteItem`, { method: 'POST', body: data });
      };
  
    return (
      <div>
        {items.map((el, i) => (
          <>
            <div key={i}>{el.name}</div>
  
            <form action={handleDelete}>
              <input name="itemId" className="hidden" value={el.id}/>
              <button type="submit">Delete</button>
            </form>
          </>
        ))}
      </div>
    );
  }