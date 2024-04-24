
export default function DemoPage() {
    return (
        <>
            <section className="grid grid-cols-2 gap-5 m-20">
                <div className="flex flex-col gap-5 mx-20">
                    <h1 className="text-3xl font-bold mb-5">Book the Demo to become <br></br> a better person!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>Tincidunt praesent semper feugiat nibh.</p>
                    <p>Molestie ac feugiat sed lectus vestibulum mattis. Diam in arcu cursus euismod quis viverra nibh. Nulla aliquet porttitor lacus
                        luctus accumsan tortor posuere ac ut. Pulvinar etiam non quam lacus suspendisse faucibus.</p>
                    <p>Libero volutpat sed cras ornare. Morbi quis commodo odio aenean sed adipiscing. Eget aliquet nibh praesent tristique magna sit amet purus.
                        Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Massa enim nec dui nunc mattis enim ut.
                        Urna cursus eget nunc scelerisque viverra.</p>
                    <p>Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Adipiscing bibendum est ultricies integer quis auctor elit.
                        Nulla porttitor massa id neque aliquam. Augue neque gravida in fermentum et sollicitudin ac orci. Turpis in eu mi bibendum neque.
                        Malesuada pellentesque elit eget gravida cum sociis natoque.</p>
                    <p>Nibh venenatis cras sed felis eget. Neque sodales ut etiam sit amet.</p>
                    <p>In metus vulputate eu scelerisque felis imperdiet proin fermentum. Vitae justo eget magna fermentum iaculis.
                        Aliquet nibh praesent tristique magna sit amet. Donec et odio pellentesque diam volutpat commodo sed.</p>
                    <p>Potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed. Tristique sollicitudin nibh sit amet commodo.
                        Pharetra convallis posuere morbi leo urna molestie. Viverra nibh cras pulvinar mattis nunc sed blandit.
                    </p>
                </div>
                <div>
                    <div className="bg-black rounded-xl flex justify-center py-10 px-5 mx-60 mb-20">
                        <img src="/src/assets/placeholder-image.svg" alt="Placeholder image icon"></img>
                    </div>
                    <form className="px-10 flex flex-col gap-5">
                        <label className="flex flex-col gap-5">Your Name
                            <input type="text" className="border-0 outline-none bg-transparent border-b-2" />
                        </label>
                        <label className="flex flex-col gap-5">Your E-mail
                            <input type="text" className="border-0 outline-none bg-transparent border-b-2" />
                        </label>
                        <label className="flex flex-col gap-5">Company Name
                            <input type="text" className="border-0 outline-none bg-transparent border-b-2" />
                        </label>
                        <label className="flex flex-col gap-5">Message
                            <input type="text" className="border-0 outline-none bg-transparent border-b-2" />
                        </label>
                    </form>
                    <div className="flex justify-end mt-10">
                        <button className="bg-black text-white text-lg px-6 py-4 rounded-3xl">Book the demo</button>
                    </div>
                </div>
            </section>
        </>
    )
}