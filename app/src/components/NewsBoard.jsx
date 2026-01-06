import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({category}) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        // Use a API serverless do Vercel em produção, NewsAPI diretamente em desenvolvimento
        const isProduction = window.location.hostname !== 'localhost';
        const url = isProduction 
            ? `/api/news?category=${category}&country=us`
            : `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setArticles(data.articles || []);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching news:", error);
                setLoading(false);
            });
    }, [category]);

    const getCategoryDisplayName = (cat) => {
        const categoryMap = {
            general: 'Latest News',
            technology: 'Technology',
            business: 'Business',
            health: 'Health',
            science: 'Science',
            sports: 'Sports',
            entertainment: 'Entertainment'
        };
        return categoryMap[cat] || 'News';
    };

  return (
    <div className="container-custom" style={{ 
        padding: '40px 20px',
        minHeight: '100vh'
    }}>
        {/* Header Section */}
        <div style={{ 
            textAlign: 'center', 
            marginBottom: '50px',
            borderBottom: '2px solid rgba(212, 175, 55, 0.3)',
            paddingBottom: '30px'
        }}>
            <h1 className="serif-font" style={{
                fontSize: '3.5rem',
                fontWeight: '600',
                color: '#ffffff',
                marginBottom: '10px',
                letterSpacing: '1px'
            }}>
                {getCategoryDisplayName(category)}
            </h1>
            <p style={{
                color: 'var(--text-secondary)',
                fontSize: '1.1rem',
                fontWeight: '300'
            }}>
                {new Date().toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                })}
            </p>
        </div>

        {/* Loading State */}
        {loading ? (
            <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                height: '300px'
            }}>
                <div style={{
                    width: '50px',
                    height: '50px',
                    border: '3px solid rgba(212, 175, 55, 0.3)',
                    borderTop: '3px solid #d4af37',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                }}></div>
                <style>
                {`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}
                </style>
            </div>
        ) : (
            /* News Grid */
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '30px',
                maxWidth: '1400px',
                margin: '0 auto'
            }} className="fade-in">
                {articles.length > 0 ? (
                    articles.map((news, index) => (
                        <NewsItem 
                            key={index} 
                            title={news.title} 
                            description={news.description} 
                            src={news.urlToImage} 
                            url={news.url} 
                            publishedAt={news.publishedAt}
                            author={news.author}
                            source={news.source?.name}
                        />
                    ))
                ) : (
                    <div style={{
                        gridColumn: '1 / -1',
                        textAlign: 'center',
                        padding: '60px 20px',
                        color: 'var(--text-secondary)'
                    }}>
                        <h3>No articles found for this category</h3>
                        <p>Please try selecting a different category</p>
                    </div>
                )}
            </div>
        )}
    </div>
  );
}

export default NewsBoard;