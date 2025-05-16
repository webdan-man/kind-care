export default function Button({
       className = '',
       children,
       light = false,
       type = 'button',
   }) {
    return (
        <button
            type={type}
            className={`${className} ${
                light
                    ? 'bg-[rgba(9,135,237,1)] shadow-[0px_14px_30px_-2px_rgba(9,135,237,0.25)] hover:bg-[#0C7AD4]'
                    : 'bg-[rgba(0,89,161,1)] shadow-[0px_11px_24px_0px_rgba(0,89,161,0.35)] hover:bg-[#004E8C]'
            } transition-all duration-300 cursor-pointer rounded-[16px] px-[16px] py-[17px] p6-medium text-[rgba(255,255,255,1)]`}
        >
            {children}
        </button>
    )
}
