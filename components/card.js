import React from 'react';

const Card = (props) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            {/* <img className="w-full bg-[#1E0536]" src="" alt="Sunset in the mountains"></img> */}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Lorem ipsum</div>
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="text-[#FAAA39]">Company ZYX</span>
            </div>
            <div className="px-6 pt-4 pb-2">
                <a href="../dao">
                    <button className="bg-[#FAAA39] rounded-md py-2 px-3" disabled={props.status}>Join</button>
                </a>   
            </div>
        </div>
    );
};
export default Card;