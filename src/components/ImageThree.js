import { Parallax } from 'react-parallax';
import Image1960 from '../img/1960.jpeg'
const ImageSix = () => (
    <Parallax className='image' blur={0} bgImage={Image1960} strength={600} bgImageStyle={{ minHeight: "100vh" }}>
        <div className='content'>
            <span className="img-txt">MAD WORLD</span>
        </div>
    </Parallax>
);

export default ImageSix
