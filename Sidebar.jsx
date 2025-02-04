import { useState, useCallback } from "react"

/**

 * @param {Object} props 
 * @param {Array<string>} props.initialMenuItems 
 * @returns 
 */
export default function Sidebar({ initialMenuItems = [] }) {
  let [newMenuItem, setNewMenuItem] = useState("") 
  let [menuItems, setMenuItems] = useState(initialMenuItems) 
  let [filter, setFilter] = useState("") 

  // Adding a new menu item to the list
  let addMenuItem = useCallback(() => {
    if (newMenuItem.trim() !== "") {
      setMenuItems((prevItems) => [newMenuItem, ...prevItems]) 
      setNewMenuItem("")
    }
  }, [newMenuItem]) 


  let filteredMenuItems = menuItems.filter((item) =>
    item.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
    
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)} // Update new menu item input
        placeholder="Add a new menu item..."
      />
      <br />
      <button onClick={addMenuItem}>Add Item</button>
      <br />

      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)} 
        placeholder="Filter by..."
      />
      <br />

      <ul>
        {filteredMenuItems.map((item, index) => (
          <li key={index}>{item}</li> // Render each filtered menu item
        ))}
      </ul>
    </div>
  )
}
