import React from "react";
import BannerImage from "../assets/hero_image.svg";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
    return (
        <div className="home-container">
            <Navbar />

            {/* Hero Section */}
            <div className="home-banner-container">
                <div className="home-text-section">
                    <h3 className="primary-heading">
                        A predictive system for detecting beetles that damage coconut trees
                    </h3>
                    <button className="secondary-button">
                        Predict <FiArrowRight />{" "}
                    </button>
                </div>
                <div className="home-image-section">
                    <img src={BannerImage} alt="" />
                </div>
            </div>


            {/* Section_1 */}
            <div className="about-section-container">
                <div className="about-section-text-container">
                    <h1 className="primary-heading-1">
                        What is Coco Scan System ?
                    </h1>
                    <p className="primary-text">
                        Coco Scan is a cutting-edge web-based system that harnesses the power of machine learning using digital images to identify beetle species infesting palm trees and how to control those beetles.Powered by advanced computer vision algorithms and deep learning techniques, Coco Scan will revolutionize weevil control management in coconut plantations.
                    </p>
                    <p className="primary-text">
                        To use Coco Scan, coconut growers upload an image of a coconut tree showing symptoms or anomalies with those symptoms. The system then processes the image by extracting key visual features and patterns. By analyzing these characteristics and comparing them with a large database, it is possible to accurately identify which beetle species has damaged the coconut tree.
                    </p>
                    <p className="primary-text">
                        To use Coco Scan, coconut growers upload an image of a coconut tree showing symptoms or anomalies with those symptoms. The system then processes the image by extracting key visual features and patterns. By analyzing these characteristics and comparing them with a large database, it is possible to accurately identify which beetle species has damaged the coconut tree.
                    </p>
                </div>
            </div>


            {/* Section_2 */}
            <div className="about-section-container">
                <div className="about-section-text-container">
                    <h1 className="primary-heading-1">
                        How does this system work ?
                    </h1>
                    <p className="primary-text">
                        Coco Scan is a web-based system that uses a machine learning model to detect weevils that damage the coconut tree and provide control solutions for those beetles. Users upload images of a damaged coconut tree, and they are analyzed using computer vision and deep learning techniques. The model compares visual features extracted from images with a comprehensive database of known beetle-damaged plants to identify specific beetle species.
                    </p>
                </div>
                
            </div>


            <Footer />

            
            

        </div>




    );
};

export default Home;