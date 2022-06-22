import { Parallax } from 'react-parallax';
import landingimg from '../img/alianbg_op.png'
import Man from '../img/man.png'


const ImageOne = () => (
    <Parallax className='image' blur={0} bgImage={landingimg} strength={600} bgImageStyle={{ minHeight: "100vh" }}>
        <div className='content'>
            <span className="img-txt">MAD WORLD</span>
            <Parallax translateY={[-20, 20]}>
                <img src={Man} alt="Man" />
            </Parallax>
        </div>
    </Parallax>
);

export default ImageOne
