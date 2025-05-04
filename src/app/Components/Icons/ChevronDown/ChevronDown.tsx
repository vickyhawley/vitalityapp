

interface iChevronDown{
    color: string;
}
export function ChevronDown({color}: iChevronDown){
    return(
       <svg xmlns="http://www.w3.org/2000/svg" width='12' height='7' viewBox='0 0 20 11' fill='none'>
        <path d='M1 1L10 10L19 1' stroke={color} strokeWidth={3}></path>
       </svg>
    )
}