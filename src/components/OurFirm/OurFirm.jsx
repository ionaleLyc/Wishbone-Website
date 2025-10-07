import './OurFirm.css'
import stephen_collier from '../../assets/people/stephen_collier.png'

function OurFirm() {
    return (
        <div className='our-firm-section'>

            <div className='our-firm-wrapper'>

                <div className='our-firm-header'>
                    <h2>Our Firm</h2>
                </div>

                <div className='our-firm-content'>
                    <div className='our-firm-content-description'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                        </p>
                    </div>

                    <div className='our-firm-content-author'>
                        <img src={stephen_collier} alt="" />
                        <div className='our-firm-content-author-info'>
                            <p className='our-firm-content-author-info-name'>Stephen Collier</p>
                            <p className='our-firm-content-author-info-post'>Senior Partner</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default OurFirm;