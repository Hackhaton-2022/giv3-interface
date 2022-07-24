import React from 'react';

const Card = (props) => {
    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img class="w-full bg-[#1E0536]" src="" alt="Sunset in the mountains"></img>
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Project title</div>
                <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet.
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span className="text-[#FAAA39]">Company ZYX</span>
            </div>
            <div class="px-6 pt-4 pb-2">
                <a href="../dao">
                    <button className="bg-[#FAAA39] rounded-md py-2 px-3" disabled={props.status}>Join</button>
                </a>   
            </div>
        </div>
    );
};
export default Card;