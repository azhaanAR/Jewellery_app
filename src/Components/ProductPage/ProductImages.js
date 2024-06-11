//  import React,{useEffect} from "react";
import './product.css'
import '../Newsletter/Newsletter'
import small from '../assets/images/4_0fe2529b-f7ae-4ed5-a8ff-4fae623757f9_compact.jpg'
import small1 from '../assets/images/5_9c4bb547-32eb-42ea-bed5-2f1fc3832c2e_compact.jpg'
import small2 from '../assets/images/6_2b8df768-6599-4e41-ae4c-2d6afd2b1d95_compact.jpg'
import small3 from '../assets/images/7_15911c75-e357-4cc1-a903-950a8ed4b779_small.jpg'

import big from '../assets/images/4_0fe2529b-f7ae-4ed5-a8ff-4fae623757f9_1024x1024.jpg'
import big1 from '../assets/images/5_a774d2ff-edcb-44b7-99e6-4b4b11d6531e_grande.jpg'
import big2 from '../assets/images/6_03a522d6-f36a-4f59-a815-bbade4d87a6e_grande.jpg'
import big3 from '../assets/images/7_15911c75-e357-4cc1-a903-950a8ed4b779_grande.jpg'

import mainImg from '../assets/images/4_0fe2529b-f7ae-4ed5-a8ff-4fae623757f9_1024x1024.jpg'
import Newsletter from '../Newsletter/Newsletter'

function ProductImages() {

    const clickImg = (smallImg) => {
        var fullImg = document.getElementById("imgbox");
        console.log(smallImg);
        fullImg.src = smallImg.target.alt
    }


    // useEffect(()=>{
    //     const sayHello=()=>{


    //     };
    //     sayHello();
    // }, []);


    return (
        <>

            <div className="product-images">
                <div className="container">
                    <h2 className="text-center "> Donec Condime Fermentum </h2>
                    <div className="wrapper">
                        <div className="product-box">
                            <div className="all-images">
                                <div className="small-images">
                                    <img src={small} alt={big} className="img-fluid" onClick={clickImg}/>
                                    <img src={small1} alt={big1} className="img-fluid" onClick={clickImg}/>
                                    <img src={small2} alt={big2} className="img-fluid" onClick={clickImg}/>
                                    <img src={small3} alt={big3} className="img-fluid" onClick={clickImg}/>
                                </div>

                                <div className="main-image">
                                    <img src={mainImg} className="img-fluid" id='imgbox'/>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* ...........Product Description..................  */}

            <div className="product-desc mt-5">
                <div className="container">
                    <div className="row d-flex justify-content-center ">
                        <div className="col-md-6 col-12">
                            <div className="content-desc">
                                <h4>Product Descriptions</h4>
                                <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis amet voluptas assumenda est, omnis dolor repellendus quis nostrum.

                                    Temporibus autem quibusdam et aut officiis debitis aut rerum dolorem necessitatibus saepe eveniet ut et neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, ut aliquid ex ea commodi consequatur.</p>
                                    <div className="tags">
                                        <h6>Tags :</h6>
                                        <p>Above-200, Black, L, Sale-Off</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="price">
                                <span>$200.00</span>
                            </div>
                            <div className="add-cart mt-3">
                                    <button type="submit">ADD TO CART</button>
                                </div>
                        </div>
                    </div>
                </div>
             </div>

               <Newsletter/> 

        </>
    )
}

export default ProductImages