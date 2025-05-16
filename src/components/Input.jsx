import React from 'react';

export default function Input({
      label,
      name,
      value,
      onChange,
      required = false,
      type = 'text',
      full = false,
  }) {
    const [invalid, setInvalid] = React.useState(false)

    return (
        <div className="flex flex-col gap-[8px]">
            <p className="p2 ml-[20px] text-[rgba(255,255,255,1)]">{label}</p>
            <input
                type={type}
                name={name}
                value={value}
                onInvalid={() => {
                    console.log(123)
                    setInvalid(true)
                }}
                onChange={e => {
                    onChange(e)
                    console.log(321)
                    setInvalid(false)
                }}
                required={required}
                className={`bg-[rgba(251,251,249,1)] rounded-[16px] h-[56px] px-[20px] border ${invalid ? 'border-[rgba(223,77,51,1)]' : 'border-transparent'} ${full ? 'w-full' : 'w-[260px]'}`}
            />
        </div>
    )
}