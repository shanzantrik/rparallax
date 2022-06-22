import { Parallax } from 'react-parallax';
import Image1940 from '../img/1940.jpeg'

const ImageFour = () => (
    <Parallax className='image' blur={0} bgImage={Image1940} strength={600} bgImageStyle={{ minHeight: "100vh" }}>
        <div className='content'>
            <span className="img-txt">MAD WORLD</span>
        </div>
    </Parallax>
);

export default ImageFour
