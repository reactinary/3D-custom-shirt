import state from '../store';
import { useSnapshot } from 'valtio';
import { motion, AnimatePresence } from 'framer-motion';
import { CustomButton } from '../components';
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation} from '../config/motion';


const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")} className="flex items-center gap-3 text-gray-600">
            <img src='./PFP.png' alt="PFP" className="w-12 h-12 object-contain"/>
            <p>Made with ❤️ by Maxime Montfort ⚛️ </p>
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text"> LET'S <br className="xl:block hidden" /> DO IT.  </h1>
            </motion.div>
            <motion.div {...headContentAnimation} className="flex flex-col gap-5">
              <p className="max-w-md font-normal text-gray-600 text-base">
              Create your unique and exclusive shirt with our brand-new 3D customization tool. <strong>Unleash your imagination</strong>{" "} and define your own style.
              </p>

              <CustomButton handleClick={() => state.intro = false}  type="filled" title="Customize It" customStyles="w-fit px-4 py-2.5 font-bold text-sm"/>
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home
