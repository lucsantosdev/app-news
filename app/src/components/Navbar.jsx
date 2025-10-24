const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg" style={{
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
      borderBottom: '1px solid rgba(212, 175, 55, 0.3)',
      backdropFilter: 'blur(10px)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 2px 20px rgba(0, 0, 0, 0.5)'
    }}>
      <div className="container-fluid" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <a className="navbar-brand" href="#" style={{ textDecoration: 'none' }}>
          <span className="serif-font" style={{
            background: 'linear-gradient(45deg, #d4af37, #f4d03f)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '2rem',
            fontWeight: '700',
            letterSpacing: '1px'
          }}>
            The News App
          </span>
        </a>
        
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ 
            color: '#d4af37',
            padding: '8px',
            borderRadius: '6px',
            border: '2px solid #d4af37'
          }}
        >
          <span style={{
            display: 'block',
            width: '25px',
            height: '3px',
            backgroundColor: '#d4af37',
            margin: '5px 0',
            borderRadius: '2px',
            transition: 'all 0.3s ease'
          }}></span>
          <span style={{
            display: 'block',
            width: '25px',
            height: '3px',
            backgroundColor: '#d4af37',
            margin: '5px 0',
            borderRadius: '2px',
            transition: 'all 0.3s ease'
          }}></span>
          <span style={{
            display: 'block',
            width: '25px',
            height: '3px',
            backgroundColor: '#d4af37',
            margin: '5px 0',
            borderRadius: '2px',
            transition: 'all 0.3s ease'
          }}></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto" style={{ gap: '10px' }}>
            {[
              { name: 'Latest News', category: 'general' },
              { name: 'Technology', category: 'technology' },
              { name: 'Business', category: 'business' },
              { name: 'Health', category: 'health' },
              { name: 'Science', category: 'science' },
              { name: 'Sports', category: 'sports' },
              { name: 'Entertainment', category: 'entertainment' }
            ].map((item, index) => (
              <li key={index} className="nav-item">
                <a 
                  className="nav-link px-3 py-2" 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setCategory(item.category);
                  }}
                  style={{
                    color: '#ffffff',
                    fontWeight: '500',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    border: '1px solid transparent',
                    fontSize: '0.95rem',
                    letterSpacing: '0.5px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(45deg, #d4af37, #f4d03f)';
                    e.target.style.color = '#1a1a1a';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 4px 15px rgba(212, 175, 55, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = '#ffffff';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;