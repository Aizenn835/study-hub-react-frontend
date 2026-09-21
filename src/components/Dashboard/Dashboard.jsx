import Header from "./Header/Header"
import HeroCard from "./HeroCard/HeroCard.jsx"
import SubjectCard from "./SubjectCard/SubjectCard.jsx";
import './Dashboard.css'

export default function Dashboard(){
   return(
    <div className="main-dashboard">
      <Header />
      <section className="hero-dashboard">
         <HeroCard />
         <div className="middle-container">
            <SubjectCard />
            
         </div>
      </section>
    </div>
   );
}