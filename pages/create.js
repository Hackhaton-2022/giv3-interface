
import React, {useState} from 'react';
import Navbar from "../components/navbar";
import { useContractWrite } from 'wagmi';
import { contractABI, contractAddress } from '../contract'

const Create = () => {

    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");

    const { data, isError, isLoading, write } = useContractWrite({
        addressOrName: contractAddress,
        contractInterface: contractABI,
        functionName: 'createDAO',
        args: [name, "Test", desc],
        onSuccess(data){
            console.log("Success", data);
        }
    })

    const handleSubmit = (e) => {

        e.preventDefault();        
        write();

    }
    
    return (
        <div>
            <div className="bg-white">
                <Navbar></Navbar>
                <div className="flex w-full">
                    <img src="Group4.png"></img>
                </div>
                <div className="flex justify-center pt-2">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[60%]" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Name of DAO
                            </label>
                            <input className="shadow appearance-none border border-gray-400 hover:border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Please add a name" required
                            onChange={(e)=>{setName(e.target.value)}}></input>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Description of DAO
                            </label>
                            <input className="shadow appearance-none border border-gray-400 hover:border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="desc" type="text" placeholder="Max 150 words" required
                            onChange={(e)=>{setDesc(e.target.value)}}></input>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                I'm fundraising for
                            </label>
                            <div className="inline-block relative w-full">
                                <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Page URL
                            </label>
                            <input className="shadow appearance-none border border-gray-400 hover:border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Please add your website link"></input>
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-[#FAAA39] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Create
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Create;