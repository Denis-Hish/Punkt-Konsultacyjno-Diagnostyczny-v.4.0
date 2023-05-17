import React from 'react';
import logoSnr from './../img/logo-snr.png';
import logoNzoz from './../img/logo-nzoz.png';

const FooterNew = () => {
   return (
      <section className="footernew">
         <div className="container">
            <p>
               Punkt Konsultacyjno-Diagnostyczny działa w ramach Poradni NZOZ "Nadzieja Rodzinie" prowadzonej przez
               Stowarzyszenie "Nadzieja Rodzinie"
            </p>
            <img src={logoSnr} alt="Logo" />
            <img src={logoNzoz} alt="Logo" />
            <p>Zapraszamy w godzinach: wtorek od 16:00 do 19:00 czwartek od 09:00 do 11:00 </p>
            <p>tel. 503-147-303 </p>
            <p>e-mail: rejestracja@snr.org.pl</p>
         </div>
      </section>
   );
};

export default FooterNew;