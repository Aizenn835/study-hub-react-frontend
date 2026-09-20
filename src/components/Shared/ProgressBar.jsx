import './ProgressBar.css'

export default function ProgressBar(){
    return(
        <div className="progress-track">
            <div className="progress-fill" style={{width:"90%"}}></div>
        </div>
    );
}