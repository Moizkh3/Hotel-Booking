import React from 'react';

const StarRating = ({ rating = 4 }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => {
        const starValue = i + 1;
        const isFilled = starValue <= Math.floor(rating);
        const isHalfFilled = starValue === Math.ceil(rating) && rating % 1 !== 0;
        const halfFillPercentage = isHalfFilled ? (rating % 1) * 100 : 0;
        
        return (
          <div key={i} className="relative">
            {/* Background star (gray) */}
            <svg
              className="w-4 h-4 text-gray-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
            </svg>
            
            {/* Foreground star (yellow) - clipped for half-fill */}
            <svg
              className={`absolute top-0 left-0 w-4 h-4 text-yellow-400 ${isFilled ? '' : 'hidden'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
            </svg>
            
            {/* Half-filled star overlay */}
            {isHalfFilled && (
              <svg
                className="absolute top-0 left-0 w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                style={{
                  clipPath: `inset(0 ${100 - halfFillPercentage}% 0 0)`
                }}
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
              </svg>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StarRating; 