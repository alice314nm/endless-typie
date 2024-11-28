import Header from "../_components/header";

export default function Home() {
  return (
    <main className="h-screen dark:bg-darkRed flex flex-col dark:text-lightestRed">
      <Header />
      <form className="flex flex-col mt-16 gap-2 items-center justify-center">
        <h2 className="text-xl">Sign in</h2>
        
        <button className="mt-2 dark:border-lightestRed dark:hover:bg-red dark:hover:text-lightestRed hover:bg-lightGreen bg-white flex flex-row p-2 items-center justify-center gap-2 border rounded-full border-darkGreen w-72 dark:bg-darkRed dark:text-lightestRed">
            <img 
            src="google-icon.svg"
            width={20}/>
            <p>Sign in with Google</p>
        </button>
        <input 
          className="bg-lightGreen border-b-4 placeholder-darkGreen border-b-green p-2 w-72 focus:bg-lightestGreen focus:outline-none focus:ring-0 dark:bg-darkRed dark:border-b-red dark:placeholder-lightestRed dark:focus:bg-lightRed" 
          placeholder="email" 
        />
        <input 
          className="bg-lightGreen border-b-4 placeholder-darkGreen border-b-green p-2 w-72 focus:bg-lightestGreen focus:outline-none focus:ring-0 dark:bg-darkRed dark:border-b-red dark:placeholder-lightestRed dark:focus:bg-lightRed" 
          placeholder="password" 
        /> 
        <input 
          className="bg-lightGreen border-b-4 placeholder-darkGreen border-b-green p-2 w-72 focus:bg-lightestGreen focus:outline-none focus:ring-0 dark:bg-darkRed dark:border-b-red dark:placeholder-lightestRed dark:focus:bg-lightRed" 
          placeholder="repeat password" 
        />        
        <button className="mt-2 bg-green border-2 p-2 rounded-lg w-72 border-green hover:bg-lightGreen dark:bg-red dark:border-red dark:hover:bg-darkRed">Sign in</button>
      </form>
    </main>
  );
}



