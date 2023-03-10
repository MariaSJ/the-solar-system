const Planet = (props) => {

    return (
        <main className="main">
            <section className="planet">
                <img src={props.image} alt={props.name}></img>
                <h1 className="planet__name">{props.name}</h1>
                <div className="planet__description">
                    <p className="planet__text">{props.description}</p>
                    <p className="planet__source">Source:<a href={props.urlNASA} target="_blank" rel="noopener noreferrer">NASA</a></p>
                </div>
                <div className="planet__buttons">
                    <button className="planet__btn">Overview</button>
                    <button className="planet__btn">Internal structure</button>
                </div>
                <ul className="planet__data">
                    <li className="planet__item">
                        <h5>Type</h5>
                        <p>{props.bodyType}</p>
                    </li>
                    <li className="planet__item">
                        <h5>Age</h5>
                        <p>{props.age}</p>
                    </li>
                    <li className="planet__item">
                        <h5>Temperature</h5>
                        <p>{props.temperature}</p>
                    </li>
                    <li className="planet__item">
                        <h5>Distance from Sun</h5>
                        <p>{props.distanceSun}</p>
                    </li>
                    <li className="planet__item">
                        <h5>Diameter</h5>
                        <p>{props.diameter}</p>
                    </li>
                    <li className="planet__item">
                        <h5>Length of year</h5>
                        <p>{props.year}</p>
                    </li>
                </ul>
            </section>
        </main>
    );
}

export default Planet;