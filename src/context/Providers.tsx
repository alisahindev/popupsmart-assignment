import GlobalProvider from "./GlobalContext";


interface ProviderProps {
    children: JSX.Element | JSX.Element[];
}

const Providers = ({ children }: ProviderProps) => {
    return (
        <GlobalProvider>
            {children}
        </GlobalProvider>
    );
};

export default Providers;
