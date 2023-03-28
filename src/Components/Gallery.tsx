import React from 'react'
import Heading from './Heading'
const Gallery = () => {
  return (
    <div>
        <Heading  text={"Gallery"}/>
        <section className="overflow-hidden text-neutral-700">
  <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
    <div className="-m-1 flex flex-wrap md:-m-2">
      <div className="flex w-1/2 flex-wrap">
        <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Geo_Storm_--_-07-09-2009.jpg/400px-Geo_Storm_--_-07-09-2009.jpg" />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/68_Yenko_Camaro.jpg/400px-68_Yenko_Camaro.jpg" />
        </div>
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/2006-2007_Volkswagen_New_Beetle.jpg/400px-2006-2007_Volkswagen_New_Beetle.jpg" />
        </div>
      </div>
      <div className="flex w-1/2 flex-wrap">
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Chevrolet_SSR.jpg/400px-Chevrolet_SSR.jpg" />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Schuppan_962CR.jpg/400px-Schuppan_962CR.jpg" />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/2006-2009_Holden_WM_Statesman_sedan_01.jpg/400px-2006-2009_Holden_WM_Statesman_sedan_01.jpg" />
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Gallery