import AppLogoIcon from './app-logo-icon';

export default function AppLogo() {
    return (
        <>
            <div className="flex aspect-square w-8 h-8 items-center justify-center rounded-md 
                bg-white text-black 
                dark:bg-black dark:text-white">
                <AppLogoIcon className="size-5 fill-current bg-white dark:text-black" />
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-tight font-semibold">HR 201 File</span>
            </div>
        </>
    );
}
