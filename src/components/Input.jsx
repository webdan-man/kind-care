
export default function Input({value, label, full }) {
    return (
        <div className="flex flex-col gap-[8px]">
            <p className="p2 ml-[20px] text-[rgba(255,255,255,1)]">{label}</p>
            <input type="text" className={`bg-[rgba(251,251,249,1)] rounded-[16px] w-[260px] h-[56px] px-[20px] ${full ? 'w-full' : 'w-auto'}`}/>
        </div>

    );
}
