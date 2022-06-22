import { Parallax } from 'react-parallax';
import landingimg from '../img/landingpage.jpeg'
const ImageOne = () => (
    <Parallax className='image' blur={0} bgImage={landingimg} strength={600} bgImageStyle={{ minHeight: "100vh" }}>
        <div className='content'>
            <span className="img-txt">MAD WORLD</span>
        </div>
    </Parallax>
);

export default ImageOne
