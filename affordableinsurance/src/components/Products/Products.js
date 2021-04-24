import React, { useEffect, useState } from 'react';
import pic from './Carrier_logos/AlinscoLogo.svg';
import pic2 from './Carrier_logos/AmwinsLogos.svg';
import pic3 from './Carrier_logos/ASILogos.svg';
import pic4 from './Carrier_logos/bandwLogo.svg';
import pic5 from './Carrier_logos/gainscoLogo.svg';
import pic6 from './Carrier_logos/HomeownersLogo.svg';
import pic7 from './Carrier_logos/InfinityLogo.svg';
import pic8 from './Carrier_logos/ProgressiveLogo.svg';
import pic9 from './Carrier_logos/TapcoLogo.svg';
import pic10 from './Carrier_logos/TWIALogo.svg';
import pic11 from './Carrier_logos/WellingtonLogo.svg';
import pic12 from './Carrier_logos/WestonLogo.svg';








function Products() {

    const [products, setProducts] = useState([
pic, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, 
  ]);





  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  



return(

  <div className="product_container">

    <div className="product_logos">

      {products.map((val, id) => (
          <div className='products_logos'>

            <svg component={val}></svg>

          </div>
        ))}
      

    </div>
    

  </div>


);




}




export default Products;
