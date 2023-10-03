import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const BookModal = ({book, onClose}) => {
    return(
        <div className = 'fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center' onClick = {onClose}>
            <div onClick = {(event) => {event.stopPropagation()}} className = 'w-[600px] max-w-full h-auto bg-pink-200 rounded-xl p-4 flex flex-col relative'>
                <AiOutlineClose className = 'absolute right-6 top-6 text-3xl text-pink-600 cursor-pointer' onClick = {onClose} />
                <h2 className='w-fit px-4 py-1 bg-pink-300 rounded-lg'>
                        {book.publishYear}
                    </h2>
                    <h4 className='my-2 text-gray-400 '>{book._id}</h4>
                    <div className='flex justify-start items-center gap-x-2'>
                        <PiBookOpenTextLight className='text-pink-300 text-2xl' />
                        <h2 className=' my-1'>{book.title}</h2>
                    </div>
                    <div className='flex justify-start items-center gap-x-2'>
                        <BiUserCircle className='text-pink-300 text-2xl' />
                        <h2 className='my-1'>{book.author}</h2>
                    </div>
                    <p className = 'mt-4'>Anything you want to show.</p>
                    <p className = 'my-2>'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac ligula vitae enim maximus rutrum. In pretium cursus nulla ac hendrerit. Ut lacinia luctus nunc sed elementum. Vestibulum consequat malesuada lorem, a sollicitudin urna pretium ac. Donec elementum justo nec diam scelerisque pretium. Quisque fermentum neque in pretium ultricies. Integer pulvinar ultricies tortor, sed pretium erat. Etiam euismod libero eget porta dapibus. Curabitur vitae ex nibh. Mauris ornare interdum orci, sit amet efficitur augue suscipit ut. Donec lobortis vitae nibh eu suscipit. Cras nibh ante, porta nec euismod nec, luctus ac ipsum. Vestibulum tincidunt arcu volutpat cursus lobortis. Sed augue lacus, mattis sed consequat in, viverra in enim. Nullam ac mollis nisi, aliquet cursus lacus. Curabitur in rutrum lorem.

Phasellus nec lacus pulvinar, maximus orci non, malesuada ligula. Pellentesque dolor risus, tempus vitae massa in, commodo ornare purus. Fusce aliquet in urna in fermentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. In pellentesque dui non mauris maximus, non tempor nisi euismod. Praesent et euismod libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam pharetra, nunc efficitur hendrerit pellentesque, ipsum metus fringilla lectus, eu vehicula lorem mauris ut nisl. Integer ut commodo ante, in luctus neque. Sed mattis aliquet erat, ornare vulputate lorem eleifend fringilla.
                    </p>
            </div>
        </div>
    )
}

export default BookModal