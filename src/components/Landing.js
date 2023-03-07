import '../styles/core/reset.scss';
import '../styles/core/variables.scss';
import '../styles/components/landing.scss';
import Button from "./Button";
import Copy from './Copy';

const Landing = (props) => {

    return (
    <>
        <section className='landing'>
            <div className='landing__wrapper'>
                <h1 className='landing__title'>Welcome earthling 🖖</h1>
                <p className="landing__text">Come in and find out a little more about our Solar System</p>
                <Button />
            </div>
            <Copy/>   
        </section>
    </>
    );
}

export default Landing;