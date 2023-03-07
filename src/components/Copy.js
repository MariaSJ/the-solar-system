import '../styles/core/reset.scss';
import '../styles/core/variables.scss';
import '../styles/components/copy.scss';

const Copy = () => {

    return (
        <footer className="copy">
            <p className="copy__text">Made with <span className="copy__heart">❤︎</span> by <a className="copy__link" href="https://github.com/MariaSJ" target="_blank" rel="noreferrer">María SJ </a></p>    
        </footer>
    );
}

export default Copy;