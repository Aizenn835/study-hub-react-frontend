import './HeroCard.css'

export default function HeroCard(){  
    const cardItems = [
        {header: 'Hours this week' , value: '35.0' , extraValue: 'hrs' , color: '#1a1a2e' },
        {header: 'Tasks completed' , value: '1/6', extraValue: '' , color: '#3b6fd6'},
        {header: 'Focus session',  value: '0', extraValue: 'today' , color: '#1a1a2e'},
        {header: 'Due today' , value: '2', extraValue: 'pending' , color: '#d64545'}
    ];

    return(
        <div className="card-container">
            {cardItems.map((item) => (
                <div className="card" key={item.header}>
                     <h3 className='card-header'>{item.header}</h3>
                     <div className="supporting-card">
                        <p className='card-value' style={{color: item.color}}>{item.value}</p>
                        <span className='supporting-text-card'>{item.extraValue}</span>
                     </div>
                </div>
            ))}
        </div>
    );
}