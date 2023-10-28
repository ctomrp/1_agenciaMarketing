export default function ServiceCard({ post, index }) {
  return (
    <div
    onMouseEnter={()=>{
        const title_element = document.getElementById(index);
        title_element.classList.add('text-orange-500');
    }} 
    onMouseLeave={()=>{
        const title_element = document.getElementById(index); 
        title_element.classList.remove('text-orange-500')
    }} 
    className="p-8 relative w-full h-96 lg:h-[200pm] bg-white hover:-translate-y-1 transition duration-300 easi-in-out">
      <div className="w-full">
        <img src={post.img} className="w-10 h-10" />
        <h2 className="text-xl font-semibold text-gray-900 pt-8">
          {post.title}
        </h2>
        <p className="text-xl font-regular text-gray-500 pt-4">{post.title}</p>
        <div className="absolute bottom-0 left-0 p-8">
          <h2 className="text-xl font-semibold text-gray-900 hover:text-orange-500 pt-8" id={index}>
            Learn more
          </h2>
        </div>
        {/* <i class='bx bx-code-block text-6xl text-gray-500'></i> */}
      </div>
    </div>
  );
}
