import Image from "next/image";

const Header = () => {
    return (
        <header className="p-4 w-full h-18 items-center flex">
            <Image src="/icons/logo.png" alt="Logo" width={50} height={50} />
        </header>
    )
}

export default Header;