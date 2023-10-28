import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

function Header() {
  return (
    <main>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-full xl:mx-12 xl:pt-40 xl:pb-64  lg:pt-40 lg:pb-48 pt-24 pb-12">
          <div>
            <div>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-7xl flex pb-16">
                Agency for&nbsp;
                <div style={{ color: "#ff561e", fontWeight: "bold" }}>
                  <Typewriter
                    words={["Dreamers", "Creators", "You!"]}
                    loop={0}
                    cursor
                    cursorStyle="_"
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </div>
              </h1>
              <ul className="flex gap-8">
                <li className="border-transparent border-b-2 hover:border-orange-button transition duration-300 ease-in-out">
                  <Link
                    to="/servicios/algoAqui"
                    className="mt-6 text-2xl font-medium leading-8 text-gray-700 sm:text-center"
                  >
                    Web
                  </Link>
                </li>
                <li className="border-transparent border-b-2 hover:border-orange-button transition duration-300 ease-in-out">
                  <Link
                    to="/servicios/algoAqui"
                    className="mt-6 text-2xl font-medium leading-8 text-gray-700 sm:text-center"
                  >
                    Apps
                  </Link>
                </li>
                <li className="border-transparent border-b-2 hover:border-orange-button transition duration-300 ease-in-out">
                  <Link
                    to="/servicios/algoAqui"
                    className="mt-6 text-2xl font-medium leading-8 text-gray-700 sm:text-center"
                  >
                    Vídeo juegos
                  </Link>
                </li>
                <li className="border-transparent border-b-2 hover:border-orange-button transition duration-300 ease-in-out">
                  <Link
                    to="/servicios/algoAqui"
                    className="mt-6 text-2xl font-medium leading-8 text-gray-700 sm:text-center"
                  >
                    Marketing
                  </Link>
                </li>
                <li className="border-transparent border-b-2 hover:border-orange-button transition duration-300 ease-in-out">
                  <Link
                    to="/servicios/algoAqui"
                    className="mt-6 text-2xl font-medium leading-8 text-gray-700 sm:text-center"
                  >
                    Consultorías
                  </Link>
                </li>
              </ul>
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
