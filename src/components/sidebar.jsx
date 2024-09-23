import React from 'react'
import logobrand from '../assets/logoblack.jpeg'

export default function Sidebar() {
  return (
    <>
<aside id="separator-sidebar" class="fixed top-0 left-0 z-40 w-56 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto  bg-gray-950">
      <ul class="space-y-2 font-medium">
      <li>
      <a
        href="#"
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        <img
          src={logobrand}
          alt="Logo"
          className="w-10 h-10 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white"
        />
       
      </a>
    </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               
               <span class="flex-1 ms-3 whitespace-nowrap">Explore</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               
               <span class="flex-1 ms-3 whitespace-nowrap">Color Wheel</span>
               <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
            </a>
         </li>
        
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              
               <span class="flex-1 ms-3 whitespace-nowrap">Generate Palette</span>
            </a>
         </li>
    
      </ul>
      <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
         <li>
            <a href="https://www.growwisemedia.com/digital-services-web-design-marketing" class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
              
               <span class="ms-3">Services</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
               
               <span class="ms-3">Go Pro</span>
            </a>
         </li>
        
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
              
               <span class="ms-3">Help</span>
            </a>
         </li>

         <li>
            <a href="https://www.growwisemedia.com/about" class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
              
               <span class="ms-3">About us</span>
            </a>
         </li>
      </ul>
   </div>
</aside>



    </>
  )
}
