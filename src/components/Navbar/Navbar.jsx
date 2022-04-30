export const Navbar = () => {
    return(
        <nav class="w-full h-10 text-white">
            <ul class="flex justify-between text-lg mx-10 py-4 font-bold">
                <li class="pr-10">
                    <a class="cursor-pointer underline-offset-8 underline decoration-2 hover:decoration-4 duration-150">
                        Home
                    </a>
                </li>
                <li>
                    <img class="h-10" src="https://media.discordapp.net/attachments/895398458452746341/970038594662182972/LogoPolyEarth.png" alt="Earth" />
                </li>
            </ul>   
        </nav>
    );
}