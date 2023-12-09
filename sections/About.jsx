'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| An experience of taste and class" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Gentlemen,</span> My name is <span className="font-extrabold text-white">Sophia,</span> your bubbly, 
        thoughtful and caring sweetheart for any occasion.My name is Vivian Rose. I am an upscale companion based in the windy city - Chicago. 

 

I am an exotic beauty born and raised in the midwest. I am naturally exotic. My heritage has blessed me with beautiful and natural physical attributes.

 

You will get lost in the innocence of my big beautiful hazel eyes. My long luxurious hair flows weightlessly against my beautiful silhouette. My soft smooth skin contains warm fragrant notes of white tuberose and jasmine, which feels like paradise as it melts against yours. My tiny waist and perfect toned bottom make for the perfect curvy combination. 

​

I am a mix of youthful-girl next door with high class sophistication and always love to indulge. Most describe me as sweet, lighthearted, and charming. I describe myself as a passionate, curious, and eager.

 

​

        <span className="font-extrabold text-white">
        I attach great importance to making the person
        </span>{' '}
       
        <span className="font-extrabold text-white"> {' '}, All love!</span> 
        <span className="font-extrabold text-white"></span> 
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
