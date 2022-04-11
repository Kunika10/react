import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
    {
      original: 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg',
      thumbnail: 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg ',
      thumbnailPosition: 'top',
    },

    {
        original: 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg',
        thumbnail: 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg ',
        thumbnailPosition: 'top',
      },
    
  
  ];
function Productview() {
  return (
    <div>
    <div className='imgthumbnil'>
    <ImageGallery items={images} />;
    </div>
    </div>
  )
}

export default Productview

