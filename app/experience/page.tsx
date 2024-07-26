import RightSide from '@/components/right-side'
import React from 'react'
import ExperienceComponent from './_components/experience';

const ExperiencePage = () => {
    return (
        <main className='md:h-[100vh]'>
            <div className='flex bg-black/15 dark:bg-slate-900 h-full w-full p-2 md:p-4 gap-0 md:gap-5'>
                <div className='h-full w-full overflow-y-auto space-y-5'>
                    <ExperienceComponent />
                </div>
                <RightSide />
            </div>
        </main >
    )
}

export default ExperiencePage;