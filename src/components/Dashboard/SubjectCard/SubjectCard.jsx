import SubjectStats from "../SubjectStats/SubjectStats"
import './SubjectCard.css'
export default function SubjectCard(){
    return(
        <div className="subject-card">
            <h3>Subjects</h3>
            <div className="stats-subject">
                <SubjectStats /> 
            </div>
        </div>
    );
}