const Button = ({type='', children}) =>{
    return <button 
    className="m-auto mb-5 w-52 text-center  mt-7 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full bg-green-300" 
    type={type}>
        {children}
    </button>
}
export default Button