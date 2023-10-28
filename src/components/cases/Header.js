import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

function Header(){
    return (
        <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-full xl:mx-12 xl:pt-40 xl:pb-64  lg:pt-40 lg:pb-48 pt-24 pb-12">
            <div>
              <div>
                <h1 className="text-4xl font-semibold tracking-tight sm:text-7xl flex pb-16">
                  Case Studies
                </h1>
                <p className='mt-6 text-2xl leading-8 text-gray-900'>               
                We believe that great products cannot happen without passion, intelligence, and personal commitment, and it is demonstrated by our portfolio that spans different customers, industries, and target audiences.
                </p>
              </div>
              <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden blur-lg lg:top-[calc(100%-40rem)] sm:top-[calc(100%-30rem)]">
              <img
                src="https://bafybeicgamofiuvkc6wjxl4wwzzh6pdovhcvvyc2gw5verruiolnykzz3i.ipfs.w3s.link/bbub3.jpg"
                className="w-full h-full object-cover"
              />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
}

export default Header;