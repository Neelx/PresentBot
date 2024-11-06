"use client";

import { VideoIcon } from "lucide-react";
import { useState } from "react";

export default function GenerateForm() {

    const [url, setUrl] = useState<string | null>("")
    const [isValid, setIsValid] = useState<boolean>(false)
    const [error, setError]  = useState<string | null>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-indigo-300" py-12>
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8 text-gray-800"> 
                    Create Presentations <span className="block text-lg font-normal text-gray-600 mt-2"> 
                        Make any Video into Presentation </span>
                </h1>
                {
                    isValid ? ( 
                      <div className="mb-8 aspect-video rounded-xl overflow-hidden shadow-lg">
                        <iframe className="w-full h-full"
                            src={"https://www.youtube.com/embeded/addinlater"}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Youtube video player"
                        />
                      </div>
                    ) : (
                        <div className="mb-8 aspect-video bg-gradient-to-br from-slate-100 to-slate-50 rounded-xl flex flex-col items-center justify-center text-slate-500 shadow-inner">
                            <VideoIcon className="w-16 h-16 mb-4 text-slate-500"/>
                            <p>Enter a url to get started.</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}