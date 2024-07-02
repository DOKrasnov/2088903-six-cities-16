import {ReactElement, useMemo} from 'react';
import {OFFER_GALLERY_IMAGES} from '../../const/const.ts';
import OfferImage from '../offer-image/offer-image.tsx';
import * as faker from 'faker';


type GalleryWithId = {
  id: string;
  image: string;
}

function OfferGallery(): ReactElement {

  const galleryWithId: GalleryWithId[] = useMemo(() => OFFER_GALLERY_IMAGES.map((image) => ({
    id: faker.datatype.uuid(),
    image
  })), []);

  return (
    <div className="offer__gallery">
      {
        galleryWithId.map(({id, image}) => (
          <OfferImage
            key={id}
            imagePath={image}
          />
        ))
      }
    </div>
  );
}

export default OfferGallery;
