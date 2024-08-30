import React from 'react'
import { Button } from './ui/button';

export const Buttons = (props: React.PropsWithChildren) => {
    return (
        <button className='relative dark:drop-shadow-[0_0_0.05rem_violet] dark:text-foreground py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-secondary to-primary shadow-[0px_0px_12px_#d3c4eb] '>
            <div className='absolute inset-0 '>
                <div className='border rounded-lg border-foreground/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,background,transparent)]'></div>
                <div className='absolute inset-0 border-foreground/40 rounded-lg [mask-image:linear-gradient to_top,background,transparent'></div>
                <div className='absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg'></div>
            </div>
            <span>{props.children}</span>
        </button>
    )
}

export default Buttons