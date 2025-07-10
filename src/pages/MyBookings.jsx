import React, { useState } from 'react'
import Title from '../components/Title'
import { assets, userBookingsDummyData } from '../assets/assets'

const MyBookings = () => {

    const [bookings, setBookings] = useState(userBookingsDummyData);

    return (
        <div className='py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32'>

            <Title title='My Bookings' subTitle='Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks' align='left' />

            <div className='max-w-6xl mt-8 w-full text-gray-800'>

                <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3'>
                    <div className='w-1/3'>Hotels</div>
                    <div className='w-1/3'>Date & Timings</div>
                    <div className='w-1/3'>Payment</div>
                </div>

                {bookings.map((booking) => (
                    <div
                        key={booking._id}
                        className="flex flex-col gap-4 border-b border-gray-300 py-6 first:border-t md:grid md:grid-cols-[3fr_2fr_1fr] md:gap-0 bg-white rounded-lg shadow-sm mb-4"
                    >
                        {/* hotel details */}
                        <div className="flex flex-col md:flex-row items-start md:items-center">
                            <img
                                src={booking.room.images[0]}
                                alt="hotel-img"
                                className="w-full max-w-[140px] rounded shadow object-cover mb-3 md:mb-0"
                            />
                            <div className="flex flex-col gap-1.5 md:ml-4 w-full">
                                <span className="block md:hidden text-xs text-gray-400 mb-1">Hotel</span>
                                <p className="font-playfair text-lg md:text-2xl font-semibold text-gray-900">
                                    {booking.hotel.name}
                                    <span className="font-inter text-sm text-gray-500"> ({booking.room.roomType})</span>
                                </p>
                                <div className="flex items-center gap-1 text-sm text-gray-500">
                                    <img src={assets.locationIcon} alt="location-icon" />
                                    <span>{booking.hotel.address}</span>
                                </div>
                                <div className="flex items-center gap-1 text-sm text-gray-500">
                                    <img src={assets.guestsIcon} alt="guests-icon" />
                                    <span>{booking.guests}</span>
                                </div>
                                <p className="text-base font-semibold text-indigo-600 mt-1">
                                    Total: ${booking.totalPrice}
                                </p>
                            </div>
                        </div>
                        {/* date & time */}
                        <div className="flex flex-row md:items-center md:gap-12 gap-8">
                            <div>
                                <span className="block md:hidden text-xs text-gray-400 mb-1">Date & Timings</span>
                                <p>Check-In:</p>
                                <p className='text-gray-500 text-sm'>
                                    {new Date(booking.checkInDate).toDateString()}
                                </p>
                            </div>
                            <div>
                                <p>Check-Out:</p>
                                <p className='text-gray-500 text-sm'>
                                    {new Date(booking.checkOutDate).toDateString()}
                                </p>
                            </div>
                        </div>
                        {/* payment status */}
                        <div className="flex flex-col justify-center items-start pt-3">
                            <span className="block md:hidden text-xs text-gray-400 mb-1">Payment</span>
                            <div className='flex items-center gap-2'>
                                <div className={`h-3 w-3 rounded-full ${booking.isPaid ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                <p className={`text-sm ${booking.isPaid ? 'text-green-500' : 'text-red-500'}`}>{booking.isPaid ? 'Paid' : 'Unpaid'}</p>
                            </div>
                            {!booking.isPaid && (
                                <button className='px-4 py-1.5 mt-4 text-xs border border-gray-500 rounded-full hover:bg-gray-100 transition-colors duration-300 cursor-pointer'>
                                    Pay Now
                                </button>
                            )}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default MyBookings