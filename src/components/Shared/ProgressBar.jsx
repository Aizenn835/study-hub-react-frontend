import './ProgressBar.css'

export default function ProgressBar({current , total , color}){
    const percentage = (current / total) * 100;

    return(
        <div className="progress-track">
            <div className="progress-fill"  style={{width: `${percentage}%`, backgroundColor:color}}></div>
        </div>
    );
}