import React from "react";
import Projects from './projects';

import profilePic from '../assets/propic2.jpeg'

const details = [
    {
        Title: 'Name:',
        Desc: 'Subramanyam Reddy'
    },
    {
        Title: 'Experience:',
        Desc: '5 yrs'
    },
    {
        Title: 'Location:',
        Desc: 'Bangalore'
    }
]

function PortPolio() {
  return (
    <div class="mx-auto px-4">
        <div className="profile-view p-4 rounded h-full">
            <div className="text-center my-4">
                <h1 className="text-5xl font-lead-color">
                    Profile
                </h1>
                <h2 class="text-1xl text-gray-600">
                    I`m a create Full stack developer
                </h2>
            </div>
            <hr/>
            <div>
                <div className="personal_info sm:flex mb-4 p-4 justify-around">
                    <div className="about_me max-w-xs">
                        <h2 className="text-3xl font-lead-color mb-3">
                            About me
                        </h2>
                        <p>
                            I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques.
                            I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps.
                            Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'.		
                        </p>
                    </div>
                    <div className="items-center flex m-3">
                        <img className="rounded-full border-gray-500 border-solid border-4 avatar" src={profilePic} alt="subramanyam reddy"/>
                    </div>
                    <div className=" mx-4">
                        <h2 className="text-3xl font-lead-color mb-3">
                            Details
                        </h2>
                        {details.map(info=>(
                            <>
                                <p className="mb-2">
                                    <strong>{info.Title}</strong>
                                    <br/>
                                    {info.Desc}
                                </p>
                            </>
                        ))}
                    </div>
                </div>
                <Projects />
            </div>
        </div>
    </div>
  );
}

export default PortPolio;
