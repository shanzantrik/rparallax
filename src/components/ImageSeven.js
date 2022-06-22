import { Parallax } from 'react-parallax';
import Image1970 from '../img/1970.jpeg'

const ImageSeven = () => (
    <Parallax className='image' blur={0} bgImage={Image1970} strength={600} bgImageStyle={{ minHeight: "100vh" }}>
        <div className='content'>
            <span className="img-txt">MAD WORLD</span>
        </div>
    </Parallax>
);

export default ImageSeven
