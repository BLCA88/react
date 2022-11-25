import Buttons from './Buttons/buttons';
import NavMob from './Nav-mob';
import Header from '../Header/Header';
const Nav = () => {
    return (
        <nav className="bg-gray-800 h-40">
            <div className="mx-auto w-full px-0 sm:px-0 lg:px-0">
                <div className="relative flex h-30 items-center justify-around">
                    <NavMob/>
                    <div className="flex-auto items-center sm:items-center sm:justify-center">                                               
                        <Header/>                                              
                    </div>                    
                </div>
                <div className='bg-gray-400 flex justify-center items-center h-16 shadow-md uppercase tracking-wider'>
                    <Buttons/>                                                       
                </div>                
            </div>
        </nav>
    );
}

export default Nav;

