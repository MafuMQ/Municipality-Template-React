const images = [
  { src: 'https://richmond.gov.za/wp-content/uploads/2025/01/1.webp', alt: 'Gallery Image 1' },
  { src: 'https://richmond.gov.za/wp-content/uploads/2025/01/2.webp', alt: 'Gallery Image 2' },
  { src: 'https://richmond.gov.za/wp-content/uploads/2025/01/5.webp', alt: 'Gallery Image 3' },
  { src: 'https://richmond.gov.za/wp-content/uploads/2025/01/6.webp', alt: 'Gallery Image 4' },
  { src: 'https://richmond.gov.za/wp-content/uploads/2025/01/7.webp', alt: 'Gallery Image 5' },
  { src: 'https://richmond.gov.za/wp-content/uploads/2025/01/8.webp', alt: 'Gallery Image 6' },
  { src: 'https://richmond.gov.za/wp-content/uploads/2025/01/9.webp', alt: 'Gallery Image 7' },
  { src: 'https://richmond.gov.za/wp-content/uploads/2025/01/10.webp', alt: 'Gallery Image 8' },
]

export default function GallerySection() {
  return (
    <section className="gallery-section section-padding">
      <div className="container">
        <div className="gallery-header">
          <div>
            <h6>Richmond Local Municipality</h6>
            <h2>A Glimpse Of Our Municipality</h2>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <a href="/gallery/" className="btn">Gallery</a>
            <a href="#" className="btn" style={{ background: 'var(--color-white)' }}>YouTube</a>
          </div>
        </div>
        <div className="gallery-grid">
          {images.map((img) => (
            <img key={img.alt} src={img.src} alt={img.alt} />
          ))}
        </div>
      </div>
    </section>
  )
}
