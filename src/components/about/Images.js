import about from 'assets/img/about.jpg';

export default function Images() {
    return (
        <div className="w-full">
            <div className='grid grid-cols-2 gap-8'>
                <img src={about} className='w-full h-96 object-cover'/>
                <img src={about} className='w-full h-96 object-cover'/>
            </div>
        </div>
    )
}