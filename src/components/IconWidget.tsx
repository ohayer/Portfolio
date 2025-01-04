import reactLogo from '../assets/react.svg';
import memoji from '../assets/memoji.jpg';

const IconWidget = () => {
    return (
        <div className='relative flex justify-center py-10 md:mt-20 sm:mt-28'>
            <img src={memoji} className='' alt="Memoji" />
            <img src={reactLogo} className="logo react absolute  sm:-top-2 -left-2 top-6" alt="React logo" />
            <img alt="TS Logo" className='logo ts absolute  top-2/3 -left-2' src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" />
            <img alt="Java logo" className='logo java absolute sm:-top-1/4 left-2/4 -top-3' src="https://www.vectorlogo.zone/logos/java/java-ar21.svg" />
            <img alt="Spring logo" className='logo spring absolute  bottom-1/2 -right-10' src="https://www.vectorlogo.zone/logos/springio/springio-ar21.svg" />
            <img alt="PostgreSQL logo" className='logo absolute bottom-4 left-3/4' src="https://www.vectorlogo.zone/logos/postgresql/postgresql-ar21.svg" />
            <img alt="DigitalOCean logo" className='pulse-glow absolute -bottom-1/4 right-25 rotate-3' src="https://www.vectorlogo.zone/logos/digitalocean/digitalocean-ar21.svg" />
        </div>
    );
}
export default IconWidget;