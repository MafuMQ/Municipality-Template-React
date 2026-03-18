import { municipality } from '../config/municipalityConfig'

const { hero, social } = municipality

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="slider-container">
        <div className="slide slide-1" style={{ backgroundImage: `url('${hero.backgroundImage}')` }}></div>
      </div>
      <div className="social-sidebar">
        <a href={social.facebook} target="_blank" rel="noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href={social.twitter}><i className="fab fa-x-twitter"></i></a>
        <a href={social.youtube}><i className="fab fa-youtube"></i></a>
        <a href={social.instagram}><i className="fab fa-instagram"></i></a>
      </div>
    </section>
  )
}
