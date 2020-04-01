import React from 'react';
import Rackspace from '../assets/rackspace.svg';
import ABInBev from '../assets/ABInBev.svg';
import TESCO from '../assets/Tesco.svg';

const projectsInfo = [
    {
        company: Rackspace,
        title: 'Rackspace',
        workDesc: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
        company: ABInBev,
        title: 'ABInBev',
        workDesc: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
        company: TESCO,
        title: 'TESCO',
        workDesc: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    }
]

function Projects(params) {
    return (
        <>
            <h2 className="text-4xl font-lead-color text-center">
                Projects - Experience
            </h2>
            <div className="projects m-4 md:flex">
                {projectsInfo.map(project=>(
                <div className="text-center h-64 m-4 border border-gray-400 card-bg rounded">
                    <p className="flex justify-center p-3">
                        <embed
                            src={project.company}
                            width="150"
                            height="100"
                            className="bg-white rounded"
                            type="image/svg+xml"
                        />
                    </p>
                    <p>
                        {project.workDesc}
                    </p>
                </div>
                ))}
            </div>
        </>
        
        
    )
}

export default Projects;
