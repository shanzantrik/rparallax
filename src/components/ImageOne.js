import { Parallax } from 'react-parallax';
import landingimg from '../img/alianbg_op.png'
import man from '../img/man.png'


const ImageOne = () => (
    <Parallax className='image' blur={0} bgImage={landingimg} strength={600} bgImageStyle={{ minHeight: "100vh" }}>
        <div className='content'>
            <span className="img-txt">MAD WORLD</span>
            <img src={man} alt="ManImage" />
        </div>
    </Parallax>
);

export default ImageOne
