import { Parallax } from 'react-parallax';
import Image1950 from '../img/1950.jpeg'

const ImageFive = () => (
    <Parallax className='image' blur={0} bgImage={Image1950} strength={600} bgImageStyle={{ minHeight: "100vh" }}>
        <div className='content'>
            <span className="img-txt">MAD WORLD</span>
        </div>
    </Parallax>
);

export default ImageFive
