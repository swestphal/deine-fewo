import React from 'react';
//import phoneImg from './images/phone.svg';
import { useGlobalContext } from './../context';

const Hero = () => {
    const { closeSubmenu } = useGlobalContext();
    return (
        <section className='hero' onMouseOver={closeSubmenu}>
            <div className='hero-center'>
                <article className='hero-info'>
                    <h1>
                        Finde Deine Fewo <br />
                        die zu Dir passt!
                    </h1>
                    <p>
                        Jetzt registrieren!
                        </p>
                    <button className='btn'>Jetzt starten</button>
                </article>
                <article className='hero-images'>
                    <p>Heroimage</p>
                </article>
            </div>
        </section>
    );
};

export default Hero;