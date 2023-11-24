import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import SliderComponent from './SliderComponent'
import Carousel from './Carousel'
import c1 from '../assets/content_1.jpg'
import c2 from '../assets/content_2.jpg'
import c3 from '../assets/content_3.jpg'

const LandingPage = () => {
    
    return (
        <>
            {/* Slider */}
            <Header/>
            <main className="flex-1 py-6">  
                <SliderComponent/>
            </main>
            <div className="flex-1 p-4">
                <h2 className="text-3xl font-bold mb-4">Welcome to Our School</h2>
                <p className="text-gray-700">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur explicabo harum, veritatis quam ab quas repellendus facere omnis deleniti repudiandae adipisci voluptates accusamus incidunt dolore perferendis cupiditate eveniet dolores maxime!
                    Placeat ipsa unde veritatis aliquid magnam sit architecto ea vitae ab sint eligendi error libero, eum repudiandae eaque hic dolore, fugiat accusantium. Maiores quo debitis, eum dolorum dolore omnis qui.
                    Est possimus aut dicta blanditiis ullam laboriosam impedit omnis maiores? Voluptas, architecto voluptate. Optio voluptatibus vero atque odio et blanditiis consequuntur eaque laborum repudiandae magnam reiciendis nobis pariatur, voluptate ex!
                </p>
            </div>
            <div class="bg-white/[.15] md:p-2 flex flex-col items-center justify-center md:flex-row">
                <div class="w-full md:w-1/5">
                    <img src={c1} class="hover:scale-105 duration-1000 transform"/>              
                </div>
                <div class="w-full md:w-3/5 p-2 ">
                    <p class="text-justify text-[1rem] text-white md:text-2xl">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas natus laudantium suscipit molestias veritatis explicabo, reprehenderit amet ratione similique quo harum dolore? Obcaecati minus perspiciatis, sunt aut iste ipsam temporibus?
                        Voluptatibus provident rem eius quaerat veniam perspiciatis tempora nostrum libero non, cum molestiae quas ullam aliquam corrupti soluta magnam doloremque voluptas, quis sit adipisci. Alias ab fuga blanditiis voluptates nemo!
                    </p>       
                </div>
            </div>
            <div class="bg-black/[.09] md:p-2 flex flex-col-reverse items-center justify-center md:flex-row">
                <div class="w-full md:w-3/5 p-2">
                    <p class="text-justify text-[1rem] text-white md:text-2xl">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas natus laudantium suscipit molestias veritatis explicabo, reprehenderit amet ratione similique quo harum dolore? Obcaecati minus perspiciatis, sunt aut iste ipsam temporibus?
                        Voluptatibus provident rem eius quaerat veniam perspiciatis tempora nostrum libero non, cum molestiae quas ullam aliquam corrupti soluta magnam doloremque voluptas, quis sit adipisci. Alias ab fuga blanditiis voluptates nemo!
                    </p>       
                </div>
                <div class="w-full md:w-1/5">
                    <img src={c2} class="hover:scale-105 duration-1000 transform"/>              
                </div>
            </div>
            <div class="bg-white/[.15] md:p-2 flex flex-col items-center justify-center md:flex-row">
                <div class="w-full md:w-1/5 ">
                    <img src={c3} class="hover:scale-105 duration-1000 transform"/>              
                </div>
                <div class="w-full md:w-3/5 p-2">
                    <p class="text-justify text-[1rem] text-white md:text-2xl">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas natus laudantium suscipit molestias veritatis explicabo, reprehenderit amet ratione similique quo harum dolore? Obcaecati minus perspiciatis, sunt aut iste ipsam temporibus?
                        Voluptatibus provident rem eius quaerat veniam perspiciatis tempora nostrum libero non, cum molestiae quas ullam aliquam corrupti soluta magnam doloremque voluptas, quis sit adipisci. Alias ab fuga blanditiis voluptates nemo!
                    </p>       
                </div>
            </div>
            <Carousel/> 
            <Footer/>  
        </>
    )
}

export default LandingPage