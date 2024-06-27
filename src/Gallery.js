// src/Gallery.js
import React, { useState, Suspense, lazy  } from 'react';
import './gallery.css';
import CloseIcon from '@material-ui/icons/Close';


import Img1 from './img/Facebook1.png';
import Img2 from './img/Facebook2.png';
import Img3 from './img/Facebook3.png';
import Img4 from './img/Facebook4.png';
import Img5 from './img/Facebook5.png';
import Img6 from './img/Facebook6.png';
import Img7 from './img/Facebook7.png';
import Img8 from './img/Facebook8.png';
import Img9 from './img/Facebook9.png';
import Img10 from './img/Facebook10.png';
import Img11 from './img/Facebook11.png';
import Img12 from './img/Facebook12.png';
import Img13 from './img/Facebook13.png';
import Img14 from './img/Facebook14.png';
import Img16 from './img/Facebook16.png';
import Img17 from './img/Facebook17.png';
import Img18 from './img/Facebook18.png';
import Img20 from './img/Facebook20.png';
import Img21 from './img/Facebook21.png';
import Img22 from './img/Facebook22.png';
import Img23 from './img/Facebook23.png';
import Img24 from './img/Facebook24.png';
import Img25 from './img/Facebook25.png';
import Img26 from './img/Facebook26.png';
import Img27 from './img/Facebook27.png';
import Img28 from './img/Facebook28.png';
import Img29 from './img/Facebook29.png';
import Img30 from './img/Facebook30.png';
import Img31 from './img/Magazine1.png';
import Img32 from './img/Magazine2.png';
import Img33 from './img/Magazine3.png';
import Img34 from './img/Magazine4.png';
import Img35 from './img/Magazine5.png';
import Img36 from './img/Magazine6.png';
import Img37 from './img/Magazine7.png';
import Img38 from './img/Magazine8.png';
import Img39 from './img/Magazine9.png';
import Img40 from './img/Magazine10.png';
import Img41 from './img/Magazine11.png';
import Img42 from './img/Magazine12.png';
import Img44 from './img/Slider1.png';
import Img45 from './img/Slider2.png';
import Img46 from './img/Slider4.png';
import Img47 from './img/Slider5.png';
import Img48 from './img/Slider6.png';
import Img49 from './img/Slider7.png';
import Img50 from './img/Slider8.png';
import Img51 from './img/Slider9.png';
import Img52 from './img/business1.png';
import Img53 from './img/business2.png';
import Img54 from './img/business3.png';
import Img55 from './img/business4.png';
import Img56 from './img/Backdrop.png';
import Brochure from './brochure/brochure.pdf';  // Import the PDF file
import placeholder from './img/Placeholder.png'
import placeholder1 from './img/placeholder1.png'
import { colors } from '@material-ui/core';



