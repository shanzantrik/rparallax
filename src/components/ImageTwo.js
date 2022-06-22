import { Parallax } from 'react-parallax';
import Porsche from '../img/Background.png'
import Man from '../img/man.png'

const ImageTwo = () => (
    <Parallax className='image' blur={0} bgImage={Porsche} strength={600} bgImageStyle={{ minHeight: "100vh" }}>
        <div className='content'>
            <span className="img-txt">MAD WORLD</span>
            <img src={Man} />
        </div>
    </Parallax>
);

export default ImageTwo
