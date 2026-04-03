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
import Img60 from './img/Poster1.png';
import Img61 from './img/Poster2.png';
import Img62 from './img/Poster3.png';
import Img63 from './img/Poster4.png';
import Img64 from './img/Poster5.png';
import Img65 from './img/Poster6.png';
import Img66 from './img/Poster7.png';
import Img67 from './img/Poster8.png';
import Img68 from './img/Poster9.png';
import Img69 from './img/Poster10.png';
import Img70 from './img/Poster11.png';
import Img71 from './img/Poster12.png';
import Img72 from './img/Poster13.png';
import Img73 from './img/Poster14.png';
import Img74 from './img/Poster15.png';
import Img75 from './img/Poster16.png';
import Img76 from './img/Poster17.png';
import Img77 from './img/Poster18.png';
import Img78 from './img/Poster19.png';
import Img79 from './img/Poster20.png';
import Img80 from './img/Poster21.png';
import Img81 from './img/Poster22.png';
import Img82 from './img/Poster23.png';
import Img83 from './img/Poster24.png';
import Img84 from './img/Poster25.png';
import Img85 from './img/Poster26.png';
import Img86 from './img/Poster27.png';
import Img87 from './img/Poster28.png';
import Img88 from './img/Poster29.png';
import Img89 from './img/Poster30.png';
import Img90 from './img/Poster31.png';
import Img91 from './img/Poster32.png';
import Img92 from './img/Poster33.png';
import Img93 from './img/E1.png';
import Img94 from './img/E2.png';
import Img95 from './img/E3.png';
import Img96 from './img/E4.png';
import Img97 from './img/E5.png';
import Img98 from './img/E6.png';
import Img99 from './img/E7.png';
import Img100 from './img/E8.png';
import Img101 from './img/E9.png';
import Img102 from './img/E10.png';
import Img103 from './img/E11.png';
import Img104 from './img/s1.png';
import Img105 from './img/s2.png';
import Img106 from './img/s3.png';
import Img107 from './img/s4.png';
import Img108 from './img/s5.png';
import Img109 from './img/s6.png';
import Img110 from './img/s7.png';
import Img111 from './img/o1.png';
import Img112 from './img/o2.png';
import Img113 from './img/o3.png';
import Img114 from './img/o4.png';
import Img115 from './img/o5.png';
import Img116 from './img/o6.png';
import Img117 from './img/o7.png';
import Img118 from './img/o8.jpeg';
import Img119 from './img/o9.png';
import Img120 from './img/M1.png';
import Img121 from './img/M2.png';
import Img122 from './img/M3.png';
import Img123 from './img/M4.png';
import Img124 from './img/M5.png';
import Img125 from './img/M6.png';
import Img126 from './img/M7.png';
import Img127 from './img/M8.png';
import Brochure from './brochure/brochure.pdf';  // Import the PDF file
import Brochure1 from './brochure/brochure1.pdf';  // Import the PDF file
import Brochure2 from './brochure/brochure2.pdf';  // Import the PDF file
import placeholder from './img/placeholder2.png'
import placeholder1 from './img/placeholder1.png'
import placeholder2 from './img/Placeholder.png'
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
        { id: 59, imgSrc: placeholder1, pdfSrc: Brochure1 },
        { id: 92, imgSrc: placeholder2, pdfSrc: Brochure2 },
    ];

    
     const fmcgPoster = [
        { id: 60, imgSrc: Img60 },
        { id: 61, imgSrc: Img61 },
        { id: 62, imgSrc: Img62 },
        { id: 63, imgSrc: Img63 },
        { id: 64, imgSrc: Img64 },
        { id: 65, imgSrc: Img65 },
        { id: 66, imgSrc: Img66 },
        { id: 67, imgSrc: Img67 },
        { id: 68, imgSrc: Img68 },
        { id: 69, imgSrc: Img69 },
        { id: 70, imgSrc: Img70 },
        { id: 71, imgSrc: Img71 },
        { id: 72, imgSrc: Img72 },
        { id: 72, imgSrc: Img73 },
        { id: 73, imgSrc: Img74 },
        { id: 74, imgSrc: Img75 },
        { id: 75, imgSrc: Img76 },
        { id: 76, imgSrc: Img77 },
        { id: 77, imgSrc: Img78 },
        { id: 78, imgSrc: Img79 },
        { id: 79, imgSrc: Img80 },
        { id: 80, imgSrc: Img81 },
        { id: 81, imgSrc: Img82 },
        { id: 82, imgSrc: Img83 },
        { id: 83, imgSrc: Img84 },
        { id: 84, imgSrc: Img85 },
        { id: 85, imgSrc: Img86 },
        { id: 86, imgSrc: Img87 },
        { id: 87, imgSrc: Img88 },
        { id: 88, imgSrc: Img89 },
        { id: 89, imgSrc: Img90 },
        { id: 90, imgSrc: Img91 },
        { id: 91, imgSrc: Img92 },
      
       
        
    ];

    const exibitionPoster = [
        { id: 93, imgSrc: Img93 },
        { id: 94, imgSrc: Img94 },
        { id: 95, imgSrc: Img95 },
        { id: 96, imgSrc: Img96 },
        { id: 97, imgSrc: Img97 },
        { id: 98, imgSrc: Img98 },
        { id: 99, imgSrc: Img99 },
        { id: 100, imgSrc: Img100 },
        { id: 101, imgSrc: Img101 },
        { id: 102, imgSrc: Img102 },
        { id: 103, imgSrc: Img103 },
       
  ];

   const emailSign = [
        { id: 104, imgSrc: Img104 },
        { id: 105, imgSrc: Img105 },
        { id: 106, imgSrc: Img106 },
        { id: 107, imgSrc: Img107 },
        { id: 108, imgSrc: Img108 },
        { id: 109, imgSrc: Img109 },
        { id: 110, imgSrc: Img110 },
       
       
  ];

  const reelData = [
    { id: 111, reelId: "DQBcO2JkTfq" },
    { id: 112, reelId: "DTz7QkrEahN" },
    { id: 113, reelId: "DS2WzRTkb0z" }, 
    { id: 114, reelId: "DU3TaivEW87" },
    { id: 115, reelId: "DWEduOADK-J" },
    { id: 116, reelId: "DSqAQIjF2M4" },
    { id: 117, reelId: "DQeMOUAEe2g" },
    { id: 118, reelId: "DQBSWSvgnRY" },
    { id: 119, reelId: "DVaevHGFazv" },
    { id: 120, reelId: "DS8MOeECQ9o" },

   
];

    const occasionPoster = [
        { id: 121, imgSrc: Img111 },
        { id: 122, imgSrc: Img112 },
        { id: 123, imgSrc: Img113 },
        { id: 124, imgSrc: Img114 },
        { id: 125, imgSrc: Img115 },
        { id: 126, imgSrc: Img116 },
        { id: 127, imgSrc: Img117 },
        { id: 128, imgSrc: Img118 },
        { id: 129, imgSrc: Img119 },
       
  ];


    const mockupPoster = [
        { id: 130, imgSrc: Img120 },
        { id: 131, imgSrc: Img121 },
        { id: 132, imgSrc: Img122 },
        { id: 133, imgSrc: Img123 },
        { id: 134, imgSrc: Img124 },
        { id: 135, imgSrc: Img125 },
        { id: 136, imgSrc: Img126 },
        { id: 137, imgSrc: Img127 },
       
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
                <h1 style={{ textAlign: 'center', textTransform:'uppercase', textDecoration:'underline'}}>FMCG <span style={{color: '#ff014f'}}> Posters </span> </h1>
                <div className="gallery">
                    {fmcgPoster.map((item, index) => (
                        <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} alt={`Gallery Image ${index + 1}`} style={{ width: '100%' }} />
                        </div>
                    ))}
                </div>
            </div>
  <br />
   <div className="gallery-section">
                <h1 style={{ textAlign: 'center', textTransform:'uppercase', textDecoration:'underline'}}>Exbition <span style={{color: '#ff014f'}}> Posters </span> </h1>
                <div className="gallery">
                    {exibitionPoster.map((item, index) => (
                        <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} alt={`Gallery Image ${index + 1}`} style={{ width: '100%' }} />
                        </div>
                    ))}
                </div>
            </div>
  <br />

  <div className="gallery-section">
                <h1 style={{ textAlign: 'center', textTransform:'uppercase', textDecoration:'underline'}}>Email <span style={{color: '#ff014f'}}> Signature  </span> </h1>
                <div className="gallery">
                    {emailSign.map((item, index) => (
                        <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} alt={`Gallery Image ${index + 1}`} style={{ width: '100%' }} />
                        </div>
                    ))}
                </div>
            </div>
  <br />

