import '@/styles/globals.css';
import { SunIcon, BoltIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

function HomePage() {
    return (
        <div className={'flex flex-col items-center justify-center h-screen px-2 text-white'}>
            <h1 className={'text-5xl font-bold mb-20'}>ChatGPT</h1>

            <div className={'flex space-x-2 text-center'}>
                <div>
                    <div className={'flex flex-col items-center justify-center mb-5'}>
                        <SunIcon className="h-8 w-8 text-white" />
                        <h2>Examples</h2>
                    </div>

                    <div className={'space-y-2'}>
                        <p className={'infoText'}>Example one 12341</p>
                        <p className={'infoText'}>Example one 12341</p>
                        <p className={'infoText'}>Example one 12341</p>
                    </div>
                </div>
                <div>
                    <div className={'flex flex-col items-center justify-center mb-5'}>
                        <BoltIcon className="h-8 w-8 text-white" />
                        <h2>Capabilities</h2>
                    </div>

                    <div className={'space-y-2'}>
                        <p className={'infoText'}>Example one 12341</p>
                        <p className={'infoText'}>Example one 12341</p>
                        <p className={'infoText'}>Example one 12341</p>
                    </div>
                </div>
                <div>
                    <div className={'flex flex-col items-center justify-center mb-5'}>
                        <ExclamationTriangleIcon className="h-8 w-8 text-white" />
                        <h2>Limitations</h2>
                    </div>

                    <div className={'space-y-2'}>
                        <p className={'infoText'}>Example one 12341</p>
                        <p className={'infoText'}>Example one 12341</p>
                        <p className={'infoText'}>Example one 12341</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
