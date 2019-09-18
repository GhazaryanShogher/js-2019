import React from 'react';
import './jobs.css';


const galacticJobs = [
    {
        title: 'Mid/Senior JavaScript Developer',
        company: 'ServiceTitan'
    },
    {
        title: 'React Engineer',
        company: 'Renderforest'
    },
    {
        title: 'Mid/Senior JavaScript Developer',
        company: 'ServiceTitan'
    },
    {
        title: 'React Engineer',
        company: 'Renderforest'
    },
    {
        title: 'Mid/Senior JavaScript Developer',
        company: 'ServiceTitan',
        class: 'marked'
    },
    {
        title: 'React Engineer',
        company: 'Renderforest'
    },
    {
        title: 'Mid/Senior JavaScript Developer',
        company: 'ServiceTitan'
    },
    {
        title: 'React Engineer',
        company: 'Renderforest'
    },
    {
        title: 'Mid/Senior JavaScript Developer',
        company: 'ServiceTitan'
    },
    {
        title: 'React Engineer',
        company: 'Renderforest'
    },
    {
        title: 'Mid/Senior JavaScript Developer',
        company: 'ServiceTitan'
    },
    {
        title: 'React Engineer',
        company: 'Renderforest'
    }
];

const Jobs = () => {
    return (

        <div className={'toCenter'}>


            <div className={'job_title'}>
                Galactic<span style={{color: '#15C70E'}}>JOBS</span>
            </div>

            <div className={'job_info'}>

                {galacticJobs.map((job, i) => {
                    return (
                        <div className={'single_job'} key={job.title + i}>

                            {
                                job.class ?
                                    <>
                                        <div className={'single_job_title'} style={{color: 'red'}}>
                                            {job.title}
                                        </div>
                                        <div style={{color: '#19B1FF'}}>{job.company}</div>
                                    </>
                                    :
                                    <>
                                        <div className={'single_job_title'}>
                                            {job.title}
                                        </div>
                                        <div>{job.company}</div>
                                    </>

                            }

                        </div>
                    )
                })}

            </div>

        </div>
    );
};

export default Jobs;