const Gallery = () => {

   

    

    const facebookData = [
        { id: 1, imgSrc: Img1 },
        { id: 2, imgSrc: Img2 },
        { id: 3, imgSrc: Img3 },
        { id: 4, imgSrc: Img4 },
        { id: 5, imgSrc: Img5 },
        { id: 6, imgSrc: Img6 },
        { id: 7, imgSrc: Img7 },
        { id: 8, imgSrc: Img8 },
        { id: 9, imgSrc: Img9 },
        { id: 10, imgSrc: Img10 },
        { id: 11, imgSrc: Img11 },
        { id: 12, imgSrc: Img12 },
        { id: 13, imgSrc: Img13 },
        { id: 14, imgSrc: Img14 },
        { id: 16, imgSrc: Img16 },
        { id: 17, imgSrc: Img17 },
        { id: 18, imgSrc: Img18 },
        { id: 20, imgSrc: Img20 },
        { id: 21, imgSrc: Img21 },
        { id: 22, imgSrc: Img22 },
        { id: 23, imgSrc: Img23 },
        { id: 24, imgSrc: Img24 },
        { id: 25, imgSrc: Img25 },
        { id: 26, imgSrc: Img26 },
        { id: 27, imgSrc: Img27 },
        { id: 28, imgSrc: Img28 },
        { id: 29, imgSrc: Img29 },
        { id: 30, imgSrc: Img30 },
    ];

    const magazineData = [
        { id: 31, imgSrc: Img31 },
        { id: 32, imgSrc: Img32 },
        { id: 33, imgSrc: Img33 },
        { id: 34, imgSrc: Img34 },
        { id: 35, imgSrc: Img35 },
        { id: 36, imgSrc: Img36 },
        { id: 37, imgSrc: Img37 },
        { id: 38, imgSrc: Img38 },
        { id: 39, imgSrc: Img39 },
        { id: 40, imgSrc: Img40 },
        { id: 41, imgSrc: Img41 },
        { id: 42, imgSrc: Img42 },
        
    ];

    const sliderData = [
        { id: 44, imgSrc: Img44 },
        { id: 45, imgSrc: Img45 },
        { id: 46, imgSrc: Img46 },
        { id: 47, imgSrc: Img47 },
        { id: 48, imgSrc: Img48 },
        { id: 49, imgSrc: Img49 },
        { id: 50, imgSrc: Img50 },
        { id: 51, imgSrc: Img51 },
        
    ];

    const businessData = [
        { id: 52, imgSrc: Img52 },
        { id: 53, imgSrc: Img53 },
        { id: 54, imgSrc: Img54 },
        { id: 55, imgSrc: Img55 },
      
        
    ];

    const backdropData = [
        { id: 56, imgSrc: Img56 },
       
        
    ];

    const brochureData = [
        { id: 57, imgSrc: placeholder, pdfSrc: Brochure },
        { id: 59, imgSrc: placeholder1, pdfSrc: Brochure },

    ];


    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    };

    return (
        <>
            <div className={model ? 'modal open' : 'modal'}>
                <img src={tempImgSrc} alt="modal" />
                <CloseIcon className="modal-close" onClick={() => setModel(false)} />
            </div>

            <div className="gallery-section">
                <h2 style={{ textAlign: 'center', color:'#8500beba', textTransform:'uppercase', fontSize:'21px' }}>Magazine Covers </h2>
                <div className="gallery">
                    {magazineData.map((item, index) => (
                        <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} alt={`Gallery Image ${index + 1}`} style={{ width: '100%' }} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="gallery-section">
                <h2 style={{ textAlign: 'center', color:'#8500beba', textTransform:'uppercase', fontSize:'21px' }}>Facebook Posters</h2>
                <div className="gallery">
                    {facebookData.map((item, index) => (
                        <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} alt={`Gallery Image ${index + 1}`} style={{ width: '100%' }} />
                        </div>
                    ))}
                </div>
            </div>

          
            <div className="gallery-section">
                <h2 style={{ textAlign: 'center', color:'#8500beba', textTransform:'uppercase', fontSize:'21px' }}>Website Slider Covers</h2>
                <div className="gallery">
                    {sliderData.map((item, index) => (
                        <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} alt={`Gallery Image ${index + 1}`} style={{ width: '100%' }} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="gallery-section">
                <h2 style={{ textAlign: 'center', color:'#8500beba', textTransform:'uppercase', fontSize:'21px' }}> Business Cards</h2>
                <div className="gallery">
                    {businessData.map((item, index) => (
                        <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} alt={`Gallery Image ${index + 1}`} style={{ width: '100%' }} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="gallery-section">
                <h2 style={{ textAlign: 'center', color:'#8500beba', textTransform:'uppercase', fontSize:'21px' }}> Backdrop </h2>
                <div className="gallery">
                    {backdropData.map((item, index) => (
                        <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} alt={`Gallery Image ${index + 1}`} style={{ width: '100%' }} />
                        </div>
                    ))}
                </div>
            </div>


            <div className="gallery-section">
                <h2 style={{ textAlign: 'center', color:'#8500beba', textTransform:'uppercase', fontSize:'21px' }}>Brochures</h2>
                <div className="gallery">
                    {brochureData.map((item, index) => (
                        <div className="pics" key={index}>
                            <a href={item.pdfSrc} target="_blank" rel="noopener noreferrer">
                                <img src={item.imgSrc} alt={`Brochure ${index + 1}`} style={{ width: '100%' }} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Gallery;
