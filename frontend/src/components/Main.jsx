import {Link} from "react-router-dom"
import bg1 from "../img/whitebg.png"
import bg2 from "../img/bg.png"
import App from "../img/App.png"
import globe from "../img/globe.png"
import ink from "../img/ink.png"
import megaphone from "../img/megaphone.png"
import Team from "../img/team.png"
import SETech from "../img/SETECH.png"
import SETechLogo from "../img/SETechBlack.png"
import Phone from "../img/phone.png"
import Envelope from "../img/envelope.png"
import footerLogo from "../img/footerlogo.png"

const Main = () => {
    return(
        <>
            <main>
                <div>
                    <div className="flex justify-end relative ">
                        <img src={bg2} className="absolute w-3/5 "/>
                    </div>
                    <div className="container mx-60 my-52 w-2/5 text-[#000000]">
                        <h1 className="font-extrabold text-5xl">You Idea is our passion. The only limit is your imagination</h1>
                        <p className="mt-8 text-[#000000] font-light text-2xl w-96">Be One of Us or Experience our Greatness!</p>
                        <button className="bg-[#123E59] text-[#FFFFFF] font-extrabold text-4 py-2 px-4 rounded hover:text-[#F6B51D] mt-5">
                            Explore More
                        </button>
                    </div>
                </div>
            </main>

            <section>
                <h1 className="text-center text-black font-extrabold text-5xl mt-64">Our Services</h1>
                <div className="grid grid-cols-4 container m-auto mt-10 gap-10">
                    <div>
                        <h1 className="font-extrabold text-black text-xl w-2/5">Web Development</h1>
                        <p className="mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                        Curabitur tempus urna at turpis condimentum lobortis.</p>
                        <img src={globe} className="mt-7"/>
                    </div>
                    <div>
                        <h1 className="font-extrabold text-black text-xl w-2/5">App Development</h1>
                        <p className="mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                        Curabitur tempus urna at turpis condimentum lobortis.</p>
                        <img src={App} className="mt-7"/>
                    </div>
                    <div>
                        <h1 className="font-extrabold text-black text-xl w-2/5" >Graphic Design</h1>
                        <p className="mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                        Curabitur tempus urna at turpis condimentum lobortis.</p>
                        <img src={ink} className="mt-7"/>
                    </div>
                    <div>
                        <h1 className="font-extrabold text-black text-xl w-2/5">Logo Branding</h1>
                        <p className="mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                        Curabitur tempus urna at turpis condimentum lobortis.</p>
                        <img src={megaphone} className="mt-7"/>
                    </div>
                </div>
                <div className="container m-auto mt-10 grid grid-cols-3">
                    <div className="col-span-2">
                        <h1 className="font-extrabold text-5xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        Nunc vulputate.</h1>  
                    </div>
                    <div className="flex justify-center items-center"  >
                        <button className="bg-black text-white rounded px-5 py-2 font-bold ">See all</button>
                    </div>
                </div>
            </section>

                <section className="bg-[#123E59] mt-20">
                    <div className="grid grid-cols-3 container m-auto gap-20 pt-20 pb-20 text-white">
                        <div>
                            <h1 className="font-extrabold text-5xl">Our Features</h1>
                            <p className="mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
                                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                                Curabitur tempus urna at turpis condimentum lobortis.</p>
                            <button className="bg-[#F6B51D] text-[#123E59] px-5 py-2 rounded font-bold mt-8">Learn More</button>
                        </div>
                        <div className="flex flex-col justify-around text-center">
                            <div className="flex text-center justify-center items-center">
                                <div className="h-10 w-1 bg-[#F6B51D] mr-5"></div>
                                <p className="text-3xl font-extrabold">Lorem, ipsum.</p>
                            </div>
                            <div className="flex text-center justify-center items-center">
                                <div className="h-10 w-1 bg-[#F6B51D] mr-5"></div>
                                <p className="text-3xl font-extrabold">Lorem, ipsum.</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-around text-left">
                            <div className="flex text-center items-center">
                                <div className="h-10 w-1 bg-[#F6B51D] mr-5"></div>
                                <p className="text-3xl font-extrabold">Lorem, ipsum.</p>
                            </div>
                            
                            <div className="flex text-center items-center">
                                <div className="h-10 w-1 bg-[#F6B51D] mr-5"></div>
                                <p className="text-3xl font-extrabold">Lorem, ipsum.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="grid grid-cols-2 container mx-auto mt-20 gap-10">
                    <div className="flex items-center justify-center">
                        <img src={Team}/>
                    </div>
                    <div>
                        <h1 className="text-5xl font-extrabold">About Us</h1>
                        <h2 className="text-3xl font-bold mt-10">What is SE Tech?</h2>
                        <p className="mt-10">Lorem ipsum dolor sit amet. Sed natus consequatur est nesciunt facilis non accusantium natus eos quia exercitationem. 
                        Et totam voluptates et exercitationem velit id sunt dolores id sint incidunt et quas dolor. 
                        Non repudiandae repellendus quo voluptas ipsa in voluptatem laboriosam aut nihil reiciendis aut amet delectus non neque vero. 
                        In cupiditate totam est dolores corporis ut quia explicabo cum tenetur debitis qui saepe voluptatem. 
                        Rem blanditiis voluptatem est dolores nobis et harum delectus est dolore dolorem nam repellendus facere ad galisum vitae ut numquam quis! 
                        Rem optio ipsum eum enim commodi et velit similique.</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet. Sed natus consequatur est nesciunt facilis non accusantium natus eos quia exercitationem. 
                        Et totam voluptates et exercitationem velit id sunt dolores id sint incidunt et quas dolor. 
                        Non repudiandae repellendus quo voluptas ipsa in voluptatem laboriosam aut nihil reiciendis aut amet delectus non neque vero. 
                        In cupiditate totam est dolores corporis ut quia explicabo cum tenetur debitis qui saepe voluptatem. 
                        Rem blanditiis voluptatem est dolores nobis et harum delectus est dolore dolorem nam repellendus facere ad galisum vitae ut numquam quis! 
                        Rem optio ipsum eum enim commodi et velit similique.</p>
                    </div>
                </section>

                <section className="container mx-auto mt-20">
                    <h1 className="text-5xl font-extrabold text-center">The Team</h1>
                    <div className="grid grid-cols-3 gap-10">
                        <div>
                            <p>Name</p>
                            <p>Position</p>
                            <img src="" className="h-96 w-full"/>
                        </div>
                        <div>
                            <p>Name</p>
                            <p>Position</p>
                            <img src="" className="h-96 w-full"/>
                        </div>
                        <div>
                            <p>Name</p>
                            <p>Position</p>
                            <img src="" className="h-96 w-full"/>
                        </div>
                    </div>
                </section>

                <section className="container mx-auto mt-20">
                    <h1 className="text-5xl font-extrabold">Contact Us</h1>
                    <div className="grid grid-cols-2 gap-20">
                        <div className=" bg-[#F6F6F6] p-10 mt-14 rounded">
                            <h1 className="text-3xl font-bold">Get in Touch</h1>
                            <p className="mt-3 mb-3">Ask us anything or just say hi...</p>

                            <input type="text" placeholder="Firstname" className="p-2 rounded"/> <input type="text" placeholder="Lastname" className="p-2 rounded"/><br />
                            <input type="text" placeholder="Email Address" className="mt-5 w-5/6 p-2 rounded"/><br />
                            <input type="text" placeholder="Phone Number" className="mt-5 w-5/6 p-2 rounded"/><br />
                            <input type="text" placeholder="Message" className="mt-5 w-5/6 pb-32 text-left p-2 rounded"/><br />
                            <button></button>
                        </div>
                        <div className="flex flex-col justify-around">
                            <div>
                                <div className="flex items-center">
                                    <img src={SETechLogo} />
                                    <h1 className="w-10 font-extrabold justify-center">SE <span className="text-[#F6B51D]">TECH</span></h1>
                                </div>
                                    <p>Lorem ipsum dolor sit amet. Sed natus consequatur est nesciunt facilis non accusantium natus eos quia exercitationem. 
                                    Et totam voluptates et </p>
                            </div>
                            <div>
                                <div className="text-2xl font-extrabold">
                                    <div className="flex items-center"><img src={Phone} className="mr-3"/><p>+1234 567 890</p></div>
                                    <div className="flex items-center mt-5"><img src={Envelope} className="mr-3"/><p>customerservices@setechhive.ph</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="bg-[#123E59]">
                    <div className="flex justify-around items-end h-60 pb-10">
                        <div className="text-white flex gap-x-20 font-bold text-xl">
                            <Link to="/" className="hover:text-[#F6B51D]">Home</Link>
                            <Link to="#" className="hover:text-[#F6B51D]">Services</Link>
                            <Link to="#" className="hover:text-[#F6B51D]">Features</Link>
                            <Link to="#" className="hover:text-[#F6B51D]">About</Link>
                            <Link to="#" className="hover:text-[#F6B51D]">Contacts</Link>
                        </div>
                        <div>
                            <img src={footerLogo}/>
                            <p className="text-white">©  2022  •  All rights reserved.</p>
                        </div>
                    </div>
                </footer>
        </>
    )
}

export default Main