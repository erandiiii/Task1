const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div>
        <button onClick={toggleDropdown}>
          {isOpen ? 'Close' : 'Open'} Dropdown
        </button>
        <div
          style={{
            height: isOpen ? '200px' : '0px',
            overflow: 'hidden',
            transition: 'height 0.3s ease'
          }}
          className='dropdown-content'
        >
          <h1>HI</h1>
         
        </div>
      </div>
    );
  };