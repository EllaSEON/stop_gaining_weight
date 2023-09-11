interface ButtonProps {
  type: 'button' | 'submit'
  children: string
  color: string
  width?: string
  onClick: () => void
}

export default function Button({
  type,
  children,
  color = 'bg-main',
  width = 'w-80',
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${width} mt-8 p-4 ${color} rounded-lg text-lg font-bold text-white m-2`}
    >
      {children}
    </button>
  )
}
