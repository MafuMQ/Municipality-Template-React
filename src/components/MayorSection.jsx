import mayorImg from '../assets/Councillor.png'
import { municipality } from '../config/municipalityConfig'

export default function MayorSection() {
  const { name, mayor } = municipality
  return (
    <section className="container mayor-section">
      <div className="mayor-image">
        <img
          src={mayorImg}
          alt={`Executive Mayor of ${name}`}
        />
      </div>
      <div className="mayor-content">
        <h6>{name}</h6>
        <h4>{mayor.title}</h4>
        <h1>{mayor.name}</h1>
        <p>
          Fellow citizens, uMhlabuyalingana Local Municipality remains committed to delivering
          quality services to our communities. Situated in the northeastern corner of KwaZulu-Natal,
          along the border with Mozambique, our municipality serves approximately 191 660 residents
          across 20 wards and four traditional council areas.
        </p>
        <br />
        <p>
          Our focus remains on improving quality of life, creating a pleasant living and working
          environment, and promoting investment and economic growth within our municipal area. We
          are dedicated to involving local communities and stakeholders in municipal affairs and
          delivering services efficiently and effectively.
        </p>
        <br />
        <p>
          Together, with the support of our communities, Council, and administration, we will
          continue to build a viable, sustainable, and prosperous municipality for all.
        </p>
      </div>
    </section>
  )
}
