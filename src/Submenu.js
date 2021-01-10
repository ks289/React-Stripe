import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const { isSubmenuOpen, location, page: {page, links} } = useGlobalContext();
  const container = useRef(null);
  const [columns, setColumns] = useState("col-2");

  useEffect(() => {
    setColumns("col-2"); // default value
    const submenu = container.current;
    const { centre, bottom } = location;
    submenu.style.left = `${centre}px`;
    submenu.style.top = `${bottom}px`
    
    // Changing the size of the submenu depending on how many items are to be displayed
    if (links.length === 3) {
      setColumns("col-3");
    }
    if (links.length > 3) {
      setColumns("col-4");
    }
  }, [location, links]);

  return (
    <aside className={`${isSubmenuOpen ? "submenu show" : "submenu"}`} ref={container}>
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return <a key={index} href={url}>
            {icon}
            {label}
          </a>
        })}
      </div>
    </aside>
  );
}

export default Submenu