<div className="gallery-section">
    <h1 style={{ textAlign: 'center', textTransform:'uppercase', textDecoration:'underline'}}>
        Instagram <span style={{color: '#ff014f'}}>Reels</span>
    </h1>

    <div className="gallery">
        {reelData.map((item) => (
            <div className="pics" key={item.id}>
                <iframe
                    src={`https://www.instagram.com/reel/${item.reelId}/embed`}
                    width="100%"
                    height="400"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency="true"
                    title={`Instagram Reel ${item.id}`}
                ></iframe>
            </div>
        ))}
    </div>
</div>

  <br />

  <div className="gallery-section">
                <h1 style={{ textAlign: 'center', textTransform:'uppercase', textDecoration:'underline'}}>Food Show Design <span style={{color: '#ff014f'}}> Ideas </span> </h1>
                <div className="gallery">
                    {mockupPoster.map((item, index) => (
                        <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} alt={`Gallery Image ${index + 1}`} style={{ width: '100%' }} />
                        </div>
                    ))}
                </div>
            </div>
  <br />

 <div className="gallery-section">
                <h1 style={{ textAlign: 'center', textTransform:'uppercase', textDecoration:'underline'}}>Occasion  <span style={{color: '#ff014f'}}> Posters </span> </h1>
                <div className="gallery">
                    {occasionPoster.map((item, index) => (
                        <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} alt={`Gallery Image ${index + 1}`} style={{ width: '100%' }} />
                        </div>
                    ))}
                </div>
            </div>
  <br />

            <div className="gallery-section">
                <h1 style={{ textAlign: 'center', textTransform:'uppercase', textDecoration:'underline'}}>Magazine <span style={{color: '#ff014f'}}> Covers </span> </h1>
                <div className="gallery">
                    {magazineData.map((item, index) => (
                        <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} alt={`Gallery Image ${index + 1}`} style={{ width: '100%' }} />
                        </div>
                    ))}
                </div>
            </div>

            <br />

            <div className="gallery-section">
                <h1 style={{ textAlign: 'center', textTransform:'uppercase', textDecoration:'underline'}}>Facebook <span style={{color: '#ff014f'}}>Posters </span></h1>
                <br />

                <div className="gallery">
                    {facebookData.map((item, index) => (
                        <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} alt={`Gallery Image ${index + 1}`} style={{ width: '100%' }} />
                        </div>
                    ))}
                </div>
            </div>

            <br />
            <div className="gallery-section">
                <h1 style={{ textAlign: 'center', textTransform:'uppercase', textDecoration: 'underline'}}>Website Slider <span style={{color: '#ff014f'}}>  Covers </span></h1>
                <br />
                <div className="gallery">
                    {sliderData.map((item, index) => (
                        <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} alt={`Gallery Image ${index + 1}`} style={{ width: '100%' }} />
                        </div>
                    ))}
                </div>
            </div>
            <br />
            <div className="gallery-section">
                <h1 style={{ textAlign: 'center', textTransform:'uppercase', textDecoration: 'underline'  }}> Business <span style={{color: '#ff014f'}}>Cards </span></h1>
                <br />
                <div className="gallery">
                    {businessData.map((item, index) => (
                        <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} alt={`Gallery Image ${index + 1}`} style={{ width: '100%' }} />
                        </div>
                    ))}
                </div>
            </div>
            <br />
            <div className="gallery-section">
                <h1 style={{ textAlign: 'center', textTransform:'uppercase', textDecoration:'underline' }}> Back<span style={{color: '#ff014f'}}>drop</span></h1>
                <br />
                <div className="gallery">
                    {backdropData.map((item, index) => (
                        <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} alt={`Gallery Image ${index + 1}`} style={{ width: '100%' }} />
                        </div>
                    ))}
                </div>
            </div>

            <br />
            <div className="gallery-section">
                <h1 style={{ textAlign: 'center', textTransform:'uppercase', textDecoration:'underline'}}>Broch<span style={{color: '#ff014f'}}>ures  </span>& Company <span style={{color: '#ff014f'}}>Profile</span></h1>
                <br />
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
