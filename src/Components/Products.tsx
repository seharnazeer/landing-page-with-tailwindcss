import React,{useState} from 'react'
import Heading from './Heading';
const Products = () => {
  const slides = [
    {
      "image": "https://images.pexels.com/photos/2676096/pexels-photo-2676096.jpeg?auto=compress&cs=tinysrgb&w=600",
      "title": "Mazda MX-5",
      "start_production": 1989,
      "class": "Sports car Roadster"
  },
  
  {
    "image": "https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "title": "Fiat Tipo (2015)",
    "start_production": 2015,
    "class": "Compact car"
},
{
  "image": "https://images.pexels.com/photos/3608542/pexels-photo-3608542.jpeg?auto=compress&cs=tinysrgb&w=600",
  "title": "Saturn Sky",
  "start_production": 2006,
  "class": "Sports car"
},
{
  "image": "https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "title": "Volvo V40 (P1)",
  "start_production": 2012,
  "class": "Compact car / Small family car"
},
{
  "image": "https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=600",
  "title": "Scion tC",
  "start_production": 2004,
  "class": "Sport compact"
}
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <>
    <Heading  text={"Our Products"}/>
 
        <div className='max-w-[800px] h-[580px] w-full m-auto py-16 px-4 relative group '>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      >
        <div className='flex pt-[380px] pl-4 font-extrabold text-2xl text-white'>
          <div className='bg-black rounded-2xl p-4 flex'>
          <p>
          {slides[currentIndex].title} 
          </p>
          <p>
          {slides[currentIndex].start_production}
          </p>
          </div>
        </div>
      </div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        {/* <BsChevronCompactLeft onClick={prevSlide} size={30} /> */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clip-rule="evenodd" onClick={prevSlide} />
</svg>

      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        {/* <BsChevronCompactRight  /> */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd"  onClick={nextSlide}/>
</svg>

      </div>
      {/* crousels circles */}
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            {/* <RxDotFilled /> */}
          </div>
        ))}
      </div>
    </div>

        </>
  )
}

export default Products