import React, { useState, useEffect } from "react";
import styles from './SlideShow.module.css'; // Assume this file contains the styles

// Define photo object type for TypeScript compatibility
type Photo = {
  id: number;
  src: string;
};

const Slideshow: React.FC = () => {
  const photos: Photo[] = [
    { id: 1, src: "img/SlideShowPhoto/photo1.jpg" },
    { id: 2, src: "img/SlideShowPhoto/photo2.jpg" },
    { id: 3, src: "img/SlideShowPhoto/photo3.jpg" },
    { id: 4, src: "img/SlideShowPhoto/photo4.jpg" },
    { id: 5, src: "img/SlideShowPhoto/photo5.jpg" },
    { id: 6, src: "img/SlideShowPhoto/photo6.jpg" },
    { id: 7, src: "img/SlideShowPhoto/photo7.jpg" },
    { id: 8, src: "img/SlideShowPhoto/photo8.jpg" },
    { id: 9, src: "img/SlideShowPhoto/photo9.jpg" },
    { id: 10, src: "img/SlideShowPhoto/photo10.jpg" },
    { id: 11, src: "img/SlideShowPhoto/photo11.jpg" },
    { id: 12, src: "img/SlideShowPhoto/photo12.jpg" },
    { id: 13, src: "img/SlideShowPhoto/photo13.jpg" },
    { id: 14, src: "img/SlideShowPhoto/photo14.jpg" },
    { id: 15, src: "img/SlideShowPhoto/photo15.jpg" },
    { id: 16, src: "img/SlideShowPhoto/photo16.jpg" },
    { id: 17, src: "img/SlideShowPhoto/photo17.jpg" },
    // Add more photos as needed
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Automatically change the photo every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === photos.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3000ms = 3 seconds
    return () => clearInterval(interval); // Cleanup interval
  }, [photos.length]);

  const nextPhoto = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.slideshowContainer}>
        <h2 className={styles.title}>Slideshow Title</h2>
        <img
          src={photos[currentIndex].src}
          alt={`Slide ${currentIndex + 1}`}
          className={styles.image}
        />
      </div>
      <button onClick={nextPhoto} className={styles.nextButton}>
        Next Photo
      </button>
    </div>
  );
};

export default Slideshow;




// import React, { useState, useEffect } from "react";

// // Define photo object type for TypeScript compatibility
// type Photo = {
//   id: number;
//   src: string;
// };

// const Slideshow: React.FC = () => {
//   const photos: Photo[] = [
//     { id: 1, src: "/img/SlideshowPhoto/photo1.jpeg" },
//     { id: 2, src: "/img/SlideshowPhoto/photo2.jpeg" },
//     { id: 3, src: "/img/SlideshowPhoto/photo3.jpeg" },
//     // Add more photos as needed
//   ];

//   const [currentIndex, setCurrentIndex] = useState<number>(0);

//   // Automatically change the photo every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === photos.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000); // 3000ms = 3 seconds
//     return () => clearInterval(interval); // Cleanup interval
//   }, [currentIndex, photos.length]);

//   const nextPhoto = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === photos.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div style={styles.wrapper}>
//       <div style={styles.slideshowContainer}>
//         <h2 style={styles.title}>Slideshow Title</h2>
//         <img
//           src={photos[currentIndex].src}
//           alt={`Slide ${currentIndex + 1}`}
//           style={styles.image}
//         />
//       </div>
//       <button onClick={nextPhoto} style={styles.nextButton}>
//         Next Photo
//       </button>
//     </div>
//   );
// };

// // Inline styles to match theme and apply a curved shape
// const styles: { [key: string]: React.CSSProperties } = {
//   wrapper: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     width: "100%",
//     height: "90vh",
//     padding: "10px",
//   },
//   slideshowContainer: {
//     width: "100%",
//     maxWidth: "900px", // For desktop view
//     backgroundColor: "#F3F4F6", // Light background
//     borderRadius: "25px", // Curved edges
//     boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
//     overflow: "hidden",
//     padding: "20px",
//     textAlign: "center",
//   },
//   title: {
//     fontSize: "1.5rem",
//     marginBottom: "10px",
//     color: "#111827", // Dark text on light background
//   },
//   image: {
//     width: "100%",
//     height: "auto",
//     maxHeight: "350px",
//     objectFit: "contain",
//     borderRadius: "15px",
//   },
//   nextButton: {
//     marginTop: "20px",
//     padding: "10px 20px",
//     fontSize: "1rem",
//     backgroundColor: "#4F46E5", // Primary button color from the theme
//     color: "#fff",
//     border: "none",
//     borderRadius: "8px",
//     cursor: "pointer",
//     transition: "background-color 0.3s ease",
//   },
//   "@media (max-width: 768px)": {
//     slideshowContainer: {
//       width: "90%",
//     },
//   },
//   "@media (min-width: 769px)": {
//     slideshowContainer: {
//       width: "50%", // Set to 50% for larger screens
//     },
//   },
// };

// export default Slideshow;
