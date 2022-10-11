import "./footer.css";
import React, {useState, useEffect} from 'react';
import AnimatedLetters from '../animatedLetters/AnimatedLetters';

const Footer = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
      const timer = setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])

  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">
             
            <AnimatedLetters
            letterClass={letterClass}
            strArray={['यु', 'नि', 'का', ' ', 'ब', 'ज्रा', 'चा', 'र्य']}
            idx = {15}
            />
            </h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Portfolio</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="mailto:bajracharya.yunika@gmail.com" className="footer__social-link" target="_blank">
                    <i className="uil uil-envelope"></i>
                </a>

                <a href="https://www.linkedin.com/in/yunikabajracharya/" className="footer__social-link" target="_blank">
                    <i className="bx bxl-linkedin"></i>
                </a>

                <a href="https://github.com/Yunika-Bajracharya" className="footer__social-link" target="_blank">
                    <i className="bx bxl-github"></i>
                </a>

                <a href="https://yunikabajracharya.medium.com/" className="footer__social-link" target="_blank">
                    <i className="bx bxl-medium"></i>
                </a>

                <a href="https://www.instagram.com/yunikabajracharya/" className="footer__social-link" target="_blank">
                    <i className="bx bxl-instagram"></i>
                </a>

                <a href="https://www.facebook.com/yunikabajracharya" className="footer__social-link" target="_blank">
                    <i className="bx bxl-facebook"></i>
                </a>

                <a href="https://twitter.com/YunikaB_" className="footer__social-link" target="_blank">
                    <i className="bx bxl-twitter"></i>
                </a>
            </div>

            <span className="footer__copy">
                &#169; 2022 Yunika Bajracharya
            </span>
        </div>
    </footer>
  )
}

export default Footer
