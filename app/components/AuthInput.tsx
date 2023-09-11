'use client'

interface AuthInputProps {
  htmlFor: string
  label: string
  id: string
  placeholder: string
}
export default function AuthInput({
  htmlFor,
  label,
  id,
  placeholder,
}: AuthInputProps) {
  return (
    <div>
      <label htmlFor={htmlFor} className="text-sm font-semibold">
        {label}
      </label>{' '}
      <br />
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        className="w-80 text-sm py-2 border-b-[2px]  block outline-0 focus:border-gray-800"
      />
    </div>
  )
}
