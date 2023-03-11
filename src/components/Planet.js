const Planet = ({id, image, name, description, bodyType, age, temperature, distanceSun, diameter, lengthYear, urlNASA}) => {

    return (
        <main className="main">
            <section className="planet" key={id}>
                <img src={image} alt={name}></img>
                <h1 className="planet__name">{name}</h1>
                <div className="planet__description">
                    <p className="planet__text">{description}</p>
                    <p className="planet__source">Source:<a href={urlNASA} target="_blank" rel="noopener noreferrer">NASA</a></p>
                </div>
                <div className="planet__buttons">
                    <button className="planet__btn">Overview</button>
                    <button className="planet__btn">Internal structure</button>
                </div>
                <ul className="planet__data">
                    <li className="planet__item">
                        <h5>Type</h5>
                        <p>{bodyType}</p>
                    </li>
                    <li className="planet__item">
                        <h5>Age</h5>
                        <p>{age}</p>
                    </li>
                    <li className="planet__item">
                        <h5>Temperature</h5>
                        <p>{temperature}</p>
                    </li>
                    <li className="planet__item">
                        <h5>Distance from Sun</h5>
                        <p>{distanceSun}</p>
                    </li>
                    <li className="planet__item">
                        <h5>Diameter</h5>
                        <p>{diameter}</p>
                    </li>
                    <li className="planet__item">
                        <h5>Length of year</h5>
                        <p>{lengthYear}</p>
                    </li>
                </ul>
            </section>
        </main>
    );
}

export default Planet;