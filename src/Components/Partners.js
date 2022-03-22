import SABnho from '../Images/sabnho.svg';
import Partner1 from '../Images/partner1.svg';
import Partner2 from '../Images/partner2.svg';

const Partners = () => {

    return (
        <section id = 'partners'>
            <p className = 'partners-container'> HỢP TÁC VỚI SAB </p>

            <img  src={SABnho} alt='sabnho' className = 'SABnho'/>

            <div class = 'partners-logo'> 
                <img src={Partner1} alt='partner1' height = '88'/>
                <img src={Partner2} alt='partner2' height = '95'/>
            </div>
        </section>
    )
}

export default Partners