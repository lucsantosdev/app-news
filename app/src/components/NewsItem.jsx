import image from '../assets/news.png';

const NewsItem = ({ title, description, src, url, publishedAt, author, source }) => {
  // Função para formatar a data de ISO para MM/DD/YYYY
  const formatDate = (dateString) => {
    if (!dateString) return "Data não disponível";
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  return (
    <article 
      className="hover-lift"
      style={{
        background: 'var(--gradient-primary)',
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid var(--border-subtle)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        height: 'fit-content',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.5)';
        e.currentTarget.style.boxShadow = '0 8px 40px rgba(0, 0, 0, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-subtle)';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
      }}
    >
      {/* Image Container */}
      <div style={{
        position: 'relative',
        height: '220px',
        overflow: 'hidden'
      }}>
        <img 
          src={src || image} 
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
          }}
        />
        
        {/* Source Badge */}
        {source && (
          <div style={{
            position: 'absolute',
            top: '15px',
            left: '15px',
            background: 'rgba(212, 175, 55, 0.9)',
            color: '#1a1a1a',
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: '600',
            backdropFilter: 'blur(10px)'
          }}>
            {source}
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '25px' }}>
        {/* Title */}
        <h3 
          className="serif-font"
          style={{
            fontSize: '1.4rem',
            fontWeight: '600',
            color: 'var(--text-primary)',
            lineHeight: '1.4',
            marginBottom: '15px',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '0.95rem',
          lineHeight: '1.6',
          marginBottom: '20px',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {description || "No description available"}
        </p>

        {/* Meta Information */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
          flexWrap: 'wrap',
          gap: '10px'
        }}>
          <div style={{
            color: 'var(--text-muted)',
            fontSize: '0.85rem'
          }}>
            <span>{formatDate(publishedAt)}</span>
            {author && (
              <span style={{ marginLeft: '10px' }}>
                by {author.length > 20 ? author.substring(0, 20) + '...' : author}
              </span>
            )}
          </div>
        </div>

        {/* Read More Button */}
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'linear-gradient(45deg, #d4af37, #f4d03f)',
            color: '#1a1a1a',
            padding: '12px 24px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '0.9rem',
            transition: 'all 0.3s ease',
            border: 'none',
            cursor: 'pointer',
            letterSpacing: '0.5px'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 20px rgba(212, 175, 55, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
        >
          Read Article
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
          </svg>
        </a>
      </div>
    </article>
  );
}

export default NewsItem;