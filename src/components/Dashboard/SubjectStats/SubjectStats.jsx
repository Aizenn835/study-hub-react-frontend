import ProgressBar from '../../Shared/ProgressBar'
import './SubjectStats.css'
import { IconMathIntegralX , IconBook , IconAtom , IconBuildingArch}  from '@tabler/icons-react';

export default function SubjectStats({subjectLogo}){
    const statsItems = [
        {logo: IconMathIntegralX , subject: "Mathematics" , current: 12.5 , total: 20 , value: "12 / 5h" , color: '#2b2d42'},
        {logo: IconBook , subject: "Literature"  , current: 8, total: 15 , value: "8h / 15h" , color: '#8b5cf6'},
        {logo: IconAtom , subject: "Physics"   , current: 5.5 , total: 18, value: "5.5h / 18h" , color: '#3b82f6'},
        {logo: IconBuildingArch , subject: "History"  , current: 9 , total: 12, value: "9h / 12h" , color: '#16a34a'}
    ];

    return(
        <div className="subject-container">
            <div className="stats-container">
                {statsItems.map((item) => {
                    const Icon = item.logo;
                    return(
                        <div className='subject-card-container' key={item.subject}>
                            <div className="stats-values">
                                <div className="stats-value-container">
                                    <Icon stroke={2} size={18}/>
                                    <p>{item.subject}</p>
                                </div>
                                <span className='stats-hours'>{item.value}</span>
                            </div>
                            <ProgressBar current={item.current} total={item.total} color={item.color}/>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}