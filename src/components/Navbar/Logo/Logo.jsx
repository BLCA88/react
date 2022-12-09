import logoCabenli from '../../assets/img/logo_Cabenli.png';
import {Link} from 'react-router-dom'
const Logo = () => {
    return (
        <div className="flex flex-shrink-0 items-center box-content w-60">
            <Link to= {'/'}><img className="block h-22 w-full lg:hidden sm:hidden rounded-full" src={logoCabenli} alt="Cabenli" /></Link>
            <Link to= {'/'}><img className="hidden h-22 w-full lg:block sm:block rounded-full" src={logoCabenli} alt="Cabenli" /></Link>
        </div>
        
    );
}
 
export default Logo;
